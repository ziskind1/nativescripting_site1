---
path: '/posts/nativescript-vue-transitions'
title: 'Vue Transitions with NativeScript-Vue'
author: 'tiago_alves'
createdDate: '2019-05-15'
updatedDate: '2019-05-15'
draft: false
tags: ['NativeScript', 'Vue', 'Tips and Tricks']
image: nativescript-vue-transitions-poster.png
---


The Vue wrapper component 'transition' is one of my favorite features in Vue. It allows us to animate showing and hiding components with 'v-show' or 'v-if' in an easy and declarative way. Basically, we can do to do something like:

<br/>

```html
<transition name="fade">
    <label v-if="show" :text="hello" />
</transition>
```

<br/>

where `fade` will refer to CSS classes (such as `.fade-enter-active` and `.fade-leave-active`) that will be added and removed when the `<Label>` component appears and goes away. You can also use `<transition>` to trigger animation events, as we will see later.

<br/>

> For more details on Vue transitions, check out the [official documentation on Vue transitions](https://vuejs.org/v2/guide/transitions.html).

<br/>

You can use Vue transitions in NativeScript-Vue, but there are some caveats and things to know. This happens because despite NativeScript's amazing efforts, native and web development are still fundamentally different. In this article, I will show you how to use Vue transitions with NativeScript, while showing how to avoid those "gotchas".

The code samples in this article are implemented in [this playground](https://play.nativescript.org/?template=play-vue&id=gzRGoN), so you can see all this in action. By the way, this the result:

<br/>
<br/>

![vue transitions](./ns-vue-transitions.gif 'NS-Vue transitions in action!')

<br/>
<br/>

## `<transition>`s with CSS animations

Let's start with the first transition in the sample app. The template is:

<br/>

```xml
<template>
(...)
  <transition name="bounce" appear>
    <Label class="my-label" v-show="show">hello</Label>
  </transition>
(...)
</template>
```

<br/>

Notice that this is pretty much the same as you would use a `<transition>` in the web. We named the transition `bounce`. The `appear` tells Vue to animate the component when it first appears on the screen.

A big part of the transition magic happens in the CSS:

<br/>

```scss
.my-label {
    height: 80;
    width: 80;
    color: white;
    (...)
}

.bounce-enter-active {
    animation-name: bounce-in;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
}

.bounce-leave-active {
    animation-name: bounce-in;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
    animation-direction: reverse;
    animation-timing-function: ease-in-out;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}
```

<br/>

The `<transition>` component adds the class `.bounce-enter-active` to the `<Label>` when the component appears, and adds the class `.bounce-leave-active` when the component disappears. The animation, defined in `@keyframes bounce-in`, is a scale up with a bit of overshoot. Let me add a couple of notes here:

NativeScript seems to trigger the animation twice when adding a class to a component that doesn't have any classes (see [this issue](https://github.com/nativescript-vue/nativescript-vue/issues/281#issuecomment-486899033)). As a _workaround_, add a class to the animated element (doesn't even need to be a real class).

NativeScript CSS animations have to be completely defined in a single class. We can't, for instance move the common properties `animation-name` and `animation-direction` to the `.my-label` class.

At the time of writing, the `animation-direction: reverse` property causes the animation to run about 4x slower. While this bug isn't fixed, we reduce the reversed `animation-duration` to 0.25s (1s/4) and carry on with our lives...

<br/><br/>

### Using `animate.css`

It is fun to play with animation keyframes, but if you want some ready-to-use effects, [`animate.css`](https://daneden.github.io/animate.css/) is a great place to find them. This library contains a lots of animations that you can use with NativeScript. In the playground sample we imported the whole `animate.css` file, but perhaps a better alternative would be to just copy-paste the animations we need.

The template portion turned out like this:

<br/>

```xml
  <transition
    enter-active-class="animated-tada"
    leave-active-class="animated-bounceOutRight"
    appear
  >
    <Label class="my-label" v-if="show">hello</Label>
  </transition>
```

<br/>

See that instead of defining the `name` prop in the `<transition>`, we are explicitly defining the enter/leave classes. We defined those classes like so:

<br/>

```scss
.animated-tada {
    animation-name: tada;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}

.animated-bounceOutRight {
    animation-name: bounceOutRight;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}
```

<br/>

We had to define these classes because, as mentioned earlier, NativeScript requires all `animation-*` properties to be defined in the same class, and that's not how `animate.css` defines its classes. Still, we are using the `tada` and `bounceOutRight` `@keyframe` definitions from `animate.css`.

Also, we had to grab version 3.1 because after that `animate.css` uses `scale3d()` instead of `scale()`, and those are not supported in NativeScript.

<br/>

## `<transition>`s with JS animations

We can use `<transition>` with JavaScript animations instead of CSS. As a result, we can leverage NativeScript's imperative animations. This is how we do it in the template:

<br/>

```xml
<transition v-on:enter="enter($refs.label1)" v-on:leave="leave($refs.label1)">
  <Label ref="label1" class="my-label" style="scaleX: 0; scaleY: 0;"
    v-if="show" @loaded="enter($refs.label1)">hello</Label>
</transition>
```

<br/>

As you see, `<transition>` emits events when the component enters and leaves. We implemented the event listeners in the `methods` section like so:

<br/>

```javascript
(...)
enter(view) {
  view.nativeView
    .animate({
      scale: {
        x: 1.2,
        y: 1.2
      },
      duration: 600,
      curve: enums.AnimationCurve.easeIn
    })
    .then(() => {
      view.nativeView.animate({
        scale: {
          x: 1,
          y: 1
        },
        duration: 400,
        curve: enums.AnimationCurve.easeOut
      });
    });
},
leave(view) {
  view.nativeView
    .animate({
      scale: {
        x: 1.2,
        y: 1.2
      },
      duration: 400,
      curve: enums.AnimationCurve.easeIn
    })
    .then(() => {
      view.nativeView.animate({
        scale: {
          x: 0,
          y: 0
        },
        duration: 600,
        curve: enums.AnimationCurve.easeOut
      });
    });
},
(...)
```

<br/>

With the NativeScript JS animation library we can craft more complex animations. There are some things to note here too. Firstly, `<transition appear>` doesn't work. As an alternative, we called the `enter` function directly in the `loaded` event so the animation plays when the component is created. We also had to set `style="scaleX: 0; scaleY: 0;"` because this is the initial (pre-animation) state.

<br/><br/>

## Conclusion

Vue `<transition>`s are great and I am glad we can use them on NativeScript-Vue. Unfortunately, the path to make them work in NativeScript is much narrower but, if you stick to these samples, you will be able to use them effectively in your project.
