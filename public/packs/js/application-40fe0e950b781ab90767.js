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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/app/javascript/packs/application.js: Unexpected token (38:14)\n\n  36 |       color: \"color\",\n  37 |       group: \"group\",\n> 38 |       headers = {\n     |               ^\n  39 |         \"content-type\": \"application/json\",\n  40 |         \"X-CSRF-Token\": csrfToken,\n  41 |       }\n    at Parser.raise (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:7012:17)\n    at Parser.unexpected (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:8405:16)\n    at Parser.parseMaybeAssign (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:9046:12)\n    at Parser.parseExprListItem (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:10331:18)\n    at Parser.parseCallExpressionArguments (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:9434:22)\n    at Parser.parseSubscript (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:9342:29)\n    at Parser.parseSubscripts (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:9258:19)\n    at Parser.parseExprSubscripts (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:9247:17)\n    at Parser.parseMaybeUnary (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:9217:21)\n    at Parser.parseExprOps (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:9083:23)\n    at Parser.parseMaybeConditional (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:9056:23)\n    at Parser.parseMaybeAssign (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:9015:21)\n    at Parser.parseExpression (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:8965:23)\n    at Parser.parseStatementContent (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:10819:23)\n    at Parser.parseStatement (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:10690:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:11266:25)\n    at Parser.parseBlockBody (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:11253:10)\n    at Parser.parseBlock (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:11237:10)\n    at Parser.parseFunctionBody (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:10256:24)\n    at Parser.parseArrowExpression (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:10197:10)\n    at Parser.parseParenAndDistinguishExpression (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:9823:12)\n    at Parser.parseExprAtom (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:9582:21)\n    at Parser.parseExprSubscripts (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:9237:23)\n    at Parser.parseMaybeUnary (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:9217:21)\n    at Parser.parseExprOps (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:9083:23)\n    at Parser.parseMaybeConditional (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:9056:23)\n    at Parser.parseMaybeAssign (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:9015:21)\n    at Parser.parseExprListItem (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:10331:18)\n    at Parser.parseCallExpressionArguments (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:9434:22)\n    at Parser.parseSubscript (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:9342:29)");

/***/ })

/******/ });
//# sourceMappingURL=application-40fe0e950b781ab90767.js.map