/* eslint-env mocha */

const { expect } = require('chai');
const { getBoundsZoom, LatLngBounds, LatLng } = require('../src');

describe('getBoundsZoom', () => {
  it('zoom level should match', () => {
    const sw = new LatLng(60.139253532746466, 24.895589054037774);
    const ne = new LatLng(60.210249282963126, 24.997550709955334);
    const bounds = new LatLngBounds(sw, ne);
    const zoom = getBoundsZoom(bounds, { width: 420, height: 588 });
    console.log('Center:', bounds.getCenter(), 'Zoom:', zoom);
    expect(zoom).to.be.closeTo(12.5, 0.0001);
  });
});
