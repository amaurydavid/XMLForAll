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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

function getColorsXMLSnippet(colors) {
  var code = "<resources>\n";

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = colors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var color = _step.value;

      code += utils.tab(1) + `<color name="${color.name}">${getColorHexXMLValue(color.toHex())}</color>\n`;
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

function getColorHexXMLValue(hexColor) {
  var code = "#";
  if (hexColor.a != 1) {
    code += `${hexColor.a}`;
  }
  code += `${hexColor.r}${hexColor.g}${hexColor.b}`;
  return code;
}

module.exports = { getColorsXMLSnippet, getColorHexXMLValue };

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Export functions you want to work with, see documentation for details:
 * https://github.com/zeplin/zeplin-extension-documentation
 */

var xmlColors = __webpack_require__(0);
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

function styleguideTextStyles(context, textStyles) {
  var code = "<!-- Project Texts styles -->\n\n";
  code += xmlTextStyles.getTextStylessXMLSnippet(context, textStyles);

  return {
    code: code,
    language: "xml"
  };
}

function exportStyleguideColors(context, colors) {
  var code = `<?xml version="1.0" encoding="utf-8"?>\n\n`;
  code += xmlColors.getColorsXMLSnippet(colors);

  return {
    code: code,
    language: "xml",
    filename: "colors.xml"
  };
}

function exportStyleguideTextStyles(context, textStyles) {
  var code = `<resources xmlns:tools="http://schemas.android.com/tools">\n\n`;
  code += xmlTextStyles.getTextStylessXMLSnippet(context, textStyles);

  return {
    code: code,
    language: "xml",
    filename: "styles.xml"
  };
}

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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);
var colors = __webpack_require__(0);

function getTextStylessXMLSnippet(context, textStyles) {
  var code = "<resources>";

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = textStyles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var textStyle = _step.value;

      code += "\n" + utils.tab(1) + `<style name="${textStyle.name}">\n`;

      code += utils.tab(2) + `<item name="android:fontFamily">@font/${textStyle.fontFamily}</item>\n`;
      code += utils.tab(2) + `<item name="android:fontWeight">${textStyle.fontWeight}</item>\n`;
      code += utils.tab(2) + `<item name="android:fontStyle">${getAndroidFontStyle(textStyle.fontStyle)}</item>\n`;
      code += utils.tab(2) + `<item name="android:textSize">${textStyle.fontSize}sp</item>\n`;

      var textAlign = getAndroidTextGravity(textStyle.textAlign);
      if (typeof textAlign !== 'undefined') {
        code += utils.tab(2) + `<item name="android:gravity">${textAlign}</item>\n`;
      }

      if (typeof textStyle.letterSpacing !== 'undefined' && textStyle.letterSpacing != 0) {
        code += utils.tab(2) + `<item name="android:letterSpacing">${textStyle.letterSpacing}</item>\n`;
      }

      if (typeof textStyle.lineHeight !== 'undefined') {
        code += utils.tab(2) + getAndroidLineheight(context, textStyle) + "\n";
      }

      if (typeof textStyle.color !== 'undefined') {
        code += utils.tab(2) + `<item name="android:textColor">${getAndroidColorValue(context, textStyle)}</item>\n`;
      }

      code += utils.tab(1) + "</style>\n";
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

module.exports = { getTextStylessXMLSnippet };

function getAndroidTextGravity(align) {
  if (align == "center") {
    return "center_horizontal";
  } else if (align == "left") {
    return "left";
  } else if (align == "right") {
    return "right";
  }
}

function getAndroidFontStyle(style) {
  if (style == "normal") {
    return style;
  } else {
    return "italic";
  }
}

function getAndroidLineheight(context, textStyle) {}

function getAndroidColorValue(context, textStyle) {
  var existingColor = context.project.findColorEqual(textStyle.color);
  if (typeof existingColor !== 'undefined') {
    return `@color/${existingColor.name}`;
  } else {
    return colors.getColorHexXMLValue(textStyle.color.toHex());
  }
}

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4NDg5MDE3Y2Q2YmZkNWNkNWRmZiIsIndlYnBhY2s6Ly8vLi9zcmMveG1sQ29sb3JzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3htbFRleHRTdHlsZXMuanMiXSwibmFtZXMiOlsidXRpbHMiLCJyZXF1aXJlIiwiZ2V0Q29sb3JzWE1MU25pcHBldCIsImNvbG9ycyIsImNvZGUiLCJjb2xvciIsInRhYiIsIm5hbWUiLCJnZXRDb2xvckhleFhNTFZhbHVlIiwidG9IZXgiLCJoZXhDb2xvciIsImEiLCJyIiwiZyIsImIiLCJtb2R1bGUiLCJleHBvcnRzIiwiY291bnQiLCJyZXN1bHQiLCJpIiwieG1sQ29sb3JzIiwieG1sVGV4dFN0eWxlcyIsImxheWVyIiwiY29udGV4dCIsInNlbGVjdGVkTGF5ZXIiLCJzdHlsZWd1aWRlQ29sb3JzIiwibGFuZ3VhZ2UiLCJzdHlsZWd1aWRlVGV4dFN0eWxlcyIsInRleHRTdHlsZXMiLCJnZXRUZXh0U3R5bGVzc1hNTFNuaXBwZXQiLCJleHBvcnRTdHlsZWd1aWRlQ29sb3JzIiwiZmlsZW5hbWUiLCJleHBvcnRTdHlsZWd1aWRlVGV4dFN0eWxlcyIsImNvbW1lbnQiLCJ0ZXh0IiwidGV4dFN0eWxlIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJnZXRBbmRyb2lkRm9udFN0eWxlIiwiZm9udFN0eWxlIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJnZXRBbmRyb2lkVGV4dEdyYXZpdHkiLCJsZXR0ZXJTcGFjaW5nIiwibGluZUhlaWdodCIsImdldEFuZHJvaWRMaW5laGVpZ2h0IiwiZ2V0QW5kcm9pZENvbG9yVmFsdWUiLCJhbGlnbiIsInN0eWxlIiwiZXhpc3RpbmdDb2xvciIsInByb2plY3QiLCJmaW5kQ29sb3JFcXVhbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQSxJQUFJQSxRQUFRQyxtQkFBT0EsQ0FBQyxDQUFSLENBQVo7O0FBRUEsU0FBU0MsbUJBQVQsQ0FBNkJDLE1BQTdCLEVBQXFDO0FBQ25DLE1BQUlDLE9BQU8sZUFBWDs7QUFEbUM7QUFBQTtBQUFBOztBQUFBO0FBR25DLHlCQUFpQkQsTUFBakIsOEhBQXlCO0FBQUEsVUFBakJFLEtBQWlCOztBQUN2QkQsY0FBUUosTUFBTU0sR0FBTixDQUFVLENBQVYsSUFBZ0IsZ0JBQWVELE1BQU1FLElBQUssS0FBSUMsb0JBQW9CSCxNQUFNSSxLQUFOLEVBQXBCLENBQW1DLFlBQXpGO0FBQ0Q7QUFMa0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPbkNMLFVBQVEsY0FBUjtBQUNBLFNBQU9BLElBQVA7QUFDRDs7QUFFRCxTQUFTSSxtQkFBVCxDQUE2QkUsUUFBN0IsRUFBdUM7QUFDckMsTUFBSU4sT0FBTyxHQUFYO0FBQ0EsTUFBSU0sU0FBU0MsQ0FBVCxJQUFjLENBQWxCLEVBQXFCO0FBQ25CUCxZQUFTLEdBQUVNLFNBQVNDLENBQUUsRUFBdEI7QUFDRDtBQUNEUCxVQUFTLEdBQUVNLFNBQVNFLENBQUUsR0FBRUYsU0FBU0csQ0FBRSxHQUFFSCxTQUFTSSxDQUFFLEVBQWhEO0FBQ0EsU0FBT1YsSUFBUDtBQUNEOztBQUVEVyxPQUFPQyxPQUFQLEdBQWlCLEVBQUVkLG1CQUFGLEVBQXVCTSxtQkFBdkIsRUFBakIsQzs7Ozs7Ozs7O0FDdEJBLFNBQVNGLEdBQVQsQ0FBYVcsS0FBYixFQUFvQjtBQUNsQixNQUFJQyxTQUFTLEVBQWI7QUFDQSxPQUFJLElBQUlDLElBQUksQ0FBWixFQUFlQSxJQUFJRixLQUFuQixFQUEwQkUsR0FBMUIsRUFBK0I7QUFDN0JELGNBQVUsSUFBVjtBQUNEO0FBQ0QsU0FBT0EsTUFBUDtBQUNEOztBQUVESCxPQUFPQyxPQUFQLEdBQWlCLEVBQUVWLEdBQUYsRUFBakIsQzs7Ozs7Ozs7Ozs7O0FDUkE7Ozs7O0FBS0EsSUFBSWMsWUFBWW5CLG1CQUFPQSxDQUFDLENBQVIsQ0FBaEI7QUFDQSxJQUFJb0IsZ0JBQWdCcEIsbUJBQU9BLENBQUMsQ0FBUixDQUFwQjs7QUFFQSxTQUFTcUIsS0FBVCxDQUFlQyxPQUFmLEVBQXdCQyxhQUF4QixFQUF1QyxDQUV0Qzs7QUFFRCxTQUFTQyxnQkFBVCxDQUEwQkYsT0FBMUIsRUFBbUNwQixNQUFuQyxFQUEyQztBQUN6QyxNQUFJQyxPQUFPLG9DQUFYO0FBQ0FBLFVBQVFnQixVQUFVbEIsbUJBQVYsQ0FBOEJDLE1BQTlCLENBQVI7O0FBRUEsU0FBTztBQUNMQyxVQUFNQSxJQUREO0FBRUxzQixjQUFVO0FBRkwsR0FBUDtBQUlEOztBQUVELFNBQVNDLG9CQUFULENBQThCSixPQUE5QixFQUF1Q0ssVUFBdkMsRUFBbUQ7QUFDakQsTUFBSXhCLE9BQU8sbUNBQVg7QUFDQUEsVUFBUWlCLGNBQWNRLHdCQUFkLENBQXVDTixPQUF2QyxFQUFnREssVUFBaEQsQ0FBUjs7QUFFQSxTQUFPO0FBQ0x4QixVQUFNQSxJQUREO0FBRUxzQixjQUFVO0FBRkwsR0FBUDtBQUlEOztBQUVELFNBQVNJLHNCQUFULENBQWdDUCxPQUFoQyxFQUF5Q3BCLE1BQXpDLEVBQWlEO0FBQy9DLE1BQUlDLE9BQVEsNENBQVo7QUFDQUEsVUFBUWdCLFVBQVVsQixtQkFBVixDQUE4QkMsTUFBOUIsQ0FBUjs7QUFFQSxTQUFPO0FBQ0xDLFVBQU1BLElBREQ7QUFFTHNCLGNBQVUsS0FGTDtBQUdMSyxjQUFVO0FBSEwsR0FBUDtBQUtEOztBQUVELFNBQVNDLDBCQUFULENBQW9DVCxPQUFwQyxFQUE2Q0ssVUFBN0MsRUFBeUQ7QUFDdkQsTUFBSXhCLE9BQVEsZ0VBQVo7QUFDQUEsVUFBUWlCLGNBQWNRLHdCQUFkLENBQXVDTixPQUF2QyxFQUFnREssVUFBaEQsQ0FBUjs7QUFFQSxTQUFPO0FBQ0x4QixVQUFNQSxJQUREO0FBRUxzQixjQUFVLEtBRkw7QUFHTEssY0FBVTtBQUhMLEdBQVA7QUFLRDs7QUFFRCxTQUFTRSxPQUFULENBQWlCVixPQUFqQixFQUEwQlcsSUFBMUIsRUFBZ0MsQ0FFL0I7O2tCQUVjO0FBQ1haLE9BRFc7QUFFWEcsa0JBRlc7QUFHWEUsc0JBSFc7QUFJWEcsd0JBSlc7QUFLWEUsNEJBTFc7QUFNWEM7QUFOVyxDOzs7Ozs7Ozs7QUMxRGYsSUFBSWpDLFFBQVFDLG1CQUFPQSxDQUFDLENBQVIsQ0FBWjtBQUNBLElBQUlFLFNBQVNGLG1CQUFPQSxDQUFDLENBQVIsQ0FBYjs7QUFFQSxTQUFTNEIsd0JBQVQsQ0FBa0NOLE9BQWxDLEVBQTJDSyxVQUEzQyxFQUF1RDtBQUNyRCxNQUFJeEIsT0FBTyxhQUFYOztBQURxRDtBQUFBO0FBQUE7O0FBQUE7QUFHckQseUJBQXFCd0IsVUFBckIsOEhBQWlDO0FBQUEsVUFBekJPLFNBQXlCOztBQUMvQi9CLGNBQVEsT0FBT0osTUFBTU0sR0FBTixDQUFVLENBQVYsQ0FBUCxHQUF1QixnQkFBZTZCLFVBQVU1QixJQUFLLE1BQTdEOztBQUVBSCxjQUFRSixNQUFNTSxHQUFOLENBQVUsQ0FBVixJQUFnQix5Q0FBd0M2QixVQUFVQyxVQUFXLFdBQXJGO0FBQ0FoQyxjQUFRSixNQUFNTSxHQUFOLENBQVUsQ0FBVixJQUFnQixtQ0FBa0M2QixVQUFVRSxVQUFXLFdBQS9FO0FBQ0FqQyxjQUFRSixNQUFNTSxHQUFOLENBQVUsQ0FBVixJQUFnQixrQ0FBaUNnQyxvQkFBb0JILFVBQVVJLFNBQTlCLENBQXlDLFdBQWxHO0FBQ0FuQyxjQUFRSixNQUFNTSxHQUFOLENBQVUsQ0FBVixJQUFnQixpQ0FBZ0M2QixVQUFVSyxRQUFTLGFBQTNFOztBQUVBLFVBQU1DLFlBQVlDLHNCQUFzQlAsVUFBVU0sU0FBaEMsQ0FBbEI7QUFDQSxVQUFJLE9BQU9BLFNBQVAsS0FBcUIsV0FBekIsRUFBc0M7QUFDcENyQyxnQkFBUUosTUFBTU0sR0FBTixDQUFVLENBQVYsSUFBZ0IsZ0NBQStCbUMsU0FBVSxXQUFqRTtBQUNEOztBQUVELFVBQUksT0FBT04sVUFBVVEsYUFBakIsS0FBbUMsV0FBbkMsSUFBa0RSLFVBQVVRLGFBQVYsSUFBMkIsQ0FBakYsRUFBb0Y7QUFDbEZ2QyxnQkFBUUosTUFBTU0sR0FBTixDQUFVLENBQVYsSUFBZ0Isc0NBQXFDNkIsVUFBVVEsYUFBYyxXQUFyRjtBQUNEOztBQUVELFVBQUksT0FBT1IsVUFBVVMsVUFBakIsS0FBZ0MsV0FBcEMsRUFBaUQ7QUFDL0N4QyxnQkFBUUosTUFBTU0sR0FBTixDQUFVLENBQVYsSUFBZXVDLHFCQUFxQnRCLE9BQXJCLEVBQThCWSxTQUE5QixDQUFmLEdBQTBELElBQWxFO0FBQ0Q7O0FBRUQsVUFBSSxPQUFPQSxVQUFVOUIsS0FBakIsS0FBMkIsV0FBL0IsRUFBNEM7QUFDMUNELGdCQUFRSixNQUFNTSxHQUFOLENBQVUsQ0FBVixJQUFnQixrQ0FBaUN3QyxxQkFBcUJ2QixPQUFyQixFQUE4QlksU0FBOUIsQ0FBeUMsV0FBbEc7QUFDRDs7QUFJRC9CLGNBQVFKLE1BQU1NLEdBQU4sQ0FBVSxDQUFWLElBQWUsWUFBdkI7QUFDRDtBQS9Cb0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFpQ3JERixVQUFRLGNBQVI7QUFDQSxTQUFPQSxJQUFQO0FBQ0Q7O0FBRURXLE9BQU9DLE9BQVAsR0FBaUIsRUFBRWEsd0JBQUYsRUFBakI7O0FBRUEsU0FBU2EscUJBQVQsQ0FBK0JLLEtBQS9CLEVBQXNDO0FBQ3BDLE1BQUlBLFNBQVMsUUFBYixFQUF1QjtBQUNyQixXQUFPLG1CQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUlBLFNBQVMsTUFBYixFQUFxQjtBQUMxQixXQUFPLE1BQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsU0FBUyxPQUFiLEVBQXNCO0FBQzNCLFdBQU8sT0FBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBU1QsbUJBQVQsQ0FBNkJVLEtBQTdCLEVBQW9DO0FBQ2xDLE1BQUlBLFNBQVMsUUFBYixFQUF1QjtBQUNyQixXQUFPQSxLQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBTyxRQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTSCxvQkFBVCxDQUE4QnRCLE9BQTlCLEVBQXVDWSxTQUF2QyxFQUFrRCxDQUVqRDs7QUFFRCxTQUFTVyxvQkFBVCxDQUE4QnZCLE9BQTlCLEVBQXVDWSxTQUF2QyxFQUFrRDtBQUNoRCxNQUFNYyxnQkFBZ0IxQixRQUFRMkIsT0FBUixDQUFnQkMsY0FBaEIsQ0FBK0JoQixVQUFVOUIsS0FBekMsQ0FBdEI7QUFDQSxNQUFJLE9BQU80QyxhQUFQLEtBQXlCLFdBQTdCLEVBQTBDO0FBQ3hDLFdBQVEsVUFBU0EsY0FBYzFDLElBQUssRUFBcEM7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPSixPQUFPSyxtQkFBUCxDQUEyQjJCLFVBQVU5QixLQUFWLENBQWdCSSxLQUFoQixFQUEzQixDQUFQO0FBQ0Q7QUFDRixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJleHRlbnNpb25cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZXh0ZW5zaW9uXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODQ4OTAxN2NkNmJmZDVjZDVkZmYiLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzLmpzJylcblxuZnVuY3Rpb24gZ2V0Q29sb3JzWE1MU25pcHBldChjb2xvcnMpIHtcbiAgdmFyIGNvZGUgPSBcIjxyZXNvdXJjZXM+XFxuXCI7XG5cbiAgZm9yKHZhciBjb2xvciBvZiBjb2xvcnMpIHtcbiAgICBjb2RlICs9IHV0aWxzLnRhYigxKSArIGA8Y29sb3IgbmFtZT1cIiR7Y29sb3IubmFtZX1cIj4ke2dldENvbG9ySGV4WE1MVmFsdWUoY29sb3IudG9IZXgoKSl9PC9jb2xvcj5cXG5gO1xuICB9XG5cbiAgY29kZSArPSBcIjwvcmVzb3VyY2VzPlwiO1xuICByZXR1cm4gY29kZTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29sb3JIZXhYTUxWYWx1ZShoZXhDb2xvcikge1xuICB2YXIgY29kZSA9IFwiI1wiXG4gIGlmIChoZXhDb2xvci5hICE9IDEpIHtcbiAgICBjb2RlICs9IGAke2hleENvbG9yLmF9YDtcbiAgfVxuICBjb2RlICs9IGAke2hleENvbG9yLnJ9JHtoZXhDb2xvci5nfSR7aGV4Q29sb3IuYn1gO1xuICByZXR1cm4gY29kZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGdldENvbG9yc1hNTFNuaXBwZXQsIGdldENvbG9ySGV4WE1MVmFsdWUgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy94bWxDb2xvcnMuanMiLCJmdW5jdGlvbiB0YWIoY291bnQpIHtcbiAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgcmVzdWx0ICs9IFwiXFx0XCI7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IHRhYiB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwiLyoqXG4gKiBFeHBvcnQgZnVuY3Rpb25zIHlvdSB3YW50IHRvIHdvcmsgd2l0aCwgc2VlIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbHM6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vemVwbGluL3plcGxpbi1leHRlbnNpb24tZG9jdW1lbnRhdGlvblxuICovXG5cbnZhciB4bWxDb2xvcnMgPSByZXF1aXJlKFwiLi94bWxDb2xvcnMuanNcIilcbnZhciB4bWxUZXh0U3R5bGVzID0gcmVxdWlyZShcIi4veG1sVGV4dFN0eWxlcy5qc1wiKVxuXG5mdW5jdGlvbiBsYXllcihjb250ZXh0LCBzZWxlY3RlZExheWVyKSB7XG5cbn1cblxuZnVuY3Rpb24gc3R5bGVndWlkZUNvbG9ycyhjb250ZXh0LCBjb2xvcnMpIHtcbiAgdmFyIGNvZGUgPSBcIjwhLS0gUHJvamVjdCBDb2xvciBwYWxldHRlIC0tPlxcblxcblwiO1xuICBjb2RlICs9IHhtbENvbG9ycy5nZXRDb2xvcnNYTUxTbmlwcGV0KGNvbG9ycyk7XG5cbiAgcmV0dXJuIHtcbiAgICBjb2RlOiBjb2RlLFxuICAgIGxhbmd1YWdlOiBcInhtbFwiXG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlZ3VpZGVUZXh0U3R5bGVzKGNvbnRleHQsIHRleHRTdHlsZXMpIHtcbiAgdmFyIGNvZGUgPSBcIjwhLS0gUHJvamVjdCBUZXh0cyBzdHlsZXMgLS0+XFxuXFxuXCI7XG4gIGNvZGUgKz0geG1sVGV4dFN0eWxlcy5nZXRUZXh0U3R5bGVzc1hNTFNuaXBwZXQoY29udGV4dCwgdGV4dFN0eWxlcyk7XG5cbiAgcmV0dXJuIHtcbiAgICBjb2RlOiBjb2RlLFxuICAgIGxhbmd1YWdlOiBcInhtbFwiXG4gIH07XG59XG5cbmZ1bmN0aW9uIGV4cG9ydFN0eWxlZ3VpZGVDb2xvcnMoY29udGV4dCwgY29sb3JzKSB7XG4gIHZhciBjb2RlID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cInV0Zi04XCI/PlxcblxcbmA7XG4gIGNvZGUgKz0geG1sQ29sb3JzLmdldENvbG9yc1hNTFNuaXBwZXQoY29sb3JzKTtcblxuICByZXR1cm4ge1xuICAgIGNvZGU6IGNvZGUsXG4gICAgbGFuZ3VhZ2U6IFwieG1sXCIsXG4gICAgZmlsZW5hbWU6IFwiY29sb3JzLnhtbFwiXG4gIH07XG59XG5cbmZ1bmN0aW9uIGV4cG9ydFN0eWxlZ3VpZGVUZXh0U3R5bGVzKGNvbnRleHQsIHRleHRTdHlsZXMpIHtcbiAgdmFyIGNvZGUgPSBgPHJlc291cmNlcyB4bWxuczp0b29scz1cImh0dHA6Ly9zY2hlbWFzLmFuZHJvaWQuY29tL3Rvb2xzXCI+XFxuXFxuYDtcbiAgY29kZSArPSB4bWxUZXh0U3R5bGVzLmdldFRleHRTdHlsZXNzWE1MU25pcHBldChjb250ZXh0LCB0ZXh0U3R5bGVzKTtcblxuICByZXR1cm4ge1xuICAgIGNvZGU6IGNvZGUsXG4gICAgbGFuZ3VhZ2U6IFwieG1sXCIsXG4gICAgZmlsZW5hbWU6IFwic3R5bGVzLnhtbFwiXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbW1lbnQoY29udGV4dCwgdGV4dCkge1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBsYXllcixcbiAgICBzdHlsZWd1aWRlQ29sb3JzLFxuICAgIHN0eWxlZ3VpZGVUZXh0U3R5bGVzLFxuICAgIGV4cG9ydFN0eWxlZ3VpZGVDb2xvcnMsXG4gICAgZXhwb3J0U3R5bGVndWlkZVRleHRTdHlsZXMsXG4gICAgY29tbWVudFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsInZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMuanMnKVxudmFyIGNvbG9ycyA9IHJlcXVpcmUoJy4veG1sQ29sb3JzLmpzJylcblxuZnVuY3Rpb24gZ2V0VGV4dFN0eWxlc3NYTUxTbmlwcGV0KGNvbnRleHQsIHRleHRTdHlsZXMpIHtcbiAgdmFyIGNvZGUgPSBcIjxyZXNvdXJjZXM+XCI7XG5cbiAgZm9yKHZhciB0ZXh0U3R5bGUgb2YgdGV4dFN0eWxlcykge1xuICAgIGNvZGUgKz0gXCJcXG5cIiArIHV0aWxzLnRhYigxKSArIGA8c3R5bGUgbmFtZT1cIiR7dGV4dFN0eWxlLm5hbWV9XCI+XFxuYDtcblxuICAgIGNvZGUgKz0gdXRpbHMudGFiKDIpICsgYDxpdGVtIG5hbWU9XCJhbmRyb2lkOmZvbnRGYW1pbHlcIj5AZm9udC8ke3RleHRTdHlsZS5mb250RmFtaWx5fTwvaXRlbT5cXG5gO1xuICAgIGNvZGUgKz0gdXRpbHMudGFiKDIpICsgYDxpdGVtIG5hbWU9XCJhbmRyb2lkOmZvbnRXZWlnaHRcIj4ke3RleHRTdHlsZS5mb250V2VpZ2h0fTwvaXRlbT5cXG5gO1xuICAgIGNvZGUgKz0gdXRpbHMudGFiKDIpICsgYDxpdGVtIG5hbWU9XCJhbmRyb2lkOmZvbnRTdHlsZVwiPiR7Z2V0QW5kcm9pZEZvbnRTdHlsZSh0ZXh0U3R5bGUuZm9udFN0eWxlKX08L2l0ZW0+XFxuYDtcbiAgICBjb2RlICs9IHV0aWxzLnRhYigyKSArIGA8aXRlbSBuYW1lPVwiYW5kcm9pZDp0ZXh0U2l6ZVwiPiR7dGV4dFN0eWxlLmZvbnRTaXplfXNwPC9pdGVtPlxcbmA7XG5cbiAgICBjb25zdCB0ZXh0QWxpZ24gPSBnZXRBbmRyb2lkVGV4dEdyYXZpdHkodGV4dFN0eWxlLnRleHRBbGlnbik7XG4gICAgaWYgKHR5cGVvZiB0ZXh0QWxpZ24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb2RlICs9IHV0aWxzLnRhYigyKSArIGA8aXRlbSBuYW1lPVwiYW5kcm9pZDpncmF2aXR5XCI+JHt0ZXh0QWxpZ259PC9pdGVtPlxcbmA7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0ZXh0U3R5bGUubGV0dGVyU3BhY2luZyAhPT0gJ3VuZGVmaW5lZCcgJiYgdGV4dFN0eWxlLmxldHRlclNwYWNpbmcgIT0gMCkge1xuICAgICAgY29kZSArPSB1dGlscy50YWIoMikgKyBgPGl0ZW0gbmFtZT1cImFuZHJvaWQ6bGV0dGVyU3BhY2luZ1wiPiR7dGV4dFN0eWxlLmxldHRlclNwYWNpbmd9PC9pdGVtPlxcbmA7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0ZXh0U3R5bGUubGluZUhlaWdodCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvZGUgKz0gdXRpbHMudGFiKDIpICsgZ2V0QW5kcm9pZExpbmVoZWlnaHQoY29udGV4dCwgdGV4dFN0eWxlKSArIFwiXFxuXCI7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0ZXh0U3R5bGUuY29sb3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb2RlICs9IHV0aWxzLnRhYigyKSArIGA8aXRlbSBuYW1lPVwiYW5kcm9pZDp0ZXh0Q29sb3JcIj4ke2dldEFuZHJvaWRDb2xvclZhbHVlKGNvbnRleHQsIHRleHRTdHlsZSl9PC9pdGVtPlxcbmA7XG4gICAgfVxuXG5cblxuICAgIGNvZGUgKz0gdXRpbHMudGFiKDEpICsgXCI8L3N0eWxlPlxcblwiO1xuICB9XG5cbiAgY29kZSArPSBcIjwvcmVzb3VyY2VzPlwiO1xuICByZXR1cm4gY29kZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGdldFRleHRTdHlsZXNzWE1MU25pcHBldCB9O1xuXG5mdW5jdGlvbiBnZXRBbmRyb2lkVGV4dEdyYXZpdHkoYWxpZ24pIHtcbiAgaWYgKGFsaWduID09IFwiY2VudGVyXCIpIHtcbiAgICByZXR1cm4gXCJjZW50ZXJfaG9yaXpvbnRhbFwiO1xuICB9IGVsc2UgaWYgKGFsaWduID09IFwibGVmdFwiKSB7XG4gICAgcmV0dXJuIFwibGVmdFwiO1xuICB9IGVsc2UgaWYgKGFsaWduID09IFwicmlnaHRcIikge1xuICAgIHJldHVybiBcInJpZ2h0XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW5kcm9pZEZvbnRTdHlsZShzdHlsZSkge1xuICBpZiAoc3R5bGUgPT0gXCJub3JtYWxcIikge1xuICAgIHJldHVybiBzdHlsZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIml0YWxpY1wiXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW5kcm9pZExpbmVoZWlnaHQoY29udGV4dCwgdGV4dFN0eWxlKSB7XG5cbn1cblxuZnVuY3Rpb24gZ2V0QW5kcm9pZENvbG9yVmFsdWUoY29udGV4dCwgdGV4dFN0eWxlKSB7XG4gIGNvbnN0IGV4aXN0aW5nQ29sb3IgPSBjb250ZXh0LnByb2plY3QuZmluZENvbG9yRXF1YWwodGV4dFN0eWxlLmNvbG9yKTtcbiAgaWYgKHR5cGVvZiBleGlzdGluZ0NvbG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBgQGNvbG9yLyR7ZXhpc3RpbmdDb2xvci5uYW1lfWA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNvbG9ycy5nZXRDb2xvckhleFhNTFZhbHVlKHRleHRTdHlsZS5jb2xvci50b0hleCgpKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3htbFRleHRTdHlsZXMuanMiXSwic291cmNlUm9vdCI6IiJ9