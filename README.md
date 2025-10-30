[npm-version-image]: https://img.shields.io/npm/v/vivaldi-location2.svg?color=c72c2c
[npm-version-url]: https://www.npmjs.com/package/vivaldi-location2
[npm-downloads-image]: https://img.shields.io/npm/dm/vivaldi-location2.svg?color=2ecc40
[npm-downloads-url]: https://www.npmjs.com/package/vivaldi-location2
[action-image]: https://github.com/cezaraugusto/vivaldi-location2/actions/workflows/ci.yml/badge.svg?branch=main
[action-url]: https://github.com/cezaraugusto/vivaldi-location2/actions

> Approximates the current location of the Vivaldi browser across platforms.

# vivaldi-location2 [![Version][npm-version-image]][npm-version-url] [![Downloads][npm-downloads-image]][npm-downloads-url] [![workflow][action-image]][action-url]

<img alt="Vivaldi" align="right" src="https://cdn.jsdelivr.net/gh/extension-js/media@db5deb23fbfa85530f8146718812972998e13a4d/browser_logos/svg/vivaldi.svg" width="10.5%" />

* By default checks only `stable`. Optionally can cascade to `snapshot`.
* Supports macOS / Windows / Linux
* Works both as an ES module or CommonJS

## Support table

This table lists the default locations where Vivaldi is typically installed for each supported platform and channel. By default, only the Stable channel is checked. When fallback is enabled, the package checks these paths (in order) and returns the first one found.

<table>
  <thead>
    <tr>
      <th>Platform</th>
      <th>Channel</th>
      <th>Paths checked</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2" align="center"><img alt="" width="64" height="64" src="https://cdn.jsdelivr.net/gh/extension-js/media@db5deb23fbfa85530f8146718812972998e13a4d/platform_logos/macos.png" /><br><strong>macOS</strong></td>
      <td align="center">Vivaldi (Stable)</td>
      <td>
        <ul>
          <li><code>/Applications/Vivaldi.app/Contents/MacOS/Vivaldi</code></li>
          <li><code>~/Applications/Vivaldi.app/Contents/MacOS/Vivaldi</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="center">Vivaldi Snapshot</td>
      <td>
        <ul>
          <li><code>/Applications/Vivaldi Snapshot.app/Contents/MacOS/Vivaldi</code></li>
          <li><code>~/Applications/Vivaldi Snapshot.app/Contents/MacOS/Vivaldi</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td rowspan="2" align="center"><img alt="" width="64" height="64" src="https://cdn.jsdelivr.net/gh/extension-js/media@db5deb23fbfa85530f8146718812972998e13a4d/platform_logos/windows.png" /><br><strong>Windows</strong></td>
      <td align="center">Vivaldi (Stable)</td>
      <td>
        <ul>
          <li><code>%LOCALAPPDATA%\Vivaldi\Application\vivaldi.exe</code></li>
          <li><code>%PROGRAMFILES%\Vivaldi\Application\vivaldi.exe</code></li>
          <li><code>%PROGRAMFILES(X86)%\Vivaldi\Application\vivaldi.exe</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="center">Vivaldi Snapshot</td>
      <td>
        <ul>
          <li><code>%LOCALAPPDATA%\Vivaldi Snapshot\Application\vivaldi.exe</code></li>
          <li><code>%PROGRAMFILES%\Vivaldi Snapshot\Application\vivaldi.exe</code></li>
          <li><code>%PROGRAMFILES(X86)%\Vivaldi Snapshot\Application\vivaldi.exe</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td rowspan="2" align="center"><img alt="" width="64" height="64" src="https://cdn.jsdelivr.net/gh/extension-js/media@db5deb23fbfa85530f8146718812972998e13a4d/platform_logos/linux.png" /><br><strong>Linux/other</strong></td>
      <td align="center">Vivaldi (Stable)</td>
      <td>
        <ul>
          <li><code>vivaldi</code> (on <code>$PATH</code>)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="center">Vivaldi Snapshot</td>
      <td>
        <ul>
          <li><code>vivaldi-snapshot</code> (on <code>$PATH</code>)</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Returns the first existing path found (given selected channels), or <code>null</code> if none are found.

## Usage

**Via Node.js (strict by default):**

```js
import vivaldiLocation from "vivaldi-location2";

// Strict (Stable only)
console.log(vivaldiLocation());
// => "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi" or null

// Enable fallback (Stable / Snapshot)
console.log(vivaldiLocation(true));
// => first found among Stable/Snapshot or null
```

**Via CLI:**

```bash
npx vivaldi-location2
# Strict (Stable only)

npx vivaldi-location2 --fallback
# Enable cascade (Stable / Snapshot)
```

## Related projects

* [brave-location](https://github.com/cezaraugusto/brave-location)
* [chrome-location2](https://github.com/cezaraugusto/chrome-location2)
* [edge-location](https://github.com/cezaraugusto/edge-location)
* [firefox-location2](https://github.com/cezaraugusto/firefox-location2)
* [opera-location2](https://github.com/cezaraugusto/opera-location2)
* [yandex-location2](https://github.com/cezaraugusto/yandex-location2)

## License

MIT (c) Cezar Augusto.


