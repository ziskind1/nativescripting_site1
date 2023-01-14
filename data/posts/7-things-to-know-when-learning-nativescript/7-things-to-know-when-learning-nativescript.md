---
path: '/posts/7-things-to-know-when-learning-nativescript'
title: '7 Things to Know When Learning NativeScript'
author: 'alex_ziskind'
createdDate: '2020-01-12'
updatedDate: '2020-01-12'
draft: false
tags: ['NativeScript', 'Video']
image: 7-things-to-know-when-learning-nativescript-poster.png
---

Are you already learning NativeScript or about to join the community and start learning this framework that lets you build native iOS and Android app with JavaScript? Here are some seven useful things you should know.

## TL;DR

Here's a video version of this post if you prefer learning via video.


<br/><br/>

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/DZEJy4uSWws" frameborder="0" allowfullscreen></iframe>
</div>

<br/><br/>


## Introduction
In this article, we'll look at 7 top things that you need to know or have in your toolbox in your journey of learning NativeScript development. It's not an exhaustive list and it's based on my opinion. If you have other suggestions, leave them in the comments below.

## 1. Javascript (And Preferably, TypeScript as Well)

Since NativeScript is a JavaScript framework, the first thing you are going to have to know is exactly that: JavaScript. We also recommend you learn TypeScript, which should be easy to pick up once you know JavaScript.

<br/>

You can develop NativeScript Core and NativeScript Vue applications with plain JavaScript, but knowing TypeScript might give you an edge in the job market because more and more companies are adopting it in their development workflow.

<br/>

TypeScript is a superset of JavaScript that adds optional static typing to the language. It has superb tooling that is useful when working in a team as well as when working on large applications. It has a rigorous structure that makes it easier for developers to write less buggy code and it also makes the code easier to understand. If you are a junior developer coming into a company that uses TypeScript, you will find it easier to understand and follow the codebase.

<br/>

NativeScript Angular uses TypeScript by default since Angular uses TypeScript by default. If you are going to be working on a NativeScript Angular application, you cannot escape learning TypeScript since NativeScript Angular doesn't give you the option of developing in plain JavaScript.

<br/>

With NativeScript Core and NativeScript Vue, you have the option of using either plain JavaScript or TypeScript. Most of our code examples here on the NativeScripting blog and [YouTube](https://www.youtube.com/channel/UCajiMK_CY9icRhLepS8_3ug) channel are done in TypeScript. We do have a free [Getting Started with NativeScript Core](https://nativescripting.com/course/nativescript-core-getting-started-guide) course that uses plain JavaScript, but we are probably going to switch it to TypeScript in a future update.

<br/>

Another reason why you should be comfortable with both JavaScript and TypeScript is that you will find extensive use of both in the NativeScript community. On StackOverflow, you will find examples written in plain JavaScript as well as TypeScript. A lot of the examples you will find of NativeScript Vue and Vue.js itself are in plain JavaScript, but you can find plenty of open source NativeScript Vue projects that use TypeScript.

<br/>

If you are interested in knowing how to use TypeScript in a NativeScript Vue project, we have the following video that will show you how to use TypeScript class components in NativeScript Vue:


<br/><br/>

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/u8lMkgb-8iA" frameborder="0" allowfullscreen></iframe>
</div>

<br/><br/>



Note that if you are using the NativeScript CLI to start a new NativeScript Vue project, the option to include TypeScript in the NativeScript Vue application isn't there yet, but there is a way to use TypeScript with NativeScript and Vue using the Vue CLI, which supports TypeScript. Below is a video that shows you how to set this up:

<br/><br/>

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Z9koujDvpBM" frameborder="0" allowfullscreen></iframe>
</div>

<br/><br/>


## 2. UI Layouts

The second thing you are going to have to be familiar with is UI Layouts. We aren't necessarily talking about NativeScript specific layouts here. What we mean, is that you are going to have to be familiar with how a User Interface is laid out. For instance, coming from the web world, you would be familiar with the box model and you would know that a UI can essentially be divided into rectangles that contain other rectangles and other elements like text and images. You would also be familiar with how to layer things—not only do you have rectangles placed next to each other, you can also have rectangles on top of each other in a 3D space, so that you won't only be dealing with x and y coordinates, but sometimes, you'll also be dealing with the Z index.

<br/>

You need to take this knowledge and bring it over to NativeScript because there are similarities in how you would lay out DOM elements and NativeScript Views. In NativeScript, you can also render your rectangles to contain other rectangles and other elements (in NativeScript, we call these Views because they inherit from the root View class). You can also layer your Views on top of each other in a 3D space.

<br/>

You need to be familiar with UI layouts so that when given a design document of an app, you are able to disassemble it and know the individual widgets to use when creating the NativeScript app.

## 3. User Experience (UX)

The third thing you should be familiar with is User Experience (UX).

<br/>

NativeScript allows you to write one code base for iOS and Android apps. Because of this, you might end up releasing an app for both platforms that looks and behaves the same on the two platforms. This might be okay for some apps, but for others, it might not be ideal.

<br/>

While there are some things that are the same on iOS and Android, there are some UI design patterns that are specific to a particular platform and users of that platform will be used to how UI is laid out and how it behaves on that platform. You should be aware of the different UI design patterns recommended for both platforms. Both platforms provide design guidelines that you should be aware of when building your app: the [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) for iOS and [Material Design Guidelines](https://material.io/) for Android.

<br/>

The beauty of NativeScript is that you can maintain one code base for your iOS and Android apps where you share code between the two apps while having the option of adding separate platform-specific code for the two apps. You can, for instance, have a UI element that will be presented differently on iOS and Android. We have some tutorials on how to include platform-specific things like classes, functions, CSS and components in your NativeScript applications that you might find useful when building cross-platform apps:

<br/>

### Platform Specific Classes in NativeScript:

<br/>

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/btq7D7w81C0" frameborder="0" allowfullscreen></iframe>
</div>

<br/><br/>


### Platform Specific Functions in NativeScript:


<br/>

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/rNe4UJD216A" frameborder="0" allowfullscreen></iframe>
</div>

<br/><br/>


<br/>

### Platform Specific CSS in NativeScript:


<br/>

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/v5g6irUI704" frameborder="0" allowfullscreen></iframe>
</div>

<br/><br/>


<br/>

### Platform Specific NativeScript Vue Components:


<br/>

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/91E_12NvFJ0" frameborder="0" allowfullscreen></iframe>
</div>

<br/><br/>



Even though there are recommended design guidelines for both platforms, as previously mentioned, you should take them as exactly that, guidelines. They are not strict rules that you have to follow. Your app's overall UI and UX will depend on your personal taste and brand. You can decide to maintain a separate look and feel for your iOS and Android apps, or you can decide to bring in some aspects of one platform into another, for example, using Material Design in your iOS app.

## 4. Software Design Patterns

The other thing you should know is Software Design Patterns.

<br/>

Before you start coding, you should have in mind an idea of how you are going to structure the code, the different components that will make up your app, and how each component will interact with others.

<br/>

There are different Software Design Patterns that are commonly used to structure code. For instance, in NativeScript Core, the pattern that is commonly used in MVVM (Model View ViewModel). MVVM enables you to separate your code into different concerns. The Model represents the data and business logic of the app. The ViewModel lives between the Model and View and relays information between the two. When there is a change in the Model, the ViewModel relays this information to the View so that the View can update itself accordingly. It can also pass events from the View to the Model. The View is responsible for the app's UI. It subscribes to the ViewModel to get data in order to update UI elements accordingly.

<br/>

NativeScript Angular and NativeScript Vue use the MVC (Model View Controller) pattern by default. The Controller is responsible for updating the Model and View. It accepts input and performs the corresponding update. It relays data between the Model and View. For instance, it can get data from the database, process it and then pass it to the View for displaying as well as pass data the other way, i.e. get user input from the View, process it if necessary, then pass it to the Model, where the data will be saved to the database.

<br/>

NativeScript Angular and NativeScript Vue have MVC built-in so you don't have to worry much about figuring out how to structure your code. NativeScript Core is a lot more open and leaves it up to you to decide how to implement a design pattern and how to structure your code. It doesn't have a UI framework built into it like NativeScript Angular and Vue so you have the option of how you want to present or how you want to structure your application. If you are interested, we have a [course on NativeScript Core](https://nativescripting.com/course/nativescript-core-pro) that goes deeper into this. It has a chapter on Application Architecture that covers how to best organize your project structure.

## 5. Core Modules

When learning NativeScript, you should also be fairly comfortable with the Core Modules that come with the framework.

<br/>

NativeScript comes built-in with a lot of modules that are bundled into your application every time you create a new project. The Core Modules provide the abstraction needed to access the underlying native platforms. For example, the Gesture module defines a common JS API that translates application TypeScript/JavaScript code into native gestures API calls. The Core Modules also provide a basic XML-based way for defining UI, data-binding and navigation.

<br/>

Core Modules make available modules that help you create your app's UI. For instance, the layouts module inside `tns-core-modules` contains layouts such as the StackLayout that help you lay out your UI elements. `tns-core-modules` also contains UI elements such as Buttons and Labels. Core Modules also contains other things like connectivity, timing, application settings, data functionalities like how to work with observables and observable arrays.

<br/>

Core Modules is something that will take you some time to learn. Don't be discouraged though by the seemingly daunting task. Since you will be working with Core Modules every time you build your NativeScript applications, you will start getting more and more familiar with the different modules it offers. You can also learn about Core Modules by reading the official documentation and by trying things out in the [NativeScript Playground](https://play.nativescript.org). Use the Playground to play around and test the different modules. You can quickly drag and drop widgets on an app and run it on your device to see the resulting app. You can also change the app's properties in Playground and get real-time updates on the app running on your device. When ready to start developing locally, you should install the NativeScript CLI on your machine and start building your apps. We have a [NativeScript Hands-On UI course](https://nativescripting.com/course/nativescript-hands-on-ui) that might accelerate your learning. It covers NativeScript user interface, views and components.

## 6. Learning Partners

When learning NativeScript, you could do it alone and in solitude, but it's usually better to get a Learning Partner. A Learning Partner can provide you with some accountability that will keep you disciplined as you go through the learning process. Having someone to discuss what you just learned can help you grasp concepts faster and they can correct you where you are wrong and also share the knowledge they have. You can also work on projects together, sharing the amount of work required to build a complete app.

## 7. A Learning Path

That brings us to the final suggestion of things you need: a learning path.

<br/>

You can pick up NativeScript from different sources. You can read the documentation, watch some YouTube videos, attend live training and workshops, try building an app by trial-and-error, etc. These are all great, and you should try to learn from different sources because the more information you absorb, the better you will become at building NativeScript apps. However, you might benefit from a structured approach to learning. The availability of different learning resources might be a bit overwhelming to you, especially if you are a beginner. You might not know where to begin or which resource might be a good investment of your time and/or money. Having a learning path that takes you from point A-Z is useful as you will learn concepts all the way from beginner to advanced level. This can be a much better use of your time than cobbling together knowledge from a blog post over there and a video over there, and then trying to build an app through trial and error. This is still a valid way of learning, and it will eventually get you to point Z, where you'll know enough to put together a complete app, but having a structured learning path (e.g. taking a course or reading a book) can get you there much faster.

<br/>

Here on NativeScripting, we have courses that will take you from whatever level you are with NativeScript to an advanced level. We've also recently released learning tracks that will show you where you should start, depending on your skill level. Our courses cover all the flavors of NativeScript: Core, Angular and Vue, so there is something for everyone.

<br/>

Let me know what you thought of this article on Twitter: [@digitalix](https://twitter.com/digitalix) or leave a comment down below. You can also send me your NativeScript related questions that I can answer in video form. If I select your question to make a video answer, I'll send you swag. Use the #iScriptNative hashtag.
