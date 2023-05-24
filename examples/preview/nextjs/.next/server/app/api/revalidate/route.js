"use strict";
(() => {
var exports = {};
exports.id = 899;
exports.ids = [899];
exports.modules = {

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 8530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 4049:
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

// NAMESPACE OBJECT: ./src/app/api/revalidate/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "GET": () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(6145);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9532);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/cache.js
var cache = __webpack_require__(7433);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(3804);
;// CONCATENATED MODULE: ./src/app/api/revalidate/route.ts


// ISR is not actually working with the App Router, this is because Next.js never caches routes that use `cookies` or `headers`
// In the Pages directory, we were able to attach the token as `previewData` in the `preview` endpoint, but that is not possible with the App Router
// The reason we need cookies is to get the `payload-token` and use it to draft pages via `Authorization: JWT ${payloadToken}` header
// Full details here: https://nextjs.org/docs/app/building-your-application/data-fetching/caching#per-request-caching
async function GET(request) {
    const path = request.nextUrl.searchParams.get("revalidatePath");
    const secret = request.nextUrl.searchParams.get("secret");
    if (secret !== process.env.NEXT_PRIVATE_REVALIDATION_KEY) {
        return next_response/* default.json */.Z.json({
            revalidated: false,
            now: Date.now()
        });
    }
    if (typeof path === "string") {
        await (0,cache.revalidatePath)(path);
        return next_response/* default.json */.Z.json({
            revalidated: true,
            now: Date.now()
        });
    }
    return next_response/* default.json */.Z.json({
        revalidated: false,
        now: Date.now()
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Frevalidate%2Froute&name=app%2Fapi%2Frevalidate%2Froute&pagePath=private-next-app-dir%2Fapi%2Frevalidate%2Froute.ts&appDir=%2FUsers%2Fjacobfletcher%2Fdev%2Fpayload%2Fpayload%2Fexamples%2Fpreview%2Fnextjs%2Fsrc%2Fapp&appPaths=%2Fapi%2Frevalidate%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: route_namespaceObject,
    pathname: "/api/revalidate",
    resolvedPagePath: "/Users/jacobfletcher/dev/payload/payload/examples/preview/nextjs/src/app/api/revalidate/route.ts",
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

    const originalPathname = "/api/revalidate/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [816,601,843,512], () => (__webpack_exec__(4049)));
module.exports = __webpack_exports__;

})();