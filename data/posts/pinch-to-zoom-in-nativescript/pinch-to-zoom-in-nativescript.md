---
path: '/posts/pinch-to-zoom-in-nativescript'
title: 'Add Pinch to Zoom to Images Using Angular Directives'
author: 'william_tjondrosuharto'
createdDate: '2020-10-17'
updatedDate: '2020-10-17'
draft: false
tags: ['NativeScript', 'Tutorial', 'Image', 'Angular', 'Gestures']
image: pinch-to-zoom-in-nativescript-poster.png
---

In this post, I'll be showing you how to add pinch to zoom functionality to you images using Angular directives. This is similar to Instagram's pinch to zoom functionality on the images on their feeds, where you can use 2 fingers and zoom in on any image that is being displayed on the screen, and it would snap back in place if you lift your fingers.

![image zoom](image-zoom.gif)

Since this is adding a behavior to an existing UI element, we will be able to leverage Angular directives to add this functionality. The added benefit of doing it this way is reusability. Since directives aren't necessarily coupled to a component, we would be able to use the same directive and apply it to other UI elements. Similar to the directive to add a pressed state in this [blog post](https://nativescripting.com/posts/animations-using-angular-directives), adding this behavior would require minimal changes to your template. For instance, adding this functionality to an image would look like this:

```html
<image src="some_url_to_image" pinchToZoom></image>
```

## Set up

Before we implement any of the pinch related gestures, we will need to have reference to the view the directive is attached to. We can do this by adding a `HostListener` to the element and listening to the `loaded` event. At this point, we can be sure that the element is already loaded and can be interacted with. All we need from the `loaded` event is to set the view to a global variable that can be easily accessed throughout the directive so we can apply transformations to it.

```js
private _view: View;

@HostListener('loaded', ['$event'])
  onLoaded(args: EventData): void {
    this._view = args.object as View;
  }
```

## Pinch Gesture Handler

There will be 3 main parts to how we handle the pinch gesture, which are:

- gesture start (state = 1)
- pinching gesture (state === 2)
- gesture end (fingers are lifted) (state = 3)

On gesture start, we will need to check if the location of the trigger is out of the bounds that we specify (more on this later). This is to prevent zooming in on the far corners of the images. If it within the boundaries, we can then proceed to setting the focus point of the zoom so when the user starts to pinch, the image will be zoomed in at the right location.

Now that we have the boundaries check and the focus point set, all we need to do during the pinch gesture is to update the image's scale with the amount pinched.

Lastly, we have a reset function that gets triggered when the fingers are lifted, which animates the image back to its original state.

```js
@HostListener('pinch', ['$event'])
 onPinch(args: PinchGestureEventData): void {
   if (!this._view) {
     // do not process any pinch event if view is not loaded yet
     return;
   }

   if (args.state === 1) {
     // check if pinch is triggered on the edges of the image (out of the
     // boundaries we set earlier)
     this._setOutOfBounds(args.getFocusX(), args.getFocusY())

     // disable zoom if pinch's focus point is outside of the boundaries
     if (!this._isOutOfBounds) {
       // pinch gesture
       this._setFocusPoint(
         args.getFocusX(),
         args.getFocusY()
       );
     }
   } else if (args.state === 2 && args.scale !== 1) {
     // disable zoom if pinch's focus point is outside of the boundaries
     if (!this._isOutOfBounds) {
       // translate the amount pinched into zoom level on the view
       this._setZoomScale(args.scale);
     }
   } else if (args.state === 3) {
     // gesture ended (finger lifted)
     this._reset();
   }
 }
```

## Set Boundaries (Optional)

This is the very first check that runs when the user triggers the pinch gesture. The purpose of this is to restrict the zoom to certain parts of the image. I usually add a boundary of about 70 from all sides of the image to disable zooming in on the edges of the image. This is optional, so feel free to skip this part if you want to be able to zoom in everywhere on the image.

What this function does is, it checks the pinch location against the boundaries we set, and set the flag `_isOutOfBounds` to `true` or `false` depending on whether it falls within or outside the boundaries. This value is then used in other parts of the pinch gesture handler to determine if the image should be zoomed in or not.

```js
private _imageBoundary = 70;
private _isOutOfBounds = false;

private _setOutOfBounds(focusX: number, focusY: number): void {
  // check if focus points fall out of the boundaries are not
  this._isOutOfBounds =
    focusX < this._imageBoundary ||
    focusX > (this._view.getMeasuredWidth() - this._imageBoundary) ||
    focusY < this._imageBoundary ||
    focusY > (this._view.getMeasuredHeight() - this._imageBoundary)
}
```

## Set Zoom location

We will set the zoom location using the helper function `_setFocusPoint` as referenced in the code above. The purpose of this is to enable the view to be zoomed in on a specific part of the view, instead of always defaulting to zooming in at the center of the image.

Using the `getFocusX()` and `getFocusY()` functions from the pinch gesture, we will need to calculate the zoom point by factoring in the view's width and height and setting those values to the view's `originX` and `originY` respectively as shown in the snippet below. (`originX` and `originY` ranges from 0 to 1, going from left to right and top to bottom and defaults to the center (0.5) if not set explicitly).

```js
private _setFocusPoint(focusX: number, focusY: number): void {
  // set the focus point of the zoom
  this._view.originX =
    focusX /
    Utils.layout.toDeviceIndependentPixels(
      this._view.getMeasuredWidth()
    );
  this._view.originY =
    focusY /
    Utils.layout.toDeviceIndependentPixels(
      this._view.getMeasuredHeight()
    );
}
```

## Zoom in on the View

The helper function `_setZoomScale` is called during the pinching gesture after the zoom location is set in the previous gesture state. Here we will be setting the `scaleX` and `scaleY` properties of the view, which will create a zoomed in effect on the image. Since we want to restrict the view from being able to be zoomed out further than the original size, we will need to add a check prior to setting the `scale` properties, only allowing properties that are greater than 1 (which means the view is being scaled up) to be applied to the view's `scaleX` and `scaleY`

```js
private _setZoomScale(newScale: number): void {
  // only update scale using rounded values and when above a certain threshold
  // to prevent stuttering when zooming in
  // remove newScale >= 1 check if you want to be able to zoom out
  if (newScale >= 1 && newScale - this._view.scaleX > 0.01) {
    // only allow view to be zoomed in
    this._view.scaleX = Math.round(newScale * 100) / 100;
    this._view.scaleY = Math.round(newScale * 100) / 100;
  }
}
```

## Snap back to original state

When the user lifts their fingers, we want the view to snap back to its original state - zooming out back to its original position. We can do this by running an animation that will set the `scale` for x and y back to 1. I usually add a catch block on the animation that sets the properties being animated directly on the view, as a safe guard for when the animation fails to run. For example, the animation might throw an `animation cancelled` error when we try to pinch the image midway during the reset animation, which would leave the view in intermediate state if we didn't have the catch block.

```js
private _reset() {
 if (isIOS) {
   // reset origin to always scale back to center
   // android handles this automatically
   this._view.originX = 0.5;
   this._view.originY = 0.5;
 }

 // animate the image to snap back to its original position
 this._view
   .animate({
     scale: { x: 1, y: 1 },
     curve: 'easeOut',
     duration: 300,
   })
   .catch((e) => {
     // reset the zoom manually if animation fail
     this._view.scaleX = 1;
     this._view.scaleY = 1;
   });
}
```

Below is the full code of the directive that you can use in your projects and [here](https://github.com/williamjuan027/nativescript-ui-components/tree/master/demo/src/app/features/image-zoom) is a link to a demo showcasing this functionality. Let me know what you thought of the article in the comment below or on Twitter [@williamjuan027](https://twitter.com/williamjuan27).

```ts
import { Directive, HostListener } from '@angular/core';
import {
  isIOS,
  EventData,
  PinchGestureEventData,
  View,
  Utils,
} from '@nativescript/core';

@Directive({
  selector: '[pinchToZoom]',
})
export class PinchToZoomDirective {
  private _view: View;
  private _imageBoundary = 70;
  private _isOutOfBounds = false;

  @HostListener('loaded', ['$event'])
  onLoaded(args: EventData): void {
    this._view = args.object as View;
  }

  @HostListener('pinch', ['$event'])
  onPinch(args: PinchGestureEventData): void {
    if (!this._view) {
      // do not process any pinch event if view is not loaded yet
      return;
    }

    if (args.state === 1) {
      // check if pinch is triggered on the edges of the image (out of the
      // boundaries we set earlier)
      this._setOutOfBounds(args.getFocusX(), args.getFocusY());

      // disable zoom if pinch's focus point is outside of the boundaries
      if (!this._isOutOfBounds) {
        // pinch gesture
        this._setFocusPoint(args.getFocusX(), args.getFocusY());
      }
    } else if (args.state === 2 && args.scale !== 1) {
      // disable zoom if pinch's focus point is outside of the boundaries
      if (!this._isOutOfBounds) {
        // translate the amount pinched into zoom level on the view
        this._setZoomScale(args.scale);
      }
    } else if (args.state === 3) {
      // gesture ended (finger lifted)
      this._reset();
    }
  }

  private _reset() {
    if (isIOS) {
      // reset origin to always scale back to center
      // android handles this automatically
      this._view.originX = 0.5;
      this._view.originY = 0.5;
    }

    // animate the image to snap back to its original position
    this._view
      .animate({
        scale: { x: 1, y: 1 },
        curve: 'easeOut',
        duration: 300,
      })
      .catch((e) => {
        // reset the zoom manually if animation fail
        this._view.scaleX = 1;
        this._view.scaleY = 1;
      });
  }

  private _setZoomScale(newScale: number): void {
    // only update scale using rounded values and when above a certain threshold
    // to prevent stuttering when zooming in
    // remove newScale >= 1 check if you want to be able to zoom out
    if (newScale >= 1 && newScale - this._view.scaleX > 0.01) {
      // only allow view to be zoomed in
      this._view.scaleX = Math.round(newScale * 100) / 100;
      this._view.scaleY = Math.round(newScale * 100) / 100;
    }
  }

  private _setFocusPoint(focusX: number, focusY: number): void {
    // set the focus point of the zoom
    this._view.originX =
      focusX /
      Utils.layout.toDeviceIndependentPixels(this._view.getMeasuredWidth());
    this._view.originY =
      focusY /
      Utils.layout.toDeviceIndependentPixels(this._view.getMeasuredHeight());
  }

  private _setOutOfBounds(focusX: number, focusY: number): void {
    // check if focus points fall out of the boundaries are not
    this._isOutOfBounds =
      focusX < this._imageBoundary ||
      focusX > this._view.getMeasuredWidth() - this._imageBoundary ||
      focusY < this._imageBoundary ||
      focusY > this._view.getMeasuredHeight() - this._imageBoundary;
  }
}
```
