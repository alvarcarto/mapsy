const { Earth } = require('./CRS.Earth');
const { SphericalMercator } = require('../projection/Projection.SphericalMercator');
const { toTransformation } = require('../geometry/Transformation');
const Util = require('../Util');

/*
 * @namespace CRS
 * @crs L.CRS.EPSG3857
 *
 * The most common CRS for online maps, used by almost all free and commercial
 * tile providers. Uses Spherical Mercator projection. Set in by default in
 * Map's `crs` option.
 */

var EPSG3857 = Util.extend({}, Earth, {
  code: 'EPSG:3857',
  projection: SphericalMercator,

  transformation: (function () {
    var scale = 0.5 / (Math.PI * SphericalMercator.R);
    return toTransformation(scale, 0.5, -scale, 0.5);
  }())
});

var EPSG900913 = Util.extend({}, EPSG3857, {
  code: 'EPSG:900913'
});

module.exports = {
  EPSG3857,
  EPSG900913,
};
