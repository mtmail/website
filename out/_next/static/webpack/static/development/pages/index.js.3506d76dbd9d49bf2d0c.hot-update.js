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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + (openNav === "product" && "open" || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("a", {
    "aria-haspopup": "true",
    onClick: setActiveNav("product"),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + "menu-with-icon",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "Integrations"))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, "Developers"))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "Changelog"))))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Pricing"))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + (openNav === "community" && "open" || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("a", {
    "aria-haspopup": "true",
    onClick: setActiveNav("community"),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + "menu-with-icon",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "mailto:hello@getoutline.com",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, "Contact Us")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://github.com/outline",
    target: "_blank",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, "GitHub")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://github.com/outline/outline/discussions",
    target: "_blank",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, "Discuss")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://twitter.com/outlinewiki",
    target: "_blank",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, "Twitter")))), __jsx("li", {
    key: isSignedIn,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + (openNav === "sessions" && "open" || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, isSignedIn ? __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("a", {
    href: "#login",
    "aria-haspopup": "true",
    onClick: setActiveNav("sessions"),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + "launch menu-with-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }, "Launch App ", __jsx(outline_icons__WEBPACK_IMPORTED_MODULE_5__["ExpandedIcon"], {
    color: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 28
    }
  })), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + "sessions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, Object.keys(sessions).map(function (teamId) {
    var session = sessions[teamId];
    return __jsx("li", {
      key: teamId,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: session.url,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + "session",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: session.logoUrl,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + "teamLogo",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 25
      }
    }), " ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 25
      }
    }, session.name)));
  }))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "//app.getoutline.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350281645", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + "launch menu-with-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, "Log in | Sign up")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1350281645",
    dynamic: [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey],
    __self: this
  }, "nav.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}ul.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0;padding:0;}li.__jsx-style-dynamic-selector{display:block;-webkit-transition-duration:0.5s;transition-duration:0.5s;position:relative;}li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:".concat(theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, " ").concat(theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, ";margin:0 0 0 ").concat(theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, ";color:rgba(0,0,0,0.75);-webkit-text-decoration:none;text-decoration:none;white-space:nowrap;min-height:40px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}li.__jsx-style-dynamic-selector a.menu-with-icon.__jsx-style-dynamic-selector{padding-right:8px;position:relative;z-index:2;}li.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0;overflow:hidden;}li.__jsx-style-dynamic-selector a.launch.__jsx-style-dynamic-selector,li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{background:").concat(theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, ";border-radius:4px;}li.__jsx-style-dynamic-selector a.launch.__jsx-style-dynamic-selector{width:160px;}li.__jsx-style-dynamic-selector:hover{cursor:pointer;}li.open.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector{background:rgba(255,255,255,0.75);}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{visibility:hidden;opacity:0;position:absolute;-webkit-transition:all 0.5s ease;transition:all 0.5s ease;margin-top:0;margin-left:").concat(theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, ";left:0;display:none;background:rgba(255,255,255,0.75);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:4px;min-width:136px;z-index:1;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector ul.sessions.__jsx-style-dynamic-selector{min-width:160px;max-width:260px;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;}ul.__jsx-style-dynamic-selector li.open.__jsx-style-dynamic-selector>ul.__jsx-style-dynamic-selector,ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector:focus-within>ul.__jsx-style-dynamic-selector,ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector:hover,ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector:focus{visibility:visible;opacity:1;display:block;box-shadow:0 0 0 1px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.08),0 2px 4px rgba(0,0,0,0.08);padding-top:42px;margin-top:-42px;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{clear:both;width:100%;}a.session.__jsx-style-dynamic-selector{font-weight:500;}.teamLogo.__jsx-style-dynamic-selector{display:inline-block;margin-right:").concat(theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, ";border:1px solid ").concat(theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, ";border-radius:4px;width:32px;height:32px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9jb21wb25lbnRzL0hlYWRlck5hdmlnYXRpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZIUyxBQUcwQixBQUtBLEFBTUMsQUFNRCxBQWFLLEFBTUwsQUFPMkIsQUFLNUIsQUFJRyxBQUlzQixBQUluQixBQWdCRixBQUtjLEFBUVgsQUFXUixBQUtLLEFBSUssV0FSVixDQXBEYixFQXJDMkIsQ0F5QzNCLENBd0JrQixBQTZCbEIsRUEzRW9CLEFBOEJSLENBNkJBLEVBb0JnQyxDQVI1QyxNQXhDb0IsQ0E2QkosQ0FUaUIsRUFKakMsRUFyQkEsRUF6QlksSUFZUSxHQWtENEMsR0E3RGhFLEFBOEIyQixZQWxCM0IsR0FzQ0EsRUE0QmdELFNBbEc1QixFQVpPLEFBS2hCLEFBWVUsQUFtQlYsU0E5QkMsQUErQk0sT0F4QmxCLEdBTkEsTUErQkEsS0F5QmUsS0FnREssUUEvQ3VCLFVBZ0Q5QixTQWxCTSxFQW1CTCxZQUNkLEdBbkJtQixLQTlCVixPQUNNLEVBaERxRCxHQThFcEUsQ0EvRkEsT0FrRXVDLGtDQUNWLHFCQWpEZSx5Q0FrRHhCLENBakRRLGlCQWtEVixNQWpESyxVQWtEWCxVQUNaLDhCQWxEcUIsbUJBQ0gsZ0JBQ0Usa0JBQ0QscUZBQ25CIiwiZmlsZSI6Ii9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9jb21wb25lbnRzL0hlYWRlck5hdmlnYXRpb24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwidGlueS1jb29raWVcIjtcbmltcG9ydCB7IEV4cGFuZGVkSWNvbiB9IGZyb20gXCJvdXRsaW5lLWljb25zXCI7XG5pbXBvcnQgeyBzcGFjaW5nLCBjb2xvcnMgfSBmcm9tIFwidGhlbWVcIjtcbmltcG9ydCB1c2VPbkNsaWNrT3V0c2lkZSBmcm9tIFwibGliL2hvb2tzL3VzZU9uQ2xpY2tPdXRzaWRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlck5hdmlnYXRpb24oKSB7XG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICBjb25zdCBbb3Blbk5hdiwgc2V0T3Blbk5hdl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICB1c2VPbkNsaWNrT3V0c2lkZShyZWYsICgpID0+IHNldE9wZW5OYXYobnVsbCkpO1xuXG4gIGxldCBzZXNzaW9ucyA9IHt9O1xuXG4gIGNvbnN0IHNldEFjdGl2ZU5hdiA9IChuYW1lKSA9PiAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldE9wZW5OYXYobmFtZSk7XG4gIH07XG5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHNlc3Npb25zID0gSlNPTi5wYXJzZShnZXRDb29raWUoXCJzZXNzaW9uc1wiKSB8fCBcInt9XCIpO1xuICB9XG5cbiAgY29uc3QgaXNTaWduZWRJbiA9IE9iamVjdC5rZXlzKHNlc3Npb25zKS5sZW5ndGg7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IHJvbGU9XCJuYXZpZ2F0aW9uXCIgcmVmPXtyZWZ9PlxuICAgICAgPHVsPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtvcGVuTmF2ID09PSBcInByb2R1Y3RcIiAmJiBcIm9wZW5cIn0+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtd2l0aC1pY29uXCJcbiAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3NldEFjdGl2ZU5hdihcInByb2R1Y3RcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUHJvZHVjdCA8RXhwYW5kZWRJY29uIGNvbG9yPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2ludGVncmF0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxhPkludGVncmF0aW9uczwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kZXZlbG9wZXJzXCI+XG4gICAgICAgICAgICAgICAgPGE+RGV2ZWxvcGVyczwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jaGFuZ2Vsb2dcIj5cbiAgICAgICAgICAgICAgICA8YT5DaGFuZ2Vsb2c8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJpY2luZ1wiPlxuICAgICAgICAgICAgPGE+UHJpY2luZzwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e29wZW5OYXYgPT09IFwiY29tbXVuaXR5XCIgJiYgXCJvcGVuXCJ9PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LXdpdGgtaWNvblwiXG4gICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtzZXRBY3RpdmVOYXYoXCJjb21tdW5pdHlcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ29tbXVuaXR5IDxFeHBhbmRlZEljb24gY29sb3I9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86aGVsbG9AZ2V0b3V0bGluZS5jb21cIj5Db250YWN0IFVzPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9vdXRsaW5lXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgR2l0SHViXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9vdXRsaW5lL291dGxpbmUvZGlzY3Vzc2lvbnNcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBEaXNjdXNzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL291dGxpbmV3aWtpXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgVHdpdHRlclxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e29wZW5OYXYgPT09IFwic2Vzc2lvbnNcIiAmJiBcIm9wZW5cIn0ga2V5PXtpc1NpZ25lZElufT5cbiAgICAgICAgICB7aXNTaWduZWRJbiA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNsb2dpblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGF1bmNoIG1lbnUtd2l0aC1pY29uXCJcbiAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17c2V0QWN0aXZlTmF2KFwic2Vzc2lvbnNcIil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMYXVuY2ggQXBwIDxFeHBhbmRlZEljb24gY29sb3I9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzZXNzaW9uc1wiPlxuICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhzZXNzaW9ucykubWFwKCh0ZWFtSWQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNlc3Npb24gPSBzZXNzaW9uc1t0ZWFtSWRdO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dGVhbUlkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtzZXNzaW9uLnVybH0gY2xhc3NOYW1lPVwic2Vzc2lvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0ZWFtTG9nb1wiIHNyYz17c2Vzc2lvbi5sb2dvVXJsfSAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzZXNzaW9uLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiLy9hcHAuZ2V0b3V0bGluZS5jb21cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXVuY2ggbWVudS13aXRoLWljb25cIj5Mb2cgaW4gfCBTaWduIHVwPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaSBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogJHtzcGFjaW5nLnNtYWxsfSAke3NwYWNpbmcubWVkaXVtfTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgJHtzcGFjaW5nLm1lZGl1bX07XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGkgYS5tZW51LXdpdGgtaWNvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpIHVsIGxpIGEge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGkgYS5sYXVuY2gsXG4gICAgICAgICAgbGkgYTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5ncmV5fTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaSBhLmxhdW5jaCB7XG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGk6aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpLm9wZW4gPiBhIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwgbGkgdWwge1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6ICR7c3BhY2luZy5tZWRpdW19O1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMzZweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwgbGkgdWwuc2Vzc2lvbnMge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjYwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwgbGkgdWwgYTpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwgbGkub3BlbiA+IHVsLFxuICAgICAgICAgIHVsIGxpOmZvY3VzLXdpdGhpbiA+IHVsLFxuICAgICAgICAgIHVsIGxpIHVsOmhvdmVyLFxuICAgICAgICAgIHVsIGxpIHVsOmZvY3VzIHtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpLFxuICAgICAgICAgICAgICAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNDJweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC00MnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIGxpIHVsIGxpIHtcbiAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYS5zZXNzaW9uIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRlYW1Mb2dvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogJHtzcGFjaW5nLnNtYWxsfTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLmdyZXl9O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L25hdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/components/HeaderNavigation.tsx */")));
}

/***/ })

})
//# sourceMappingURL=index.js.3506d76dbd9d49bf2d0c.hot-update.js.map