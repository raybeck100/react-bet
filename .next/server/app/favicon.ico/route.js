"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 97783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 28530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 54426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 40252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 32196:
/***/ ((module) => {

module.exports = require("next/dist/compiled/ua-parser-js");

/***/ }),

/***/ 14021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 49188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "originalPathname": () => (/* binding */ originalPathname),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./app/favicon.ico?__next_metadata
var favicon_next_metadata_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_namespaceObject);
__webpack_require__.d(favicon_next_metadata_namespaceObject, {
  "GET": () => (GET),
  "dynamic": () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(14664);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./app/favicon.ico?__next_metadata


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=E%3A%5CDDGBET%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: favicon_next_metadata_namespaceObject,
    pathname: "/favicon.ico",
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!E:\\DDGBET\\app\\favicon.ico?__next_metadata",
    nextConfigOutput: undefined,
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/favicon.ico/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [405,572], () => (__webpack_exec__(49188)));
module.exports = __webpack_exports__;

})();