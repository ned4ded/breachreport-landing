/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/scripts/terminal.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/api/get-user-account-data-by-email.js":
/*!***********************************************************!*\
  !*** ./src/scripts/api/get-user-account-data-by-email.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./src/scripts/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./src/scripts/utils/index.js\");\n\n\n\n\nvar SEND_RESULT_API_URL = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"resolvePath\"])(_constants__WEBPACK_IMPORTED_MODULE_2__[\"API_URL_ROOT\"], '/send-results/');\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/(function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(emailAddress) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (emailAddress) {\n              _context.next = 2;\n              break;\n            }\n\n            throw new Error('SendResultApi: Email must be specified');\n\n          case 2:\n            return _context.abrupt(\"return\", Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"createAjaxPromise\"])(SEND_RESULT_API_URL, 'POST', {\n              emailAddress: emailAddress\n            }));\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n})());\n\n//# sourceURL=webpack:///./src/scripts/api/get-user-account-data-by-email.js?");

/***/ }),

/***/ "./src/scripts/api/index.js":
/*!**********************************!*\
  !*** ./src/scripts/api/index.js ***!
  \**********************************/
/*! exports provided: getUserAccountDataByEmail, sendVerificationByUserEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _get_user_account_data_by_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-user-account-data-by-email */ \"./src/scripts/api/get-user-account-data-by-email.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getUserAccountDataByEmail\", function() { return _get_user_account_data_by_email__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _send_verification_by_user_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send-verification-by-user-email */ \"./src/scripts/api/send-verification-by-user-email.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sendVerificationByUserEmail\", function() { return _send_verification_by_user_email__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/scripts/api/index.js?");

/***/ }),

/***/ "./src/scripts/api/send-verification-by-user-email.js":
/*!************************************************************!*\
  !*** ./src/scripts/api/send-verification-by-user-email.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./src/scripts/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./src/scripts/utils/index.js\");\n\n\n\n\nvar SEND_VERIFY_API_URL = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"resolvePath\"])(_constants__WEBPACK_IMPORTED_MODULE_2__[\"API_URL_ROOT\"], '/verify-email/');\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/(function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(emailAddress) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (emailAddress) {\n              _context.next = 2;\n              break;\n            }\n\n            throw new Error('SendVerifyEmailApi: Email must be specified');\n\n          case 2:\n            return _context.abrupt(\"return\", Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"createAjaxPromise\"])(SEND_VERIFY_API_URL, 'POST', {\n              emailAddress: emailAddress\n            }));\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n})());\n\n//# sourceURL=webpack:///./src/scripts/api/send-verification-by-user-email.js?");

/***/ }),

/***/ "./src/scripts/constants.js":
/*!**********************************!*\
  !*** ./src/scripts/constants.js ***!
  \**********************************/
/*! exports provided: API_URL_ROOT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL_ROOT\", function() { return API_URL_ROOT; });\nvar API_URL_ROOT = '/portal/api/v1/'; // const API_URL_ROOT = 'https://breachreport.com/portal/api/v1/'\n\n\n\n//# sourceURL=webpack:///./src/scripts/constants.js?");

/***/ }),

/***/ "./src/scripts/handle-verification-form.js":
/*!*************************************************!*\
  !*** ./src/scripts/handle-verification-form.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toArray */ \"./node_modules/@babel/runtime/helpers/toArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _models_user_account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/user-account */ \"./src/scripts/models/user-account.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api */ \"./src/scripts/api/index.js\");\n\n\n\n\n\n\n\nvar Selectors = {\n  VERIFICATION_FORM: '[data-form-verify=\"form\"]',\n  VERIFICATION_FORM_CONTAINER: '[data-form-verify=\"container\"]',\n  VERIFICATION_FORM_NOTES: '[data-form-verify=\"notes\"]',\n  ERROR_TEMPLATE: '[data-form-verify-t=\"error\"]',\n  NO_BREACHES_TEMPLATE: '[data-form-verify-t=\"no-breaches\"]',\n  HAS_BREACHES_TEMPLATE: '[data-form-verify-t=\"has-breaches\"]',\n  UNREGISTERED_USER_BTN_FAIL: '[data-form-verify-t=\"btn-fail\"]',\n  UNREGISTERED_USER_BTN_SUCCESS: '[data-form-verify-t=\"btn-success\"]',\n  UNREGISTERED_USER_TEMPLATE_FAIL: '[data-form-verify-t=\"unreg-fail\"]',\n  UNREGISTERED_USER_TEMPLATE_SUCCESS: '[data-form-verify-t=\"unreg-success\"]',\n  UNREGISTERED_USER_TEMPLATE_MSG: '[data-form-verify-t=\"unreg-msg\"]',\n  UNVERIFIED_USER_TEMPLATE: '[data-form-verify-t=\"unver\"]',\n  VERIFIED_USER_TEMPLATE: '[data-form-verify-t=\"ver\"]',\n  BREACHES_ANCHOR: '[data-form-verify-breaches]',\n  VERIFICATION_FORM_BTN: '[data-form-verify-btn]'\n};\n\nvar changeNotes = function changeNotes(notes) {\n  return function (content) {\n    var $notes = $(notes);\n    var $jumbo = $notes.parents('#jumbotron-verify');\n\n    var _$notes$get = $notes.get(),\n        _$notes$get2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_$notes$get, 1),\n        n = _$notes$get2[0];\n\n    if ($jumbo.length) {\n      $('body, html').animate({\n        scrollTop: $jumbo.offset().top - 210\n      }, 500);\n    }\n\n    $notes.fadeOut(500, function () {\n      n.innerHTML = '';\n      $notes.append(content);\n      $notes.fadeIn(500);\n    });\n  };\n};\n\nvar formContentFromTemplates = function formContentFromTemplates(templates) {\n  return function (seq) {\n    var req = function req(cur, arr) {\n      if (!cur.length) return arr;\n\n      var _cur = _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_3___default()(cur),\n          first = _cur[0],\n          rest = _cur.slice(1);\n\n      var name = first.name,\n          cb = first.cb;\n      var $template = $(templates[name]).clone();\n      if (cb) cb($template);\n      return req(rest, [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(arr), [$template]));\n    };\n\n    return req(seq, []);\n  };\n};\n\nvar formatBreachInfoElement = function formatBreachInfoElement(cnt) {\n  return function (e) {\n    var conditions = [{\n      name: 'breach',\n      condition: cnt === 1\n    }, {\n      name: 'breaches',\n      condition: cnt > 1\n    }];\n\n    var _conditions$find = conditions.find(function (_ref) {\n      var condition = _ref.condition;\n      return condition;\n    }),\n        noun = _conditions$find.name;\n\n    var str = \"\".concat(cnt, \" \").concat(noun);\n    var $e = $(e).find(Selectors.BREACHES_ANCHOR).text(str);\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n/*#__PURE__*/\n_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {\n  var templates, formContent, $container, email;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n    while (1) {\n      switch (_context5.prev = _context5.next) {\n        case 0:\n          templates = {\n            error: $(Selectors.ERROR_TEMPLATE).prop('content'),\n            hasBreaches: $(Selectors.HAS_BREACHES_TEMPLATE).prop('content'),\n            noBreaches: $(Selectors.NO_BREACHES_TEMPLATE).prop('content'),\n            unregFail: $(Selectors.UNREGISTERED_USER_TEMPLATE_FAIL).prop('content'),\n            unregSuccess: $(Selectors.UNREGISTERED_USER_TEMPLATE_SUCCESS).prop('content'),\n            unregMsg: $(Selectors.UNREGISTERED_USER_TEMPLATE_MSG).prop('content'),\n            btnSuccess: $(Selectors.UNREGISTERED_USER_BTN_SUCCESS).prop('content'),\n            btnFail: $(Selectors.UNREGISTERED_USER_BTN_FAIL).prop('content'),\n            unver: $(Selectors.UNVERIFIED_USER_TEMPLATE).prop('content'),\n            ver: $(Selectors.VERIFIED_USER_TEMPLATE).prop('content')\n          };\n          formContent = formContentFromTemplates(templates);\n          $container = $(Selectors.VERIFICATION_FORM_CONTAINER);\n          email = $('#email-get').get(0);\n          $container.each(\n          /*#__PURE__*/\n          function () {\n            var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n            /*#__PURE__*/\n            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(i, e) {\n              var $form, $notes, changeCurrentNotes, showErrorNote, renderNotes, _ref8, err, user;\n\n              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n                while (1) {\n                  switch (_context4.prev = _context4.next) {\n                    case 0:\n                      $form = $(e).find(Selectors.VERIFICATION_FORM);\n                      $notes = $(e).find(Selectors.VERIFICATION_FORM_NOTES);\n                      changeCurrentNotes = changeNotes($notes);\n\n                      showErrorNote = function showErrorNote() {\n                        var content = formContent([{\n                          name: 'error'\n                        }]);\n                        changeCurrentNotes(content);\n                        return;\n                      };\n\n                      renderNotes =\n                      /*#__PURE__*/\n                      function () {\n                        var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n                        /*#__PURE__*/\n                        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(err, user) {\n                          var breachesInfo, setEventHandler, content, _ref7, status, _content, _content2;\n\n                          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n                            while (1) {\n                              switch (_context2.prev = _context2.next) {\n                                case 0:\n                                  if (!err) {\n                                    _context2.next = 3;\n                                    break;\n                                  }\n\n                                  showErrorNote();\n                                  return _context2.abrupt(\"return\");\n\n                                case 3:\n                                  breachesInfo = user.breaches ? {\n                                    name: 'hasBreaches',\n                                    cb: formatBreachInfoElement(user.breaches)\n                                  } : {\n                                    name: 'noBreaches'\n                                  };\n\n                                  if (!user.is(_models_user_account__WEBPACK_IMPORTED_MODULE_5__[\"Types\"].UNREGISTERED)) {\n                                    _context2.next = 9;\n                                    break;\n                                  }\n\n                                  setEventHandler = function setEventHandler($parent) {\n                                    return $parent.find(Selectors.VERIFICATION_FORM_BTN).click(\n                                    /*#__PURE__*/\n                                    function () {\n                                      var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n                                      /*#__PURE__*/\n                                      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n                                        var _ref6, status, content;\n\n                                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                                          while (1) {\n                                            switch (_context.prev = _context.next) {\n                                              case 0:\n                                                e.preventDefault();\n                                                _context.next = 3;\n                                                return Object(_api__WEBPACK_IMPORTED_MODULE_6__[\"sendVerificationByUserEmail\"])(user.email);\n\n                                              case 3:\n                                                _ref6 = _context.sent;\n                                                status = _ref6.status;\n\n                                                if (!(status !== 'success')) {\n                                                  _context.next = 8;\n                                                  break;\n                                                }\n\n                                                showErrorNote();\n                                                return _context.abrupt(\"return\");\n\n                                              case 8:\n                                                content = formContent([{\n                                                  name: 'unregMsg'\n                                                }]);\n                                                changeCurrentNotes(content);\n\n                                              case 10:\n                                              case \"end\":\n                                                return _context.stop();\n                                            }\n                                          }\n                                        }, _callee);\n                                      }));\n\n                                      return function (_x5) {\n                                        return _ref5.apply(this, arguments);\n                                      };\n                                    }());\n                                  };\n\n                                  content = formContent([breachesInfo, {\n                                    name: user.breaches ? 'btnFail' : 'btnSuccess',\n                                    cb: setEventHandler\n                                  }, {\n                                    name: user.breaches ? 'unregFail' : 'unregSuccess'\n                                  }]);\n                                  changeCurrentNotes(content);\n                                  return _context2.abrupt(\"return\");\n\n                                case 9:\n                                  if (!user.is(_models_user_account__WEBPACK_IMPORTED_MODULE_5__[\"Types\"].UNVERIFIED)) {\n                                    _context2.next = 20;\n                                    break;\n                                  }\n\n                                  _context2.next = 12;\n                                  return Object(_api__WEBPACK_IMPORTED_MODULE_6__[\"sendVerificationByUserEmail\"])(user.email);\n\n                                case 12:\n                                  _ref7 = _context2.sent;\n                                  status = _ref7.status;\n\n                                  if (!(status !== 'success')) {\n                                    _context2.next = 17;\n                                    break;\n                                  }\n\n                                  showErrorNote();\n                                  return _context2.abrupt(\"return\");\n\n                                case 17:\n                                  _content = formContent([breachesInfo, {\n                                    name: 'unver'\n                                  }]);\n                                  changeCurrentNotes(_content);\n                                  return _context2.abrupt(\"return\");\n\n                                case 20:\n                                  if (!user.is(_models_user_account__WEBPACK_IMPORTED_MODULE_5__[\"Types\"].VERIFIED)) {\n                                    _context2.next = 24;\n                                    break;\n                                  }\n\n                                  _content2 = formContent([breachesInfo, {\n                                    name: 'ver'\n                                  }]);\n                                  changeCurrentNotes(_content2);\n                                  return _context2.abrupt(\"return\");\n\n                                case 24:\n                                case \"end\":\n                                  return _context2.stop();\n                              }\n                            }\n                          }, _callee2);\n                        }));\n\n                        return function renderNotes(_x3, _x4) {\n                          return _ref4.apply(this, arguments);\n                        };\n                      }();\n\n                      if (!($form.parents('#jumbotron-verify').length && email.dataset.email !== 'false')) {\n                        _context4.next = 13;\n                        break;\n                      }\n\n                      _context4.next = 8;\n                      return _models_user_account__WEBPACK_IMPORTED_MODULE_5__[\"UserAccountModel\"].get(email.dataset.email);\n\n                    case 8:\n                      _ref8 = _context4.sent;\n                      err = _ref8.err;\n                      user = _ref8.data;\n                      $form.find('input[name=\"search\"]').val(email.dataset.email);\n                      renderNotes(err, user);\n\n                    case 13:\n                      $form.submit(\n                      /*#__PURE__*/\n                      function () {\n                        var _ref9 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n                        /*#__PURE__*/\n                        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(e) {\n                          var _$$serializeArray$fin, email, _ref11, err, user;\n\n                          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n                            while (1) {\n                              switch (_context3.prev = _context3.next) {\n                                case 0:\n                                  e.preventDefault();\n                                  _$$serializeArray$fin = $(this).serializeArray().find(function (_ref10) {\n                                    var name = _ref10.name;\n                                    return name == 'search';\n                                  }), email = _$$serializeArray$fin.value;\n                                  _context3.next = 4;\n                                  return _models_user_account__WEBPACK_IMPORTED_MODULE_5__[\"UserAccountModel\"].get(email);\n\n                                case 4:\n                                  _ref11 = _context3.sent;\n                                  err = _ref11.err;\n                                  user = _ref11.data;\n                                  renderNotes(err, user);\n\n                                case 8:\n                                case \"end\":\n                                  return _context3.stop();\n                              }\n                            }\n                          }, _callee3, this);\n                        }));\n\n                        return function (_x6) {\n                          return _ref9.apply(this, arguments);\n                        };\n                      }());\n\n                    case 14:\n                    case \"end\":\n                      return _context4.stop();\n                  }\n                }\n              }, _callee4);\n            }));\n\n            return function (_x, _x2) {\n              return _ref3.apply(this, arguments);\n            };\n          }());\n\n        case 5:\n        case \"end\":\n          return _context5.stop();\n      }\n    }\n  }, _callee5);\n})));\n\n//# sourceURL=webpack:///./src/scripts/handle-verification-form.js?");

/***/ }),

/***/ "./src/scripts/models/helpers/determine-user-account-type.js":
/*!*******************************************************************!*\
  !*** ./src/scripts/models/helpers/determine-user-account-type.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user-account */ \"./src/scripts/models/user-account.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (created, confirmed) {\n  var conditions = [{\n    name: _user_account__WEBPACK_IMPORTED_MODULE_0__[\"Types\"].UNREGISTERED,\n    value: !created\n  }, {\n    name: _user_account__WEBPACK_IMPORTED_MODULE_0__[\"Types\"].UNVERIFIED,\n    value: !confirmed\n  }, {\n    name: _user_account__WEBPACK_IMPORTED_MODULE_0__[\"Types\"].VERIFIED,\n    value: true\n  }];\n\n  var _conditions$find = conditions.find(function (_ref) {\n    var name = _ref.name,\n        value = _ref.value;\n    return value;\n  }),\n      name = _conditions$find.name;\n\n  return name;\n});\n\n//# sourceURL=webpack:///./src/scripts/models/helpers/determine-user-account-type.js?");

/***/ }),

/***/ "./src/scripts/models/helpers/index.js":
/*!*********************************************!*\
  !*** ./src/scripts/models/helpers/index.js ***!
  \*********************************************/
/*! exports provided: determineUserAccountTypeHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _determine_user_account_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./determine-user-account-type */ \"./src/scripts/models/helpers/determine-user-account-type.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"determineUserAccountTypeHelper\", function() { return _determine_user_account_type__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/scripts/models/helpers/index.js?");

/***/ }),

/***/ "./src/scripts/models/user-account.js":
/*!********************************************!*\
  !*** ./src/scripts/models/user-account.js ***!
  \********************************************/
/*! exports provided: Types, UserAccountModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Types\", function() { return Types; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserAccountModel\", function() { return UserAccountModel; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api */ \"./src/scripts/api/index.js\");\n/* harmony import */ var _utils_create_ajax_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/create-ajax-promise */ \"./src/scripts/utils/create-ajax-promise.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers */ \"./src/scripts/models/helpers/index.js\");\n\n\n\n\n\n\n\nvar Types = {\n  UNREGISTERED: 'unregistered',\n  UNVERIFIED: 'unverified',\n  VERIFIED: 'verified'\n};\nvar UserAccountModel =\n/*#__PURE__*/\nfunction () {\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(UserAccountModel, null, [{\n    key: \"get\",\n\n    /**\n     *Creates an instance of UserAccount.\n     * @param {String} email\n     * @param {Boolean} created\n     * @param {Boolean} confirmed\n     * @param {Number} breaches\n     * @memberof UserAccountModel\n     */\n    value: function () {\n      var _get = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(email) {\n        var _ref, status, response, breaches, confirmed, created;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return Object(_api__WEBPACK_IMPORTED_MODULE_4__[\"getUserAccountDataByEmail\"])(email);\n\n              case 2:\n                _ref = _context.sent;\n                status = _ref.status;\n                response = _ref.response;\n\n                if (!(status === _utils_create_ajax_promise__WEBPACK_IMPORTED_MODULE_5__[\"Types\"].ERROR)) {\n                  _context.next = 7;\n                  break;\n                }\n\n                return _context.abrupt(\"return\", {\n                  err: true,\n                  response: response\n                });\n\n              case 7:\n                breaches = response.results, confirmed = response.isConfirmedAccount, created = response.isCreatedAccount;\n                return _context.abrupt(\"return\", {\n                  data: new UserAccountModel(email, created, confirmed, breaches)\n                });\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function get(_x) {\n        return _get.apply(this, arguments);\n      }\n\n      return get;\n    }()\n  }]);\n\n  function UserAccountModel(email, created, confirmed, breaches) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, UserAccountModel);\n\n    this._email = email;\n    this._breaches = breaches;\n    Object.defineProperty(this, Object(_helpers__WEBPACK_IMPORTED_MODULE_6__[\"determineUserAccountTypeHelper\"])(created, confirmed), {\n      get: function get() {\n        return true;\n      }\n    });\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(UserAccountModel, [{\n    key: \"is\",\n    value: function is(name) {\n      return !!this[name];\n    }\n  }, {\n    key: \"breaches\",\n    get: function get() {\n      return this._breaches;\n    }\n  }, {\n    key: \"email\",\n    get: function get() {\n      return this._email;\n    }\n  }]);\n\n  return UserAccountModel;\n}();\n\n//# sourceURL=webpack:///./src/scripts/models/user-account.js?");

/***/ }),

/***/ "./src/scripts/terminal.js":
/*!*********************************!*\
  !*** ./src/scripts/terminal.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _handle_verification_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handle-verification-form */ \"./src/scripts/handle-verification-form.js\");\n\n\n\n$(document).ready(function () {\n  var animateScrollByID = function animateScrollByID(id) {\n    var target = $(\"\".concat(id));\n\n    var _target$offset = target.offset(),\n        top = _target$offset.top;\n\n    $('body, html').animate({\n      scrollTop: top\n    }, 500);\n  };\n\n  var $links = $('[data-animate-scroll]');\n  $links.on('click', function (e) {\n    e.preventDefault();\n    animateScrollByID(this.hash);\n  });\n  var $modalLinks = $('[data-modal-animate-scroll]');\n  $modalLinks.click(function (e) {\n    var _this = this;\n\n    e.preventDefault();\n    var $modal = $(this).parents('.modal');\n\n    var animate = function animate() {\n      return animateScrollByID(_this.hash);\n    };\n\n    $modal.one('hidden.bs.modal', animate);\n    $modal.modal('hide');\n  });\n\n  var getOffset = function getOffset() {\n    var height = $(window).height();\n    return height * .3 + 80;\n  };\n\n  var resetBodyScrollspy = function resetBodyScrollspy() {\n    $('body').scrollspy('dispose');\n    $('body').scrollspy({\n      offset: getOffset(),\n      target: '.navbar'\n    });\n  };\n\n  resetBodyScrollspy();\n  $(window).resize(resetBodyScrollspy);\n  var formatter = {\n    comma: function comma(num) {\n      return Math.round(num).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, '$1,');\n    },\n    billion: function billion(n) {\n      var adjustNumber = function adjustNumber(str) {\n        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n        if (str.length >= n) return str;\n        return adjustNumber('0' + str, n);\n      };\n\n      var num = function () {\n        var num = Math.round(n).toString();\n        return num.length > 3 ? num : adjustNumber(num, 3);\n      }();\n\n      return num.replace(/(\\d)(?=(\\d{2})+(?!\\d))/g, '$1.');\n    }\n  };\n  $('[data-toggle=\"popover\"]').popover();\n\n  var count = function count(el) {\n    var $el = $(el);\n    var formatterName = $el.data('formatter') || 'comma';\n    var formatterFn = formatter[formatterName];\n    var repeat = $el.data('repeat') || false;\n    $el.countTo({\n      formatter: formatterFn,\n      refreshInterval: 2,\n      onComplete: function onComplete() {\n        var _this2 = this;\n\n        if (!repeat) return;\n        setTimeout(function () {\n          count(_this2);\n          return;\n        }, 1000);\n      }\n    });\n  };\n\n  $('[data-count-number]').each(function (i, e) {\n    return count(e);\n  });\n  Object(_handle_verification_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  var COOKIE_POLICY_NAME = 'br-cookie-policy-accepted';\n  var cookies = decodeURIComponent(document.cookie).split(';').map(function (s) {\n    return s.trim();\n  }).reduce(function (acc, c) {\n    var firstEqSignIndex = c.search('=');\n    var name = c.slice(0, firstEqSignIndex);\n    var value = c.slice(firstEqSignIndex + 1, c.length);\n    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, acc, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, value));\n  }, {});\n  var cookie = cookies[COOKIE_POLICY_NAME];\n\n  if (!cookie || cookie !== 'true') {\n    var $toast = $('#cookie-policy-toast').toast({\n      autohide: false,\n      delay: 0\n    });\n    var $acceptBtn = $toast.find('[data-accept-btn]');\n    $acceptBtn.click(function (ev) {\n      ev.preventDefault();\n      document.cookie = \"\".concat(COOKIE_POLICY_NAME, \"=true\");\n      $toast.toast('hide');\n    });\n    $toast.toast('show');\n  }\n\n  var $subscribeForm = $('#subscription').find('form');\n  var $subscribeAfter = $('#subscription').find('[data-after-subscription=\"success\"]');\n  var $subscribeAfterError = $('#subscription').find('[data-after-subscription=\"error\"]');\n  $subscribeForm.submit(function (e) {\n    e.preventDefault();\n\n    var _$$serializeArray$fin = $(this).serializeArray().find(function (_ref) {\n      var name = _ref.name;\n      return name == 'EMAIL';\n    }),\n        email = _$$serializeArray$fin.value;\n\n    $subscribeForm.fadeOut(1000, function () {\n      $.ajax('/portal/api/v1/newsletter-subscribe', {\n        data: {\n          email: email\n        },\n        type: 'POST'\n      }).done(function () {\n        $subscribeAfter.fadeIn(1000);\n      }).fail(function (res) {\n        $subscribeAfterError.fadeIn(1000);\n      });\n    });\n  });\n  $('.modal').find('[data-toggle-modal=\"modal\"]').click(function (e) {\n    e.preventDefault();\n    var target = $(this).data('target');\n    var $parent = $(this).parents('.modal');\n    $parent.on('hidden.bs.modal', function () {\n      return $(target).modal('show');\n    });\n    $parent.modal('hide');\n  });\n});\n\n//# sourceURL=webpack:///./src/scripts/terminal.js?");

/***/ }),

/***/ "./src/scripts/utils/create-ajax-promise.js":
/*!**************************************************!*\
  !*** ./src/scripts/utils/create-ajax-promise.js ***!
  \**************************************************/
/*! exports provided: Types, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Types\", function() { return Types; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar wrap = function wrap(status, response) {\n  return {\n    status: status,\n    response: response\n  };\n};\n\nvar Types = {\n  SUCCESS: 'success',\n  ERROR: 'error'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (url) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';\n  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  return new Promise(\n  /*#__PURE__*/\n  function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(exec) {\n      var _ref2, status, response;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return $.ajax(url, {\n                data: data,\n                type: type\n              }).then(function (r) {\n                return wrap(Types.SUCCESS, r);\n              }, function (r) {\n                return wrap(Types.ERROR, r);\n              });\n\n            case 2:\n              _ref2 = _context.sent;\n              status = _ref2.status;\n              response = _ref2.response;\n              exec({\n                status: status,\n                response: response\n              });\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }());\n});\n\n//# sourceURL=webpack:///./src/scripts/utils/create-ajax-promise.js?");

/***/ }),

/***/ "./src/scripts/utils/index.js":
/*!************************************!*\
  !*** ./src/scripts/utils/index.js ***!
  \************************************/
/*! exports provided: resolvePath, createAjaxPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _resolve_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolve-path */ \"./src/scripts/utils/resolve-path.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"resolvePath\", function() { return _resolve_path__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _create_ajax_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-ajax-promise */ \"./src/scripts/utils/create-ajax-promise.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createAjaxPromise\", function() { return _create_ajax_promise__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/scripts/utils/index.js?");

/***/ }),

/***/ "./src/scripts/utils/resolve-path.js":
/*!*******************************************!*\
  !*** ./src/scripts/utils/resolve-path.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"./node_modules/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return path__WEBPACK_IMPORTED_MODULE_0__[\"join\"].apply(void 0, arguments);\n});\n\n//# sourceURL=webpack:///./src/scripts/utils/resolve-path.js?");

/***/ })

/******/ });