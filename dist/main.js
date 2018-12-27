(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["extension"] = factory();
	else
		root["extension"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Export functions you want to work with, see documentation for details:
 * https://github.com/zeplin/zeplin-extension-documentation
 */

var xmlColors = __webpack_require__(1);
var xmlTextStyles = __webpack_require__(3);

function layer(context, selectedLayer) {}

function styleguideColors(context, colors) {
  var code = "<!-- Project Color palette -->\n\n";
  code += xmlColors.getColorsXMLSnippet(colors);

  return {
    code: code,
    language: "xml"
  };
}

function styleguideTextStyles(context, textStyles) {}

function exportStyleguideColors(context, colors) {}

function exportStyleguideTextStyles(context, textStyles) {}

function comment(context, text) {}

exports.default = {
  layer,
  styleguideColors,
  styleguideTextStyles,
  exportStyleguideColors,
  exportStyleguideTextStyles,
  comment
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

function getColorsXMLSnippet(colors) {
  var code = "<resources>\n";

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = colors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var color = _step.value;

      var hexColor = color.toHex();
      code += utils.tab(1) + `<color name="${color.name}">#`;
      if (color.a != 1) {
        code += `${hexColor.a}`;
      }
      code += `${hexColor.r}${hexColor.g}${hexColor.b}</color>\n`;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  code += "</resources>";
  return code;
}

module.exports = { getColorsXMLSnippet };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function tab(count) {
  var result = "";
  for (var i = 0; i < count; i++) {
    result += "\t";
  }
  return result;
}

module.exports = { tab };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmYTg2MWYzYmRiNWE0ZGUxMjUyMyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3htbENvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiXSwibmFtZXMiOlsieG1sQ29sb3JzIiwicmVxdWlyZSIsInhtbFRleHRTdHlsZXMiLCJsYXllciIsImNvbnRleHQiLCJzZWxlY3RlZExheWVyIiwic3R5bGVndWlkZUNvbG9ycyIsImNvbG9ycyIsImNvZGUiLCJnZXRDb2xvcnNYTUxTbmlwcGV0IiwibGFuZ3VhZ2UiLCJzdHlsZWd1aWRlVGV4dFN0eWxlcyIsInRleHRTdHlsZXMiLCJleHBvcnRTdHlsZWd1aWRlQ29sb3JzIiwiZXhwb3J0U3R5bGVndWlkZVRleHRTdHlsZXMiLCJjb21tZW50IiwidGV4dCIsInV0aWxzIiwiY29sb3IiLCJoZXhDb2xvciIsInRvSGV4IiwidGFiIiwibmFtZSIsImEiLCJyIiwiZyIsImIiLCJtb2R1bGUiLCJleHBvcnRzIiwiY291bnQiLCJyZXN1bHQiLCJpIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBOzs7OztBQUtBLElBQUlBLFlBQVlDLG1CQUFPQSxDQUFDLENBQVIsQ0FBaEI7QUFDQSxJQUFJQyxnQkFBZ0JELG1CQUFPQSxDQUFDLENBQVIsQ0FBcEI7O0FBRUEsU0FBU0UsS0FBVCxDQUFlQyxPQUFmLEVBQXdCQyxhQUF4QixFQUF1QyxDQUV0Qzs7QUFFRCxTQUFTQyxnQkFBVCxDQUEwQkYsT0FBMUIsRUFBbUNHLE1BQW5DLEVBQTJDO0FBQ3pDLE1BQUlDLE9BQU8sb0NBQVg7QUFDQUEsVUFBUVIsVUFBVVMsbUJBQVYsQ0FBOEJGLE1BQTlCLENBQVI7O0FBRUEsU0FBTztBQUNQQyxVQUFNQSxJQURDO0FBRVBFLGNBQVU7QUFGSCxHQUFQO0FBSUQ7O0FBRUQsU0FBU0Msb0JBQVQsQ0FBOEJQLE9BQTlCLEVBQXVDUSxVQUF2QyxFQUFtRCxDQUVsRDs7QUFFRCxTQUFTQyxzQkFBVCxDQUFnQ1QsT0FBaEMsRUFBeUNHLE1BQXpDLEVBQWlELENBRWhEOztBQUVELFNBQVNPLDBCQUFULENBQW9DVixPQUFwQyxFQUE2Q1EsVUFBN0MsRUFBeUQsQ0FFeEQ7O0FBRUQsU0FBU0csT0FBVCxDQUFpQlgsT0FBakIsRUFBMEJZLElBQTFCLEVBQWdDLENBRS9COztrQkFFYztBQUNYYixPQURXO0FBRVhHLGtCQUZXO0FBR1hLLHNCQUhXO0FBSVhFLHdCQUpXO0FBS1hDLDRCQUxXO0FBTVhDO0FBTlcsQzs7Ozs7Ozs7O0FDdENmLElBQUlFLFFBQVFoQixtQkFBT0EsQ0FBQyxDQUFSLENBQVo7O0FBRUEsU0FBU1EsbUJBQVQsQ0FBNkJGLE1BQTdCLEVBQXFDO0FBQ25DLE1BQUlDLE9BQU8sZUFBWDs7QUFEbUM7QUFBQTtBQUFBOztBQUFBO0FBR25DLHlCQUFpQkQsTUFBakIsOEhBQXlCO0FBQUEsVUFBakJXLEtBQWlCOztBQUN2QixVQUFJQyxXQUFXRCxNQUFNRSxLQUFOLEVBQWY7QUFDQVosY0FBUVMsTUFBTUksR0FBTixDQUFVLENBQVYsSUFBZ0IsZ0JBQWVILE1BQU1JLElBQUssS0FBbEQ7QUFDQSxVQUFJSixNQUFNSyxDQUFOLElBQVcsQ0FBZixFQUFrQjtBQUNoQmYsZ0JBQVMsR0FBRVcsU0FBU0ksQ0FBRSxFQUF0QjtBQUNEO0FBQ0RmLGNBQVMsR0FBRVcsU0FBU0ssQ0FBRSxHQUFFTCxTQUFTTSxDQUFFLEdBQUVOLFNBQVNPLENBQUUsWUFBaEQ7QUFDRDtBQVZrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVluQ2xCLFVBQVEsY0FBUjtBQUNBLFNBQU9BLElBQVA7QUFDRDs7QUFFRG1CLE9BQU9DLE9BQVAsR0FBaUIsRUFBRW5CLG1CQUFGLEVBQWpCLEM7Ozs7Ozs7OztBQ2xCQSxTQUFTWSxHQUFULENBQWFRLEtBQWIsRUFBb0I7QUFDbEIsTUFBSUMsU0FBUyxFQUFiO0FBQ0EsT0FBSSxJQUFJQyxJQUFJLENBQVosRUFBZUEsSUFBSUYsS0FBbkIsRUFBMEJFLEdBQTFCLEVBQStCO0FBQzdCRCxjQUFVLElBQVY7QUFDRDtBQUNELFNBQU9BLE1BQVA7QUFDRDs7QUFFREgsT0FBT0MsT0FBUCxHQUFpQixFQUFFUCxHQUFGLEVBQWpCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImV4dGVuc2lvblwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJleHRlbnNpb25cIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmYTg2MWYzYmRiNWE0ZGUxMjUyMyIsIi8qKlxuICogRXhwb3J0IGZ1bmN0aW9ucyB5b3Ugd2FudCB0byB3b3JrIHdpdGgsIHNlZSBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxzOlxuICogaHR0cHM6Ly9naXRodWIuY29tL3plcGxpbi96ZXBsaW4tZXh0ZW5zaW9uLWRvY3VtZW50YXRpb25cbiAqL1xuXG52YXIgeG1sQ29sb3JzID0gcmVxdWlyZShcIi4veG1sQ29sb3JzLmpzXCIpXG52YXIgeG1sVGV4dFN0eWxlcyA9IHJlcXVpcmUoXCIuL3htbFRleHRTdHlsZXMuanNcIilcblxuZnVuY3Rpb24gbGF5ZXIoY29udGV4dCwgc2VsZWN0ZWRMYXllcikge1xuXG59XG5cbmZ1bmN0aW9uIHN0eWxlZ3VpZGVDb2xvcnMoY29udGV4dCwgY29sb3JzKSB7XG4gIHZhciBjb2RlID0gXCI8IS0tIFByb2plY3QgQ29sb3IgcGFsZXR0ZSAtLT5cXG5cXG5cIjtcbiAgY29kZSArPSB4bWxDb2xvcnMuZ2V0Q29sb3JzWE1MU25pcHBldChjb2xvcnMpO1xuXG4gIHJldHVybiB7XG4gIGNvZGU6IGNvZGUsXG4gIGxhbmd1YWdlOiBcInhtbFwiXG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlZ3VpZGVUZXh0U3R5bGVzKGNvbnRleHQsIHRleHRTdHlsZXMpIHtcblxufVxuXG5mdW5jdGlvbiBleHBvcnRTdHlsZWd1aWRlQ29sb3JzKGNvbnRleHQsIGNvbG9ycykge1xuXG59XG5cbmZ1bmN0aW9uIGV4cG9ydFN0eWxlZ3VpZGVUZXh0U3R5bGVzKGNvbnRleHQsIHRleHRTdHlsZXMpIHtcblxufVxuXG5mdW5jdGlvbiBjb21tZW50KGNvbnRleHQsIHRleHQpIHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbGF5ZXIsXG4gICAgc3R5bGVndWlkZUNvbG9ycyxcbiAgICBzdHlsZWd1aWRlVGV4dFN0eWxlcyxcbiAgICBleHBvcnRTdHlsZWd1aWRlQ29sb3JzLFxuICAgIGV4cG9ydFN0eWxlZ3VpZGVUZXh0U3R5bGVzLFxuICAgIGNvbW1lbnRcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzLmpzJylcblxuZnVuY3Rpb24gZ2V0Q29sb3JzWE1MU25pcHBldChjb2xvcnMpIHtcbiAgdmFyIGNvZGUgPSBcIjxyZXNvdXJjZXM+XFxuXCI7XG5cbiAgZm9yKHZhciBjb2xvciBvZiBjb2xvcnMpIHtcbiAgICB2YXIgaGV4Q29sb3IgPSBjb2xvci50b0hleCgpO1xuICAgIGNvZGUgKz0gdXRpbHMudGFiKDEpICsgYDxjb2xvciBuYW1lPVwiJHtjb2xvci5uYW1lfVwiPiNgO1xuICAgIGlmIChjb2xvci5hICE9IDEpIHtcbiAgICAgIGNvZGUgKz0gYCR7aGV4Q29sb3IuYX1gO1xuICAgIH1cbiAgICBjb2RlICs9IGAke2hleENvbG9yLnJ9JHtoZXhDb2xvci5nfSR7aGV4Q29sb3IuYn08L2NvbG9yPlxcbmA7XG4gIH1cblxuICBjb2RlICs9IFwiPC9yZXNvdXJjZXM+XCI7XG4gIHJldHVybiBjb2RlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgZ2V0Q29sb3JzWE1MU25pcHBldCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3htbENvbG9ycy5qcyIsImZ1bmN0aW9uIHRhYihjb3VudCkge1xuICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICByZXN1bHQgKz0gXCJcXHRcIjtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgdGFiIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiXSwic291cmNlUm9vdCI6IiJ9