# XML for all
## A Zeplin's extension

Zeplin's built-in XML extension is very useful, but is only available on Android projects. 

You are an Android developer and you are working on an app which is only available in Zeplin as an Swift project? Or maybe you just want to export the color palette of this beautiful web project to use in your code? 

**XML for all** gives you access to XML code on all Zeplin projects! 
Whether it is a web, iOS, Android or macOS project, **XML for all** won't let you down.

## Getting Stated

1. Go to https://extensions.zeplin.io/5c31355e0042a36cb93fd344
2. Click on "Add to Zeplin"

## Usage

**XML for all** currently only generates XML code for your project's styleguide. Snippets are not available when selecting layers in a screen.

### Colors

```XML
<resources>
  <color name="blue1">#4468ea</color>
  <color name="blue2">#0024a6</color>
  <color name="pink">#ff3061</color>
  <color name="black">#000000</color>
  <color name="grey">#666666</color>
  <color name="red">#e30024</color>
</resources>
```

### Text styles

At the moment, **XML for All** only works great for fonts bundled with the app. If you declare fonts in the Font.xml file, you may want to tweak the snippet a bit. 

```XML
<resources>
  <style name="text_title">
    <item name="android:fontFamily">@font/Canaro-Bold</item>
    <item name="android:textSize">20sp</item>
    <item name="android:gravity">center_horizontal</item>
    <item name="android:lineHeight">28.16338122730524sp</item>
    <item name="android:textColor">@color/blue1</item>
  </style>

  <style name="text_subtitle">
    <item name="android:fontFamily">@font/Canaro-Bold</item>
    <item name="android:textSize">18sp</item>
    <item name="android:gravity">center_horizontal</item>
    <item name="android:lineHeight">24sp</item>
    <item name="android:textColor">#302d70</item>
  </style>

  <style name="text_body">
    <item name="android:fontFamily">@font/Roboto-Medium</item>
    <item name="android:textSize">13sp</item>
  </style>
</resources>
```

Did you notice ? `text_title` and `text_subtitle` styles both declare a `textColor`, but it is not equally formatted. That is because the color used by the `text_subtitle` style is actually in the project's color palette so we can directly get it from there. In the other hand, the `text_subtitle` color is not in the palette and is hence declared here.

You can also choose the way Zeplin's `lineHeight` attribute is translated into XML. By default the new `lineHeight` attribute is used, but you can change to `lineSpacingExtra` or ` lineSpacingMultiplier` instead:
```XML
<item name="android:textSize">20sp</item>

<!-- With lineHeight -->
<item name="android:lineHeight">28.2sp</item>

<!-- With lineSpacingExtra -->
<item name="android:lineSpacingExtra">8.2sp</item>

<!-- With lineSpacingMultiplier -->
<item name="android:lineSpacingMultiplier">1.41</item>
```

## What's next ?

Here is a non-exhaustive list of future features to come:
- [ ] Compatiblity with Font.xml
- [ ] Generate screen snippets on text layers


## License
**XML for all** is available under the MIT license. See the LICENSE file for more info.

