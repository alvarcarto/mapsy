# mapsy

> Map/coordinate/projection utility

```bash
npm install @alvarcarto/mapsy
```

## Examples

```js
const fs = require('fs');
const { getBoundsZoom } = require('@alvarcarto/mapsy');

const zoom = getBoundsZoom({
  swLat: 32.473,
  swLng: -15.594,
  neLat: 45.298,
  neLng: 8.056,
}, {
  width: 1200, height: 800
})
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
