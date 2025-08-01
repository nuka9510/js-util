[![LICENSE][license]][license-url]
[![GITHUB-VERSION][github-version]][github-version-url]
[![NPM-VERSION][npm-version]][npm-version-url]
![GITHUB-LAST-COMMIT][github-last-commit]
![NPM-LAST-UPDATE][npm-last-update]
![GITHUB-REPO-SIZE][github-repo-size]
![NPM-UNPACKED-SIZE][npm-unpacked-size]
![JSDELIVR-DOWNLOAD][jsdelivr-download]
![NPM-DOWNLOAD][npm-download]
![TOP-LANGUAGE][top-language]

[license]: https://img.shields.io/npm/l/%40nuka9510%2Fjs-util
[license-url]: https://github.com/nuka9510/js-util/blob/main/LICENSE

[github-version]: https://img.shields.io/github/package-json/v/nuka9510/js-util?logo=github
[github-version-url]: https://github.com/nuka9510/js-util

[npm-version]: https://img.shields.io/npm/v/%40nuka9510%2Fjs-util?logo=npm
[npm-version-url]: https://www.npmjs.com/package/@nuka9510/js-util

[github-last-commit]: https://img.shields.io/github/last-commit/nuka9510/js-util?logo=github

[npm-last-update]: https://img.shields.io/npm/last-update/%40nuka9510%2Fjs-util?logo=npm

[github-repo-size]: https://img.shields.io/github/repo-size/nuka9510/js-util?logo=github

[npm-unpacked-size]: https://img.shields.io/npm/unpacked-size/%40nuka9510%2Fjs-util?logo=npm

[jsdelivr-download]: https://img.shields.io/jsdelivr/npm/hm/%40nuka9510/js-util?logo=jsdelivr

[npm-download]: https://img.shields.io/npm/dm/%40nuka9510%2Fjs-util?logo=npm

[top-language]: https://img.shields.io/github/languages/top/nuka9510/js-util

## Install
```
npm i @nuka9510/js-util
```
```
<script src="https://cdn.jsdelivr.net/npm/@nuka9510/js-util/dist/js/index.min.js"> </script>
```
```
<script src="https://cdn.jsdelivr.net/npm/@nuka9510/js-util@latest/dist/js/index.min.js"> </script>
```
```
<script src="https://cdn.jsdelivr.net/npm/@nuka9510/js-util@<specific-version>/dist/js/index.min.js"> </script>
```
```
<script type="importmap">
  {
    "imports": { "@nuka9510/js-util": "https://cdn.jsdelivr.net/npm/@nuka9510/js-util/dist/esm/index.min.mjs" }
  }
</script>
```
```
<script type="importmap">
  {
    "imports": { "@nuka9510/js-util": "https://cdn.jsdelivr.net/npm/@nuka9510/js-util@latest/dist/esm/index.min.mjs" }
  }
</script>
```
```
<script type="importmap">
  {
    "imports": { "@nuka9510/js-util": "https://cdn.jsdelivr.net/npm/@nuka9510/js-util@<specific-version>/dist/esm/index.min.mjs" }
  }
</script>
```
## Usage
### js (> 1.1.2)
```
const foo = "";

console.debug(jsUtil.Util.empty(foo));
```
### mjs
```
import { Util } from "@nuka9510/js-util";
const foo = "";

console.debug(Util.empty(foo));
```
### cjs (> 1.2.0)
```
const jsUtil = require('@nuka9510/js-util'),
foo = "";

console.debug(jsUtil.Util.empty(foo));
```
### example
```
example
├── js
│  └── index.mjs
└── view
   └── index.html
```
* example/js/index.mjs
```
import { Util } from "@nuka9510/js-util";

class Index {
  constructor() {
    this.onValueEmptyCheckClick = this.onValueEmptyCheckClick.bind(this);

    this.init();
  }

  init() {
    document.querySelectorAll('[data-action="value-empty-check-click"]').forEach((...arg) => { arg[0].addEventListener('click', this.onValueEmptyCheckClick); });
  }

  onValueEmptyCheckClick(ev) {
    const value = document.querySelector('[data-name="value"]'),
    result = document.querySelector('[data-name="result"]');

    if (Util.empty(value.value)) {
      result.innerHTML = 'true';
    } else { result.innerHTML = 'false'; }
  }

}

new Index();
```
* example/view/index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div data-name="result"></div>
  <div style="display: flex; flex-direction: column;">
    <input type="text" data-name="value">
    <div style="display: flex;">
      <button data-action="value-empty-check-click">value-empty</button>
    </div>
  </div>
</body>
<script type="importmap">
  {
    "imports": { "@nuka9510/js-util": "https://cdn.jsdelivr.net/npm/@nuka9510/js-util/dist/esm/index.min.mjs" }
  }
</script>
<script type="module" src="../js/index.mjs"></script>
</html>
```