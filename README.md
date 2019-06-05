jwa-purejs
===

A pure JavaScript implementation of the [RFC 7518][rfc7518] ES256 digital signature algorithm.

[![npm][npm-image]][npm-url]

---

This library is a drop-in replacement for the popular [jwa][jwa] package.

I wrote it to remove the dependency on **crypto-browserify**.

Installation
---

    yarn add jwa-purejs

Usage
---

**webpack.config.js**

```js
module.exports = {
  resolve: {
    alias: {
      jwa: 'jwa-purejs',
    }
  }
}
```

**webpack Command Line**

    webpack --resolve-alias jwa=jwa-purejs

[jwa]: https://www.npmjs.com/package/jwa
[npm-image]: https://img.shields.io/npm/v/jwa-purejs.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/jwa-purejs
[rfc7518]: https://tools.ietf.org/html/rfc7518#section-3.4
