---
path: "/posts/converting-js-to-ts"
title: How to TypeScriptify a Purely JavaScript NativeScript Project
author: 'alex_ziskind'
createdDate: '2018-08-22'
updatedDate: '2018-08-22'
draft: false
tags: ["NativeScript", "JavaScript", "TypeScript", "Tip"]
image: converting-js-to-ts.png
---

You've been building your NativeScript app using pure JavaScript. Maybe ES2015 or ES2017, then you're transpiling to ES5 at build time. And now, after hearing about how amazing TypeScript is, and "everybody's doing it", you're finally ready to take the next step into TypeScript; you're ready to TypeScriptify your NativeScript project.

<br/>

This is not difficult to do. Just follow the simple steps outlined here. You can even see me doing all this in the video below.

<br/>

## Step 1

Open the `package.json` file in the root of your NativeScript project. It will likely be pretty simple and not have any TypeScript related dependencies or devDependencies.

Perhaps it will look like this:

```json
{
  "description": "NativeScript Application",
  "license": "SEE LICENSE IN <your-license-filename>",
  "readme": "NativeScript Application",
  "repository": "<fill-your-repository-here>",
  "nativescript": {
    "id": "org.nativescript.myjsproj"
  },
  "dependencies": {
    "nativescript-theme-core": "~1.0.4",
    "tns-core-modules": "~4.1.0"
  }
}
```

The file above is really simple because this is what an initial `package.json` file looks like when you create a brand new NativeScript JavaScript project using the command:

```
tns create myjsproj
```

You might already have a bunch of other dependencies and devDependencies listed, if you're converting an existing project that's anything other than a Hello World project.

Nonetheless, the next step is the same.

## Step 2

If not already present, add the `devDependencies` section in your `package.json` file, and add the most recent `nativescript-dev-typescript` npm package to that section. TypeScript itself, any typings, and the NativeScript plugin for TypeScript are all development time artifacts, they are not present at runtime, and thus they all go into the `devDependencies` section.

```json
{
  "description": "NativeScript Application",
  "license": "SEE LICENSE IN <your-license-filename>",
  "readme": "NativeScript Application",
  "repository": "<fill-your-repository-here>",
  "nativescript": {
    "id": "org.nativescript.myjsproj"
  },
  "dependencies": {
    "nativescript-theme-core": "~1.0.4",
    "tns-core-modules": "~4.1.0"
  },
  "devDependencies": {
    "nativescript-dev-typescript": "0.7.2"
  }
}
```

## Step 3

You can now run your project using

```
tns run ios
```

OR

```
tns run android
```

This will automatically detect that the `nativescript-dev-typescript` package is missing, install the package, also install a local instance of TypeScript, and then run your app. Your app will now be a TypeScript app, so you can just add new TypeScript files and keep writing your app using TypeScript methodologies.

There are two other things you will notice:

1.  There is a new `tsconfig.json` file in your project folder, preconfigured for a NativeScript TypeScript project.
2.  There is a new entry in the `devDependencies` section in the `package.json` file, it's a local version of TypeScript.

## Step 4

If you want to convert your existing JavaScript files to TypeScript, you can rename all the existing JavaScript files to TypeScript files just by changing the file extension from `.js` to `.ts`.

<br/>

This should just work, unless you have some global function or variable names that are the same in multiple files (as is the case with the hello world template - see the video below on the fix for this).

<br/>

Then you can gradually start introducing type annotations into your old JavaScript files, one at a time now (because you're a cautious developer, right?).

<br/>

You can also start using other TypeScript goodies like exporting functions directly instead of having to add a new property on the `exports` object of each module. See the video for an example of this.

## Step 5

Watch this video.

<br/>

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/BN57sLwm1dM" frameborder="0" allowfullscreen></iframe>
</div>

<br/><br/>

Go convert some JavaScript to TypeScript!

<br/><br/>

For more video tutorials about NativeScript, look at our courses on [NativeScripting.com](https://nativescripting.com). The latest [Hands-on UI course](https://nativescripting.com/course/nativescript-hands-on-ui) is a pretty popular starting point for those starting out learning NativeScript and how to work with UI.
<br/><br/>

Let me know if you enjoyed this short tutorial on Twitter: <a href="https://twitter.com/digitalix" target="_blank">@digitalix</a>, and what else you'd like to see in these tutorials.
