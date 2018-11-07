---
path: '/posts/missing-frame-and-page'
title: 'The Case of the Missing Frame and Page in NativeScript with Angular'
author: 'alex_ziskind'
createdDate: '2018-11-06'
updatedDate: '2018-11-06'
draft: false
tags: ['NativeScript', 'Tips and Tricks', 'Tutorial', 'Video']
image: missing-frame-and-page-poster.png
---

This just happened to me and I was seriously confused. I'm used to getting a hold of the `topmost` frame or injecting the `Page` into an Angular component constructor, but this time, they were missing!

<br/><br/>

While working on an Angular demo for the new [NativeScript OAuth2 plugin](https://www.npmjs.com/package/nativescript-oauth2) that I published last week, I discovered that I depended on the `topmost` frame being available in an app, just they it always was before. Before version 4 that is!

## TLDR

You can just watch the video tip that describes why we use the `topmost` frame and the `Page` objects, shows the problem we run into when not using the `<page-router-outlet>`, and then shows how to use the new `createFrameOnBootstrap` property when bootstrapping an NativeScript Angular app. You can also find this documented in the [Core Concepts section of the NativeScript docs](https://docs.nativescript.org/core-concepts/angular-bootstrap#nativescript-application-options), a section that I have read before, but completely forgot about.

<br/><br/>

Here is the video posted to my YouTube channel.
<br><br>

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/drhDBKAxxKk" frameborder="0" allowfullscreen></iframe>
</div>

<br><br>

## The Problem

By default, the NativeScript Angular Hello world template uses the `<page-router-outlet>` when you create a new app from the base template. Using this router outlet give you native navigation capabilities and automatically creates a `Frame` that wraps the content of the `Page` and components inside. In Angular you typically don't interact with the `Frame` or the `Page`, and you won't even worry or care about them. Your primary UI unit is the `Component`. So it's not really an issue that's noticed, unless you want to do something special, like use native navigation or programmatically build UI widgets. I go more into it in the video.

<br><br>

Sometimes you'll use the Angular router and you won't use native navigation of the device. So you'll only use the `<router-outlet>` to stub out where your components will be swapped, but you still might want to inject the `Page` into your component to build UI programmatically like this:

<br><br>

```typescript
import { Component } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';

@Component({
  selector: 'ns-app',
  moduleId: module.id,
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private page: Page) {
    // create UI widgets and add them to page,
    // or do some other neat stuff with the Page instance
  }
}
```

<br><br>

Well here is where we will have a problem if you decided NOT to use `<page-router-outlet>`. `this.page` in your component will be `null`. Frame and Page go hand in hand here: no Frame => no Page. So if you try to use the `topmost()` frame in this situation, it will be `undefined`.

<br><br>

```typescript
import { Component } from '@angular/core';
import { topmost } from 'tns-core-modules/ui/frame';

@Component({
  selector: 'ns-app',
  moduleId: module.id,
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {
    // try to use topmost to navigate, for example.
    // You most likely wouldn't do this, but you could
    // use the frame if you were building some native code,
    // as I do in the NativeScript-OAuth2 plugin
    topmost().navigate('...');
  }
}
```

<br><br>

> Insert useless comment here: "Personally I think this causes more confusion than it is worth, but I'm sure it was done for a reason". - Alex

<br><br>

## The Solution

If you are going to use `<page-router-outlet>`, then you are OK - the `Frame` and `Page` will be created for you by the framework and the pagework (hehe, see what I did there?).

BUT, if you are going to remove `<page-router-outlet>` and things start breaking because `topmost()` returns `undefined` or your `Page` instance is `null`, then you can set the `createFrameOnBootstrap` boolean property to `true` when your app boots up.

<br><br>

```typescript
// main.ts

import { platformNativeScriptDynamic } from 'nativescript-angular/platform';
import { AppModule } from './app/app.module';

platformNativeScriptDynamic({ createFrameOnBootstrap: true }).bootstrapModule(
  AppModule
);
```

<br><br>

So next time you are sitting and scratching your head, wondering why your frame or page are missing, then I hope this post find you well.

<br/><br/>

For more video tutorials about NativeScript, look at our courses on [NativeScripting.com](https://nativescripting.com). The new [Hands-on UI course](https://nativescripting.com/course/nativescript-hands-on-ui) is a pretty popular starting point for those starting out learning NativeScript and how to work with UI.

<br/><br/>

Let me know if you enjoyed this short tutorial on Twitter: <a href="https://twitter.com/digitalix" target="_blank">@digitalix</a> or comment here. And send me your NativeScript related questions that I can answer in video form. If I select your question to make a video answer, I'll send you swag.

<br/><br/>

Also, the first 3 people to tweet me the location of something NativeScript-related in the poster image of this post will get some stickers.
