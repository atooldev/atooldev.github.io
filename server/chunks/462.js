"use strict";
exports.id = 462;
exports.ids = [462];
exports.modules = {

/***/ 5462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/components/layout/Layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var Layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(6088);
var Layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(Layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/layout/AppFooter.tsx



const AppFooter = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "shadow",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-full container mx-auto p-4 md:px-6 md:py-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "sm:flex sm:items-center sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: "https://flowbite.com/",
                            className: "flex items-center mb-4 sm:mb-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    width: 32,
                                    height: 32,
                                    src: "https://flowbite.com/docs/images/logo.svg",
                                    className: "h-8 mr-3",
                                    alt: "Flowbite Logo"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "self-center text-2xl font-semibold whitespace-nowrap text-white",
                                    children: "Atool"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "flex flex-wrap items-center mb-6 text-sm text-white",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/about",
                                        className: "mr-4 hover:underline md:mr-6 ",
                                        children: "About"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/blog",
                                        className: "mr-4 hover:underline md:mr-6 ",
                                        children: "Blog"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/contact",
                                        className: "mr-4 hover:underline md:mr-6 ",
                                        children: "Contact"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/career",
                                        className: "mr-4 hover:underline md:mr-6 ",
                                        children: "Career"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center justify-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "text-white hover:text-gray-300",
                                    children: "Instagram"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "ml-6 text-white hover:text-gray-300",
                                    children: "Twitter"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    className: "my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    className: "block text-sm text-gray-500 sm:text-center dark:text-gray-400",
                    children: [
                        "\xa9 ",
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: "hover:underline",
                            children: "OfByte.com"
                        }),
                        ". All Rights Reserved."
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const layout_AppFooter = (AppFooter);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/components/layout/AppHead.tsx
// app head to handle all possible needs for seo and meta tags


const AppHead = ({ title , description , image , url  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "image",
                content: image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:creator",
                content: "@atooldev"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:title",
                content: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:image",
                content: image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                content: "000212"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/apple-touch-icon.png"
            })
        ]
    });
};
/* harmony default export */ const layout_AppHead = (AppHead);

;// CONCATENATED MODULE: ./src/components/layout/AppHeader.tsx



const AppHeader = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "border-gray-200 px-2 sm:px-4 py-2.5  bg-brand-background max-w-xl mx-auto  lg:max-w-7xl lg:px-8",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container flex flex-wrap items-center mx-auto justify-between sm:justify-start ",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "/",
                    className: "flex items-center mr-4 ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            width: 36,
                            height: 36,
                            src: "https://flowbite.com/docs/images/logo.svg",
                            className: "h-6 mr-4 sm:h-9",
                            alt: "Flowbite Logo"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "self-center text-xl font-semibold whitespace-nowrap text-gray-50",
                            children: "ATool"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    "data-collapse-toggle": "navbar-default",
                    type: "button",
                    className: "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                    "aria-controls": "navbar-default",
                    "aria-expanded": "false",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "sr-only",
                            children: "Open main menu"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            className: "w-6 h-6",
                            "aria-hidden": "true",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fillRule: "evenodd",
                                d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                                clipRule: "evenodd"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hidden w-full md:block md:w-auto ",
                    id: "navbar-default",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    className: "block py-2 pl-3 pr-4 text-white text-lg  rounded md:bg-transparent md:p-0 dark:text-white",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://docs.atool.dev/atool-admin/",
                                    target: "_blank",
                                    className: "block py-2 pl-3 pr-4 text-lg text-gray-700   rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white",
                                    children: "Documentation"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/contact",
                                    className: "block py-2 pl-3 pr-4 text-lg text-gray-700   rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white",
                                    children: "Contact"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    className: "block py-2 pl-3 pr-4 text-lg text-gray-700   rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white ",
                                    children: "About"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hidden w-full md:block md:w-auto ml-auto items-center justify-center flex",
                    id: "navbar-default",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0",
                        children: [
                            "                    ",
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "mt-3 md:mt-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "block py-2 pl-3 pr-4 text-white text-lg  rounded md:bg-transparent  dark:text-white",
                                    href: "https://your-demo-link.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "Demo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "https://github.com/atooldev/atool-express",
                                    target: "_blank",
                                    className: "flex gap-4 items-center justify-center text-white text-lg  rounded md:bg-transparent  dark:text-white border-2 border-indigo-500 hover:bg-indigo-500 hover:text-white px-4 py-2 ",
                                    rel: "noopener noreferrer",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            viewBox: "0 0 98 96" // You might need to adjust the viewBox accordingly
                                            ,
                                            width: "24",
                                            height: "23",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z",
                                                fill: "#fff"
                                            })
                                        }),
                                        "Star"
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layout_AppHeader = (AppHeader);

;// CONCATENATED MODULE: ./src/components/layout/Layout.tsx





const Layout = ({ children , ...props })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "layout  bg-brand-background",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_AppHead, {
                ...props
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_AppHeader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: `${(Layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className} max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8`,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_AppFooter, {})
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ })

};
;