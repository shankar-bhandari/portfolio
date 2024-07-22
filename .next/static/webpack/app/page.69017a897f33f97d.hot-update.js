"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Contact.tsx":
/*!****************************************!*\
  !*** ./src/app/components/Contact.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contact; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _web3forms_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3forms/react */ \"(app-pages-browser)/./node_modules/@web3forms/react/dist/index.modern.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Contact() {\n    _s();\n    const { register, reset, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();\n    const [isSuccess, setIsSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const accessKey = \"YOUR_ACCESS_KEY_HERE\";\n    const { submit: onSubmit } = (0,_web3forms_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        access_key: accessKey,\n        settings: {\n            from_name: \"Acme Inc\",\n            subject: \"New Contact Message from your Protfolio\"\n        },\n        onSuccess: (msg, data)=>{\n            setIsSuccess(true);\n            setResult(msg);\n            reset();\n        },\n        onError: (msg, data)=>{\n            setIsSuccess(false);\n            setResult(msg);\n        }\n    });\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const sendMessage = ()=>{\n        try {\n            if (name.length <= 0) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(\"Name is required!!!\");\n                return false;\n            }\n            if (email.length <= 0) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(\"Email is required!!!\");\n                return false;\n            }\n            if (message.length <= 0) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(\"Message is required!!!\");\n                return false;\n            }\n            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.info(\"UNDER DEVELOPMENT: Please directly mail to bhandarishankar.officail@gmail.com\");\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-900 py-8 md:py-14\",\n        id: \"contact\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-screen-md mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-opacity-[3%] bg-dark rounded-md p-11 md:mb-12 lg:mb-5 sm:p-[55px] lg:p-11 xl:p-[55px] wow fadeInUp\",\n                    \"data-wow-delay\": \".15s\",\n                    style: {\n                        visibility: \"visible\",\n                        animationDelay: \"0.15s\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-white font-bold text-2xl sm:text-3xl lg:text-2xl xl:text-3xl mb-3\",\n                            children: \"Need Help?\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-white text-base font-medium mb-12\",\n                            children: [\n                                \"Feel free to reach out to me for any questions or opportunities or mail me directly on \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"mailto:bhandarishankar.official@gmail.com\",\n                                    className: \"underline text-blue-700\",\n                                    title: \"Contact Me\",\n                                    children: \"bhandarishankar.official@gmail.com\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 166\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap mx-[-16px]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full md:w-1/2 px-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-8\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"name\",\n                                                className: \"block text-sm font-medium text-white mb-3\",\n                                                children: \" Your Name \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                value: name,\n                                                onChange: (e)=>setName(e.target.value),\n                                                type: \"text\",\n                                                placeholder: \"Enter your name\",\n                                                className: \"w-full border border-transparent bg-[#242B51] rounded-md shadow-one shadow-signUp py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-blue-700\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full md:w-1/2 px-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-8\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"email\",\n                                                className: \"block text-sm font-medium text-white mb-3\",\n                                                children: \" Your Email \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                value: email,\n                                                onChange: (e)=>setEmail(e.target.value),\n                                                type: \"email\",\n                                                placeholder: \"Enter your email\",\n                                                className: \"w-full border border-transparent bg-[#242B51] rounded-md shadow-one shadow-signUp py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-blue-700\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full px-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-8\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"message\",\n                                                className: \"block text-sm font-medium text-white mb-3\",\n                                                children: \" Your Message\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                                value: message,\n                                                onChange: (e)=>setMessage(e.target.value),\n                                                rows: 5,\n                                                placeholder: \"Enter your Message\",\n                                                className: \"w-full border border-transparent bg-[#242B51] rounded-md shadow-one shadow-signUp py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-blue-700 resize-none\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full px-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: sendMessage,\n                                        type: \"button\",\n                                        className: \"w-full text-base font-medium text-white bg-blue-700 py-4 px-9 hover:bg-opacity-80 hover:shadow-signUp rounded-md transition duration-300 ease-in-out\",\n                                        children: \"Send\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n                lineNumber: 65,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n            lineNumber: 64,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ParanoidFeels\\\\Downloads\\\\shankarbhandari.github.io-main (1)\\\\shankarbhandari.github.io-main\\\\src\\\\app\\\\components\\\\Contact.tsx\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, this);\n}\n_s(Contact, \"D6JTbD6YjF3VK/DZN8U8vNwaepo=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm,\n        _web3forms_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Contact;\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Db250YWN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFDSztBQUNGO0FBQ0U7QUFFN0IsU0FBU0k7O0lBRWhCLE1BQU0sRUFBQ0MsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBQyxHQUFHTCx3REFBT0E7SUFFL0MsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1MsUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNVyxZQUFZO0lBRWxCLE1BQU0sRUFBRUMsUUFBUUMsUUFBUSxFQUFFLEdBQUdYLDREQUFZQSxDQUFDO1FBQ3RDWSxZQUFZSDtRQUNaSSxVQUFVO1lBQ1JDLFdBQVc7WUFDWEMsU0FBUztRQUVYO1FBQ0FDLFdBQVcsQ0FBQ0MsS0FBS0M7WUFDZlosYUFBYTtZQUNiRSxVQUFVUztZQUNWZDtRQUNGO1FBQ0FnQixTQUFTLENBQUNGLEtBQUtDO1lBQ2JaLGFBQWE7WUFDYkUsVUFBVVM7UUFDWjtJQUNGO0lBR04sTUFBTSxDQUFDRyxNQUFNQyxRQUFRLEdBQUd2QiwrQ0FBUUEsQ0FBUztJQUN6QyxNQUFNLENBQUN3QixPQUFPQyxTQUFTLEdBQUd6QiwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUMwQixTQUFTQyxXQUFXLEdBQUczQiwrQ0FBUUEsQ0FBUztJQUUvQyxNQUFNNEIsY0FBYztRQUNoQixJQUFJO1lBQ0EsSUFBSU4sS0FBS08sTUFBTSxJQUFJLEdBQUc7Z0JBQ2xCOUIsaURBQUtBLENBQUMrQixLQUFLLENBQUM7Z0JBQ1osT0FBTztZQUNYO1lBRUEsSUFBSU4sTUFBTUssTUFBTSxJQUFJLEdBQUc7Z0JBQ25COUIsaURBQUtBLENBQUMrQixLQUFLLENBQUM7Z0JBQ1osT0FBTztZQUNYO1lBRUEsSUFBSUosUUFBUUcsTUFBTSxJQUFJLEdBQUc7Z0JBQ3JCOUIsaURBQUtBLENBQUMrQixLQUFLLENBQUM7Z0JBQ1osT0FBTztZQUNYO1lBRUEvQixpREFBS0EsQ0FBQ2dDLElBQUksQ0FBQztRQUNmLEVBQUUsT0FBT0QsT0FBTztZQUNaRSxRQUFRQyxHQUFHLENBQUNIO1FBRWhCO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0k7UUFBSUMsV0FBVTtRQUE0QkMsSUFBRztrQkFDMUMsNEVBQUNGO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTtvQkFBd0dFLGtCQUFlO29CQUFPQyxPQUFPO3dCQUNoSkMsWUFBWTt3QkFDWkMsZ0JBQWdCO29CQUNwQjs7c0NBQ0ksOERBQUNDOzRCQUFHTixXQUFVO3NDQUF5RTs7Ozs7O3NDQUV2Riw4REFBQ087NEJBQUVQLFdBQVU7O2dDQUF5Qzs4Q0FBdUYsOERBQUNRO29DQUFFQyxNQUFLO29DQUE0Q1QsV0FBVTtvQ0FBMEJVLE9BQU07OENBQWE7Ozs7Ozs7Ozs7OztzQ0FFeFAsOERBQUNYOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQ1gsNEVBQUNEO3dDQUFJQyxXQUFVOzswREFDWCw4REFBQ1c7Z0RBQU1DLFNBQVE7Z0RBQU9aLFdBQVU7MERBQTRDOzs7Ozs7MERBQzVFLDhEQUFDYTtnREFBTUMsT0FBTzNCO2dEQUFNNEIsVUFBVSxDQUFDQyxJQUFNNUIsUUFBUTRCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnREFBR0ksTUFBSztnREFBT0MsYUFBWTtnREFBa0JuQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHMUgsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNYLDRFQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ1gsOERBQUNXO2dEQUFNQyxTQUFRO2dEQUFRWixXQUFVOzBEQUE0Qzs7Ozs7OzBEQUM3RSw4REFBQ2E7Z0RBQU1DLE9BQU96QjtnREFBTzBCLFVBQVUsQ0FBQ0MsSUFBTTFCLFNBQVMwQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0RBQUdJLE1BQUs7Z0RBQVFDLGFBQVk7Z0RBQW1CbkIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBRzlILDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDWCw0RUFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNYLDhEQUFDVztnREFBTUMsU0FBUTtnREFBVVosV0FBVTswREFBNEM7Ozs7OzswREFFL0UsOERBQUNvQjtnREFBU04sT0FBT3ZCO2dEQUFTd0IsVUFBVSxDQUFDQyxJQUFNeEIsV0FBV3dCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnREFBR08sTUFBTTtnREFBR0YsYUFBWTtnREFBcUJuQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHbkksOERBQUNEO29DQUFJQyxXQUFVOzhDQUNYLDRFQUFDc0I7d0NBQU9DLFNBQVM5Qjt3Q0FBYXlCLE1BQUs7d0NBQVNsQixXQUFVO2tEQUF1Sjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXN087R0FwR3dCaEM7O1FBRXdCRixvREFBT0E7UUFPbEJDLHdEQUFZQTs7O0tBVHpCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQ29udGFjdC50c3g/NDVhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgdXNlV2ViM0Zvcm1zIGZyb20gXCJAd2ViM2Zvcm1zL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XG5cbiAgICAgICAgY29uc3Qge3JlZ2lzdGVyLCByZXNldCwgaGFuZGxlU3VibWl0fSA9IHVzZUZvcm0oKTtcbiAgICAgIFxuICAgICAgICBjb25zdCBbaXNTdWNjZXNzLCBzZXRJc1N1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgICAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgICBcbiAgICAgICAgY29uc3QgYWNjZXNzS2V5ID0gXCJZT1VSX0FDQ0VTU19LRVlfSEVSRVwiO1xuXG4gICAgICAgIGNvbnN0IHsgc3VibWl0OiBvblN1Ym1pdCB9ID0gdXNlV2ViM0Zvcm1zKHtcbiAgICAgICAgICAgIGFjY2Vzc19rZXk6IGFjY2Vzc0tleSxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIGZyb21fbmFtZTogXCJBY21lIEluY1wiLFxuICAgICAgICAgICAgICBzdWJqZWN0OiBcIk5ldyBDb250YWN0IE1lc3NhZ2UgZnJvbSB5b3VyIFByb3Rmb2xpb1wiLFxuICAgICAgICAgICAgICAvLyAuLi4gb3RoZXIgc2V0dGluZ3NcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblN1Y2Nlc3M6IChtc2csIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgc2V0SXNTdWNjZXNzKHRydWUpO1xuICAgICAgICAgICAgICBzZXRSZXN1bHQobXNnKTtcbiAgICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVycm9yOiAobXNnLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIHNldElzU3VjY2VzcyhmYWxzZSk7XG4gICAgICAgICAgICAgIHNldFJlc3VsdChtc2cpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcblxuXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICAgIGNvbnN0IHNlbmRNZXNzYWdlID0gKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYoIG5hbWUubGVuZ3RoIDw9IDAgKXtcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihcIk5hbWUgaXMgcmVxdWlyZWQhISFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggZW1haWwubGVuZ3RoIDw9IDAgKXtcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihcIkVtYWlsIGlzIHJlcXVpcmVkISEhXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIG1lc3NhZ2UubGVuZ3RoIDw9IDAgKXtcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihcIk1lc3NhZ2UgaXMgcmVxdWlyZWQhISFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b2FzdC5pbmZvKFwiVU5ERVIgREVWRUxPUE1FTlQ6IFBsZWFzZSBkaXJlY3RseSBtYWlsIHRvIGJoYW5kYXJpc2hhbmthci5vZmZpY2FpbEBnbWFpbC5jb21cIik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgcHktOCBtZDpweS0xNFwiIGlkPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLW1kIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1vcGFjaXR5LVszJV0gYmctZGFyayByb3VuZGVkLW1kIHAtMTEgbWQ6bWItMTIgbGc6bWItNSBzbTpwLVs1NXB4XSBsZzpwLTExIHhsOnAtWzU1cHhdIHdvdyBmYWRlSW5VcFwiIGRhdGEtd293LWRlbGF5PVwiLjE1c1wiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBcInZpc2libGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiBcIjAuMTVzXCJcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC0yeGwgc206dGV4dC0zeGwgbGc6dGV4dC0yeGwgeGw6dGV4dC0zeGwgbWItM1wiPk5lZWQgSGVscD88L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtYmFzZSBmb250LW1lZGl1bSBtYi0xMlwiPkZlZWwgZnJlZSB0byByZWFjaCBvdXQgdG8gbWUgZm9yIGFueSBxdWVzdGlvbnMgb3Igb3Bwb3J0dW5pdGllcyBvciBtYWlsIG1lIGRpcmVjdGx5IG9uIDxhIGhyZWY9XCJtYWlsdG86YmhhbmRhcmlzaGFua2FyLm9mZmljaWFsQGdtYWlsLmNvbVwiIGNsYXNzTmFtZT1cInVuZGVybGluZSB0ZXh0LWJsdWUtNzAwXCIgdGl0bGU9XCJDb250YWN0IE1lXCI+YmhhbmRhcmlzaGFua2FyLm9mZmljaWFsQGdtYWlsLmNvbTwvYT48L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbXgtWy0xNnB4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8yIHB4LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgbWItM1wiPiBZb3VyIE5hbWUgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZVwiIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IGJnLVsjMjQyQjUxXSByb3VuZGVkLW1kIHNoYWRvdy1vbmUgc2hhZG93LXNpZ25VcCBweS0zIHB4LTYgdGV4dC1ib2R5LWNvbG9yIHRleHQtYmFzZSBwbGFjZWhvbGRlci1ib2R5LWNvbG9yIG91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnNoYWRvdy1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTcwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8yIHB4LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIG1iLTNcIj4gWW91ciBFbWFpbCA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IGJnLVsjMjQyQjUxXSByb3VuZGVkLW1kIHNoYWRvdy1vbmUgc2hhZG93LXNpZ25VcCBweS0zIHB4LTYgdGV4dC1ib2R5LWNvbG9yIHRleHQtYmFzZSBwbGFjZWhvbGRlci1ib2R5LWNvbG9yIG91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnNoYWRvdy1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTcwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgbWItM1wiPiBZb3VyIE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9IHJvd3M9ezV9IHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBNZXNzYWdlXCIgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgYmctWyMyNDJCNTFdIHJvdW5kZWQtbWQgc2hhZG93LW9uZSBzaGFkb3ctc2lnblVwIHB5LTMgcHgtNiB0ZXh0LWJvZHktY29sb3IgdGV4dC1iYXNlIHBsYWNlaG9sZGVyLWJvZHktY29sb3Igb3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6c2hhZG93LW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNzAwIHJlc2l6ZS1ub25lXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlbmRNZXNzYWdlfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIHB5LTQgcHgtOSBob3ZlcjpiZy1vcGFjaXR5LTgwIGhvdmVyOnNoYWRvdy1zaWduVXAgcm91bmRlZC1tZCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJ0b2FzdCIsInVzZVN0YXRlIiwidXNlRm9ybSIsInVzZVdlYjNGb3JtcyIsIkNvbnRhY3QiLCJyZWdpc3RlciIsInJlc2V0IiwiaGFuZGxlU3VibWl0IiwiaXNTdWNjZXNzIiwic2V0SXNTdWNjZXNzIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiYWNjZXNzS2V5Iiwic3VibWl0Iiwib25TdWJtaXQiLCJhY2Nlc3Nfa2V5Iiwic2V0dGluZ3MiLCJmcm9tX25hbWUiLCJzdWJqZWN0Iiwib25TdWNjZXNzIiwibXNnIiwiZGF0YSIsIm9uRXJyb3IiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInNlbmRNZXNzYWdlIiwibGVuZ3RoIiwiZXJyb3IiLCJpbmZvIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiZGF0YS13b3ctZGVsYXkiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJhbmltYXRpb25EZWxheSIsImgyIiwicCIsImEiLCJocmVmIiwidGl0bGUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJyb3dzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Contact.tsx\n"));

/***/ })

});