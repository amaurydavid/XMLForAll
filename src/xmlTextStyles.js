var utils = require('./utils.js')
var colors = require('./xmlColors.js')

function getTextStylessXMLSnippet(context, textStyles) {
  var code = "<resources>";

  for(var textStyle of textStyles) {
    code += "\n" + utils.tab(1) + `<style name="${textStyle.name}">\n`;

    if (textStyle.fontFamily !== "Roboto") {
      code += utils.tab(2) + `<item name="android:fontFamily">@font/${textStyle.fontFamily}</item>\n`;
    }

    if (textStyle.fontWeight !== 400) {
      code += utils.tab(2) + `<item name="android:fontWeight">${textStyle.fontWeight}</item>\n`;
    }

    if (textStyle.fontStyle !== "normal") {
      code += utils.tab(2) + `<item name="android:fontStyle">${getAndroidFontStyle(textStyle.fontStyle)}</item>\n`;
    }

    code += utils.tab(2) + `<item name="android:textSize">${textStyle.fontSize}sp</item>\n`;

    const textAlign = getAndroidTextGravity(textStyle.textAlign);
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
    return style
  } else {
    return "italic"
  }
}

function getAndroidLineheight(context, textStyle) {
  const lineHeightOption = context.getOption("lineHeightAttribute");

  var value;
  if (lineHeightOption == "lineHeight") {
    value = `${textStyle.lineHeight}sp`;
  } else if (lineHeightOption == "lineSpacingExtra") {
    value = `${textStyle.lineHeight - textStyle.fontSize}sp`;
  } else if (lineHeightOption == "lineSpacingMultiplier") {
    value = textStyle.lineHeight / textStyle.fontSize;
  }

  var code = `<item name="android:${lineHeightOption}">${value}</item>`;
  return code;
}

function getAndroidColorValue(context, textStyle) {
  const existingColor = context.project.findColorEqual(textStyle.color);
  if (typeof existingColor !== 'undefined') {
    return `@color/${existingColor.name}`;
  } else {
    return colors.getColorHexXMLValue(textStyle.color.toHex());
  }
}
