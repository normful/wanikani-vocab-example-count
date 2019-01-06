// ==UserScript==
// @name              WaniKani Vocab Example Count
// @author            Norman Sue
// @description       Shows the number of Yourei.jp examples for a vocabulary item.
// @version           0.0.1
// @update            1/6/2019, 3:39:14 PM
// @grant             GM_xmlhttpRequest
// @include           https://www.wanikani.com/lesson/session
// @run-at            document-start
// @namespace         https://greasyfork.org/en/users/56591-normful
// @connect           yourei.jp
// @license           The MIT License (MIT); http://opensource.org/licenses/MIT
// ==/UserScript==


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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar gm_http_1 = __webpack_require__(/*! gm-http */ \"./node_modules/gm-http/dist/index.js\");\nvar app_1 = __webpack_require__(/*! ./src/app */ \"./src/app.ts\");\n// Set `debug: true` to enable GM.xmlHttpRequest logging\ngm_http_1.default.setConfig({ debug: true });\nvar app = new app_1.App();\napp.init();\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./node_modules/gm-http/dist/index.js":
/*!********************************************!*\
  !*** ./node_modules/gm-http/dist/index.js ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse {}\n})(this, function() {\nreturn /******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, {\n/******/ \t\t\t\tconfigurable: false,\n/******/ \t\t\t\tenumerable: true,\n/******/ \t\t\t\tget: getter\n/******/ \t\t\t});\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = 0);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\r\n/**\r\n * Created by axetroy on 17-6-23.\r\n */\r\n/// <reference path=\"./index.d.ts\" />\r\nvar __assign = (this && this.__assign) || Object.assign || function(t) {\r\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n        s = arguments[i];\r\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n            t[p] = s[p];\r\n    }\r\n    return t;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction isFunction(func) {\r\n    return typeof func === 'function';\r\n}\r\nvar Http = (function () {\r\n    function Http(config) {\r\n        if (config === void 0) { config = {}; }\r\n        this.config = config;\r\n    }\r\n    Http.prototype.setConfig = function (config) {\r\n        if (config === void 0) { config = {}; }\r\n        this.config = __assign({}, this.config, config);\r\n    };\r\n    Http.prototype.create = function (config) {\r\n        return new Http(config);\r\n    };\r\n    Http.prototype.request = function (method, url, data, header, config) {\r\n        var _this = this;\r\n        if (data === void 0) { data = ''; }\r\n        if (header === void 0) { header = {}; }\r\n        if (config === void 0) { config = {}; }\r\n        return new Promise(function (resolve, reject) {\r\n            var commonRequestConfig = {\r\n                method: method,\r\n                url: url,\r\n                data: data,\r\n                header: header\r\n            };\r\n            var GM_xmlhttpRequestConfig = __assign({}, commonRequestConfig, config, _this.config);\r\n            var onreadystatechange = GM_xmlhttpRequestConfig.onreadystatechange, onerror = GM_xmlhttpRequestConfig.onerror, onabort = GM_xmlhttpRequestConfig.onabort, ontimeout = GM_xmlhttpRequestConfig.ontimeout;\r\n            GM_xmlhttpRequestConfig.synchronous = true; // async\r\n            GM_xmlhttpRequestConfig.onreadystatechange = function (response) {\r\n                try {\r\n                    isFunction(onreadystatechange) &&\r\n                        onreadystatechange.call(this, response);\r\n                }\r\n                catch (err) {\r\n                    reject(err);\r\n                }\r\n                if (response.readyState !== 4)\r\n                    return;\r\n                response.status >= 200 && response.status < 400\r\n                    ? resolve(response)\r\n                    : reject(response);\r\n            };\r\n            GM_xmlhttpRequestConfig.onerror = function (response) {\r\n                try {\r\n                    isFunction(onerror) && onerror.call(this, response);\r\n                    reject(response);\r\n                }\r\n                catch (err) {\r\n                    reject(err);\r\n                }\r\n            };\r\n            GM_xmlhttpRequestConfig.onabort = function (response) {\r\n                try {\r\n                    isFunction(onabort) && onabort.call(this, response);\r\n                    reject(response);\r\n                }\r\n                catch (err) {\r\n                    reject(err);\r\n                }\r\n            };\r\n            GM_xmlhttpRequestConfig.ontimeout = function (response) {\r\n                try {\r\n                    isFunction(ontimeout) && ontimeout.call(this, response);\r\n                    reject(response);\r\n                }\r\n                catch (err) {\r\n                    reject(err);\r\n                }\r\n            };\r\n            if (_this.config.debug) {\r\n                console.log(\"%c[\" + commonRequestConfig.method.toUpperCase() + \"]%c: \" + commonRequestConfig.url, 'color: green', 'color: #000;text-style: under-line');\r\n            }\r\n            GM_xmlhttpRequest(__assign({}, GM_xmlhttpRequestConfig));\r\n        });\r\n    };\r\n    Http.prototype.get = function (url, data, header, config) {\r\n        return this.request('GET', url, data, header, config);\r\n    };\r\n    Http.prototype.post = function (url, data, header, config) {\r\n        return this.request('POST', url, data, header, config);\r\n    };\r\n    Http.prototype.put = function (url, data, header, config) {\r\n        return this.request('PUT', url, data, header, config);\r\n    };\r\n    Http.prototype['delete'] = function (url, data, header, config) {\r\n        return this.request('DELETE', url, data, header, config);\r\n    };\r\n    Http.prototype.head = function (url, data, header, config) {\r\n        return this.request('HEAD', url, data, header, config);\r\n    };\r\n    return Http;\r\n}());\r\nexports.Http = Http;\r\nvar timeout = 5000;\r\nexports.timeout = timeout;\r\nvar http = new Http({ timeout: timeout });\r\nexports.http = http;\r\nexports.default = http;\r\n\n\n/***/ })\n/******/ ]);\n});\n\n//# sourceURL=webpack:///./node_modules/gm-http/dist/index.js?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar logger_1 = __webpack_require__(/*! ./logger/logger */ \"./src/logger/logger.ts\");\nvar dom_1 = __webpack_require__(/*! ./dom/dom */ \"./src/dom/dom.ts\");\nvar Log = new logger_1.Logger();\nvar App = /** @class */ (function () {\n    function App() {\n    }\n    App.prototype.init = function () {\n        addEventListener(\"DOMContentLoaded\", this.onDomContentLoaded.bind(this));\n    };\n    App.prototype.onDomContentLoaded = function () {\n        Log.debug(\"onDomContentLoaded\");\n        dom_1.createMutationObserver();\n    };\n    return App;\n}());\nexports.App = App;\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/dom/dom.ts":
/*!************************!*\
  !*** ./src/dom/dom.ts ***!
  \************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar logger_1 = __webpack_require__(/*! ../logger/logger */ \"./src/logger/logger.ts\");\nvar gm_http_1 = __webpack_require__(/*! gm-http */ \"./node_modules/gm-http/dist/index.js\");\nvar getVocab_1 = __webpack_require__(/*! ./getVocab */ \"./src/dom/getVocab.ts\");\nvar extractExampleCount_1 = __webpack_require__(/*! ../yourei/extractExampleCount */ \"./src/yourei/extractExampleCount.ts\");\nvar domConstants_1 = __webpack_require__(/*! ./domConstants */ \"./src/dom/domConstants.ts\");\nvar Log = new logger_1.Logger();\nvar countCache = {\n    yourei: {}\n};\nfunction isVocabLesson() {\n    var mainInfo = document.getElementById(\"main-info\");\n    return mainInfo && mainInfo.className === \"vocabulary\";\n}\nfunction createMutationObserver() {\n    Log.debug(\"createMutationObserver\");\n    var obs = new MutationObserver(function (mutationRecords) {\n        mutationRecords.forEach(function (mutationRecord) {\n            maybeQueryYourei(mutationRecord);\n        });\n    });\n    var optAttrs = { attributes: true };\n    obs.observe(document.getElementById(\"supplement-voc-meaning\"), optAttrs);\n}\nexports.createMutationObserver = createMutationObserver;\nfunction isTargetInlineStyleDisplayBlock(mutationRecord) {\n    var node = mutationRecord.target;\n    if (node instanceof HTMLElement) {\n        // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap\n        var attributes = node.attributes;\n        // https://developer.mozilla.org/en-US/docs/Web/API/Attr\n        var styleAttr = attributes.getNamedItem(\"style\");\n        return styleAttr.value === \"display: block;\";\n    }\n    return false;\n}\nfunction maybeQueryYourei(mutationRecord) {\n    if (!isVocabLesson()) {\n        Log.debug(\"not vocab lesson\");\n        return null;\n    }\n    var vocab = getVocab_1.getVocab();\n    if (!vocab) {\n        Log.debug(\"vocab not found\");\n        return null;\n    }\n    if (!isTargetInlineStyleDisplayBlock(mutationRecord)) {\n        Log.debug(\"mutation target inline style not display block\");\n        return null;\n    }\n    var cachedCount = countCache.yourei[vocab];\n    if (cachedCount) {\n        Log.debug(\"reusing cached yourei value vocab=\" + vocab + \" cachedCount=\" + cachedCount);\n        insertResults(cachedCount);\n        return null;\n    }\n    queryYoureiThenInsertResults(vocab);\n}\nfunction queryYoureiThenInsertResults(vocab) {\n    Log.debug(\"queryYoureiThenInsertResults\");\n    var youreiUrl = \"http://yourei.jp/\" + encodeURIComponent(vocab);\n    gm_http_1.http\n        .get(youreiUrl)\n        .then(function (res) {\n        var exampleCount = extractExampleCount_1.extractExampleCount(res.responseText);\n        if (!exampleCount) {\n            return null;\n        }\n        countCache.yourei[vocab] = exampleCount;\n        Log.debug(\"countCache.yourei updated\", countCache.yourei);\n        insertResults(exampleCount);\n    })\n        .catch(function (err) {\n        Log.error(\"yourei.jp err:\", err);\n    });\n}\nfunction insertResults(exampleCount) {\n    Log.debug(\"insertResults\");\n    if ($(\"#\" + domConstants_1.headerID).length === 0) {\n        var headerEl = $(\"<h2>\")\n            .text(\"Yourei.jp Examples\")\n            .attr(\"id\", domConstants_1.headerID);\n        var countEl = $(\"<div>\")\n            .text(exampleCount.toString())\n            .attr(\"id\", domConstants_1.countID);\n        var targetEl = $(\"#supplement-voc-meaning .pure-u-1-4\");\n        targetEl.append(headerEl);\n        targetEl.append(countEl);\n        return null;\n    }\n    $(\"#\" + domConstants_1.countID).text(exampleCount.toString());\n}\n\n\n//# sourceURL=webpack:///./src/dom/dom.ts?");

/***/ }),

/***/ "./src/dom/domConstants.ts":
/*!*********************************!*\
  !*** ./src/dom/domConstants.ts ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.headerID = \"wanikani_vocab_example_count_header\";\nexports.countID = \"wanikani_vocab_example_count_count\";\n\n\n//# sourceURL=webpack:///./src/dom/domConstants.ts?");

/***/ }),

/***/ "./src/dom/getVocab.ts":
/*!*****************************!*\
  !*** ./src/dom/getVocab.ts ***!
  \*****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction getVocab() {\n    var vocabNode = $(\"#character\");\n    if (vocabNode === undefined || vocabNode === null) {\n        return null;\n    }\n    return vocabNode.text().trim();\n}\nexports.getVocab = getVocab;\n\n\n//# sourceURL=webpack:///./src/dom/getVocab.ts?");

/***/ }),

/***/ "./src/logger/logger.ts":
/*!******************************!*\
  !*** ./src/logger/logger.ts ***!
  \******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* tslint:disable:no-console */\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar logPrefix = \"[WKVEC] \";\nvar Logger = /** @class */ (function () {\n    function Logger() {\n        this.prefix = logPrefix;\n        this.disableLogging = false; // Set to false for development\n    }\n    Logger.prototype.debug = function (msg) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        if (this.disableLogging) {\n            return;\n        }\n        console.debug.apply(console, [this.prefix + msg].concat(args));\n    };\n    Logger.prototype.info = function (msg) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        if (this.disableLogging) {\n            return;\n        }\n        console.log.apply(console, [this.prefix + msg].concat(args));\n    };\n    Logger.prototype.warn = function (msg) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        if (this.disableLogging) {\n            return;\n        }\n        console.warn.apply(console, [this.prefix + msg].concat(args));\n    };\n    Logger.prototype.error = function (msg) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        if (this.disableLogging) {\n            return;\n        }\n        console.error.apply(console, [this.prefix + msg].concat(args));\n    };\n    return Logger;\n}());\nexports.Logger = Logger;\n\n\n//# sourceURL=webpack:///./src/logger/logger.ts?");

/***/ }),

/***/ "./src/yourei/extractExampleCount.ts":
/*!*******************************************!*\
  !*** ./src/yourei/extractExampleCount.ts ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction extractExampleCount(html) {\n    var spanStart = html.indexOf('<span id=\"num-examples\"');\n    if (spanStart === -1) {\n        return null;\n    }\n    var spanTextStart = html.indexOf(\">\", spanStart);\n    if (spanTextStart === -1) {\n        return null;\n    }\n    var spanTextEnd = html.indexOf(\"</span>\", spanStart);\n    if (spanTextEnd === -1) {\n        return null;\n    }\n    var countString = html\n        .substring(spanTextStart + 1, spanTextEnd)\n        .replace(/,/g, \"\");\n    var countNumber = Number(countString);\n    if (countNumber >= 0) {\n        return countNumber;\n    }\n    return null;\n}\nexports.extractExampleCount = extractExampleCount;\n\n\n//# sourceURL=webpack:///./src/yourei/extractExampleCount.ts?");

/***/ })

/******/ });