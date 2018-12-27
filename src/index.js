/**
 * Export functions you want to work with, see documentation for details:
 * https://github.com/zeplin/zeplin-extension-documentation
 */

var xmlColors = require("./xmlColors.js")
var xmlTextStyles = require("./xmlTextStyles.js")

function layer(context, selectedLayer) {

}

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

function comment(context, text) {

}

export default {
    layer,
    styleguideColors,
    styleguideTextStyles,
    exportStyleguideColors,
    exportStyleguideTextStyles,
    comment
};
