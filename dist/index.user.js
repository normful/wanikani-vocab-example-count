// ==UserScript==
// @name              WaniKani Vocab Example Count
// @author            Norman Sue
// @description       Shows the number of Yourei.jp examples for a vocabulary item.
// @version           0.0.1
// @update            1/6/2019, 3:48:37 PM
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gm_http_1 = __webpack_require__(1);
var app_1 = __webpack_require__(2);
// Set `debug: true` to enable GM.xmlHttpRequest logging
gm_http_1.default.setConfig({ debug: true });
var app = new app_1.App();
app.init();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by axetroy on 17-6-23.
 */
/// <reference path="./index.d.ts" />
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(func) {
    return typeof func === 'function';
}
var Http = (function () {
    function Http(config) {
        if (config === void 0) { config = {}; }
        this.config = config;
    }
    Http.prototype.setConfig = function (config) {
        if (config === void 0) { config = {}; }
        this.config = __assign({}, this.config, config);
    };
    Http.prototype.create = function (config) {
        return new Http(config);
    };
    Http.prototype.request = function (method, url, data, header, config) {
        var _this = this;
        if (data === void 0) { data = ''; }
        if (header === void 0) { header = {}; }
        if (config === void 0) { config = {}; }
        return new Promise(function (resolve, reject) {
            var commonRequestConfig = {
                method: method,
                url: url,
                data: data,
                header: header
            };
            var GM_xmlhttpRequestConfig = __assign({}, commonRequestConfig, config, _this.config);
            var onreadystatechange = GM_xmlhttpRequestConfig.onreadystatechange, onerror = GM_xmlhttpRequestConfig.onerror, onabort = GM_xmlhttpRequestConfig.onabort, ontimeout = GM_xmlhttpRequestConfig.ontimeout;
            GM_xmlhttpRequestConfig.synchronous = true; // async
            GM_xmlhttpRequestConfig.onreadystatechange = function (response) {
                try {
                    isFunction(onreadystatechange) &&
                        onreadystatechange.call(this, response);
                }
                catch (err) {
                    reject(err);
                }
                if (response.readyState !== 4)
                    return;
                response.status >= 200 && response.status < 400
                    ? resolve(response)
                    : reject(response);
            };
            GM_xmlhttpRequestConfig.onerror = function (response) {
                try {
                    isFunction(onerror) && onerror.call(this, response);
                    reject(response);
                }
                catch (err) {
                    reject(err);
                }
            };
            GM_xmlhttpRequestConfig.onabort = function (response) {
                try {
                    isFunction(onabort) && onabort.call(this, response);
                    reject(response);
                }
                catch (err) {
                    reject(err);
                }
            };
            GM_xmlhttpRequestConfig.ontimeout = function (response) {
                try {
                    isFunction(ontimeout) && ontimeout.call(this, response);
                    reject(response);
                }
                catch (err) {
                    reject(err);
                }
            };
            if (_this.config.debug) {
                console.log("%c[" + commonRequestConfig.method.toUpperCase() + "]%c: " + commonRequestConfig.url, 'color: green', 'color: #000;text-style: under-line');
            }
            GM_xmlhttpRequest(__assign({}, GM_xmlhttpRequestConfig));
        });
    };
    Http.prototype.get = function (url, data, header, config) {
        return this.request('GET', url, data, header, config);
    };
    Http.prototype.post = function (url, data, header, config) {
        return this.request('POST', url, data, header, config);
    };
    Http.prototype.put = function (url, data, header, config) {
        return this.request('PUT', url, data, header, config);
    };
    Http.prototype['delete'] = function (url, data, header, config) {
        return this.request('DELETE', url, data, header, config);
    };
    Http.prototype.head = function (url, data, header, config) {
        return this.request('HEAD', url, data, header, config);
    };
    return Http;
}());
exports.Http = Http;
var timeout = 5000;
exports.timeout = timeout;
var http = new Http({ timeout: timeout });
exports.http = http;
exports.default = http;


/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(3);
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.init = function () {
        addEventListener("DOMContentLoaded", this.onDomContentLoaded.bind(this));
    };
    App.prototype.onDomContentLoaded = function () {
        dom_1.createMutationObserver();
    };
    return App;
}());
exports.App = App;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __webpack_require__(4);
var gm_http_1 = __webpack_require__(1);
var getVocab_1 = __webpack_require__(5);
var extractExampleCount_1 = __webpack_require__(6);
var domConstants_1 = __webpack_require__(7);
var Log = new logger_1.Logger();
var countCache = {
    yourei: {}
};
function createMutationObserver() {
    Log.debug("createMutationObserver");
    var obs = new MutationObserver(function (mutationRecords) {
        mutationRecords.forEach(function (mutationRecord) {
            maybeQueryYourei(mutationRecord);
        });
    });
    var optAttrs = { attributes: true };
    obs.observe(document.getElementById("supplement-voc-meaning"), optAttrs);
}
exports.createMutationObserver = createMutationObserver;
function maybeQueryYourei(mutationRecord) {
    if (!isVocabLesson()) {
        Log.debug("not vocab lesson");
        return null;
    }
    var vocab = getVocab_1.getVocab();
    if (!vocab) {
        Log.debug("vocab not found");
        return null;
    }
    if (!isTargetInlineStyleDisplayBlock(mutationRecord)) {
        Log.debug("mutation target inline style not display block");
        return null;
    }
    var cachedCount = countCache.yourei[vocab];
    if (cachedCount) {
        Log.debug("reusing cached yourei value vocab=" + vocab + " cachedCount=" + cachedCount);
        insertResults(cachedCount);
        return null;
    }
    queryYoureiThenInsertResults(vocab);
}
function isVocabLesson() {
    var mainInfo = document.getElementById("main-info");
    return mainInfo && mainInfo.className === "vocabulary";
}
function isTargetInlineStyleDisplayBlock(mutationRecord) {
    var node = mutationRecord.target;
    if (node instanceof HTMLElement) {
        // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap
        var attributes = node.attributes;
        // https://developer.mozilla.org/en-US/docs/Web/API/Attr
        var styleAttr = attributes.getNamedItem("style");
        return styleAttr.value === "display: block;";
    }
    return false;
}
function queryYoureiThenInsertResults(vocab) {
    Log.debug("queryYoureiThenInsertResults");
    var youreiUrl = "http://yourei.jp/" + encodeURIComponent(vocab);
    gm_http_1.http
        .get(youreiUrl)
        .then(function (res) {
        var exampleCount = extractExampleCount_1.extractExampleCount(res.responseText);
        if (!exampleCount) {
            return null;
        }
        countCache.yourei[vocab] = exampleCount;
        Log.debug("countCache.yourei updated", countCache.yourei);
        insertResults(exampleCount);
    })
        .catch(function (err) {
        Log.error("yourei.jp err:", err);
    });
}
function insertResults(exampleCount) {
    Log.debug("insertResults");
    if ($("#" + domConstants_1.headerID).length === 0) {
        var headerEl = $("<h2>")
            .text("Yourei.jp Examples")
            .attr("id", domConstants_1.headerID);
        var countEl = $("<div>")
            .text(exampleCount.toString())
            .attr("id", domConstants_1.countID);
        var targetEl = $("#supplement-voc-meaning .pure-u-1-4");
        targetEl.append(headerEl);
        targetEl.append(countEl);
        return null;
    }
    $("#" + domConstants_1.countID).text(exampleCount.toString());
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:no-console */
Object.defineProperty(exports, "__esModule", { value: true });
var logPrefix = "[WKVEC] ";
var Logger = /** @class */ (function () {
    function Logger() {
        this.prefix = logPrefix;
        this.disableLogging = false; // Set to false for development
    }
    Logger.prototype.debug = function (msg) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.disableLogging) {
            return;
        }
        console.debug.apply(console, [this.prefix + msg].concat(args));
    };
    Logger.prototype.info = function (msg) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.disableLogging) {
            return;
        }
        console.log.apply(console, [this.prefix + msg].concat(args));
    };
    Logger.prototype.warn = function (msg) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.disableLogging) {
            return;
        }
        console.warn.apply(console, [this.prefix + msg].concat(args));
    };
    Logger.prototype.error = function (msg) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.disableLogging) {
            return;
        }
        console.error.apply(console, [this.prefix + msg].concat(args));
    };
    return Logger;
}());
exports.Logger = Logger;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getVocab() {
    var vocabNode = $("#character");
    if (vocabNode === undefined || vocabNode === null) {
        return null;
    }
    return vocabNode.text().trim();
}
exports.getVocab = getVocab;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function extractExampleCount(html) {
    var spanStart = html.indexOf('<span id="num-examples"');
    if (spanStart === -1) {
        return null;
    }
    var spanTextStart = html.indexOf(">", spanStart);
    if (spanTextStart === -1) {
        return null;
    }
    var spanTextEnd = html.indexOf("</span>", spanStart);
    if (spanTextEnd === -1) {
        return null;
    }
    var countString = html
        .substring(spanTextStart + 1, spanTextEnd)
        .replace(/,/g, "");
    var countNumber = Number(countString);
    if (countNumber >= 0) {
        return countNumber;
    }
    return null;
}
exports.extractExampleCount = extractExampleCount;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.headerID = "wanikani_vocab_example_count_header";
exports.countID = "wanikani_vocab_example_count_count";


/***/ })
/******/ ]);