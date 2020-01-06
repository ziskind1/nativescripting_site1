---
path: '/posts/is-it-possible-to-animate-height-and-width-in-nativescript-yes'
title: 'Is it possible to animate height and width in NativeScript? Yes!'
author: 'alex_ziskind'
createdDate: '2017-08-04'
updatedDate: '2017-08-04'
draft: false
tags: ['Animation', 'NativeScript']
image: is-it-possible-to-animate-height-and-width-in-nativescript-yes-poster.png
---

TL;DR Yes! but…
  
For a long time, NativeScript developers have been begging for the ability to animate height and width using standard animation techniques that are well documented. I’ll show you examples of how to achieve this right now, and tell you why these aren’t yet in the NativeScript core.

There are two methods for animating objects in NativeScript, and these are pretty well documented. You can animate objects imperatively, using the `Animation` class’s static functions or the `animate` function that every UI widget has on it. You can also animate declaratively, by assigning CSS classes that trigger keyframe animations.

As of NativeScript version 3.1.x, neither of these options allow you to animate the height and width properties of UI widgets. There are serious performance considerations that need to be taken into account when animating height and width, due to the way layout recalculating takes place. This could easily be abused, causing poor performance and negating one of the key reasons to use NativeScript over Ionic, for example: smooth, buttery, native animations.

But, since you’re still reading, you hereby affirm that you are willing to take a risk and use this technique sparingly, and only on one-off animations.
  

Sign here______________________________________________ Date________________

![nativescript_animation.png](nativescript_animation.png) I go into deep details about all these animation techniques in my NativeScript Animation Techniques course on Pluralsight. You can [read more about it here](https://nativescripting.com/posts/nativescript-animations-course-on-pluralsight). 

Recently I’ve started using RxJS Observables to drive JavaScript height and width animations in NativeScript, which leads to better reusability of code, more elegant code, less hit-you-over-the-head-with-my-javascript code.

Here is how we can accomplish this kind of simple height animation. You can also find this sample code in [this GitHub Repo](https://github.com/alexziskind1/tnsheightanimationdemo).

![tns-animating-dimantions-demo](tns-animating-dimantions-demo.gif)

For starters, we need a thingie we want to animate. So in a new NativeScript with Angular project, I’ve added this template to a component.

```
<stacklayout class="wrapper" (tap)="onTap(lbl)">
    <label #lbl="" class="thelabel" text="Hello"></label>
</stacklayout>
```

The label is what we’re going to animate, but it could really be any UI widget, since they all inherit their style property from the same base class. We have a `tap` event handled by the `onTap(lbl)` function in the code, where we will trigger the animation. Notice that we’re passing the label reference into the tap handler.

Now the tap handler can use the label to animate it.

```
onTap(lbl: Label) {
    duration(2000)
        .map(elasticOut)
        .map(amount(250))
        .subscribe(curFrame => {
            lbl.style.height = curFrame;
        },
        er => console.error(er),
        () => console.log(‘booya!’)
        );
}
```

Whoa! What’s going on here? We are creating a subscription to an observable that provides values to us over time (2000ms). This code will work, but for those with a keen RxJS eye will know there is a small problem with this code (see NOTE below).
  
So we need a duration function that takes in the number of milliseconds to run the animation.

```
const timeElapsed = Observable.defer(() => {
    const start = Scheduler.animationFrame.now();
    return Observable.interval(1)
        .map(() => Math.floor((Date.now() – start)));
});
const duration = (totalMs) =>
    timeElapsed
        .map(elapsedMs => elapsedMs / totalMs)
        .takeWhile(t => t <= 1);
```

The duration function relies on the `timeElapsed` function to generate the observable based on the start time of the animation and the “now” time. There is quite a bit more going on here, but that’s for another post.

We also need to let the observable know how much to move the widget; how wide to expand it. This is done using the `amount` factory function, which is a simple multiplication of current time fraction (t) and total distance (d).

```
const amount = (d) => (t) => t * d;
```

And finally, while it’s not necessary to have an animation curve, the animation wouldn’t look as natural without it. We need a single function that will take in a current linear time fraction and transform it based on a mathematical formula. I also show example of these in my course. I this case I use an `elasticOut` formula to simulate a rubberband-like effect, but you can use any other formula as long as it converts a single time fraction. A simple one to start with is just return `t` to the power of 2.

```
const elasticOut = (t) =>
    Math.sin(-13.0 * (t + 1.0) *
        Math.PI / 2) *
    Math.pow(2.0, -10.0 * t) +
    1.0;
```

Make sure you can actually see the label by giving it some styling.

```
.wrapper {
    text-align: center;
}
.thelabel {
    background-color: red;
    color: white;
}
```

This is great and all, but we are hardly using the power of RxJS with this example. One of the nice things about Observables is that they can be observed by multiple listeners. So we can animate multiple objects using the same observable or even mappings of one observable to another.
  
Instead of the beating-over-the-head method of setting the “height” property in code, let’s bind our label’s height to an observable. And in fact, let’s just have TWO labels bind to the same observable.

```
<stacklayout class="wrapper" (tap)="onTap($event)">
    <label class="thelabel1" text="Hello" [height]="blah$ | async"></label>
    <label class="thelabel2" text="Hello" [height]="blah$ | async"></label>
</stacklayout>
```

Notice that now we don’t need to pass in the lbl reference into our “onTap” handler since we are binding directly to the “blah$” observable and using the “async” pipe to subscribe each label to it. (I know, blah$ is a terrible name, by the way). Here’s the CSS to go along with this.

```
.wrapper {
    text-align: center;
}
.thelabel1 {
    background-color: red;
    color: white;
}
.thelabel2 {
    background-color: green;
    color: white;
}
```

Finally, let’s create the observable and store it in the “blah$” variable.

```
export class AppComponent {
    blah$: Observable<number> = Observable.of(25);
    onTap() {
        this.blah$ = duration(2000)
            .map(elasticOut)
            .map(amount(150));
}}
</number>
```

Here we’ve created an initial observable that first receives that value 25 – the initial height of the labels. Then `onTap` a new observable (again see my NOTE below) will be assigned to `blah$` with the timing and transforming properties for `blah$`. Since the heights of both labels are bound to `blah$`, they will just both happily tag along for the ride.

Nice!

> **NOTE:**  This code is just meant to demonstrate what’s possible and shouldn’t be used as is in production. The problem is that we are creating multiple Observables, we are doing this on every tap event. We should really be creating only ONE Observable when the component is initialized, and then unsubscribing when the component is destroyed. That’s for a later article. I’ll also be going into more details about this in my [NativeScript with Angular Pro course that is available for presale right now](https://nativescripting.com/course/nativescript-with-angular-pro).
