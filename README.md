# mapsy

> Map/coordinate/projection utility

```bash
npm install @alvarcarto/mapsy
```

**This code base is copied subset of [Leaflet](https://github.com/Leaflet/Leaflet) to calculate zoom
level for given lat/lng bounds. Also works in Node.**

## Examples

```js
const { getBoundsZoom, LatLng, LatLngBounds } = require('@alvarcarto/mapsy');

const sw = new LatLng(60.139253532746466, 24.895589054037774);
const ne = new LatLng(60.210249282963126, 24.997550709955334);
const bounds = new LatLngBounds(sw, ne);
const zoom = getBoundsZoom(bounds, { width: 420, height: 588 });
console.log('Center:', bounds.getCenter(), 'Zoom:', zoom);
```

# Contributors


## Release

* Commit all changes.
* Use [np](https://github.com/sindresorhus/np) to automate the release:

    `np`

* Edit GitHub release notes.

# License

Most of the code is a subset of https://github.com/Leaflet/Leaflet.

MIT
