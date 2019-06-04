/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/terminal.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/terminal.js":
/*!*********************************!*\
  !*** ./src/scripts/terminal.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n$(document).ready(function () {\n  var animateScrollByID = function animateScrollByID(id) {\n    var target = $(\"\".concat(id));\n\n    var _target$offset = target.offset(),\n        top = _target$offset.top;\n\n    $('body, html').animate({\n      scrollTop: top\n    }, 500);\n  };\n\n  var $links = $('[data-animate-scroll]');\n  $links.on('click', function (e) {\n    e.preventDefault();\n    animateScrollByID(this.hash);\n  });\n  var $modalLinks = $('[data-modal-animate-scroll]');\n  $modalLinks.click(function (e) {\n    var _this = this;\n\n    e.preventDefault();\n    var $modal = $(this).parents('.modal');\n\n    var animate = function animate() {\n      return animateScrollByID(_this.hash);\n    };\n\n    $modal.one('hidden.bs.modal', animate);\n    $modal.modal('hide');\n  });\n\n  var getOffset = function getOffset() {\n    var height = $(window).height();\n    return height * .3 + 80;\n  };\n\n  var resetBodyScrollspy = function resetBodyScrollspy() {\n    $('body').scrollspy('dispose');\n    $('body').scrollspy({\n      offset: getOffset(),\n      target: '.navbar'\n    });\n  };\n\n  resetBodyScrollspy();\n  $(window).resize(resetBodyScrollspy);\n  var formatter = {\n    comma: function comma(num) {\n      return Math.round(num).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, '$1,');\n    },\n    billion: function billion(n) {\n      var adjustNumber = function adjustNumber(str) {\n        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n        if (str.length >= n) return str;\n        return adjustNumber('0' + str, n);\n      };\n\n      var num = function () {\n        var num = Math.round(n).toString();\n        return num.length > 3 ? num : adjustNumber(num, 3);\n      }();\n\n      return num.replace(/(\\d)(?=(\\d{2})+(?!\\d))/g, '$1.');\n    }\n  };\n  $('[data-toggle=\"popover\"]').popover();\n\n  var count = function count(el) {\n    var $el = $(el);\n    var formatterName = $el.data('formatter') || 'comma';\n    var formatterFn = formatter[formatterName];\n    var repeat = $el.data('repeat') || false;\n    $el.countTo({\n      formatter: formatterFn,\n      refreshInterval: 2,\n      onComplete: function onComplete() {\n        var _this2 = this;\n\n        if (!repeat) return;\n        setTimeout(function () {\n          count(_this2);\n          return;\n        }, 1000);\n      }\n    });\n  };\n\n  $('[data-count-number]').each(function (i, e) {\n    return count(e);\n  });\n  var $modalForm = $('#get-for-free-modal').find('form');\n  var $modalNote = $('#get-for-free-modal').find('[data-form-note]');\n  $modalForm.on('submit', function (e) {\n    e.preventDefault();\n    $modalNote.addClass('active');\n  });\n  var $homeForm = $('#home').find('form');\n  var $homeNote = $('#home').find('[data-form-note]');\n  $homeForm.on('submit', function (e) {\n    e.preventDefault();\n    $homeNote.addClass('active');\n  });\n  var COOKIE_POLICY_NAME = 'br-cookie-policy-accepted';\n  var cookies = decodeURIComponent(document.cookie).split(';').map(function (s) {\n    return s.trim();\n  }).reduce(function (acc, c) {\n    var firstEqSignIndex = c.search('=');\n    var name = c.slice(0, firstEqSignIndex);\n    var value = c.slice(firstEqSignIndex + 1, c.length);\n    return _objectSpread({}, acc, _defineProperty({}, name, value));\n  }, {});\n  var cookie = cookies[COOKIE_POLICY_NAME];\n\n  if (!cookie || cookie !== 'true') {\n    var $cookieModal = $('#cookie-policy-modal').modal({\n      backdrop: 'static',\n      keyboard: false,\n      show: false\n    });\n    var $acceptBtn = $cookieModal.find('[data-accept-btn]');\n    $acceptBtn.click(function (ev) {\n      ev.preventDefault();\n      document.cookie = \"\".concat(COOKIE_POLICY_NAME, \"=true\");\n      $cookieModal.modal('hide');\n    });\n    $cookieModal.modal('show');\n  }\n});\n\n//# sourceURL=webpack:///./src/scripts/terminal.js?");

/***/ })

/******/ });