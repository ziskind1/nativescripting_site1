---
path: '/posts/nativescript-vue-manual-routing-function-typing'
title: 'NativeScript Vue Manual Routing Function Typings'
author: 'alex_ziskind'
createdDate: '2019-05-10'
updatedDate: '2019-05-10'
draft: false
tags: ['NativeScript', 'Vue', 'Tips and Tricks', 'TypeScript', 'Video']
image: nativescript-vue-manual-routing-function-typing-poster.png
---

## NativeScript Vue Manual Routing Function Typing

This tutorial will show you how to avoid TypeScript compilation errors when using NativeScript-Vue routing functions along with your TypeScript class-based components.

## TL;DR

If you prefer a video tutorial, here you go:

<br>



## Intro

When using class components with your NativeScript Vue single file components written in TypeScript, you'll need to navigate from component to component using the `$navigateTo` function. This function, and other NativeScript-Vue specific functions aren't part of the Vue libraries so they don't have TypeScript typings in NativeScript. When you build the project and run it, everything works, but you get an ugly error on the console during build. In this NativeScript Tutorial, we'll show you how to fix that error for the `$navigateTo` function. The technique can also be applied to other NativeScript-Vue routing functions.

<br/>

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/lWdWP1lD9xs" frameborder="0" allowfullscreen></iframe>
</div>

<div style="background-color: #b5d1ff; padding: 10px;margin:30px;">

<h3>RELATED POST</h3>

In order to get set up with using NativeScript-Vue with TypeScript and class components, read this post where I share the five things you need to know to start using class components with NativeScript-Vue.

👉 <a href="https://nativescripting.com/posts/nativescript-vue-class-components-examined" target="_blank">NativeScript-Vue Class Components Examined</a>

</div>

<br/>

## Let's Jump Into It!

To demonstrate a solution to the problem, we've created a simple NativeScript-Vue application that has two pages (as Vue single file components) that we'll navigate between. Here's the code for both:

<br>

`App.vue`:

<br>

```typescript
<!-- App.vue -->

<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!" />
      <GridLayout columns="*" rows="*">
        <Label class="message" :text="msg" col="0" row="0" />
        <Button @tap="goToPage2" text="GO TO PAGE 2" col="0" row="1" />
      </GridLayout>
  </Page>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Page2 from "./Page2.vue";

@Component
export default class App extends Vue {
    private msg: string = "Hello World!";
    
    goToPage2() {
      this.$navigateTo(Page2);
    }
}
</script>

<style scoped>
ActionBar {
    background-color: #53ba82;
    color: #ffffff;
}

.message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #333333
}
</style>
```

<br>

`Page2.vue`:

<br>

```typescript
<!-- Page2.vue -->

<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!" />
      <GridLayout columns="*" rows="*">
        <Label class="message" :text="msg" col="0" row="0" />
      </GridLayout>
  </Page>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Page2 extends Vue {
    private msg: string = "Page 2";
}
</script>

<style scoped>
ActionBar {
    background-color: #53ba82;
    color: #ffffff;
}

.message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #333333
}
</style>
```

Notice that both use class-style Vue components. For that, you need to install the `vue-class-component` and `vue-property-decorator` packages. See <a href="https://nativescripting.com/posts/typescript-class-components-in-nativescript-vue" target="_blank">this post</a> for more info about that.

<br>

In `App.vue`, we use `goToPage2()` to navigate to the second page by calling `$navigateTo()` and giving it the component we want to navigate to.

<br>

If you try out the running app, you will be able to navigate to Page2 by tapping the button but you will get the following error in your console and your code editor might also indicate that there is an error on the `this.$navigateTo(Page2);` statement.

<br>

```
Property '$navigateTo' does not exist on type 'App'.`
```

<br>

If you look at the problematic statement `this.$navigateTo(Page2);`, `this` is actually an instance of `App` which extends the `Vue` class that's coming from `vue-property-decorator`. So for `$navigateTo()` to be recognized, we need to extend that `vue-property-decorator` module and the `Vue` interface that lives in there.

<br>

To do that, we create a new file `vue-extend.ts`:

<br>

```typescript
// vue-extend.ts

import { Vue } from "vue-property-decorator";

declare module "vue-property-decorator" {
  interface Vue {
    $navigateTo(args);
  }
}
```

<br>

In the `Vue` interface, we add a `$navigateTo()` method.

<br>

Now if you restart the build and run the app, you should be able to navigate to Page2 without errors and your editor will also have stopped complaining.

<br>

This technique can also be used to append other functions that you might not have that are related to the `Vue` instance.

<br>

Well, we hope that was helpful. For more video tutorials on NativeScript, check out our courses on [NativeScripting.com](https://nativescripting.com/posts/animated-ripple). We have courses that cover all flavors of NativeScript (Core, Angular and Vue) and that cater to different levels of experience, whether you are just beginning your journey in the NativeScript world or you have some experience with NativeScript and are looking to level up.

<br>

Let me know what you thought of this tutorial on Twitter: [@digitalix](https://twitter.com/digitalix?lang=en) or leave a comment down below. You can also send me your NativeScript related questions that I can answer in video form. If I select your question to make a video answer, I'll send you swag. Use the #iScriptNative hashtag.
