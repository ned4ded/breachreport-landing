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

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./af\": \"./node_modules/moment/locale/af.js\",\n\t\"./af.js\": \"./node_modules/moment/locale/af.js\",\n\t\"./ar\": \"./node_modules/moment/locale/ar.js\",\n\t\"./ar-dz\": \"./node_modules/moment/locale/ar-dz.js\",\n\t\"./ar-dz.js\": \"./node_modules/moment/locale/ar-dz.js\",\n\t\"./ar-kw\": \"./node_modules/moment/locale/ar-kw.js\",\n\t\"./ar-kw.js\": \"./node_modules/moment/locale/ar-kw.js\",\n\t\"./ar-ly\": \"./node_modules/moment/locale/ar-ly.js\",\n\t\"./ar-ly.js\": \"./node_modules/moment/locale/ar-ly.js\",\n\t\"./ar-ma\": \"./node_modules/moment/locale/ar-ma.js\",\n\t\"./ar-ma.js\": \"./node_modules/moment/locale/ar-ma.js\",\n\t\"./ar-sa\": \"./node_modules/moment/locale/ar-sa.js\",\n\t\"./ar-sa.js\": \"./node_modules/moment/locale/ar-sa.js\",\n\t\"./ar-tn\": \"./node_modules/moment/locale/ar-tn.js\",\n\t\"./ar-tn.js\": \"./node_modules/moment/locale/ar-tn.js\",\n\t\"./ar.js\": \"./node_modules/moment/locale/ar.js\",\n\t\"./az\": \"./node_modules/moment/locale/az.js\",\n\t\"./az.js\": \"./node_modules/moment/locale/az.js\",\n\t\"./be\": \"./node_modules/moment/locale/be.js\",\n\t\"./be.js\": \"./node_modules/moment/locale/be.js\",\n\t\"./bg\": \"./node_modules/moment/locale/bg.js\",\n\t\"./bg.js\": \"./node_modules/moment/locale/bg.js\",\n\t\"./bm\": \"./node_modules/moment/locale/bm.js\",\n\t\"./bm.js\": \"./node_modules/moment/locale/bm.js\",\n\t\"./bn\": \"./node_modules/moment/locale/bn.js\",\n\t\"./bn.js\": \"./node_modules/moment/locale/bn.js\",\n\t\"./bo\": \"./node_modules/moment/locale/bo.js\",\n\t\"./bo.js\": \"./node_modules/moment/locale/bo.js\",\n\t\"./br\": \"./node_modules/moment/locale/br.js\",\n\t\"./br.js\": \"./node_modules/moment/locale/br.js\",\n\t\"./bs\": \"./node_modules/moment/locale/bs.js\",\n\t\"./bs.js\": \"./node_modules/moment/locale/bs.js\",\n\t\"./ca\": \"./node_modules/moment/locale/ca.js\",\n\t\"./ca.js\": \"./node_modules/moment/locale/ca.js\",\n\t\"./cs\": \"./node_modules/moment/locale/cs.js\",\n\t\"./cs.js\": \"./node_modules/moment/locale/cs.js\",\n\t\"./cv\": \"./node_modules/moment/locale/cv.js\",\n\t\"./cv.js\": \"./node_modules/moment/locale/cv.js\",\n\t\"./cy\": \"./node_modules/moment/locale/cy.js\",\n\t\"./cy.js\": \"./node_modules/moment/locale/cy.js\",\n\t\"./da\": \"./node_modules/moment/locale/da.js\",\n\t\"./da.js\": \"./node_modules/moment/locale/da.js\",\n\t\"./de\": \"./node_modules/moment/locale/de.js\",\n\t\"./de-at\": \"./node_modules/moment/locale/de-at.js\",\n\t\"./de-at.js\": \"./node_modules/moment/locale/de-at.js\",\n\t\"./de-ch\": \"./node_modules/moment/locale/de-ch.js\",\n\t\"./de-ch.js\": \"./node_modules/moment/locale/de-ch.js\",\n\t\"./de.js\": \"./node_modules/moment/locale/de.js\",\n\t\"./dv\": \"./node_modules/moment/locale/dv.js\",\n\t\"./dv.js\": \"./node_modules/moment/locale/dv.js\",\n\t\"./el\": \"./node_modules/moment/locale/el.js\",\n\t\"./el.js\": \"./node_modules/moment/locale/el.js\",\n\t\"./en-SG\": \"./node_modules/moment/locale/en-SG.js\",\n\t\"./en-SG.js\": \"./node_modules/moment/locale/en-SG.js\",\n\t\"./en-au\": \"./node_modules/moment/locale/en-au.js\",\n\t\"./en-au.js\": \"./node_modules/moment/locale/en-au.js\",\n\t\"./en-ca\": \"./node_modules/moment/locale/en-ca.js\",\n\t\"./en-ca.js\": \"./node_modules/moment/locale/en-ca.js\",\n\t\"./en-gb\": \"./node_modules/moment/locale/en-gb.js\",\n\t\"./en-gb.js\": \"./node_modules/moment/locale/en-gb.js\",\n\t\"./en-ie\": \"./node_modules/moment/locale/en-ie.js\",\n\t\"./en-ie.js\": \"./node_modules/moment/locale/en-ie.js\",\n\t\"./en-il\": \"./node_modules/moment/locale/en-il.js\",\n\t\"./en-il.js\": \"./node_modules/moment/locale/en-il.js\",\n\t\"./en-nz\": \"./node_modules/moment/locale/en-nz.js\",\n\t\"./en-nz.js\": \"./node_modules/moment/locale/en-nz.js\",\n\t\"./eo\": \"./node_modules/moment/locale/eo.js\",\n\t\"./eo.js\": \"./node_modules/moment/locale/eo.js\",\n\t\"./es\": \"./node_modules/moment/locale/es.js\",\n\t\"./es-do\": \"./node_modules/moment/locale/es-do.js\",\n\t\"./es-do.js\": \"./node_modules/moment/locale/es-do.js\",\n\t\"./es-us\": \"./node_modules/moment/locale/es-us.js\",\n\t\"./es-us.js\": \"./node_modules/moment/locale/es-us.js\",\n\t\"./es.js\": \"./node_modules/moment/locale/es.js\",\n\t\"./et\": \"./node_modules/moment/locale/et.js\",\n\t\"./et.js\": \"./node_modules/moment/locale/et.js\",\n\t\"./eu\": \"./node_modules/moment/locale/eu.js\",\n\t\"./eu.js\": \"./node_modules/moment/locale/eu.js\",\n\t\"./fa\": \"./node_modules/moment/locale/fa.js\",\n\t\"./fa.js\": \"./node_modules/moment/locale/fa.js\",\n\t\"./fi\": \"./node_modules/moment/locale/fi.js\",\n\t\"./fi.js\": \"./node_modules/moment/locale/fi.js\",\n\t\"./fo\": \"./node_modules/moment/locale/fo.js\",\n\t\"./fo.js\": \"./node_modules/moment/locale/fo.js\",\n\t\"./fr\": \"./node_modules/moment/locale/fr.js\",\n\t\"./fr-ca\": \"./node_modules/moment/locale/fr-ca.js\",\n\t\"./fr-ca.js\": \"./node_modules/moment/locale/fr-ca.js\",\n\t\"./fr-ch\": \"./node_modules/moment/locale/fr-ch.js\",\n\t\"./fr-ch.js\": \"./node_modules/moment/locale/fr-ch.js\",\n\t\"./fr.js\": \"./node_modules/moment/locale/fr.js\",\n\t\"./fy\": \"./node_modules/moment/locale/fy.js\",\n\t\"./fy.js\": \"./node_modules/moment/locale/fy.js\",\n\t\"./ga\": \"./node_modules/moment/locale/ga.js\",\n\t\"./ga.js\": \"./node_modules/moment/locale/ga.js\",\n\t\"./gd\": \"./node_modules/moment/locale/gd.js\",\n\t\"./gd.js\": \"./node_modules/moment/locale/gd.js\",\n\t\"./gl\": \"./node_modules/moment/locale/gl.js\",\n\t\"./gl.js\": \"./node_modules/moment/locale/gl.js\",\n\t\"./gom-latn\": \"./node_modules/moment/locale/gom-latn.js\",\n\t\"./gom-latn.js\": \"./node_modules/moment/locale/gom-latn.js\",\n\t\"./gu\": \"./node_modules/moment/locale/gu.js\",\n\t\"./gu.js\": \"./node_modules/moment/locale/gu.js\",\n\t\"./he\": \"./node_modules/moment/locale/he.js\",\n\t\"./he.js\": \"./node_modules/moment/locale/he.js\",\n\t\"./hi\": \"./node_modules/moment/locale/hi.js\",\n\t\"./hi.js\": \"./node_modules/moment/locale/hi.js\",\n\t\"./hr\": \"./node_modules/moment/locale/hr.js\",\n\t\"./hr.js\": \"./node_modules/moment/locale/hr.js\",\n\t\"./hu\": \"./node_modules/moment/locale/hu.js\",\n\t\"./hu.js\": \"./node_modules/moment/locale/hu.js\",\n\t\"./hy-am\": \"./node_modules/moment/locale/hy-am.js\",\n\t\"./hy-am.js\": \"./node_modules/moment/locale/hy-am.js\",\n\t\"./id\": \"./node_modules/moment/locale/id.js\",\n\t\"./id.js\": \"./node_modules/moment/locale/id.js\",\n\t\"./is\": \"./node_modules/moment/locale/is.js\",\n\t\"./is.js\": \"./node_modules/moment/locale/is.js\",\n\t\"./it\": \"./node_modules/moment/locale/it.js\",\n\t\"./it-ch\": \"./node_modules/moment/locale/it-ch.js\",\n\t\"./it-ch.js\": \"./node_modules/moment/locale/it-ch.js\",\n\t\"./it.js\": \"./node_modules/moment/locale/it.js\",\n\t\"./ja\": \"./node_modules/moment/locale/ja.js\",\n\t\"./ja.js\": \"./node_modules/moment/locale/ja.js\",\n\t\"./jv\": \"./node_modules/moment/locale/jv.js\",\n\t\"./jv.js\": \"./node_modules/moment/locale/jv.js\",\n\t\"./ka\": \"./node_modules/moment/locale/ka.js\",\n\t\"./ka.js\": \"./node_modules/moment/locale/ka.js\",\n\t\"./kk\": \"./node_modules/moment/locale/kk.js\",\n\t\"./kk.js\": \"./node_modules/moment/locale/kk.js\",\n\t\"./km\": \"./node_modules/moment/locale/km.js\",\n\t\"./km.js\": \"./node_modules/moment/locale/km.js\",\n\t\"./kn\": \"./node_modules/moment/locale/kn.js\",\n\t\"./kn.js\": \"./node_modules/moment/locale/kn.js\",\n\t\"./ko\": \"./node_modules/moment/locale/ko.js\",\n\t\"./ko.js\": \"./node_modules/moment/locale/ko.js\",\n\t\"./ku\": \"./node_modules/moment/locale/ku.js\",\n\t\"./ku.js\": \"./node_modules/moment/locale/ku.js\",\n\t\"./ky\": \"./node_modules/moment/locale/ky.js\",\n\t\"./ky.js\": \"./node_modules/moment/locale/ky.js\",\n\t\"./lb\": \"./node_modules/moment/locale/lb.js\",\n\t\"./lb.js\": \"./node_modules/moment/locale/lb.js\",\n\t\"./lo\": \"./node_modules/moment/locale/lo.js\",\n\t\"./lo.js\": \"./node_modules/moment/locale/lo.js\",\n\t\"./lt\": \"./node_modules/moment/locale/lt.js\",\n\t\"./lt.js\": \"./node_modules/moment/locale/lt.js\",\n\t\"./lv\": \"./node_modules/moment/locale/lv.js\",\n\t\"./lv.js\": \"./node_modules/moment/locale/lv.js\",\n\t\"./me\": \"./node_modules/moment/locale/me.js\",\n\t\"./me.js\": \"./node_modules/moment/locale/me.js\",\n\t\"./mi\": \"./node_modules/moment/locale/mi.js\",\n\t\"./mi.js\": \"./node_modules/moment/locale/mi.js\",\n\t\"./mk\": \"./node_modules/moment/locale/mk.js\",\n\t\"./mk.js\": \"./node_modules/moment/locale/mk.js\",\n\t\"./ml\": \"./node_modules/moment/locale/ml.js\",\n\t\"./ml.js\": \"./node_modules/moment/locale/ml.js\",\n\t\"./mn\": \"./node_modules/moment/locale/mn.js\",\n\t\"./mn.js\": \"./node_modules/moment/locale/mn.js\",\n\t\"./mr\": \"./node_modules/moment/locale/mr.js\",\n\t\"./mr.js\": \"./node_modules/moment/locale/mr.js\",\n\t\"./ms\": \"./node_modules/moment/locale/ms.js\",\n\t\"./ms-my\": \"./node_modules/moment/locale/ms-my.js\",\n\t\"./ms-my.js\": \"./node_modules/moment/locale/ms-my.js\",\n\t\"./ms.js\": \"./node_modules/moment/locale/ms.js\",\n\t\"./mt\": \"./node_modules/moment/locale/mt.js\",\n\t\"./mt.js\": \"./node_modules/moment/locale/mt.js\",\n\t\"./my\": \"./node_modules/moment/locale/my.js\",\n\t\"./my.js\": \"./node_modules/moment/locale/my.js\",\n\t\"./nb\": \"./node_modules/moment/locale/nb.js\",\n\t\"./nb.js\": \"./node_modules/moment/locale/nb.js\",\n\t\"./ne\": \"./node_modules/moment/locale/ne.js\",\n\t\"./ne.js\": \"./node_modules/moment/locale/ne.js\",\n\t\"./nl\": \"./node_modules/moment/locale/nl.js\",\n\t\"./nl-be\": \"./node_modules/moment/locale/nl-be.js\",\n\t\"./nl-be.js\": \"./node_modules/moment/locale/nl-be.js\",\n\t\"./nl.js\": \"./node_modules/moment/locale/nl.js\",\n\t\"./nn\": \"./node_modules/moment/locale/nn.js\",\n\t\"./nn.js\": \"./node_modules/moment/locale/nn.js\",\n\t\"./pa-in\": \"./node_modules/moment/locale/pa-in.js\",\n\t\"./pa-in.js\": \"./node_modules/moment/locale/pa-in.js\",\n\t\"./pl\": \"./node_modules/moment/locale/pl.js\",\n\t\"./pl.js\": \"./node_modules/moment/locale/pl.js\",\n\t\"./pt\": \"./node_modules/moment/locale/pt.js\",\n\t\"./pt-br\": \"./node_modules/moment/locale/pt-br.js\",\n\t\"./pt-br.js\": \"./node_modules/moment/locale/pt-br.js\",\n\t\"./pt.js\": \"./node_modules/moment/locale/pt.js\",\n\t\"./ro\": \"./node_modules/moment/locale/ro.js\",\n\t\"./ro.js\": \"./node_modules/moment/locale/ro.js\",\n\t\"./ru\": \"./node_modules/moment/locale/ru.js\",\n\t\"./ru.js\": \"./node_modules/moment/locale/ru.js\",\n\t\"./sd\": \"./node_modules/moment/locale/sd.js\",\n\t\"./sd.js\": \"./node_modules/moment/locale/sd.js\",\n\t\"./se\": \"./node_modules/moment/locale/se.js\",\n\t\"./se.js\": \"./node_modules/moment/locale/se.js\",\n\t\"./si\": \"./node_modules/moment/locale/si.js\",\n\t\"./si.js\": \"./node_modules/moment/locale/si.js\",\n\t\"./sk\": \"./node_modules/moment/locale/sk.js\",\n\t\"./sk.js\": \"./node_modules/moment/locale/sk.js\",\n\t\"./sl\": \"./node_modules/moment/locale/sl.js\",\n\t\"./sl.js\": \"./node_modules/moment/locale/sl.js\",\n\t\"./sq\": \"./node_modules/moment/locale/sq.js\",\n\t\"./sq.js\": \"./node_modules/moment/locale/sq.js\",\n\t\"./sr\": \"./node_modules/moment/locale/sr.js\",\n\t\"./sr-cyrl\": \"./node_modules/moment/locale/sr-cyrl.js\",\n\t\"./sr-cyrl.js\": \"./node_modules/moment/locale/sr-cyrl.js\",\n\t\"./sr.js\": \"./node_modules/moment/locale/sr.js\",\n\t\"./ss\": \"./node_modules/moment/locale/ss.js\",\n\t\"./ss.js\": \"./node_modules/moment/locale/ss.js\",\n\t\"./sv\": \"./node_modules/moment/locale/sv.js\",\n\t\"./sv.js\": \"./node_modules/moment/locale/sv.js\",\n\t\"./sw\": \"./node_modules/moment/locale/sw.js\",\n\t\"./sw.js\": \"./node_modules/moment/locale/sw.js\",\n\t\"./ta\": \"./node_modules/moment/locale/ta.js\",\n\t\"./ta.js\": \"./node_modules/moment/locale/ta.js\",\n\t\"./te\": \"./node_modules/moment/locale/te.js\",\n\t\"./te.js\": \"./node_modules/moment/locale/te.js\",\n\t\"./tet\": \"./node_modules/moment/locale/tet.js\",\n\t\"./tet.js\": \"./node_modules/moment/locale/tet.js\",\n\t\"./tg\": \"./node_modules/moment/locale/tg.js\",\n\t\"./tg.js\": \"./node_modules/moment/locale/tg.js\",\n\t\"./th\": \"./node_modules/moment/locale/th.js\",\n\t\"./th.js\": \"./node_modules/moment/locale/th.js\",\n\t\"./tl-ph\": \"./node_modules/moment/locale/tl-ph.js\",\n\t\"./tl-ph.js\": \"./node_modules/moment/locale/tl-ph.js\",\n\t\"./tlh\": \"./node_modules/moment/locale/tlh.js\",\n\t\"./tlh.js\": \"./node_modules/moment/locale/tlh.js\",\n\t\"./tr\": \"./node_modules/moment/locale/tr.js\",\n\t\"./tr.js\": \"./node_modules/moment/locale/tr.js\",\n\t\"./tzl\": \"./node_modules/moment/locale/tzl.js\",\n\t\"./tzl.js\": \"./node_modules/moment/locale/tzl.js\",\n\t\"./tzm\": \"./node_modules/moment/locale/tzm.js\",\n\t\"./tzm-latn\": \"./node_modules/moment/locale/tzm-latn.js\",\n\t\"./tzm-latn.js\": \"./node_modules/moment/locale/tzm-latn.js\",\n\t\"./tzm.js\": \"./node_modules/moment/locale/tzm.js\",\n\t\"./ug-cn\": \"./node_modules/moment/locale/ug-cn.js\",\n\t\"./ug-cn.js\": \"./node_modules/moment/locale/ug-cn.js\",\n\t\"./uk\": \"./node_modules/moment/locale/uk.js\",\n\t\"./uk.js\": \"./node_modules/moment/locale/uk.js\",\n\t\"./ur\": \"./node_modules/moment/locale/ur.js\",\n\t\"./ur.js\": \"./node_modules/moment/locale/ur.js\",\n\t\"./uz\": \"./node_modules/moment/locale/uz.js\",\n\t\"./uz-latn\": \"./node_modules/moment/locale/uz-latn.js\",\n\t\"./uz-latn.js\": \"./node_modules/moment/locale/uz-latn.js\",\n\t\"./uz.js\": \"./node_modules/moment/locale/uz.js\",\n\t\"./vi\": \"./node_modules/moment/locale/vi.js\",\n\t\"./vi.js\": \"./node_modules/moment/locale/vi.js\",\n\t\"./x-pseudo\": \"./node_modules/moment/locale/x-pseudo.js\",\n\t\"./x-pseudo.js\": \"./node_modules/moment/locale/x-pseudo.js\",\n\t\"./yo\": \"./node_modules/moment/locale/yo.js\",\n\t\"./yo.js\": \"./node_modules/moment/locale/yo.js\",\n\t\"./zh-cn\": \"./node_modules/moment/locale/zh-cn.js\",\n\t\"./zh-cn.js\": \"./node_modules/moment/locale/zh-cn.js\",\n\t\"./zh-hk\": \"./node_modules/moment/locale/zh-hk.js\",\n\t\"./zh-hk.js\": \"./node_modules/moment/locale/zh-hk.js\",\n\t\"./zh-tw\": \"./node_modules/moment/locale/zh-tw.js\",\n\t\"./zh-tw.js\": \"./node_modules/moment/locale/zh-tw.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/moment/locale sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./node_modules/moment/locale_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/scripts/api/get-user-account-data-by-email.js":
/*!***********************************************************!*\
  !*** ./src/scripts/api/get-user-account-data-by-email.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./src/scripts/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./src/scripts/utils/index.js\");\n\n\n\n\nvar SEND_RESULT_API_URL = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"resolvePath\"])(_constants__WEBPACK_IMPORTED_MODULE_2__[\"API_URL_ROOT\"], 'send-results/');\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/(function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(emailAddress) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (emailAddress) {\n              _context.next = 2;\n              break;\n            }\n\n            throw new Error('SendResultApi: Email must be specified');\n\n          case 2:\n            return _context.abrupt(\"return\", Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"createAjaxPromise\"])(SEND_RESULT_API_URL, 'POST', {\n              emailAddress: emailAddress\n            }));\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n})());\n\n//# sourceURL=webpack:///./src/scripts/api/get-user-account-data-by-email.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./src/scripts/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./src/scripts/utils/index.js\");\n\n\n\n\nvar SEND_VERIFY_API_URL = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"resolvePath\"])(_constants__WEBPACK_IMPORTED_MODULE_2__[\"API_URL_ROOT\"], 'verify-email/');\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/(function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(emailAddress) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (emailAddress) {\n              _context.next = 2;\n              break;\n            }\n\n            throw new Error('SendVerifyEmailApi: Email must be specified');\n\n          case 2:\n            return _context.abrupt(\"return\", Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"createAjaxPromise\"])(SEND_VERIFY_API_URL, 'POST', {\n              emailAddress: emailAddress\n            }));\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n})());\n\n//# sourceURL=webpack:///./src/scripts/api/send-verification-by-user-email.js?");

/***/ }),

/***/ "./src/scripts/assets/dataset-britishairways.js":
/*!******************************************************!*\
  !*** ./src/scripts/assets/dataset-britishairways.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: 'polarArea',\n  data: {\n    labels: [\"Credit card no.\", \"Username\", \"Email\", \"Password\", \"IP address\", \"Geolocation\"],\n    datasets: [{\n      label: \"Breaches\",\n      backgroundColor: [\"rgba(54, 162, 235, .4)\", \"rgba(255, 99, 132, .4)\", \"rgba(75, 192, 192, .4)\", \"rgba(255, 205, 86, .4)\", \"rgba(201, 203, 207, .4)\", \"rgba(155, 89, 182, .4)\"],\n      data: [5, 10, 15, 10, 20, 13]\n    }]\n  },\n  options: {\n    legend: {\n      position: 'right'\n    },\n    title: {\n      display: false,\n      text: 'Structure of compromised private data for britishairways.com - All breaches'\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/scripts/assets/dataset-britishairways.js?");

/***/ }),

/***/ "./src/scripts/assets/dataset-inst-polar.js":
/*!**************************************************!*\
  !*** ./src/scripts/assets/dataset-inst-polar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: 'polarArea',\n  data: {\n    labels: [\"Username\", \"IP address\"],\n    datasets: [{\n      label: \"Breaches\",\n      backgroundColor: [\"rgba(54, 162, 235, .4)\", \"rgba(255, 99, 132, .4)\"],\n      data: [7, 11]\n    }]\n  },\n  options: {\n    legend: {\n      position: 'right'\n    },\n    title: {\n      display: false,\n      text: 'Structure of compromised private data for britishairways.com - Instagram'\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/scripts/assets/dataset-inst-polar.js?");

/***/ }),

/***/ "./src/scripts/assets/dataset-inst.js":
/*!********************************************!*\
  !*** ./src/scripts/assets/dataset-inst.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: 'horizontalBar',\n  data: {\n    labels: ['Plain text', 'Easily cracked', 'Standart protection', 'Strongest encryption'],\n    datasets: [{\n      label: 'Instagram',\n      data: [4, 3, 9, 11],\n      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],\n      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],\n      borderWidth: 1\n    }]\n  },\n  options: {\n    legend: {\n      display: false,\n      title: {\n        display: true,\n        text: 'Instagram'\n      },\n      labels: {\n        fontFamily: \"'Dosis', sans-serif\"\n      }\n    },\n    scales: {\n      yAxes: [{\n        barPercentage: 0.2\n      }],\n      xAxes: [{\n        ticks: {\n          beginAtZero: true\n        }\n      }]\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/scripts/assets/dataset-inst.js?");

/***/ }),

/***/ "./src/scripts/assets/dataset-skype-polar.js":
/*!***************************************************!*\
  !*** ./src/scripts/assets/dataset-skype-polar.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: 'polarArea',\n  data: {\n    labels: [\"Username\", \"Email\", \"Password\", \"IP address\"],\n    datasets: [{\n      label: \"Breaches\",\n      backgroundColor: [\"rgba(54, 162, 235, .4)\", \"rgba(255, 99, 132, .4)\", \"rgba(75, 192, 192, .4)\", \"rgba(255, 205, 86, .4)\"],\n      data: [3, 4, 2, 1]\n    }]\n  },\n  options: {\n    legend: {\n      position: 'right'\n    },\n    title: {\n      display: false,\n      text: 'Structure of compromised private data for britishairways.com - Skype'\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/scripts/assets/dataset-skype-polar.js?");

/***/ }),

/***/ "./src/scripts/assets/dataset-skype.js":
/*!*********************************************!*\
  !*** ./src/scripts/assets/dataset-skype.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: 'horizontalBar',\n  data: {\n    labels: ['Plain text', 'Easily cracked', 'Standart protection', 'Strongest encryption'],\n    datasets: [{\n      label: 'Skype.com',\n      data: [11, 9, 5, 0],\n      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],\n      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],\n      borderWidth: 1\n    }]\n  },\n  options: {\n    legend: {\n      display: false,\n      title: {\n        display: true,\n        text: 'Skype.com'\n      },\n      labels: {\n        fontFamily: \"'Dosis', sans-serif\"\n      }\n    },\n    scales: {\n      yAxes: [{\n        barPercentage: 0.2\n      }],\n      xAxes: [{\n        ticks: {\n          beginAtZero: true\n        }\n      }]\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/scripts/assets/dataset-skype.js?");

/***/ }),

/***/ "./src/scripts/assets/dataset-tw-polar.js":
/*!************************************************!*\
  !*** ./src/scripts/assets/dataset-tw-polar.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: 'polarArea',\n  data: {\n    labels: [\"Username\", \"Email\", \"IP address\"],\n    datasets: [{\n      label: \"Breaches\",\n      backgroundColor: [\"rgba(255, 205, 86, .4)\", \"rgba(201, 203, 207, .4)\", \"rgba(155, 89, 182, .4)\"],\n      data: [12, 10, 15]\n    }]\n  },\n  options: {\n    legend: {\n      position: 'right'\n    },\n    title: {\n      display: false,\n      text: 'Structure of compromised private data for britishairways.com - Twitter'\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/scripts/assets/dataset-tw-polar.js?");

/***/ }),

/***/ "./src/scripts/assets/dataset-tw.js":
/*!******************************************!*\
  !*** ./src/scripts/assets/dataset-tw.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: 'horizontalBar',\n  data: {\n    labels: ['Plain text', 'Easily cracked', 'Standart protection', 'Strongest encryption'],\n    datasets: [{\n      label: 'Twitter',\n      data: [10, 11, 6, 1],\n      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],\n      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],\n      borderWidth: 1\n    }]\n  },\n  options: {\n    legend: {\n      display: false,\n      title: {\n        display: true,\n        text: 'Twitter'\n      },\n      labels: {\n        fontFamily: \"'Dosis', sans-serif\"\n      }\n    },\n    scales: {\n      yAxes: [{\n        barPercentage: 0.2\n      }],\n      xAxes: [{\n        ticks: {\n          beginAtZero: true\n        }\n      }]\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/scripts/assets/dataset-tw.js?");

/***/ }),

/***/ "./src/scripts/assets/dataset-type-of-breached-accountes.js":
/*!******************************************************************!*\
  !*** ./src/scripts/assets/dataset-type-of-breached-accountes.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: 'doughnut',\n  data: {\n    labels: ['Corporate accounts', 'User accounts'],\n    datasets: [{\n      label: 'Type of breached accounts',\n      data: [25, 146],\n      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],\n      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],\n      borderWidth: 1\n    }]\n  }\n});\n\n//# sourceURL=webpack:///./src/scripts/assets/dataset-type-of-breached-accountes.js?");

/***/ }),

/***/ "./src/scripts/assets/dataset-vk-polar.js":
/*!************************************************!*\
  !*** ./src/scripts/assets/dataset-vk-polar.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: 'polarArea',\n  data: {\n    labels: [\"Username\", \"Password\", \"IP address\"],\n    datasets: [{\n      label: \"Breaches\",\n      backgroundColor: [\"rgba(255, 99, 132, .4)\", \"rgba(75, 192, 192, .4)\", \"rgba(255, 205, 86, .4)\"],\n      data: [15, 10, 20]\n    }]\n  },\n  options: {\n    legend: {\n      position: 'right'\n    },\n    title: {\n      display: false,\n      text: 'Structure of compromised private data for britishairways.com - Vkontakte'\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/scripts/assets/dataset-vk-polar.js?");

/***/ }),

/***/ "./src/scripts/assets/dataset-vk.js":
/*!******************************************!*\
  !*** ./src/scripts/assets/dataset-vk.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: 'horizontalBar',\n  data: {\n    labels: ['Plain text', 'Easily cracked', 'Standart protection', 'Strongest encryption'],\n    datasets: [{\n      label: 'Vkontakte',\n      data: [7, 3, 12, 5],\n      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],\n      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],\n      borderWidth: 1\n    }]\n  },\n  options: {\n    legend: {\n      display: false,\n      title: {\n        display: true,\n        text: 'Vkontakte'\n      },\n      labels: {\n        fontFamily: \"'Dosis', sans-serif\"\n      }\n    },\n    scales: {\n      yAxes: [{\n        barPercentage: 0.2\n      }],\n      xAxes: [{\n        ticks: {\n          beginAtZero: true\n        }\n      }]\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/scripts/assets/dataset-vk.js?");

/***/ }),

/***/ "./src/scripts/calculate-hidden-elements-height.js":
/*!*********************************************************!*\
  !*** ./src/scripts/calculate-hidden-elements-height.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ELEMENT_ATTR_NAME = 'data-calculate-height';\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var $elems = $(\"[\".concat(ELEMENT_ATTR_NAME, \"]\"));\n  var $body = $('body');\n  $elems.each(function (i, e) {\n    var copy = $(e).clone().get(0);\n    copy.style.visibility = 'hidden';\n    copy.style.position = 'absolute';\n    copy.style.overflow = 'auto';\n    copy.style.top = '-10000px';\n    copy.style.left = '-10000px';\n    $body.append(copy);\n    var height = copy.clientHeight;\n    e.style.height = \"\".concat(height, \"px\");\n  });\n});\n\n//# sourceURL=webpack:///./src/scripts/calculate-hidden-elements-height.js?");

/***/ }),

/***/ "./src/scripts/chart.js":
/*!******************************!*\
  !*** ./src/scripts/chart.js ***!
  \******************************/
/*! exports provided: datasets, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"datasets\", function() { return datasets; });\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_dataset_skype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/dataset-skype */ \"./src/scripts/assets/dataset-skype.js\");\n/* harmony import */ var _assets_dataset_tw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/dataset-tw */ \"./src/scripts/assets/dataset-tw.js\");\n/* harmony import */ var _assets_dataset_vk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/dataset-vk */ \"./src/scripts/assets/dataset-vk.js\");\n/* harmony import */ var _assets_dataset_inst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/dataset-inst */ \"./src/scripts/assets/dataset-inst.js\");\n/* harmony import */ var _assets_dataset_type_of_breached_accountes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/dataset-type-of-breached-accountes */ \"./src/scripts/assets/dataset-type-of-breached-accountes.js\");\n\n\n\n\n\n\nvar datasets = {\n  skype: _assets_dataset_skype__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  tw: _assets_dataset_tw__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  vk: _assets_dataset_vk__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  inst: _assets_dataset_inst__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  types: _assets_dataset_type_of_breached_accountes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var ch = document.querySelectorAll('[data-chart]');\n  if (!ch.length) return;\n  ch.forEach(function (v) {\n    var dataset = v.dataset.chartDataset;\n    if (!datasets[dataset]) return;\n    var context = v.getContext('2d');\n    new chart_js__WEBPACK_IMPORTED_MODULE_0___default.a(context, datasets[dataset]);\n  });\n});\n\n//# sourceURL=webpack:///./src/scripts/chart.js?");

/***/ }),

/***/ "./src/scripts/constants.js":
/*!**********************************!*\
  !*** ./src/scripts/constants.js ***!
  \**********************************/
/*! exports provided: API_URL_ROOT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL_ROOT\", function() { return API_URL_ROOT; });\n// const API_URL_ROOT = '/portal/api/v1/'\nvar API_URL_ROOT = 'https://breachreport.com/portal/api/v1/';\n\n\n//# sourceURL=webpack:///./src/scripts/constants.js?");

/***/ }),

/***/ "./src/scripts/handle-user-leave.js":
/*!******************************************!*\
  !*** ./src/scripts/handle-user-leave.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_scroll_velocity_measurer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/scroll-velocity-measurer */ \"./src/scripts/utils/scroll-velocity-measurer.js\");\n/* harmony import */ var _utils_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/throttle */ \"./src/scripts/utils/throttle.js\");\n\n\nvar Selectors = {\n  MODAL: '#before-close-modal',\n  ABOUT: '#about'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var $modal = $(Selectors.MODAL);\n  var $about = $(Selectors.ABOUT);\n  if (!$modal.length || !$about.length) return;\n\n  var deepnessHeightTrigger = function () {\n    var _$about$get = $about.get(0),\n        offsetHeight = _$about$get.offsetHeight,\n        offsetTop = _$about$get.offsetTop;\n\n    return offsetHeight + offsetTop;\n  }();\n\n  var svm = new _utils_scroll_velocity_measurer__WEBPACK_IMPORTED_MODULE_0__[\"ScrollVelocityMeasurer\"]();\n\n  var unbindAll = function unbindAll() {\n    clearTimeout(timer);\n    svm.off();\n    $(document).unbind('scroll', handleScroll);\n  };\n\n  var handler = function handler(e) {\n    $modal.modal('show');\n    unbindAll();\n  };\n\n  var handleScroll = Object(_utils_throttle__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function (ev) {\n    var currentPosition = $(this).scrollTop() + window.innerHeight;\n    if (currentPosition >= deepnessHeightTrigger) handler();\n  }, 500);\n  $(document).scroll(handleScroll);\n  svm.on(function (speed) {\n    if (speed > 10) return handler();\n  });\n  var timer = setTimeout(handler, 18000);\n});\n\n//# sourceURL=webpack:///./src/scripts/handle-user-leave.js?");

/***/ }),

/***/ "./src/scripts/handle-verification-form.js":
/*!*************************************************!*\
  !*** ./src/scripts/handle-verification-form.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/toArray */ \"./node_modules/@babel/runtime/helpers/toArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _models_user_account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/user-account */ \"./src/scripts/models/user-account.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api */ \"./src/scripts/api/index.js\");\n\n\n\n\n\n\n\n\nvar Selectors = {\n  VERIFICATION_FORM: '[data-form-verify=\"form\"]',\n  VERIFICATION_FORM_CONTAINER: '[data-form-verify=\"container\"]',\n  VERIFICATION_FORM_NOTES: '[data-form-verify=\"notes\"]',\n  ERROR_TEMPLATE: '[data-form-verify-t=\"error\"]',\n  NO_BREACHES_TEMPLATE: '[data-form-verify-t=\"no-breaches\"]',\n  HAS_BREACHES_TEMPLATE: '[data-form-verify-t=\"has-breaches\"]',\n  UNREGISTERED_USER_BTN_VERIFY: '[data-form-verify-t=\"btn-verify\"]',\n  UNREGISTERED_USER_TEMPLATE_FAIL: '[data-form-verify-t=\"unreg-fail\"]',\n  UNREGISTERED_USER_TEMPLATE_SUCCESS: '[data-form-verify-t=\"unreg-success\"]',\n  UNREGISTERED_USER_TEMPLATE_MSG: '[data-form-verify-t=\"unreg-msg\"]',\n  UNVERIFIED_USER_TEMPLATE: '[data-form-verify-t=\"unver\"]',\n  VERIFIED_USER_TEMPLATE: '[data-form-verify-t=\"ver\"]',\n  BREACHES_ANCHOR: '[data-form-verify-breaches]',\n  MSG_ANCHOR: '[data-form-verify-msg]',\n  VERIFICATION_FORM_BTN: '[data-form-verify-btn]'\n};\nvar BadRequestCodes = {\n  E_MISSING_OR_INVALID_PARAMS: 'The email was entered incorrectly. Please check and try again'\n};\n\nvar changeNotes = function changeNotes(notes) {\n  return function (content) {\n    var $notes = $(notes);\n    var $jumbo = $notes.parents('#jumbotron-verify');\n\n    var _$notes$get = $notes.get(),\n        _$notes$get2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_$notes$get, 1),\n        n = _$notes$get2[0];\n\n    if ($jumbo.length) {\n      $('body, html').animate({\n        scrollTop: $jumbo.offset().top - 210\n      }, 500);\n    }\n\n    $notes.fadeOut(500, function () {\n      n.innerHTML = '';\n      $notes.append(content);\n\n      if (!$jumbo.length) {\n        $notes.find('.text-white').removeClass('text-white');\n      }\n\n      $notes.fadeIn(500);\n    });\n  };\n};\n\nvar formContentFromTemplates = function formContentFromTemplates(templates) {\n  return function (seq) {\n    var req = function req(cur, arr) {\n      if (!cur.length) return arr;\n\n      var _cur = _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_4___default()(cur),\n          first = _cur[0],\n          rest = _cur.slice(1);\n\n      var name = first.name,\n          cb = first.cb;\n      var $template = $(templates[name]).clone();\n      if (cb) cb($template);\n      return req(rest, [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(arr), [$template]));\n    };\n\n    return req(seq, []);\n  };\n};\n\nvar formatBreachInfoElement = function formatBreachInfoElement(cnt) {\n  return function (e) {\n    var conditions = [{\n      name: 'breach',\n      condition: cnt === 1\n    }, {\n      name: 'breaches',\n      condition: cnt > 1\n    }];\n\n    var _conditions$find = conditions.find(function (_ref) {\n      var condition = _ref.condition;\n      return condition;\n    }),\n        noun = _conditions$find.name;\n\n    var str = \"\".concat(cnt, \" \").concat(noun);\n    var $e = $(e).find(Selectors.BREACHES_ANCHOR).text(str);\n  };\n};\n\nvar validateEmailAddress = function validateEmailAddress(email) {\n  return /\\S+@\\S+\\.\\S+/.test(email);\n};\n\nvar getUserByEmailAsync = function getUserByEmailAsync(email) {\n  return new Promise(\n  /*#__PURE__*/\n  function () {\n    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(exec) {\n      var res, err, user, response, error;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (validateEmailAddress(email)) {\n                _context.next = 2;\n                break;\n              }\n\n              return _context.abrupt(\"return\", exec({\n                err: new Error(BadRequestCodes.E_MISSING_OR_INVALID_PARAMS)\n              }));\n\n            case 2:\n              _context.next = 4;\n              return _models_user_account__WEBPACK_IMPORTED_MODULE_6__[\"UserAccountModel\"].get(email);\n\n            case 4:\n              res = _context.sent;\n              err = res.err, user = res.data, response = res.response;\n\n              error = function () {\n                if (!err) return null;\n\n                try {\n                  var code = response.responseJSON.code;\n                  return BadRequestCodes[code] ? new Error(BadRequestCodes[code]) : true;\n                } catch (error) {\n                  return true;\n                }\n              }();\n\n              return _context.abrupt(\"return\", exec({\n                err: error,\n                user: user\n              }));\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n/*#__PURE__*/\n_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {\n  var templates, formContent, $container, email;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {\n    while (1) {\n      switch (_context6.prev = _context6.next) {\n        case 0:\n          templates = {\n            error: $(Selectors.ERROR_TEMPLATE).prop('content'),\n            hasBreaches: $(Selectors.HAS_BREACHES_TEMPLATE).prop('content'),\n            noBreaches: $(Selectors.NO_BREACHES_TEMPLATE).prop('content'),\n            unregFail: $(Selectors.UNREGISTERED_USER_TEMPLATE_FAIL).prop('content'),\n            unregSuccess: $(Selectors.UNREGISTERED_USER_TEMPLATE_SUCCESS).prop('content'),\n            unregMsg: $(Selectors.UNREGISTERED_USER_TEMPLATE_MSG).prop('content'),\n            btnVerify: $(Selectors.UNREGISTERED_USER_BTN_VERIFY).prop('content'),\n            unver: $(Selectors.UNVERIFIED_USER_TEMPLATE).prop('content'),\n            ver: $(Selectors.VERIFIED_USER_TEMPLATE).prop('content')\n          };\n          formContent = formContentFromTemplates(templates);\n          $container = $(Selectors.VERIFICATION_FORM_CONTAINER);\n          email = $('#email-get').get(0);\n          $container.each(\n          /*#__PURE__*/\n          function () {\n            var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n            /*#__PURE__*/\n            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(i, e) {\n              var $form, $notes, changeCurrentNotes, showErrorNote, renderNotes, _ref8, err, user;\n\n              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {\n                while (1) {\n                  switch (_context5.prev = _context5.next) {\n                    case 0:\n                      $form = $(e).find(Selectors.VERIFICATION_FORM);\n                      $notes = $(e).find(Selectors.VERIFICATION_FORM_NOTES);\n                      changeCurrentNotes = changeNotes($notes);\n\n                      showErrorNote = function showErrorNote() {\n                        var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n                        var msgHandler = function msgHandler($parent) {\n                          return $parent.find(Selectors.MSG_ANCHOR).text(msg || '* Something went wrong, try again later.');\n                        };\n\n                        var content = formContent([_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({\n                          name: 'error'\n                        }, !!msg ? {\n                          cb: msgHandler\n                        } : {})]);\n                        changeCurrentNotes(content);\n                        return;\n                      };\n\n                      renderNotes =\n                      /*#__PURE__*/\n                      function () {\n                        var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n                        /*#__PURE__*/\n                        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(err, user) {\n                          var breachesInfo, setEventHandler, content, _content, _content2;\n\n                          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n                            while (1) {\n                              switch (_context3.prev = _context3.next) {\n                                case 0:\n                                  if (!err) {\n                                    _context3.next = 3;\n                                    break;\n                                  }\n\n                                  showErrorNote(err.message || undefined);\n                                  return _context3.abrupt(\"return\");\n\n                                case 3:\n                                  breachesInfo = user.breaches ? {\n                                    name: 'hasBreaches',\n                                    cb: formatBreachInfoElement(user.breaches)\n                                  } : {\n                                    name: 'noBreaches'\n                                  };\n\n                                  setEventHandler = function setEventHandler($parent) {\n                                    return $parent.find(Selectors.VERIFICATION_FORM_BTN).click(\n                                    /*#__PURE__*/\n                                    function () {\n                                      var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n                                      /*#__PURE__*/\n                                      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e) {\n                                        var _ref7, status, content;\n\n                                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n                                          while (1) {\n                                            switch (_context2.prev = _context2.next) {\n                                              case 0:\n                                                e.preventDefault();\n                                                _context2.next = 3;\n                                                return Object(_api__WEBPACK_IMPORTED_MODULE_7__[\"sendVerificationByUserEmail\"])(user.email);\n\n                                              case 3:\n                                                _ref7 = _context2.sent;\n                                                status = _ref7.status;\n\n                                                if (!(status !== 'success')) {\n                                                  _context2.next = 8;\n                                                  break;\n                                                }\n\n                                                showErrorNote();\n                                                return _context2.abrupt(\"return\");\n\n                                              case 8:\n                                                content = formContent([{\n                                                  name: 'unregMsg'\n                                                }]);\n                                                changeCurrentNotes(content);\n\n                                              case 10:\n                                              case \"end\":\n                                                return _context2.stop();\n                                            }\n                                          }\n                                        }, _callee2);\n                                      }));\n\n                                      return function (_x6) {\n                                        return _ref6.apply(this, arguments);\n                                      };\n                                    }());\n                                  };\n\n                                  if (!user.is(_models_user_account__WEBPACK_IMPORTED_MODULE_6__[\"Types\"].UNREGISTERED)) {\n                                    _context3.next = 9;\n                                    break;\n                                  }\n\n                                  content = formContent([breachesInfo, {\n                                    name: 'btnVerify',\n                                    cb: setEventHandler\n                                  }, {\n                                    name: user.breaches ? 'unregFail' : 'unregSuccess'\n                                  }]);\n                                  changeCurrentNotes(content);\n                                  return _context3.abrupt(\"return\");\n\n                                case 9:\n                                  if (!user.is(_models_user_account__WEBPACK_IMPORTED_MODULE_6__[\"Types\"].UNVERIFIED)) {\n                                    _context3.next = 13;\n                                    break;\n                                  }\n\n                                  _content = formContent([breachesInfo, {\n                                    name: 'unver'\n                                  }, {\n                                    name: 'btnVerify',\n                                    cb: setEventHandler\n                                  }]);\n                                  changeCurrentNotes(_content);\n                                  return _context3.abrupt(\"return\");\n\n                                case 13:\n                                  if (!user.is(_models_user_account__WEBPACK_IMPORTED_MODULE_6__[\"Types\"].VERIFIED)) {\n                                    _context3.next = 17;\n                                    break;\n                                  }\n\n                                  _content2 = formContent([breachesInfo, {\n                                    name: 'ver'\n                                  }]);\n                                  changeCurrentNotes(_content2);\n                                  return _context3.abrupt(\"return\");\n\n                                case 17:\n                                case \"end\":\n                                  return _context3.stop();\n                              }\n                            }\n                          }, _callee3);\n                        }));\n\n                        return function renderNotes(_x4, _x5) {\n                          return _ref5.apply(this, arguments);\n                        };\n                      }();\n\n                      if (!($form.parents('#jumbotron-verify').length && email.dataset.email !== 'false')) {\n                        _context5.next = 13;\n                        break;\n                      }\n\n                      _context5.next = 8;\n                      return getUserByEmailAsync(email.dataset.email);\n\n                    case 8:\n                      _ref8 = _context5.sent;\n                      err = _ref8.err;\n                      user = _ref8.user;\n                      $form.find('input[name=\"search\"]').val(email.dataset.email);\n                      renderNotes(err, user);\n\n                    case 13:\n                      $form.submit(\n                      /*#__PURE__*/\n                      function () {\n                        var _ref9 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n                        /*#__PURE__*/\n                        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(e) {\n                          var _$$serializeArray$fin, email, _ref11, err, user;\n\n                          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {\n                            while (1) {\n                              switch (_context4.prev = _context4.next) {\n                                case 0:\n                                  e.preventDefault();\n                                  _$$serializeArray$fin = $(this).serializeArray().find(function (_ref10) {\n                                    var name = _ref10.name;\n                                    return name == 'search';\n                                  }), email = _$$serializeArray$fin.value;\n                                  _context4.next = 4;\n                                  return getUserByEmailAsync(email);\n\n                                case 4:\n                                  _ref11 = _context4.sent;\n                                  err = _ref11.err;\n                                  user = _ref11.user;\n                                  renderNotes(err, user);\n\n                                case 8:\n                                case \"end\":\n                                  return _context4.stop();\n                              }\n                            }\n                          }, _callee4, this);\n                        }));\n\n                        return function (_x7) {\n                          return _ref9.apply(this, arguments);\n                        };\n                      }());\n\n                    case 14:\n                    case \"end\":\n                      return _context5.stop();\n                  }\n                }\n              }, _callee5);\n            }));\n\n            return function (_x2, _x3) {\n              return _ref4.apply(this, arguments);\n            };\n          }());\n\n        case 5:\n        case \"end\":\n          return _context6.stop();\n      }\n    }\n  }, _callee6);\n})));\n\n//# sourceURL=webpack:///./src/scripts/handle-verification-form.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _handle_verification_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handle-verification-form */ \"./src/scripts/handle-verification-form.js\");\n/* harmony import */ var _handle_user_leave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handle-user-leave */ \"./src/scripts/handle-user-leave.js\");\n/* harmony import */ var _calculate_hidden_elements_height__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculate-hidden-elements-height */ \"./src/scripts/calculate-hidden-elements-height.js\");\n/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart */ \"./src/scripts/chart.js\");\n/* harmony import */ var _timeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeline */ \"./src/scripts/timeline.js\");\n\n\n\n\n\n\n\n$(document).ready(function () {\n  var animateScrollByID = function animateScrollByID(id) {\n    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};\n    var target = $(\"\".concat(id));\n\n    var _target$offset = target.offset(),\n        top = _target$offset.top;\n\n    $('body, html').animate({\n      scrollTop: top - offset\n    }, 500, cb);\n  };\n\n  var $links = $('[data-animate-scroll]');\n  $links.on('click', function (e) {\n    e.preventDefault();\n    var cb = this.hash === '#jumbotron-verify' ? function () {\n      return $('#jumbotron-verify').find('input[type=\"email\"]')[0].focus();\n    } : function () {};\n    animateScrollByID(this.hash, this.dataset.animateScrollOffset, cb);\n  });\n  var $modalLinks = $('[data-modal-animate-scroll]');\n  $modalLinks.click(function (e) {\n    var _this = this;\n\n    e.preventDefault();\n    var $modal = $(this).parents('.modal');\n\n    var animate = function animate() {\n      return animateScrollByID(_this.hash);\n    };\n\n    $modal.one('hidden.bs.modal', animate);\n    $modal.modal('hide');\n  });\n\n  var getOffset = function getOffset() {\n    var height = $(window).height();\n    return height * .3 + 80;\n  };\n\n  var resetBodyScrollspy = function resetBodyScrollspy() {\n    $('body').scrollspy('dispose');\n    $('body').scrollspy({\n      offset: getOffset(),\n      target: '.navbar'\n    });\n  };\n\n  resetBodyScrollspy();\n  $(window).resize(resetBodyScrollspy);\n  var formatter = {\n    comma: function comma(num) {\n      return Math.round(num).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, '$1,');\n    },\n    billion: function billion(n) {\n      var adjustNumber = function adjustNumber(str) {\n        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n        if (str.length >= n) return str;\n        return adjustNumber('0' + str, n);\n      };\n\n      var num = function () {\n        var num = Math.round(n).toString();\n        return num.length > 3 ? num : adjustNumber(num, 3);\n      }();\n\n      return num.replace(/(\\d)(?=(\\d{2})+(?!\\d))/g, '$1.');\n    }\n  };\n  $('[data-toggle=\"popover\"]').popover();\n\n  var count = function count(el) {\n    var $el = $(el);\n    var formatterName = $el.data('formatter') || 'comma';\n    var formatterFn = formatter[formatterName];\n    var repeat = $el.data('repeat') || false;\n    $el.countTo({\n      formatter: formatterFn,\n      refreshInterval: 2,\n      onComplete: function onComplete() {\n        var _this2 = this;\n\n        if (!repeat) return;\n        setTimeout(function () {\n          count(_this2);\n          return;\n        }, 1000);\n      }\n    });\n  };\n\n  $('[data-count-number]').each(function (i, e) {\n    return count(e);\n  });\n  Object(_handle_verification_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  Object(_handle_user_leave__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  var COOKIE_POLICY_NAME = 'br-cookie-policy-accepted';\n  var cookies = decodeURIComponent(document.cookie).split(';').map(function (s) {\n    return s.trim();\n  }).reduce(function (acc, c) {\n    var firstEqSignIndex = c.search('=');\n    var name = c.slice(0, firstEqSignIndex);\n    var value = c.slice(firstEqSignIndex + 1, c.length);\n    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, acc, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, value));\n  }, {});\n  var cookie = cookies[COOKIE_POLICY_NAME];\n\n  if (!cookie || cookie !== 'true') {\n    var $toast = $('#cookie-policy-toast').toast({\n      autohide: false,\n      delay: 0\n    });\n    var $acceptBtn = $toast.find('[data-accept-btn]');\n    $acceptBtn.click(function (ev) {\n      ev.preventDefault();\n      document.cookie = \"\".concat(COOKIE_POLICY_NAME, \"=true\");\n      $toast.toast('hide');\n    });\n    $toast.toast('show');\n  }\n\n  var $subscribeForm = $('#subscription').find('form');\n  var $subscribeAfter = $('#subscription').find('[data-after-subscription=\"success\"]');\n  var $subscribeAfterError = $('#subscription').find('[data-after-subscription=\"error\"]');\n  var subscribeStatusCodes = [409];\n  $subscribeForm.submit(function (e) {\n    e.preventDefault();\n    ga('send', 'event', 'Subscribe', 'send');\n\n    var _$$serializeArray$fin = $(this).serializeArray().find(function (_ref) {\n      var name = _ref.name;\n      return name == 'EMAIL';\n    }),\n        email = _$$serializeArray$fin.value;\n\n    $subscribeForm.fadeOut(1000, function () {\n      $.ajax('https://breachreport.com/portal/api/v1/newsletter-subscribe', {\n        data: {\n          email: email\n        },\n        type: 'POST'\n      }).done(function () {\n        $subscribeAfter.fadeIn(1000);\n      }).fail(function (res) {\n        var status = res.status,\n            responseJSON = res.responseJSON;\n\n        if (subscribeStatusCodes.includes(Number(status)) && responseJSON && responseJSON.message) {\n          $subscribeAfterError.find('[data-after-subscription-msg]').text(responseJSON.message);\n        }\n\n        $subscribeForm.fadeIn(1000);\n        $subscribeAfterError.fadeIn(1000);\n      });\n    });\n  });\n  $('.modal').find('[data-toggle-modal=\"modal\"]').click(function (e) {\n    e.preventDefault();\n    var target = $(this).data('target');\n    var $parent = $(this).parents('.modal');\n    $parent.on('hidden.bs.modal', function () {\n      return $(target).modal('show');\n    });\n    $parent.modal('hide');\n  });\n  Object(_calculate_hidden_elements_height__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  Object(_chart__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  Object(_timeline__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  $('.btn-purchase').click(function (e) {\n    ga('send', 'event', 'Purchase Now', 'click');\n  });\n});\n\n//# sourceURL=webpack:///./src/scripts/terminal.js?");

/***/ }),

/***/ "./src/scripts/timeline.js":
/*!*********************************!*\
  !*** ./src/scripts/timeline.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vis_timeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vis-timeline */ \"./node_modules/vis-timeline/dist/vis-timeline-graph2d.esm.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_dataset_britishairways__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/dataset-britishairways */ \"./src/scripts/assets/dataset-britishairways.js\");\n/* harmony import */ var _assets_dataset_skype_polar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/dataset-skype-polar */ \"./src/scripts/assets/dataset-skype-polar.js\");\n/* harmony import */ var _assets_dataset_vk_polar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/dataset-vk-polar */ \"./src/scripts/assets/dataset-vk-polar.js\");\n/* harmony import */ var _assets_dataset_tw_polar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/dataset-tw-polar */ \"./src/scripts/assets/dataset-tw-polar.js\");\n/* harmony import */ var _assets_dataset_inst_polar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/dataset-inst-polar */ \"./src/scripts/assets/dataset-inst-polar.js\");\n\n\n\n\n\n\n\n\n\nvar overall = {\n  amount: '250m'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var container = document.getElementById('visualization');\n  var component = document.querySelector('[data-timeline]');\n  var chartContainer = document.querySelector('[data-timeline-chart]');\n  if (!container || !component || !chartContainer) return;\n  var chart = new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(chartContainer.getContext('2d'), _assets_dataset_britishairways__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  var amount = component.querySelector('[data-timeline-amount]');\n  var date = component.querySelector('[data-timeline-date]');\n  var structure = component.querySelector('[data-timeline-structure]');\n  var chartName = document.querySelector('[data-timeline-chart-name]');\n\n  var updateDate = function updateDate(d) {\n    return $(date).text(d);\n  };\n\n  var updateAmount = function updateAmount(a) {\n    return $(amount).text(a);\n  };\n\n  var updateChartName = function updateChartName(a) {\n    return $(chartName).text(a);\n  };\n\n  var updateChart = function updateChart(conf) {\n    chart.destroy();\n    var newChart = new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(chartContainer.getContext('2d'), conf);\n    chart = newChart;\n  };\n\n  var updateStructure = function updateStructure(arr) {\n    structure.innerHTML = '';\n    arr.forEach(function (e) {\n      var span = document.createElement('span');\n      $(structure).append($(span).text(e));\n    });\n  };\n\n  updateAmount(overall.amount);\n  var items = new vis_timeline__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DataSet([{\n    id: 1,\n    content: 'Skype',\n    start: '2014-03-20',\n    type: 'point',\n    data: {\n      icon: 'skype',\n      amount: '150m',\n      structure: ['username', 'email', 'password', 'ip-address'],\n      chart: _assets_dataset_skype_polar__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    }\n  }, {\n    id: 2,\n    content: 'VK',\n    start: '2014-04-14',\n    type: 'point',\n    data: {\n      icon: 'vk',\n      amount: '90m',\n      structure: ['username', 'password', 'ip-address'],\n      chart: _assets_dataset_vk_polar__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    }\n  }, {\n    id: 3,\n    content: 'Instagram',\n    start: '2014-05-18',\n    type: 'point',\n    data: {\n      icon: 'inst',\n      amount: '100m',\n      structure: ['username', 'ip-address'],\n      chart: _assets_dataset_inst_polar__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    }\n  }, {\n    id: 4,\n    content: 'Twitter',\n    start: '2014-07-16',\n    type: 'point',\n    data: {\n      icon: 'tw',\n      amount: '50m',\n      structure: ['username', 'ip-address', 'email'],\n      chart: _assets_dataset_tw_polar__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    }\n  }]);\n  var options = {\n    zoomable: false,\n    margin: {\n      item: 30\n    },\n    // onInitialDrawComplete(...args) {\n    //   console.log(timeline.getVisibleItems())\n    // },\n    orientation: {\n      axis: 'none'\n    },\n    multiselect: false,\n    template: function template(item, element, d) {\n      var data = d.data;\n      element.classList.add('report-timeline-item');\n      element.classList.add(\"report-timeline-item-\".concat(data.icon));\n    }\n  };\n  var timeline = new vis_timeline__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Timeline(container, items, options);\n  timeline.on('select', function (_ref) {\n    var i = _ref.items,\n        event = _ref.event;\n    var isItemSelection = !event.target.classList.contains('vis-group');\n\n    if (!isItemSelection) {\n      updateDate('');\n      updateAmount(overall.amount);\n      updateStructure([]);\n      updateChart(_assets_dataset_britishairways__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n      updateChartName('All Breaches');\n      return;\n    }\n\n    var _i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(i, 1),\n        item = _i[0];\n\n    var _items$get = items.get(item),\n        start = _items$get.start,\n        data = _items$get.data,\n        content = _items$get.content;\n\n    updateDate(moment__WEBPACK_IMPORTED_MODULE_2___default()(start).format('MMMM YYYY'));\n    updateAmount(data.amount);\n    updateStructure(data.structure);\n    updateChart(data.chart);\n    updateChartName(content);\n  });\n});\n\n//# sourceURL=webpack:///./src/scripts/timeline.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ \"./node_modules/url/url.js\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return url__WEBPACK_IMPORTED_MODULE_0__[\"resolve\"].apply(void 0, arguments);\n});\n\n//# sourceURL=webpack:///./src/scripts/utils/resolve-path.js?");

/***/ }),

/***/ "./src/scripts/utils/scroll-velocity-measurer.js":
/*!*******************************************************!*\
  !*** ./src/scripts/utils/scroll-velocity-measurer.js ***!
  \*******************************************************/
/*! exports provided: ScrollVelocityMeasurer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollVelocityMeasurer\", function() { return ScrollVelocityMeasurer; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./throttle */ \"./src/scripts/utils/throttle.js\");\n\n\n\n\nvar getDistanceByScrollPosition = function getDistanceByScrollPosition(init, current) {\n  var q = init > current ? 1 : -1;\n  return (init - current) * q;\n};\n\nvar ScrollVelocityMeasurer =\n/*#__PURE__*/\nfunction () {\n  function ScrollVelocityMeasurer() {\n    var _this = this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ScrollVelocityMeasurer);\n\n    this._pageY = Math.round(window.pageYOffset);\n    this._time = 0;\n\n    this._cb = function () {};\n\n    this._fn = Object(_throttle__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function (ev) {\n      var timeStamp = ev.timeStamp;\n      var pageY = Math.round(window.pageYOffset);\n      var distance = getDistanceByScrollPosition(_this._pageY, pageY);\n      var time = timeStamp - _this._time;\n      var speed = distance / time;\n      _this._pageY = pageY;\n      _this._time = timeStamp;\n      _this._speed = speed;\n    }, 50);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ScrollVelocityMeasurer, [{\n    key: \"on\",\n    value: function on(cb) {\n      if (cb) this._cb = cb;\n      $(document).scroll(this._fn);\n    }\n  }, {\n    key: \"off\",\n    value: function off() {\n      $(document).unbind('scroll', this._fn);\n    }\n  }, {\n    key: \"_speed\",\n    set: function set(speed) {\n      this._cb(speed);\n    }\n  }]);\n\n  return ScrollVelocityMeasurer;\n}();\n\n//# sourceURL=webpack:///./src/scripts/utils/scroll-velocity-measurer.js?");

/***/ }),

/***/ "./src/scripts/utils/throttle.js":
/*!***************************************!*\
  !*** ./src/scripts/utils/throttle.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (fn, ms) {\n  var throttle = false;\n\n  function handle() {\n    if (!throttle) {\n      throttle = true;\n\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      fn.apply(this, args);\n      setTimeout(function () {\n        throttle = false;\n      }, ms);\n    }\n  }\n\n  return handle;\n});\n\n//# sourceURL=webpack:///./src/scripts/utils/throttle.js?");

/***/ })

/******/ });