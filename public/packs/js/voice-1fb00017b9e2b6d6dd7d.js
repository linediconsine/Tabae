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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/voice.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/voice.js":
/*!***************************************!*\
  !*** ./app/javascript/packs/voice.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/app/javascript/packs/voice.js: Unexpected token (8:10)\n\n   6 | \n   7 | export class TalkAloudService {\n>  8 |   editable: false;\n     |           ^\n   9 |   ttsAPI = 'speechSynthesis' in window;\n  10 |   title = 'talktome';\n  11 |   Elements: Message[];\n    at Parser.raise (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:7012:17)\n    at Parser.unexpected (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:8405:16)\n    at Parser.parseClassMemberWithIsStatic (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:11639:12)\n    at Parser.parseClassMember (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:11532:10)\n    at withTopicForbiddingContext (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:11487:14)\n    at Parser.withTopicForbiddingContext (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:10565:14)\n    at Parser.parseClassBody (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:11464:10)\n    at Parser.parseClass (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:11438:22)\n    at Parser.parseStatementContent (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:10732:21)\n    at Parser.parseStatement (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:10690:17)\n    at Parser.parseExportDeclaration (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:11877:17)\n    at Parser.maybeParseExportDeclaration (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:11833:31)\n    at Parser.parseExport (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:11763:29)\n    at Parser.parseStatementContent (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:10794:27)\n    at Parser.parseStatement (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:10690:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:11266:25)\n    at Parser.parseBlockBody (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:11253:10)\n    at Parser.parseTopLevel (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:10621:10)\n    at Parser.parse (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:12131:10)\n    at parse (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/parser/lib/index.js:12182:38)\n    at parser (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/core/lib/transformation/normalize-file.js:187:34)\n    at normalizeFile (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/core/lib/transformation/normalize-file.js:113:11)\n    at runSync (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/Users/marco-explorabiotech/Documents/RoR/tabae2/tabae/node_modules/@babel/core/lib/transform.js:34:34)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ })

/******/ });
//# sourceMappingURL=voice-1fb00017b9e2b6d6dd7d.js.map