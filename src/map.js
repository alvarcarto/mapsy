const _ = require('lodash');
const { toLatLng } = require('./LatLng');
const { toPoint } = require('./geometry/Point');
const { toBounds } = require('./geometry/Bounds');
const { toLatLngBounds } = require('./LatLngBounds');
const { EPSG3857 } = require('./crs/CRS.EPSG3857');

// @method project(latlng: LatLng, zoom: Number): Point
// Projects a geographical coordinate `LatLng` according to the projection
// of the map's CRS, then scales it according to `zoom` and the CRS's
// `Transformation`. The result is pixel coordinate relative to
// the CRS origin.
function project(latlng, zoom = 0) {
  return EPSG3857.latLngToPoint(toLatLng(latlng), zoom);
}

// @method getScaleZoom(scale: Number, fromZoom: Number): Number
// Returns the zoom level that the map would end up at, if it is at `fromZoom`
// level and everything is scaled by a factor of `scale`. Inverse of
// [`getZoomScale`](#map-getZoomScale).
function getScaleZoom(scale, fromZoom = 0) {
  var crs = EPSG3857;
  var zoom = crs.zoom(scale * crs.scale(fromZoom));
  return Number.isNaN(zoom) ? Infinity : zoom;
}

// @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
// Returns the maximum zoom level on which the given bounds fit to the map
// view in its entirety. If `inside` (optional) is set to `true`, the method
// instead returns the minimum zoom level on which the map view fits into
// the given bounds in its entirety.
function getBoundsZoom(bounds, viewport, _opts = {}) { // (LatLngBounds[, Boolean, Point]) -> Number
  const opts = _.merge({
    minZoom: 0,
    maxZoom: Infinity,
    inside: false,
  }, _opts);
  bounds = toLatLngBounds(bounds);

  const nw = bounds.getNorthWest();
  const se = bounds.getSouthEast();
  const size = toPoint(viewport.width, viewport.height);
  const boundsSize = toBounds(project(se), project(nw)).getSize();
  const scalex = size.x / boundsSize.x;
  const scaley = size.y / boundsSize.y;
  const scale = opts.inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);
  const zoom = getScaleZoom(scale);

  return Math.max(opts.minZoom, Math.min(opts.maxZoom, zoom));
}

module.exports = {
  getBoundsZoom,
};
