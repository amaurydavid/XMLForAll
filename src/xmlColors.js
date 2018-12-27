var utils = require('./utils.js')
var snakeCase = require('snake-case')

function getColorsXMLSnippet(colors) {
  var code = "<resources>\n";

  for(var color of colors) {
    code += utils.tab(1) + `<color name="${snakeCase(color.name)}">${getColorHexXMLValue(color.toHex())}</color>\n`;
  }

  code += "</resources>";
  return code;
}

function getColorHexXMLValue(hexColor) {
  var code = "#"
  if (hexColor.a != "ff") {
    code += `${hexColor.a}`;
  }
  code += `${hexColor.r}${hexColor.g}${hexColor.b}`;
  return code;
}

module.exports = { getColorsXMLSnippet, getColorHexXMLValue };
