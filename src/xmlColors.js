var utils = require('./utils.js')

function getColorsXMLSnippet(colors) {
  var code = "<resources>\n";

  for(var color of colors) {
    var hexColor = color.toHex();
    code += utils.tab(1) + `<color name="${color.name}">#`;
    if (color.a != 1) {
      code += `${hexColor.a}`;
    }
    code += `${hexColor.r}${hexColor.g}${hexColor.b}</color>\n`;
  }

  code += "</resources>";
  return code;
}

module.exports = { getColorsXMLSnippet };
