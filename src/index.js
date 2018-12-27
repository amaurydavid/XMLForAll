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
