---
path: '/posts/cardflip-animation-in-nativescript'
title: 'Card Flip Animation in NativeScript'
author: 'william_tjondrosuharto'
createdDate: '2020-04-05'
updatedDate: '2020-04-05'
draft: false
tags: ['NativeScript', 'Angular', 'Tutorial', 'Animation', '3D']
image: cardflip-animation-in-nativescript-poster.png
---

NativeScript recently introduced 3d rotation in version 6.4. This opens up a lot of possibilities to create some fun animations such as this card flip animation, which would have been much more difficult to achieve prior. If you are not familiar with how this new apis work, Alex Ziskind has an awesome [video](https://www.youtube.com/watch?v=AVWhrRRZQ9A&t=67s) which goes through how it works and how to use them. Although NativeScript's 3d rotation doesn't come with backface visibility, we could achieve a similar effect by rotating 2 layouts simultaneously which I will show in this tutorial.

![animation gif](cardflip-animation.gif)

This tutorial will be a simpler version of the above, focusing more on how to create the animation - what goes into the front and back of the cards is completely up to you.
This tutorial is written for NativeScript Angular, but the same animation concept should be applicable to other flavors as well.

### Setting up the component to be animated

We will start with creating a `GridLayout` for the card container which will have 2 `GridLayout`s for the front and back sides. Let's also attach a `tap` event to the container to trigger the flip animation and a `loaded` event on the back layout to setup the initial state.

```html
<!-- card.component.html -->
<GridLayout rows="*" columns="*" height="350" width="350" (tap)="flip()">
    <!-- margins here so it doesn't get cut when it goes over the parent's boundaries -->
    <GridLayout #front margin="10" row="0" col="0" borderRadius="20">
        <Label text="Front"></Label>
    </GridLayout>
    <GridLayout #back margin="10" row="0" col="0" borderRadius="20" (loaded)="initializeCards()">
        <Label text="Back"></Label>
    </GridLayout>
</GridLayout>
```

Since this is using Angular, we will use the `ViewChild` decorator to get the front and back layouts in our component file.

### Setups for the flip animation

We will need to add a couple of imports in our component file that will be used for our animation.

```js
import { ViewChild, ElementRef } from "@angular/core";
import { Animation, AnimationDefinition } from "tns-core-modules/ui/animation";
import { AnimationCurve } from "tns-core-modules/ui/enums";
```

We will then use the `ViewChild` decorator to get access to the front and back layouts in our template, which we will use for our animations.

```js
@ViewChild('front', { read: ElementRef, static: true }) front: ElementRef;
@ViewChild('back', { read: ElementRef, static: true }) back: ElementRef;
```

```js
initializeCards(): void {
  // rotate and hide the back layout
  this.back.nativeElement.rotateX = 180;
  this.back.nativeElement.opacity = 0;
}
```

### Writing the flip animation

To build the actual flip animation, we will need to use `AnimationDefinition` to be able to run multiple animations in parallel. In this tutorial, I am rotating the card against the x axis, to rotate against a different axis, all you have to do is move the rotate value for `x` to whichever axis you want the card to rotate against.

```js
getFlipToBackAnimation(animationDuration: number): Animation {
    const animationDefinition: AnimationDefinition[] = [
        {
            target: this.front.nativeElement,
            rotate: { x: -180, y: 0, z: 0 },
            duration: animationDuration,
            curve: AnimationCurve.easeInOut
        },
        {
            target: this.back.nativeElement,
            rotate: { x: 0, y: 0, z: 0 },
            translate: { x: 0, y: 0 },
            duration: animationDuration,
            curve: AnimationCurve.easeInOut
        },
        {
            target: this.back.nativeElement,
            opacity: 1,
            delay: animationDuration / 2,
            duration: 1
        },
        {
            target: this.front.nativeElement,
            opacity: 0,
            delay: animationDuration / 2,
            duration: 1
        }
    ];
    return new Animation(animationDefinition, false);
}
```

Breaking down the code above,
- the first element in the `animationDefinition` array it rotating the front layout
- at the same time, we will also have to rotate the back layout which is the second element in the array
- the third and fourth elements is to hide the front layout and show the back layout at the halfway mark (which is in our case where both the layouts are at 90 degrees).

Something to note here is that the animation curve that can be used with this setup needs to be equal on both sides to be able to hide the element in the middle of the running animation, which is when both the front and back side of the card is at 90 degrees (i.e. curves such as `linear`, `easeInOut` and `bounce` would work, `easeIn` and `easeOut` would require one of the side of the card to be hidden at a different time depending on when the rotation gets to 90 degrees).

The opposite of this will have to happen on the reverse animation (flipping from back to front)

```js
getFlipToFrontAnimation(animationDuration: number): Animation {
    const animationDefinition: AnimationDefinition[] = [
        {
            target: this.front.nativeElement,
            rotate: { x: 0, y: 0, z: 0 },
            duration: animationDuration,
            curve: AnimationCurve.easeInOut
        },
        {
            target: this.back.nativeElement,
            rotate: { x: 180, y: 0, z: 0 },
            duration: animationDuration,
            curve: AnimationCurve.easeInOut
        },
        {
            target: this.back.nativeElement,
            opacity: 0,
            delay: animationDuration / 2,
            duration: 1
        },
        {
            target: this.front.nativeElement,
            opacity: 1,
            delay: animationDuration / 2,
            duration: 1
        }
    ];
    return new Animation(animationDefinition, false);
}
```

Now that we have both animations build out, we are ready to wire it up to the `tap` event we setup earlier.

```js
// flags to track current state
private isAnimating = false;
private isFront = true;

flip(): void {
    if (!this.isAnimating) {
        this.isAnimating = true;
        if (this.isFront) {
            this.getFlipToBackAnimation(500).play().then(() => {
              this.isFront = false;
              this.isAnimating = false;
            });
        } else {
          this.getFlipToFrontAnimation(500).play().then(() => {
            this.isFront = true;
            this.isAnimating = false;
          });
        }
    }
}
```

Hope you enjoyed this short animation tutorial. Checkout the full source code [here](https://github.com/williamjuan027/NativeScript-cardflip-demo)
