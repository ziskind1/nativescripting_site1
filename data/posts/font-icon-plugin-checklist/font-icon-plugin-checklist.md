---
path: "/posts/font-icon-plugin-checklist"
title: "NativeScript Font Icon Plugin Checklist"
author: 'alex_ziskind'
createdDate: '2018-03-26'
updatedDate: '2018-03-26'
draft: false
tags: ["NativeScript", "Tips and Tricks", "Tutorial", "Video"]
image: font-icon-plugin-checklist-poster.png
---

By this time, you likely have already had the experience of adding font icons to your web or mobile application. You can add nice graphics to spice up your interfaces and you can style the graphics with CSS, since they are just fonts. Libraries like FontAwesome and Icomoon have made this super simple; well at least for web applications. Can we say the same for NativeScript apps?
<br><br>

Since checklists are all the rage, I've created another checklist to help you do just that.
<br><br>

Adding font icons to your NativeScript app is a multi-step process on it's own. And using the `nativescript-ngx-fonticon` plugin will help you with quick icon name identification, but this plugin (developed by our author [Nathan Walker](https://twitter.com/wwwalkerrun), who has a [popular Plugins course](https://nativescripting.com/course/nativescript-plugins-creating-custom-view-components) right here on NativeScripting) has a few steps of its own to follow.
<br><br>

Check out the checkable checklist below, and use it every time you need to implement font icons and/or the font icon plugin in your NativeScript apps.


## The Checklist

<div style="background-color: #ffffff; border: 1px solid #eeeeee;padding: 20px;">

### Modal Component Section
- <input type="checkbox" /> Install the nativescript-ngx-fonticon plugin
- <input type="checkbox" /> Add Font Awesome font to project
- <input type="checkbox" /> Add the Font Awesome CSS file to project
- <input type="checkbox" /> Add .fa class in app.css
- <input type="checkbox" /> Edit the Font Awesome CSS file to remove unused code
- <input type="checkbox" /> Add import and initialization of TNSFontIconModule in app.module.ts
- <input type="checkbox" /> Add injection of TNSFontIconService in app.component.ts
- <input type="checkbox" /> Add import of TNSFontIconModule in consuming feature modules
- <input type="checkbox" /> Add Label element with the .fa class and fonticon pipe
<br><br>
</div>



<br><br>
This checklist is part of the [NativeScript with Angular Pro course](https://nativescripting.com/course/nativescript-with-angular-pro) that’s right here on NativeScripting. In Chapter 5, of the course, I guide you through several plugins and consuming native code in NativeScript, including adding font icons, followed by an implementation of the font icon plugin.
<br><br>

## Font Icons in NativeScript
In this preview lesson from Chapter 5, I show you how to implement steps 2-4 of the checklist. This is the bare-bones of adding font icons to your NativeScript apps.
<br><br>

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/FCSQr8nwoGU" frameborder="0" allowfullscreen></iframe>
</div>
<br><br>

## Using the Font Icon Plugin
In this next lesson, also from Chapter 5, I show you how to implement the rest of the steps of the checklist. Here we add the font icon plugin and use it in the demo app.
<br><br>

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/88C3XpJn81k" frameborder="0" allowfullscreen></iframe>
</div>


<br><br>
Go ahead and use this checklist anytime you wish.
