# Big Wrap [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL]

Wrap array representation of big numbers. Can be used to wrap numbers in [Fürer's algorithm](https://en.wikipedia.org/wiki/F%C3%BCrer%27s_algorithm).

## Install

```
npm i big-wrap --save
```

## How to use?

```js
const bigWrap = require('big-wrap');

bigWrap([9, 10, 3, 4]);
// returns
[1, 0, 0, 2, 3, 4];
```

## Environments

In old `node.js` environments that not fully supports `es2015`, `big-wrap` could be used with:

```js
var bigWrap = require('big-wrap/legacy');
```

## Related

- [big-sum](https://github.com/coderaiser/big-sum "Big Sum") - sum array representation of big numbers
- [big-mul](https://github.com/coderaiser/big-mul "Big Mul") - multiply array representation of big numbers

## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/big-wrap.svg?style=flat&longCache=true
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/big-wrap/master.svg?style=flat&longCache=true
[DependencyStatusIMGURL]:   https://img.shields.io/david/coderaiser/big-wrap.svg?style=flat&longCache=true
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat&longCache=true
[NPMURL]:                   https://npmjs.org/package/big-wrap "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/big-wrap  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/coderaiser/big-wrap "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

