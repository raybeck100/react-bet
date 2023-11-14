exports.id = 219;
exports.ids = [219];
exports.modules = {

/***/ 1585:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7649, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 27977, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 27686));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 48897))

/***/ }),

/***/ 94273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dashboard_DashboardMain)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
;// CONCATENATED MODULE: ./components/common/DashboardSideBar.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const DashboardSideBar = ()=>{
    const pathName = (0,navigation.usePathname)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "dashboard__side__bar",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "account__menu",
            children: [
                [
                    [
                        "Account Settings",
                        "/dashboard"
                    ],
                    [
                        "Contact Preferences",
                        "/dashboard/contact-preference"
                    ],
                    [
                        "Identity Details",
                        "/dashboard/identity"
                    ],
                    [
                        "Verify",
                        "/dashboard/verification"
                    ],
                    [
                        "Casino bets",
                        "/dashboard/casinobet"
                    ],
                    [
                        "My Promos",
                        "/dashboard/mypromo"
                    ],
                    [
                        "Deposit",
                        "/dashboard/deposit"
                    ],
                    [
                        "Withdraw",
                        "/dashboard/withdraw"
                    ],
                    [
                        "Transction History",
                        "/dashboard/transaction"
                    ],
                    [
                        "Notifications",
                        "/dashboard/notification"
                    ],
                    [
                        "Bet History",
                        "/dashboard/bethistory"
                    ],
                    [
                        "Bonuses",
                        "/dashboard/bonuses"
                    ]
                ].map(([itm, url], i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: url,
                            className: `${pathName === url && "active"}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icons",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "icon-user"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: itm
                                })
                            ]
                        })
                    }, i)),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "URL:void()",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "icons",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "icon-logout"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Logout"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const common_DashboardSideBar = (DashboardSideBar);

;// CONCATENATED MODULE: ./components/footer/FooterMobile.jsx


const FooterMobile = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "footer__menu d-lg-none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "/",
                    className: "d-grid justify-content-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fas fa-table-tennis"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "texta",
                            children: "Sports"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "URL:void(0)",
                    className: "d-grid justify-content-center",
                    "data-bs-toggle": "modal",
                    "data-bs-target": "#eventsp",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fa-solid fa-gift"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "texta",
                            children: "Events"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "header-bartwo d-lg-none",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "bars",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fas fa-bars"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "cros",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fa-solid fa-xmark"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "URL:void(0)",
                    className: "d-grid justify-content-center",
                    "data-bs-toggle": "modal",
                    "data-bs-target": "#betsp",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fas fa-ticket-alt"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "texta",
                            children: "My Bet"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "/dashboard",
                    className: "d-grid justify-content-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "far fa-user-circle"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "texta",
                            children: " Account"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const footer_FooterMobile = (FooterMobile);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/img/logo/logo.png
var logo = __webpack_require__(27827);
;// CONCATENATED MODULE: ./components/header/DashboardHeader.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const DashboardHeader = ({ isOpen , setIsOpen  })=>{
    const [menuActive, setMenuActive] = (0,react_.useState)(false);
    const handleIsOpen = (e)=>{
        e.stopPropagation();
        setIsOpen(!isOpen);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "header-section dashboard__header",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container p-0",
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
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: `main-menu ${menuActive && "active"}`,
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
                                            href: "/sportsbetting",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Sports Betting"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/casino",
                                            className: "active",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Casino"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "URL:void()",
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
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "cmn-grp",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "cmn--btn",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "rela",
                                                children: "Deposit"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "dashboar__wrap",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "items d__text",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "small",
                                        children: "Your balance"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        children: "$9.22"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "items d__cmn",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "URL:void()",
                                    className: "cmn--btn",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Deposit"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "items dashboar__social",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: "URL:void()",
                                        className: "icons",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "icon-gift"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "count",
                                                children: "2"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: "URL:void()",
                                        className: "icons",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "icon-message"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "count",
                                                children: "2"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "custom-dropdown",
                                        onClick: handleIsOpen,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "custom-dropdown__user",
                                                "data-set": "custom-dropdown",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "URL:void()",
                                                    className: "icons",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-user text-white"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `custom-dropdown__content ${isOpen && "is-open"}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "custom-dropdown__body",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "custom-dropdown__list",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                    href: "/dashboard",
                                                                    className: "custom-dropdown__body-link",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "custom-dropdown__body-icon",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-layer-group"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "custom-dropdown__body-text",
                                                                            children: "Dashboard"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                    href: "URL:void()",
                                                                    className: "custom-dropdown__body-link",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "custom-dropdown__body-icon",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-cog"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "custom-dropdown__body-text",
                                                                            children: "Settings"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                    href: "URL:void()",
                                                                    className: "custom-dropdown__body-link",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "custom-dropdown__body-icon",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-sign-out-alt"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "custom-dropdown__body-text",
                                                                            children: "Logout"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "lang d-flex align-items-center px-2",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `header-bar d-lg-none ${menuActive && "active"}`,
                                    onClick: ()=>setMenuActive(!menuActive),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const header_DashboardHeader = (DashboardHeader);

;// CONCATENATED MODULE: ./components/dashboard/DashboardMain.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const DashboardMain = ({ children  })=>{
    const [isOpen, setIsOpen] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: ()=>setIsOpen(false),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header_DashboardHeader, {
                isOpen: isOpen,
                setIsOpen: setIsOpen
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "dashboard__body mt__30 pb-60",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row g-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xxl-3 col-xl-3 col-lg-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(common_DashboardSideBar, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xxl-9 col-xl-9 col-lg-8",
                                    children: children
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(footer_FooterMobile, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const dashboard_DashboardMain = (DashboardMain);


/***/ }),

/***/ 25797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10006);


const DashboardLayout = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardLayout);


/***/ }),

/***/ 9354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`E:\DDGBET\components\dashboard\DashboardMain.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 59483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(75171)


/***/ })

};
;