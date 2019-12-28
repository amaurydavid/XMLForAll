/**
 * Export functions you want to work with, see documentation for details:
 * https://github.com/zeplin/zeplin-extension-documentation
 */

var xmlColors = require("./xmlColors.js")
var xmlTextStyles = require("./xmlTextStyles.js")

function layer(context, selectedLayer) {

}

function colors(context) {
  var code = "<!-- Color palette -->\n\n";
  code += xmlColors.getColorsXMLSnippet(context);

  return {
    code: code,
    language: "xml"
  };
}

function textStyles(context) {
  var code = "<!-- Texts styles -->\n\n";
  code += xmlTextStyles.getTextStylessXMLSnippet(context);

  return {
    code: code,
    language: "xml"
  };
}

function exportColors(context) {
  var code = `<?xml version="1.0" encoding="utf-8"?>\n\n`;
  code += xmlColors.getColorsXMLSnippet(context);

  return {
    code: code,
    language: "xml",
    filename: "colors.xml"
  };
}

function exportTextStyles(context) {
  var code = `<resources xmlns:tools="http://schemas.android.com/tools">\n\n`;
  code += xmlTextStyles.getTextStylessXMLSnippet(context);

  return {
    code: code,
    language: "xml",
    filename: "styles.xml"
  };
}

function comment(context, text) {

}

export default {
    layer,
    colors,
    textStyles,
    exportColors,
    exportTextStyles,
    comment
};
