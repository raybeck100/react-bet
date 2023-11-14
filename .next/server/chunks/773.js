"use strict";
exports.id = 773;
exports.ids = [773];
exports.modules = {

/***/ 23320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ navBar_NavBar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./components/select/Select.jsx
var Select = __webpack_require__(54816);
;// CONCATENATED MODULE: ./public/img/header/uk.png
/* harmony default export */ const uk = ({"src":"/_next/static/media/uk.b5bc1e2b.png","height":24,"width":32,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAsklEQVR42h2OsQqCYBSF75u01VM11RBBW1A0ZTUkSvAP1pTVA4QOCQVaQZCBbcJv1qKDgnu5nrguF+695/B99HKepVBcUM1CMjaQKEtQw4be3iNygpL6owukF+LqZ0h1E6m2hnd6Q94/GMx9UK4ayGYCv80ORauHotnB19wi11bIpgLEgxc+8pNDHOYSl2moPiBvMbxjjFQzGVPh5DkE4yk6BOWia4HqNguyaCUsJm4l+QdoaozkOmdbswAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":6});
// EXTERNAL MODULE: ./public/img/logo/logo.png
var logo = __webpack_require__(27827);
;// CONCATENATED MODULE: ./components/navBar/NavBar.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const lang = [
    {
        id: 1,
        name: "En"
    },
    {
        id: 2,
        name: "Cy"
    },
    {
        id: 3,
        name: "Et"
    }
];
const NavBar = ()=>{
    const [active, setActive] = (0,react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "header-section py-1 py-lg-3",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container-fluid p-0",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header-wrapper",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "menu__left__wrap",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-menu px-2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    className: "logo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: logo/* default */.Z,
                                        alt: "logo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "lang d-flex align-items-center px-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "language__wrap",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flag",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: uk,
                                                    alt: "flag"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Select["default"], {
                                                data: lang
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: `header-bar d-lg-none ${active ? "active" : ""}`,
                                        onClick: ()=>setActive(!active),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: `main-menu ${active ? "active" : ""}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Live"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Sports Betting"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/casino",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Casino"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "URL:void(0)",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Lucky Drops"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/livecasino",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Live Casino"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/promotions",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Promotions"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "cmn-grp",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "URL:void(0)",
                                                className: "cmn--btn",
                                                "data-bs-toggle": "modal",
                                                "data-bs-target": "#signInPin",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Sign In"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "URL:void(0)",
                                                className: "cmn--btn2",
                                                "data-bs-toggle": "modal",
                                                "data-bs-target": "#signUpPin",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "rela",
                                                    children: "Sign Up"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mneu-btn-grp",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "language__wrap",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flag",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: uk,
                                            alt: "flag"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Select["default"], {
                                        data: lang
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "URL:void(0)",
                                className: "cmn--btn",
                                "data-bs-toggle": "modal",
                                "data-bs-target": "#signInPin",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Sign In"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "URL:void(0)",
                                className: "cmn--btn2",
                                "data-bs-toggle": "modal",
                                "data-bs-target": "#signUpPin",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "rela",
                                    children: "Sign Up"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const navBar_NavBar = (NavBar);


/***/ }),

/***/ 12378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34834);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const FooterMobile = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: "footer__menu d-lg-none",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/",
                    className: "d-grid justify-content-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-table-tennis"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "texta",
                            children: "Sports"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "URL:void(0)",
                    className: "d-grid justify-content-center",
                    "data-bs-toggle": "modal",
                    "data-bs-target": "#eventsp",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fa-solid fa-gift"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "texta",
                            children: "Events"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                className: "header-bartwo d-lg-none",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "bars",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fas fa-bars"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "cros",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fa-solid fa-xmark"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "URL:void(0)",
                    className: "d-grid justify-content-center",
                    "data-bs-toggle": "modal",
                    "data-bs-target": "#betsp",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-ticket-alt"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "texta",
                            children: "My Bet"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/dashboard",
                    className: "d-grid justify-content-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "far fa-user-circle"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "texta",
                            children: " Account"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterMobile);


/***/ }),

/***/ 13111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`E:\DDGBET\components\navBar\NavBar.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;