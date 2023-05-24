exports.id = 151;
exports.ids = [151];
exports.modules = {

/***/ 4181:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9222, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8301, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3751, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4765, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5192, 23))

/***/ }),

/***/ 7111:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3280, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9274, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3349, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2144, 23))

/***/ }),

/***/ 1885:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8109));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 408, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 53, 23))

/***/ }),

/***/ 8109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AdminBarClient": () => (/* binding */ AdminBarClient)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/payload-admin-bar/dist/index.js
var dist = __webpack_require__(9509);
// EXTERNAL MODULE: ./src/components/Gutter/index.module.scss
var index_module = __webpack_require__(441);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./src/components/Gutter/index.tsx



const Gutter = /*#__PURE__*/ (0,react_.forwardRef)((props, ref)=>{
    const { left =true , right =true , className , children  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: [
            left && (index_module_default()).gutterLeft,
            right && (index_module_default()).gutterRight,
            className
        ].filter(Boolean).join(" "),
        children: children
    });
});
Gutter.displayName = "Gutter";

// EXTERNAL MODULE: ./src/components/AdminBar/index.module.scss
var AdminBar_index_module = __webpack_require__(6092);
var AdminBar_index_module_default = /*#__PURE__*/__webpack_require__.n(AdminBar_index_module);
;// CONCATENATED MODULE: ./src/components/AdminBar/client.tsx
/* __next_internal_client_entry_do_not_use__ AdminBarClient auto */ 




const AdminBarClient = (props)=>{
    const [user, setUser] = (0,react_.useState)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: [
            (AdminBar_index_module_default()).adminBar,
            user && (AdminBar_index_module_default()).show
        ].filter(Boolean).join(" "),
        children: /*#__PURE__*/ jsx_runtime_.jsx(Gutter, {
            className: (AdminBar_index_module_default()).container,
            children: /*#__PURE__*/ jsx_runtime_.jsx(dist.PayloadAdminBar, {
                ...props,
                cmsURL: "http://localhost:3000",
                onPreviewExit: async ()=>{
                    await fetch(`/api/exit-preview`);
                    window.location.reload();
                },
                onAuthChange: setUser,
                className: (AdminBar_index_module_default()).payloadAdminBar,
                classNames: {
                    user: (AdminBar_index_module_default()).user,
                    logo: (AdminBar_index_module_default()).logo,
                    controls: (AdminBar_index_module_default()).controls
                },
                style: {
                    position: "relative",
                    zIndex: "unset",
                    padding: 0,
                    backgroundColor: "transparent"
                }
            })
        })
    });
};


/***/ }),

/***/ 6092:
/***/ ((module) => {

// Exports
module.exports = {
	"adminBar": "AdminBar_adminBar__oeu6z",
	"show": "AdminBar_show__aWIsZ",
	"controls": "AdminBar_controls__rGeos",
	"user": "AdminBar_user___KgIz",
	"logo": "AdminBar_logo__UD5IR",
	"innerLogo": "AdminBar_innerLogo___51iH",
	"container": "AdminBar_container__C2Qcw",
	"hr": "AdminBar_hr__vf8aS"
};


/***/ }),

/***/ 1347:
/***/ ((module) => {

// Exports
module.exports = {
	"label": "Button_label__Ki9Se",
	"button": "Button_button__Tpz3i",
	"content": "Button_content__xkrLK",
	"primary--white": "Button_primary--white__br55C",
	"primary--black": "Button_primary--black__4uFQC",
	"secondary--white": "Button_secondary--white__z1s33",
	"secondary--black": "Button_secondary--black__bKhfe",
	"appearance--default": "Button_appearance--default___jSU1"
};


/***/ }),

/***/ 441:
/***/ ((module) => {

// Exports
module.exports = {
	"gutterLeft": "Gutter_gutterLeft__R5zIQ",
	"gutterRight": "Gutter_gutterRight__2DcUk"
};


/***/ }),

/***/ 4921:
/***/ ((module) => {

// Exports
module.exports = {
	"gutterLeft": "Gutter_gutterLeft__R5zIQ",
	"gutterRight": "Gutter_gutterRight__2DcUk"
};


/***/ }),

/***/ 5281:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__vtMaK",
	"wrap": "Header_wrap__Rl0C_",
	"nav": "Header_nav__JUu1D"
};


/***/ }),

/***/ 9612:
/***/ ((module) => {

// Exports
module.exports = {
	"richText": "RichText_richText__bFXc7"
};


/***/ }),

/***/ 5101:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 6602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page),
  "generateStaticParams": () => (/* binding */ generateStaticParams)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(117);
// EXTERNAL MODULE: ./node_modules/next/headers.js
var headers = __webpack_require__(8558);
;// CONCATENATED MODULE: ./src/app/cms.ts

const fetchPage = async (slug)=>{
    const { isEnabled: isPreviewMode  } = (0,headers.draftMode)();
    const cookieStore = (0,headers.cookies)();
    const payloadToken = cookieStore.get("payload-token");
    const pageRes = await fetch(`${"http://localhost:3000"}/api/pages?where[slug][equals]=${slug}${isPreviewMode ? "&draft=true" : ""}`, {
        headers: {
            ...isPreviewMode ? {
                Authorization: `JWT ${payloadToken?.value}`
            } : {}
        }
    }).then((res)=>res.json());
    return pageRes?.docs?.[0] ?? null;
};
const fetchPages = async ()=>{
    const pageRes = await fetch(`${"http://localhost:3000"}/api/pages?depth=0&limit=100`).then((res)=>res.json()) // eslint-disable-line function-paren-newline
    ;
    return pageRes?.docs ?? [];
};

// EXTERNAL MODULE: ./src/app/[slug]/page.module.css
var page_module = __webpack_require__(5101);
var page_module_default = /*#__PURE__*/__webpack_require__.n(page_module);
// EXTERNAL MODULE: ./src/components/Gutter/index.tsx
var Gutter = __webpack_require__(1467);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(4212);
// EXTERNAL MODULE: ./node_modules/escape-html/index.js
var escape_html = __webpack_require__(3936);
var escape_html_default = /*#__PURE__*/__webpack_require__.n(escape_html);
// EXTERNAL MODULE: ../../../node_modules/slate/dist/index.js
var dist = __webpack_require__(2667);
;// CONCATENATED MODULE: ./src/components/RichText/serialize.tsx




const serialize = (children)=>children.map((node, i)=>{
        if (dist/* Text.isText */.xv.isText(node)) {
            let text = /*#__PURE__*/ jsx_runtime_.jsx("span", {
                dangerouslySetInnerHTML: {
                    __html: escape_html_default()(node.text)
                }
            });
            if (node.bold) {
                text = /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    children: text
                }, i);
            }
            if (node.code) {
                text = /*#__PURE__*/ jsx_runtime_.jsx("code", {
                    children: text
                }, i);
            }
            if (node.italic) {
                text = /*#__PURE__*/ jsx_runtime_.jsx("em", {
                    children: text
                }, i);
            }
            if (node.underline) {
                text = /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    style: {
                        textDecoration: "underline"
                    },
                    children: text
                }, i);
            }
            if (node.strikethrough) {
                text = /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    style: {
                        textDecoration: "line-through"
                    },
                    children: text
                }, i);
            }
            return /*#__PURE__*/ jsx_runtime_.jsx(react_shared_subset.Fragment, {
                children: text
            }, i);
        }
        if (!node) {
            return null;
        }
        switch(node.type){
            case "h1":
                return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: serialize(node.children)
                }, i);
            case "h2":
                return /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: serialize(node.children)
                }, i);
            case "h3":
                return /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: serialize(node.children)
                }, i);
            case "h4":
                return /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    children: serialize(node.children)
                }, i);
            case "h5":
                return /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                    children: serialize(node.children)
                }, i);
            case "h6":
                return /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                    children: serialize(node.children)
                }, i);
            case "blockquote":
                return /*#__PURE__*/ jsx_runtime_.jsx("blockquote", {
                    children: serialize(node.children)
                }, i);
            case "ul":
                return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: serialize(node.children)
                }, i);
            case "ol":
                return /*#__PURE__*/ jsx_runtime_.jsx("ol", {
                    children: serialize(node.children)
                }, i);
            case "li":
                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: serialize(node.children)
                }, i);
            case "link":
                return /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: escape_html_default()(node.url),
                    children: serialize(node.children)
                }, i);
            default:
                return /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: serialize(node.children)
                }, i);
        }
    });
/* harmony default export */ const RichText_serialize = (serialize);

// EXTERNAL MODULE: ./src/components/RichText/index.module.scss
var index_module = __webpack_require__(9612);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./src/components/RichText/index.tsx




const RichText = ({ className , content  })=>{
    if (!content) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: [
            (index_module_default()).richText,
            className
        ].filter(Boolean).join(" "),
        children: RichText_serialize(content)
    });
};
/* harmony default export */ const components_RichText = (RichText);

;// CONCATENATED MODULE: ./src/app/[slug]/page.tsx






async function Page({ params: { slug  }  }) {
    const page = await fetchPage(slug || "home");
    if (page === null) {
        return (0,navigation.notFound)();
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Gutter/* Gutter */.T, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: (page_module_default()).hero,
                    children: page?.title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_RichText, {
                    content: page?.richText
                })
            ]
        })
    });
}
// There is known issue with Next.js when using `generateStaticParams` with dynamic routes
// this is only an issue in development, not production
// there is also currently no way of getting around this issue except removing this function
// - https://github.com/vercel/next.js/issues/48153
// - https://github.com/vercel/next.js/issues/48153
// - https://github.com/vercel/next.js/issues/44764
async function generateStaticParams() {
    const pages = await fetchPages();
    return pages.map(({ slug  })=>({
            slug
        }));
}


/***/ }),

/***/ 5033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/css/app.scss
var app = __webpack_require__(5802);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(4212);
// EXTERNAL MODULE: ./node_modules/next/headers.js
var headers = __webpack_require__(8558);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(5985);
;// CONCATENATED MODULE: ./src/components/AdminBar/client.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/jacobfletcher/dev/payload/payload/examples/preview/nextjs/src/components/AdminBar/client.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["AdminBarClient"];

;// CONCATENATED MODULE: ./src/components/AdminBar/index.tsx




async function AdminBar() {
    const { isEnabled: isPreviewMode  } = (0,headers.draftMode)();
    return /*#__PURE__*/ jsx_runtime_.jsx(e0, {
        preview: isPreviewMode,
        // id={page?.id} // TODO: is there any way to do this?!
        collection: "pages"
    });
}

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2208);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(2585);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Button/index.module.scss
var index_module = __webpack_require__(1347);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./src/components/Button/index.tsx




const Button = ({ el: elFromProps = "link" , label , newTab , href , appearance , className: classNameFromProps , onClick , type ="button" , disabled  })=>{
    let el = elFromProps;
    const newTabProps = newTab ? {
        target: "_blank",
        rel: "noopener noreferrer"
    } : {};
    const className = [
        (index_module_default()).button,
        classNameFromProps,
        (index_module_default())[`appearance--${appearance}`],
        (index_module_default()).button
    ].filter(Boolean).join(" ");
    const content = /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (index_module_default()).content,
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: (index_module_default()).label,
            children: label
        })
    });
    if (onClick || type === "submit") el = "button";
    if (el === "link") {
        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: href || "",
            className: className,
            ...newTabProps,
            onClick: onClick,
            children: content
        });
    }
    const Element = el;
    return /*#__PURE__*/ jsx_runtime_.jsx(Element, {
        href: href,
        className: className,
        type: type,
        ...newTabProps,
        onClick: onClick,
        disabled: disabled,
        children: content
    });
};

;// CONCATENATED MODULE: ./src/components/CMSLink/index.tsx




const CMSLink = ({ type , url , newTab , reference , label , appearance , children , className  })=>{
    const href = type === "reference" && typeof reference?.value === "object" && reference.value.slug ? `/${reference.value.slug}` : url;
    if (!appearance) {
        const newTabProps = newTab ? {
            target: "_blank",
            rel: "noopener noreferrer"
        } : {};
        if (type === "custom") {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: url,
                ...newTabProps,
                className: className,
                children: [
                    label && label,
                    children && children
                ]
            });
        }
        if (href) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: href,
                ...newTabProps,
                className: className,
                children: [
                    label && label,
                    children && children
                ]
            });
        }
    }
    const buttonProps = {
        newTab,
        href,
        appearance,
        label
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Button, {
        className: className,
        ...buttonProps,
        el: "link"
    });
};

// EXTERNAL MODULE: ./src/components/Gutter/index.tsx
var Gutter = __webpack_require__(1467);
// EXTERNAL MODULE: ./src/components/Header/index.module.scss
var Header_index_module = __webpack_require__(5281);
var Header_index_module_default = /*#__PURE__*/__webpack_require__.n(Header_index_module);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx







async function Header() {
    const mainMenu = await fetch(`${"http://localhost:3000"}/api/globals/main-menu`).then((res)=>res.json());
    const { navItems  } = mainMenu;
    const hasNavItems = navItems && Array.isArray(navItems) && navItems.length > 0;
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (Header_index_module_default()).header,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Gutter/* Gutter */.T, {
            className: (Header_index_module_default()).wrap,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        width: 150,
                        height: 30,
                        alt: "payload cms logo",
                        src: "https://raw.githubusercontent.com/payloadcms/payload/master/src/admin/assets/images/payload-logo-dark.svg"
                    })
                }),
                hasNavItems && /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: (Header_index_module_default()).nav,
                    children: navItems.map(({ link  }, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(CMSLink, {
                            ...link
                        }, i);
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/app/layout.tsx




const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
async function RootLayout(props) {
    const { children  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(AdminBar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                children
            ]
        })
    });
}


/***/ }),

/***/ 1467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ Gutter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4212);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4921);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Gutter = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { left =true , right =true , className , children  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: [
            left && (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().gutterLeft),
            right && (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().gutterRight),
            className
        ].filter(Boolean).join(" "),
        children: children
    });
});
Gutter.displayName = "Gutter";


/***/ }),

/***/ 1764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2548);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5802:
/***/ (() => {



/***/ })

};
;