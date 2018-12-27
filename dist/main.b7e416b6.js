!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.extension=t():e.extension=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";var o=n(1);function r(e){var t="#";return"ff"!=e.a&&(t+=`${e.a}`),t+=`${e.r}${e.g}${e.b}`}e.exports={getColorsXMLSnippet:function(e){var t="<resources>\n",n=!0,i=!1,a=void 0;try{for(var l,u=e[Symbol.iterator]();!(n=(l=u.next()).done);n=!0){var c=l.value;t+=o.tab(1)+`<color name="${c.name}">${r(c.toHex())}</color>\n`}}catch(e){i=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(i)throw a}}return t+="</resources>"},getColorHexXMLValue:r}},function(e,t,n){"use strict";e.exports={tab:function(e){for(var t="",n=0;n<e;n++)t+="\t";return t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n(3);t.default={layer:function(e,t){},styleguideColors:function(e,t){var n="\x3c!-- Project Color palette --\x3e\n\n";return{code:n+=o.getColorsXMLSnippet(t),language:"xml"}},styleguideTextStyles:function(e,t){var n="\x3c!-- Project Texts styles --\x3e\n\n";return{code:n+=r.getTextStylessXMLSnippet(e,t),language:"xml"}},exportStyleguideColors:function(e,t){var n='<?xml version="1.0" encoding="utf-8"?>\n\n';return{code:n+=o.getColorsXMLSnippet(t),language:"xml",filename:"colors.xml"}},exportStyleguideTextStyles:function(e,t){var n='<resources xmlns:tools="http://schemas.android.com/tools">\n\n';return{code:n+=r.getTextStylessXMLSnippet(e,t),language:"xml",filename:"styles.xml"}},comment:function(e,t){}}},function(e,t,n){"use strict";var o=n(1),r=n(0);function i(e){return"center"==e?"center_horizontal":"left"==e?"left":"right"==e?"right":void 0}function a(e){return"normal"==e?e:"italic"}function l(e,t){var n,o=e.getOption("lineHeightAttribute");return"lineHeight"==o?n=`${t.lineHeight}sp`:"lineSpacingExtra"==o?n=`${t.lineHeight-t.fontSize}sp`:"lineSpacingMultiplier"==o&&(n=t.lineHeight/t.fontSize),`<item name="android:${o}">${n}</item>`}function u(e,t){var n=e.project.findColorEqual(t.color);return void 0!==n?`@color/${n.name}`:r.getColorHexXMLValue(t.color.toHex())}e.exports={getTextStylessXMLSnippet:function(e,t){var n="<resources>",r=!0,c=!1,f=void 0;try{for(var s,d=t[Symbol.iterator]();!(r=(s=d.next()).done);r=!0){var m=s.value;n+="\n"+o.tab(1)+`<style name="${m.name}">\n`,"Roboto"!==m.fontFamily&&(n+=o.tab(2)+`<item name="android:fontFamily">@font/${m.fontFamily}</item>\n`),400!==m.fontWeight&&(n+=o.tab(2)+`<item name="android:fontWeight">${m.fontWeight}</item>\n`),"normal"!==m.fontStyle&&(n+=o.tab(2)+`<item name="android:fontStyle">${a(m.fontStyle)}</item>\n`),n+=o.tab(2)+`<item name="android:textSize">${m.fontSize}sp</item>\n`;var p=i(m.textAlign);void 0!==p&&(n+=o.tab(2)+`<item name="android:gravity">${p}</item>\n`),void 0!==m.letterSpacing&&0!=m.letterSpacing&&(n+=o.tab(2)+`<item name="android:letterSpacing">${m.letterSpacing}</item>\n`),void 0!==m.lineHeight&&(n+=o.tab(2)+l(e,m)+"\n"),void 0!==m.color&&(n+=o.tab(2)+`<item name="android:textColor">${u(e,m)}</item>\n`),n+=o.tab(1)+"</style>\n"}}catch(e){c=!0,f=e}finally{try{!r&&d.return&&d.return()}finally{if(c)throw f}}return n+="</resources>"}}}]).default});