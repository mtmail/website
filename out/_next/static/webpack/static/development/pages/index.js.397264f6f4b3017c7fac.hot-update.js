webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/HeaderNavigation.tsx":
/*!*****************************************!*\
  !*** ./components/HeaderNavigation.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderNavigation; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tiny_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-cookie */ "./node_modules/tiny-cookie/es/index.js");
/* harmony import */ var outline_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! outline-icons */ "./node_modules/outline-icons/lib/index.js");
/* harmony import */ var outline_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(outline_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme */ "./theme.ts");
/* harmony import */ var lib_hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/hooks/useOnClickOutside */ "./lib/hooks/useOnClickOutside.ts");

var _jsxFileName = "/Users/tommoor/Projects/outline-site/components/HeaderNavigation.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];






function HeaderNavigation() {
  var _this = this;

  var ref = react__WEBPACK_IMPORTED_MODULE_2__["useRef"]();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      openNav = _React$useState2[0],
      setOpenNav = _React$useState2[1];

  Object(lib_hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_7__["default"])(ref, function () {
    return setOpenNav(null);
  });
  var sessions = {};

  var setActiveNav = function setActiveNav(name) {
    return function (event) {
      event.preventDefault();
      setOpenNav(name);
    };
  };

  if (typeof document !== "undefined") {
    sessions = JSON.parse(Object(tiny_cookie__WEBPACK_IMPORTED_MODULE_4__["getCookie"])("sessions") || "{}");
  }

  var isSignedIn = Object.keys(sessions).length;
  return __jsx("nav", {
    role: "navigation",
    ref: ref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + (openNav === "product" && "open" || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("a", {
    "aria-haspopup": "true",
    onClick: setActiveNav("product"),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + "menu-with-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Product ", __jsx(outline_icons__WEBPACK_IMPORTED_MODULE_5__["ExpandedIcon"], {
    color: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  })), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/integrations",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "Integrations"))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/developers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, "Developers"))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/changelog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "Changelog"))))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/pricing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Pricing"))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + (openNav === "community" && "open" || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("a", {
    "aria-haspopup": "true",
    onClick: setActiveNav("community"),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + "menu-with-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "Community ", __jsx(outline_icons__WEBPACK_IMPORTED_MODULE_5__["ExpandedIcon"], {
    color: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 23
    }
  })), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "mailto:hello@getoutline.com",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, "Contact Us")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://github.com/outline",
    target: "_blank",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, "GitHub")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://github.com/outline/outline/discussions",
    target: "_blank",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, "Discuss")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://twitter.com/outlinewiki",
    target: "_blank",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, "Twitter")))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + (openNav === "sessions" && "open" || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, isSignedIn ? __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("a", {
    key: "launch",
    href: "#login",
    "aria-haspopup": "true",
    onClick: setActiveNav("sessions"),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + "launch menu-with-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }, "Launch Outline ", __jsx(outline_icons__WEBPACK_IMPORTED_MODULE_5__["ExpandedIcon"], {
    color: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 32
    }
  })), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + "sessions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, Object.keys(sessions).map(function (teamId) {
    var session = sessions[teamId];
    return __jsx("li", {
      key: teamId,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: session.url,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + "session",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: session.logoUrl,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + "teamLogo",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 25
      }
    }), " ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 25
      }
    }, "This is a really long team name ", session.name)));
  }))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    key: "login",
    href: "//app.getoutline.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["688439425", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, "Log in | Sign up")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "688439425",
    dynamic: [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey],
    __self: this
  }, "nav.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}ul.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0;padding:0;}li.__jsx-style-dynamic-selector{display:block;-webkit-transition-duration:0.5s;transition-duration:0.5s;position:relative;}li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:".concat(theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, " ").concat(theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, ";margin:0 0 0 ").concat(theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, ";color:rgba(0,0,0,0.75);-webkit-text-decoration:none;text-decoration:none;white-space:nowrap;min-height:40px;position:relative;}li.__jsx-style-dynamic-selector a.menu-with-icon.__jsx-style-dynamic-selector{padding-right:8px;position:relative;z-index:2;}li.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0;overflow:hidden;}li.__jsx-style-dynamic-selector a.launch.__jsx-style-dynamic-selector,li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{background:").concat(theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, ";border-radius:4px;}li.__jsx-style-dynamic-selector a.launch.__jsx-style-dynamic-selector{width:160px;}li.__jsx-style-dynamic-selector:hover{cursor:pointer;}li.open.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector{background:rgba(255,255,255,0.75);}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{visibility:hidden;opacity:0;position:absolute;-webkit-transition:all 0.5s ease;transition:all 0.5s ease;margin-top:0;margin-left:").concat(theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, ";left:0;display:none;background:rgba(255,255,255,0.75);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:4px;min-width:136px;z-index:1;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;}ul.__jsx-style-dynamic-selector li.open.__jsx-style-dynamic-selector>ul.__jsx-style-dynamic-selector,ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector:focus-within>ul.__jsx-style-dynamic-selector,ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector:hover,ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector:focus{visibility:visible;opacity:1;display:block;box-shadow:0 0 0 1px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.08),0 2px 4px rgba(0,0,0,0.08);padding-top:42px;margin-top:-42px;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{clear:both;width:100%;}a.session.__jsx-style-dynamic-selector{font-weight:500;}.teamLogo.__jsx-style-dynamic-selector{display:inline-block;margin-right:").concat(theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, ";border:1px solid ").concat(theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, ";border-radius:4px;width:32px;height:32px;}.sessions.__jsx-style-dynamic-selector{min-width:160px;max-width:260px;left:auto;right:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9jb21wb25lbnRzL0hlYWRlck5hdmlnYXRpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThIUyxBQUcwQixBQUtBLEFBTUMsQUFNRCxBQVlLLEFBTUwsQUFPMkIsQUFLNUIsQUFJRyxBQUlzQixBQUluQixBQWdCWSxBQVFYLEFBV1IsQUFLSyxBQUlLLEFBU0wsV0FqQkwsQ0EvQ2IsRUFwQzJCLENBd0MzQixDQWdEQSxBQWFrQixFQW5GRSxBQThCUixDQXdCQSxFQW9CZ0MsQ0FSNUMsTUFuQ29CLENBd0JKLENBVGlCLEVBc0NyQixFQTFEWixFQXpCWSxJQVlRLEVBd0VWLENBM0JzRCxHQXhEaEUsQUE4QjJCLElBc0QzQixRQXhFQSxHQWlDQSxFQTRCZ0QsU0E1RjVCLEVBWk8sQUFLaEIsQUFZVSxBQWtCVixTQTdCQyxBQThCTSxPQXZCbEIsR0FOQSxNQThCQSxLQXlCZSxLQTJDSyxRQTFDdUIsVUEyQzlCLFNBbEJNLEVBbUJMLFlBQ2QsR0FuQm1CLEtBekJWLE9BQ00sRUEvQ3FELEdBd0VwRSxDQXpGQSxPQWlFdUMsa0NBQ1YscUJBaERlLHlDQWlEeEIsQ0FoRFEsaUJBaURWLE1BaERLLFVBaURYLFVBQ1osOEJBakRxQixtQkFDSCxnQkFDRSxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3RvbW1vb3IvUHJvamVjdHMvb3V0bGluZS1zaXRlL2NvbXBvbmVudHMvSGVhZGVyTmF2aWdhdGlvbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gXCJ0aW55LWNvb2tpZVwiO1xuaW1wb3J0IHsgRXhwYW5kZWRJY29uIH0gZnJvbSBcIm91dGxpbmUtaWNvbnNcIjtcbmltcG9ydCB7IHNwYWNpbmcsIGNvbG9ycyB9IGZyb20gXCJ0aGVtZVwiO1xuaW1wb3J0IHVzZU9uQ2xpY2tPdXRzaWRlIGZyb20gXCJsaWIvaG9va3MvdXNlT25DbGlja091dHNpZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyTmF2aWdhdGlvbigpIHtcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIGNvbnN0IFtvcGVuTmF2LCBzZXRPcGVuTmF2XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZU9uQ2xpY2tPdXRzaWRlKHJlZiwgKCkgPT4gc2V0T3Blbk5hdihudWxsKSk7XG5cbiAgbGV0IHNlc3Npb25zID0ge307XG5cbiAgY29uc3Qgc2V0QWN0aXZlTmF2ID0gKG5hbWUpID0+IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0T3Blbk5hdihuYW1lKTtcbiAgfTtcblxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgc2Vzc2lvbnMgPSBKU09OLnBhcnNlKGdldENvb2tpZShcInNlc3Npb25zXCIpIHx8IFwie31cIik7XG4gIH1cblxuICBjb25zdCBpc1NpZ25lZEluID0gT2JqZWN0LmtleXMoc2Vzc2lvbnMpLmxlbmd0aDtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgcm9sZT1cIm5hdmlnYXRpb25cIiByZWY9e3JlZn0+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e29wZW5OYXYgPT09IFwicHJvZHVjdFwiICYmIFwib3BlblwifT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudS13aXRoLWljb25cIlxuICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgb25DbGljaz17c2V0QWN0aXZlTmF2KFwicHJvZHVjdFwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBQcm9kdWN0IDxFeHBhbmRlZEljb24gY29sb3I9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW50ZWdyYXRpb25zXCI+XG4gICAgICAgICAgICAgICAgPGE+SW50ZWdyYXRpb25zPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2RldmVsb3BlcnNcIj5cbiAgICAgICAgICAgICAgICA8YT5EZXZlbG9wZXJzPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NoYW5nZWxvZ1wiPlxuICAgICAgICAgICAgICAgIDxhPkNoYW5nZWxvZzwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcmljaW5nXCI+XG4gICAgICAgICAgICA8YT5QcmljaW5nPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17b3Blbk5hdiA9PT0gXCJjb21tdW5pdHlcIiAmJiBcIm9wZW5cIn0+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtd2l0aC1pY29uXCJcbiAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3NldEFjdGl2ZU5hdihcImNvbW11bml0eVwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDb21tdW5pdHkgPEV4cGFuZGVkSWNvbiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpoZWxsb0BnZXRvdXRsaW5lLmNvbVwiPkNvbnRhY3QgVXM8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL291dGxpbmVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICBHaXRIdWJcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL291dGxpbmUvb3V0bGluZS9kaXNjdXNzaW9uc1wiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIERpc2N1c3NcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vb3V0bGluZXdpa2lcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICBUd2l0dGVyXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17b3Blbk5hdiA9PT0gXCJzZXNzaW9uc1wiICYmIFwib3BlblwifT5cbiAgICAgICAgICB7aXNTaWduZWRJbiA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAga2V5PVwibGF1bmNoXCJcbiAgICAgICAgICAgICAgICBocmVmPVwiI2xvZ2luXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYXVuY2ggbWVudS13aXRoLWljb25cIlxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZXRBY3RpdmVOYXYoXCJzZXNzaW9uc1wiKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIExhdW5jaCBPdXRsaW5lIDxFeHBhbmRlZEljb24gY29sb3I9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzZXNzaW9uc1wiPlxuICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhzZXNzaW9ucykubWFwKCh0ZWFtSWQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNlc3Npb24gPSBzZXNzaW9uc1t0ZWFtSWRdO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dGVhbUlkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtzZXNzaW9uLnVybH0gY2xhc3NOYW1lPVwic2Vzc2lvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0ZWFtTG9nb1wiIHNyYz17c2Vzc2lvbi5sb2dvVXJsfSAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRoaXMgaXMgYSByZWFsbHkgbG9uZyB0ZWFtIG5hbWUge3Nlc3Npb24ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxMaW5rIGtleT1cImxvZ2luXCIgaHJlZj1cIi8vYXBwLmdldG91dGxpbmUuY29tXCI+XG4gICAgICAgICAgICAgICAgPGE+TG9nIGluIHwgU2lnbiB1cDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGkgYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6ICR7c3BhY2luZy5zbWFsbH0gJHtzcGFjaW5nLm1lZGl1bX07XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwICR7c3BhY2luZy5tZWRpdW19O1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaSBhLm1lbnUtd2l0aC1pY29uIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGkgdWwgbGkgYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaSBhLmxhdW5jaCxcbiAgICAgICAgICBsaSBhOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLmdyZXl9O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpIGEubGF1bmNoIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaTpob3ZlciB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGkub3BlbiA+IGEge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCBsaSB1bCB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogJHtzcGFjaW5nLm1lZGl1bX07XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEzNnB4O1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCBsaSB1bCBhOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCBsaS5vcGVuID4gdWwsXG4gICAgICAgICAgdWwgbGk6Zm9jdXMtd2l0aGluID4gdWwsXG4gICAgICAgICAgdWwgbGkgdWw6aG92ZXIsXG4gICAgICAgICAgdWwgbGkgdWw6Zm9jdXMge1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSksXG4gICAgICAgICAgICAgIDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTQycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwgbGkgdWwgbGkge1xuICAgICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhLnNlc3Npb24ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGVhbUxvZ28ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAke3NwYWNpbmcuc21hbGx9O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMuZ3JleX07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2Vzc2lvbnMge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjYwcHg7XG4gICAgICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L25hdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/components/HeaderNavigation.tsx */")));
}

/***/ })

})
//# sourceMappingURL=index.js.397264f6f4b3017c7fac.hot-update.js.map