"use strict";
exports.id = 512;
exports.ids = [512];
exports.modules = {

/***/ 7433:
/***/ ((module, exports, __webpack_require__) => {


const cacheExports = {
    unstable_cache: (__webpack_require__(4521)/* .unstable_cache */ .A),
    revalidateTag: (__webpack_require__(4937).revalidateTag),
    revalidatePath: (__webpack_require__(4687)/* .revalidatePath */ .t)
};
// https://nodejs.org/api/esm.html#commonjs-namespaces
// When importing CommonJS modules, the module.exports object is provided as the default export
module.exports = cacheExports;
// make import { xxx } from 'next/server' work
exports.unstable_cache = cacheExports.unstable_cache;
exports.revalidatePath = cacheExports.revalidatePath;
exports.revalidateTag = cacheExports.revalidateTag;


/***/ }),

/***/ 3804:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
// This file is for modularized imports for next/server to get fully-treeshaking.

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _response.NextResponse;
    }
}));
const _response = __webpack_require__(6843); //# sourceMappingURL=next-response.js.map


/***/ }),

/***/ 4687:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "t", ({
    enumerable: true,
    get: function() {
        return revalidatePath;
    }
}));
const _revalidatetag = __webpack_require__(4937);
function revalidatePath(path) {
    return (0, _revalidatetag.revalidateTag)(path);
} //# sourceMappingURL=revalidate-path.js.map


/***/ }),

/***/ 4937:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "revalidateTag", ({
    enumerable: true,
    get: function() {
        return revalidateTag;
    }
}));
function revalidateTag(tag) {
    const staticGenerationAsyncStorage = fetch.__nextGetStaticStore == null ? void 0 : fetch.__nextGetStaticStore();
    const store = staticGenerationAsyncStorage == null ? void 0 : staticGenerationAsyncStorage.getStore();
    if (!store || !store.incrementalCache) {
        throw new Error(`Invariant: static generation store missing in revalidateTag ${tag}`);
    }
    if (!store.revalidatedTags) {
        store.revalidatedTags = [];
    }
    if (!store.revalidatedTags.includes(tag)) {
        store.revalidatedTags.push(tag);
    }
    if (!store.pendingRevalidates) {
        store.pendingRevalidates = [];
    }
    store.pendingRevalidates.push(store.incrementalCache.revalidateTag == null ? void 0 : store.incrementalCache.revalidateTag(tag).catch((err)=>{
        console.error(`revalidateTag failed for ${tag}`, err);
    }));
    // TODO: only revalidate if the path matches
    store.pathWasRevalidated = true;
} //# sourceMappingURL=revalidate-tag.js.map


/***/ }),

/***/ 4521:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "A", ({
    enumerable: true,
    get: function() {
        return unstable_cache;
    }
}));
const _staticgenerationasyncstorage = __webpack_require__(1839);
const _constants = __webpack_require__(2523);
const _patchfetch = __webpack_require__(5110);
function unstable_cache(cb, keyParts, options = {}) {
    const joinedKey = keyParts && keyParts.length > 0 ? keyParts.join(",") : cb.toString();
    const staticGenerationAsyncStorage = (fetch.__nextGetStaticStore == null ? void 0 : fetch.__nextGetStaticStore()) || _staticgenerationasyncstorage.staticGenerationAsyncStorage;
    const store = staticGenerationAsyncStorage == null ? void 0 : staticGenerationAsyncStorage.getStore();
    const incrementalCache = (store == null ? void 0 : store.incrementalCache) || globalThis.__incrementalCache;
    if (!incrementalCache) {
        throw new Error(`Invariant: incrementalCache missing in unstable_cache ${joinedKey}`);
    }
    if (options.revalidate === 0) {
        throw new Error(`Invariant revalidate: 0 can not be passed to unstable_cache(), must be "false" or "> 0" ${joinedKey}`);
    }
    const cachedCb = async (...args)=>{
        // We override the default fetch cache handling inside of the
        // cache callback so that we only cache the specific values returned
        // from the callback instead of also caching any fetches done inside
        // of the callback as well
        return staticGenerationAsyncStorage.run({
            ...store,
            fetchCache: "only-no-store",
            isStaticGeneration: !!(store == null ? void 0 : store.isStaticGeneration),
            pathname: (store == null ? void 0 : store.pathname) || "/"
        }, async ()=>{
            const cacheKey = await (incrementalCache == null ? void 0 : incrementalCache.fetchCacheKey(joinedKey));
            const cacheEntry = cacheKey && !((store == null ? void 0 : store.isOnDemandRevalidate) || incrementalCache.isOnDemandRevalidate) && await (incrementalCache == null ? void 0 : incrementalCache.get(cacheKey, true, options.revalidate));
            const tags = options.tags || [];
            const implicitTags = (0, _patchfetch.addImplicitTags)(store);
            for (const tag of implicitTags){
                if (!tags.includes(tag)) {
                    tags.push(tag);
                }
            }
            const invokeCallback = async ()=>{
                const result = await cb(...args);
                if (cacheKey && incrementalCache) {
                    await incrementalCache.set(cacheKey, {
                        kind: "FETCH",
                        data: {
                            headers: {},
                            // TODO: handle non-JSON values?
                            body: JSON.stringify(result),
                            status: 200,
                            tags
                        },
                        revalidate: typeof options.revalidate !== "number" ? _constants.CACHE_ONE_YEAR : options.revalidate
                    }, options.revalidate, true);
                }
                return result;
            };
            if (!cacheEntry || !cacheEntry.value) {
                return invokeCallback();
            }
            if (cacheEntry.value.kind !== "FETCH") {
                console.error(`Invariant invalid cacheEntry returned for ${joinedKey}`);
                return invokeCallback();
            }
            let cachedValue;
            const isStale = cacheEntry.isStale;
            if (cacheEntry) {
                const resData = cacheEntry.value.data;
                cachedValue = JSON.parse(resData.body);
            }
            const currentTags = cacheEntry.value.data.tags;
            if (isStale) {
                if (!store) {
                    return invokeCallback();
                } else {
                    if (!store.pendingRevalidates) {
                        store.pendingRevalidates = [];
                    }
                    store.pendingRevalidates.push(invokeCallback().catch((err)=>console.error(`revalidating cache with key: ${joinedKey}`, err)));
                }
            } else if (tags && !tags.every((tag)=>{
                return currentTags == null ? void 0 : currentTags.includes(tag);
            })) {
                if (!cacheEntry.value.data.tags) {
                    cacheEntry.value.data.tags = [];
                }
                for (const tag of tags){
                    if (!cacheEntry.value.data.tags.includes(tag)) {
                        cacheEntry.value.data.tags.push(tag);
                    }
                }
                incrementalCache == null ? void 0 : incrementalCache.set(cacheKey, cacheEntry.value, options.revalidate, true);
            }
            return cachedValue;
        });
    };
    // TODO: once AsyncLocalStorage.run() returns the correct types this override will no longer be necessary
    return cachedCb;
} //# sourceMappingURL=unstable-cache.js.map


/***/ })

};
;