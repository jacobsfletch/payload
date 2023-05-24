"use strict";
(() => {
var exports = {};
exports.id = 963;
exports.ids = [963];
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

/***/ 3894:
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

// NAMESPACE OBJECT: ./src/app/api/preview/route.ts
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
// EXTERNAL MODULE: ./node_modules/next/headers.js
var headers = __webpack_require__(8558);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(117);
;// CONCATENATED MODULE: ./src/app/api/preview/route.ts


async function GET(req) {
    const payloadToken = req.cookies.get("payload-token")?.value;
    const { searchParams  } = new URL(req.url);
    const url = searchParams.get("url");
    const secret = searchParams.get("secret");
    if (!url) {
        return new Response("No URL provided", {
            status: 404
        });
    }
    if (!payloadToken) {
        new Response("You are not allowed to preview this page", {
            status: 403
        });
    }
    // validate the Payload token
    const userReq = await fetch(`${"http://localhost:3000"}/api/users/me`, {
        headers: {
            Authorization: `JWT ${payloadToken}`
        }
    });
    const userRes = await userReq.json();
    if (!userReq.ok || !userRes?.user) {
        (0,headers.draftMode)().disable();
        return new Response("You are not allowed to preview this page", {
            status: 403
        });
    }
    if (secret !== process.env.NEXT_PRIVATE_DRAFT_SECRET) {
        return new Response("Invalid token", {
            status: 401
        });
    }
    (0,headers.draftMode)().enable();
    (0,navigation.redirect)(url);
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fpreview%2Froute&name=app%2Fapi%2Fpreview%2Froute&pagePath=private-next-app-dir%2Fapi%2Fpreview%2Froute.ts&appDir=%2FUsers%2Fjacobfletcher%2Fdev%2Fpayload%2Fpayload%2Fexamples%2Fpreview%2Fnextjs%2Fsrc%2Fapp&appPaths=%2Fapi%2Fpreview%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: route_namespaceObject,
    pathname: "/api/preview",
    resolvedPagePath: "/Users/jacobfletcher/dev/payload/payload/examples/preview/nextjs/src/app/api/preview/route.ts",
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

    const originalPathname = "/api/preview/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [816,601,630], () => (__webpack_exec__(3894)));
module.exports = __webpack_exports__;

})();