---
path: '/posts/how-to-build-your-very-own-pure-javascript-and-css-fab-in-nativescript-and-angular-with-videos'
title: 'How to build your very own pure JavaScript and CSS FAB in Nativescript and Angular (with videos!)'
author: 'alex_ziskind'
createdDate: '2017-01-27'
updatedDate: '2017-01-27'
draft: false
tags: ['Android', 'Angular', 'iOS', 'NativeScript', 'TypeScript']
image: how-to-build-your-very-own-pure-javascript-and-css-fab-in-nativescript-and-angular-with-videos-poster.png
---

What’s a FAB? This is a Floating Action Button that has been popularized by the Material Design paradigm. It’s a button that hovers over your content and provides a quickly accessible single function, and it’s no longer only for Android apps. Many iOS apps now include the FAB as well. 

In this NativeScript with Angular tutorial I will show you how to create a FAB with only JavaScript and CSS, without any third party libraries. This is a cross platform approach that will work for iOS and Android. There is a four part video playlist included for those that want to watch as I build the FAB from scratch.

#### Related Resources

* [Floating Action Button in NativeScript Playlist](https://www.youtube.com/playlist?list=PLPwbI_iIX3aSKRjtx-0dOF6701njL-BuE)

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLPwbI_iIX3aSKRjtx-0dOF6701njL-BuE" frameborder="0" allowfullscreen></iframe>
</div>

* * *

#### [Part 1: Setting the stage](#part1)

#### [Part 2: Creating the FAB Angular component](#part2)

#### [Part 3: Making the FAB functional](#part3)

#### [Part 4: Adding the finishing "touch"](#part4)

#### [Part 5: Bonus round (adding a native shadow)](#part5)

* * *

**Note:** Since I strive to show as much of a cross platform approach as possible, parts 1 through 4 are completely cross platform and work the same on iOS and Android. But since a few folks have inquired about adding a shadow to the FAB, I’ve added part 5, which renders a shadow on both iOS and Android, but uses native platform calls directly from your JavaScript. So while part 5 is not strictly cross platform, it does support both platforms and demonstrates how to tap into the power of native code in NativeScript.

<h2 id="part1">Part 1: Setting the stage</h2>

In part 1 of this tutorial, I show you how to create a NativeScript Angular project and set up a native scrolling list over which the floating action button will, well, float.

#### Related Resources

* [Floating Action Button in NativeScript with Angular. Part 1: Setting the Stage](https://www.youtube.com/watch?v=YeHnfmiUGbw)

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/YeHnfmiUGbw" frameborder="0" allowfullscreen></iframe>
</div>

First things first. We need to create a new NativeSript Angular app project. I’m going to call mine “floatbtn” just because.

```
tns create floatbtn —ng
```

Change into that directory that you just created.

```
cd floatbtn
```

Now you can start livesyncing your app with your favorite emulator, iOS or Android. I’m going to show the iOS one in my examples. The `watch` flag will keep an eye on our changes and update the app running in the emulator automatically.

```
tns livesync ios —emulator —watch
```

Open the `floatbtn` folder in your favorite code editor, I’m using Visual Studio Code in the videos. You will see the NativeScript Angular folder structure here and all your code lives in the `app` folder. Let’s go ahead and delete all the contents in the following files:

* app.css
* app.component.ts
* app.component.html

We’re going to populate the `app.component.html` with the following code to create a scrollable list of items:

**_app.component.html_**

```
<absolutelayout>
    <scrollview class="sv">
        <stacklayout>
            <stacklayout *ngfor="let item of arr" class="list-item">
                <label [text]="item"></label>
            </stacklayout>
        </stacklayout>
    </scrollview>
</absolutelayout>
```

Angular developers will immediately recognize the `*ngFor` directive here. This means that we’re going to draw that `StackLayout` for each of the items in the `arr` array, which we’ll get to shortly.

Notice that we wrapped this list in a `ScrollView` (to make the `ngFor` list scrollable), and we wrapped the `ScrollView` with an `AbsoluteLayout`. `AbsoluteLayout` is a great choice for positioning your elements on, ahem, absolutely on the screen. This works similarly to absolute positioning on the web.

Now for the main app.component.ts code:

**_app.component.ts_**

```
import { Component } from “@angular/core”;
@Component({
    selector: “my-app”,
    templateUrl: “app.component.html”
})
export class AppComponent {
    public arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
}
```

There’s that `arr` array that we used in the html view. It’s a simple list of numbers that we use to create the scrollable list. But the list will likely not fill up the entire screen this way, not to mention scrolling. So we’re going to need to style each list item to take up more horizonal space (because I don’t feel like adding more than 20 numbers to the array).

We’ve already added the `list-item` class to each of the list items in the html, now we’re going to give the class some CSS rules. Open up the app.css file and add the following:

**_app.css_**

```
.sv {
    width: 100%;
    height: 100%;
}
.list-item {
    height: 80;
    border-bottom-width: 1;
    border-bottom-color: gray;
}
```

Notice that I’ve also set the `ScrollView` height and width to 100% with the `sv` class so the `ScrollView` is limited to the parent’s size, which is also the size of the screen. This will allow us to actually scroll the list. Without it, the `ScrollView` will be as long as the list and it won’t “know” to scroll.

<h2 id="part2">Part 2: Creating the FAB Angular component</h2>

In part 2 of this tutorial, I show you how to create and style the actual floating action button component. Don’t skip part 1 though because the button won’t “float” unless you perform the setup described in part 1.

#### Related Resources

* [Floating Action Button in NativeScript with Angular. Part 2: Creating and Styling the FAB Component](https://www.youtube.com/watch?v=qgwdN97LANo)

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/qgwdN97LANo" frameborder="0" allowfullscreen></iframe>
</div>

Now that we have a place to put the button, let’s create a new Angular component for the FAB. We’re going to keep all our JavaScript (TypeScript), HTML, and CSS code in the same component file for this demo. 

**_Aside:_** I prefer to keep CSS and HTML separate from the code when it becomes difficult to see the forest for the trees. I’m sure there’s some subjective threshold of what is tolerable for different folks, or perhaps your organization has a style guide for this situation. However, here I’m putting everything in one file.

Create a new file called `float-btn.component.ts` and add the following code to it:

**_float-btn.component.ts_**

```
import { Component } from “@angular/core”;
@Component({
    moduleId: module.id,
    selector: “float-btn”,
    template:
    <stacklayout class="float-btn">
        <label class="float-btn-text" text="+"></label>
    </stacklayout>
    ,
    styles: [
         
            .float-btn {
                background-color:#30bcff;
                border-radius: 28;
                width:56;
                height:56;
                text-align: center;
                vertical-align: middle;
            }
            .float-btn-text {
                color:#fff;
                font-size: 36;
                margin-top:-4;
            }
         
    ]
})
export class FloatBtnComponent {
}
```

To use this component, make sure you add its reference to the `NgModule`. Open the `app.module.ts` file and add the highlighted lines.

**_app.module.ts_**

```
import { NgModule, NO_ERRORS_SCHEMA } from “@angular/core”;
import { NativeScriptModule } from “nativescript-angular/nativescript.module”;
import { AppComponent } from “./app.component”;
import { FloatBtnComponent } from ‘./float-btn.component’;
@NgModule({
    declarations: [
        AppComponent,
        FloatBtnComponent
        ],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
```

Now that you’ve registered (or “declared”) the FAB component in the module, it becomes available to use in the parent component, the app.component. Open the `app.component.html` file and add the the `float-btn` element to it, but make sure it’s inside the `AbsoluteLayout` so that you can position it.

**_app.component.html_**

```
<absolutelayout>
    <scrollview class="sv">
        <stacklayout>
            <stacklayout *ngfor="let item of arr" class="list-item">
                <label [text]="item"></label>
            </stacklayout>
        </stacklayout>
    </scrollview>
    <stacklayout class="float-btn-container">
        <float-btn></float-btn>
    </stacklayout>
</absolutelayout>
```

Notice that I’ve also wrapped the `float-btn` element in a `StackLayout`. This will give me the ability to position the button anywhere I want on the screen. I’ve applied the class `float-btn-container` to the `StackLayout` so I can position it in the lower right corner of the screen. Here is the updated `app.css` file:

**_app.css_**

```
.sv {
    width: 100%;
    height: 100%;
}
.list-item {
    height: 80;
    border-bottom-width: 1;
    border-bottom-color: gray;
}
.float-btn-container {
    margin-left: 80%;
    margin-top: 80%;
}
```

<h2 id="part3">Part 3: Making the FAB functional</h2>

In part 3 of the tutorial, I show you how make the button work by responding to taps and passing the tap gesture events back to the component’s parent.

#### Related Resources

* [Floating Action Button in NativeScript with Angular. Part 3: Making the FAB Component Functional](https://www.youtube.com/watch?v=e4knWrwZ9RQ)

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/e4knWrwZ9RQ" frameborder="0" allowfullscreen></iframe>
</div>

One of the ways that Angular handles inter-component communication is with the use of an `EventEmitter`. We’ll use the `EventEmitter` in the FAB component to let the parent component know when the button is tapped. 

The companion to an `EventEmitter` is the `Output` decorator, which we also need to import. The `Output` decorator is added to a property that is exposed to the parent. In our case, this is the `tap` property, which is of type `EventEmitter`. 

Here is the updated code with the `Output` and `EventEmitter` imported and utilized.

**_float-btn.component.ts_**

```
import { Component, Output, EventEmitter } from “@angular/core”;
@Component({
    moduleId: module.id,
    selector: “float-btn”,
    template: <code>
    <StackLayout
        (tap)=“onTap($event)”
        class=“float-btn”>  
        <Label class=“float-btn-text” text=“+”></Label>
    </StackLayout>
</code>,
    styles: [ /* omitted for brevity */ ]
})
export class FloatBtnComponent {
    @Output() tap: EventEmitter<any> = new EventEmitter<any>();
    public onTap(args: any) {
        this.tap.emit(args);
    }
}
</any></any>
```

Notice that we’ve attached the `tap` event handler to the `StackLayout` (which is our button) which triggers the `emit` function of the `EventEmitter` passing along any parameters that were passed into the handler. 

Now the parent component needs to register it’s own tap handler with the tap event that the FAB will emit. Let’s add the `tap` binding to the `float-btn` in the `app.component.html`

**_app.component.html_**

```
…
 <float-btn (tap)="onTap($event)"></float-btn>
…
```

**_app.component.ts_**

```
import { Component } from “@angular/core”;
@Component({
    selector: “my-app”,
    templateUrl: “app.component.html”
})
export class AppComponent {
    public arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    public onTap(args) {
        console.log(‘a tap’);
    }
}
```

<h2 id="part4">Part 4: Adding the finishing “touch”</h2>

Finally, in part 4 of the tutorial, you will make the user feel like they are actually tapping on a button. I show you how to use keyframe animations in NativeScript to animate the button press states.

#### Related Resources

* [Floating Action Button in NativeScript with Angular. Part 4: Adding the Finishing Touches](https://www.youtube.com/watch?v=LHYkoUNXMJ0)

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/LHYkoUNXMJ0" frameborder="0" allowfullscreen></iframe>
</div>

The rest of the work is going to be in the `float-btn.component.ts` file. One of the nice things about components is that we can keep these kinds of internal details a secret from the parent component or any other component. But our little FAB is getting an upgrade and only IT knows about it. Shhh.

Let’s add a nice little animated color change to the FAB when the button it tapped. We could do the animation several different ways, but I’m going to show you how to use a simple keyframe definition to accomplish this.

We need to be notified when the button is first touched and when the button is released. We can’t do this using the existing `tap` event because that doesn’t get triggered until the button is released and within a certain amount of time (a topic for another post).

We’re going to attach another event that knows the difference between a touch “down” and a touch “up”. And this event is simply called `touch`. Here’s the updated code:

**_float-btn.component.ts_**

```
import { Component, Output, EventEmitter } from “@angular/core”;
@Component({
    moduleId: module.id,
    selector: “float-btn”,
    template:
    <stacklayout (tap)="onTap($event)" (touch)="onTouch($event)" class="float-btn">
        <label class="float-btn-text" text="+"></label>
    </stacklayout>
    ,
    styles: [ /* omitted for brevity */ ]
})
export class FloatBtnComponent {
    @Output() tap: EventEmitter<any> = new EventEmitter<any>();
    public onTap(args: any) {
        this.tap.emit(args);
    }
    public onTouch(args) {
        let theBtn = args.view;
        switch (args.action) {
            case ‘down’:
                theBtn.className = ‘float-btn down’;
                break;
            case ‘up’:
                theBtn.className = ‘float-btn’;
                break;
        }
    }
}
</any></any>
```

Notice we added the `touch` binding to the `StackLayout` and we are handling the event in the `onTouch` function of the component. If the `action` property of the `args` parameter is `down`, then we know the user touched the button. If `action` is `up`, then the user let go.

The key here is setting the `className` of the `StackLayout` (which is the `view` property on the `args` parameter) when the user touches or lets go of the button. We add the `down` class name when the user first touches the button. This CSS class is going to trigger an animation.

Make the following additions to the `styles` section of the component:

**_app.component.ts_**

```
import { Component, Output, EventEmitter } from “@angular/core”;
@Component({
    moduleId: module.id,
    selector: “float-btn”,
    template:
    <stacklayout (tap)="onTap($event)" (touch)="onTouch($event)" class="float-btn">
        <label class="float-btn-text" text="+"></label>
    </stacklayout>
    ,
    styles: [
         
            .float-btn {
                background-color:#30bcff;
                border-radius: 28;
                width:56;
                height:56;
                text-align: center;
                vertical-align: middle;
            }
             .float-btn.down {
                 animation-name: down;
                 animation-duration: 0.2s;
                 animation-fill-mode: forwards;
             }
            .float-btn-text {
                color:#fff;
                font-size: 36;
                margin-top:-4;
            }
            @keyframes down {
                from { background-color: #30bcff; }
                to { background-color: purple;  }
            }
         
    ]
})
export class FloatBtnComponent {
/* omitted for brevity */
}
```

Notice the `down` class definition triggers the keyframe animation with the name “down”, with a duration of 0.2 seconds. The `@keyframes` rule with the name “down” simply changes the `background-color` property of the `StackLayout` from light blue (#30bcff) to purple.

When the user lets go of the button, the class name of the `StackLayout` is reset back to the original `float-btn` and the background color goes back to light blue.

This is a really easy way to add an indication that the button was touched.

  
  
<h2 id="part5">Part 5: Bonus round</h2>

In this bonus round, I’ll show you how to add a shadow to the Android and iOS implementations of the FAB using native calls with JavaScript! 

#### Related Resources

* [Floating Action Button in NativeScript with Angular. Part 5: Bonus round](https://www.youtube.com/watch?v=RgIpDc9gdQU)

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/RgIpDc9gdQU" frameborder="0" allowfullscreen></iframe>
</div>

We’re going to keep working only in the `float-btn.component.ts` file. In this part, however, there’s a slight deviation from what we’ve done up to this point. Intstead of using NativeScript’s own cross platform built in widgets and components, we’re going to tap into a lower level of abstraction and write JavaScript code that manipulates native APIs directly.

One of the best things about NativeScript and what really sets it apart is the ability to write JavaScript code against the native APIs whenever a little more power is needed. Since there currently isn’t a way to create a shadow in a cross platform way, we’ll create a shadow for our button by cracking open the native documentation. Nah, just kidding, I just googled for it and found example on StackOverflow.

So here we go…

Step 1. Wrap the existing `StackLayout` with another `StackLayout` that’s going to be used for our shadow rendering. Add a class to it called `float-btn-shadow` and a `loaded` event handler called `onLoaded`. In the `styles` array, define the `float-btn-shadow` class to have the exact same size at the button.

**_float-btn.component.ts_**

```
…
@Component({
    moduleId: module.id,
    selector: “float-btn”,
    template:
        <stacklayout class="float-btn-shadow" (loaded)="onLoaded($event)">
            <stacklayout class="float-btn" (tap)="onTap($event)" (touch)="onTouch($event)"> 
                <label class="float-btn-text" [text]="text"></label>
            </stacklayout>
        </stacklayout>
    ,
    styles: [
         
            .float-btn-shadow {
                width:56;
                height:56;
            }
            …
```

So what’s happening here? We want to render the shadow under the button, but we don’t want to mess up the existing animation that we are triggering when the button is tapped. So to accomplish this our button is wrapped in another `StackLayout` that is the exact same size as the button. We don’t see this other `StackLayout`, but we WILL see it’s shadow (and hopefully Spring will come soon).

We also hook up a `loaded` event handler which is where all the platform specific native calls will be written for shadow creation.

Let’s write the `onLoaded` handler. Remember that since I’m calling the `loaded` handler on the outer `StackLayout`, it’s going to be a reference to the outer `StackLayout` that is passed along with the arguments to the `onLoaded` handler.

**_float-btn.component.ts_**

```
…
    //function in the FloatBtnComponent class
    public onLoaded(args) {
        let tnsView = <any>args.object; //This is the outer StackLayout
        if (tnsView.android) {
            let nativeAnView = tnsView.android;
            var shape = new android.graphics.drawable.GradientDrawable();
            shape.setShape(android.graphics.drawable.GradientDrawable.OVAL);
            shape.setColor(android.graphics.Color.parseColor(“#30bcff”));
            nativeAnView.setBackgroundDrawable(shape);
            nativeAnView.setElevation(20);
        } else if (tnsView.ios) {
            let nativeView = tnsView.ios;
            nativeView.layer.shadowColor = new Color(‘#888888’).ios.CGColor;
            nativeView.layer.shadowOffset = CGSizeMake(0, 2.0);
            nativeView.layer.shadowOpacity = 0.5;
            nativeView.layer.shadowRadius = 5.0;
        }
    }
…
</any>
```

Lines 6 – 11 show the native calls to the android API and lines 13 – 17 show the native calls to the iOS API, both living happily together in our JavaScript code. It’s that nice?!

In Android we create a `GradientDrawable` shape which is then applied as the background of the native view wrapped by the `StackLayout`. The native view must have a background color defined in order for a shadow to be rendered. Then a shadow is rendered implicitly when we set the elevation of the view to a higher number than zero, which suggest a position in the Z-axis that is “above” the rest of the page.

In iOS we can define a shadow explicitly. Each native view has a `layer` property which allows for lower lever manipulation of the drawable objects. It’s quite easier manipulating shadows in iOS and closer resembles working explicitly with shadow definitions on the web.

I won’t go into more details of how what these calls are doing, but I do want to mention that the Android and iOS documentation do define these properties and they are documented very well.

At this point, you should have a few complaints from TypeScript because we haven’t defined a few symbols that we are using in the code block above. Let’s go to the top of the file and define these things to make TypeScript happy.

**_float-btn.component.ts_**

```
import { Component, Input, Output, EventEmitter } from “@angular/core”;
import { TouchGestureEventData, GestureEventData } from ‘ui/gestures’;
import { Color } from ‘color’;
declare const CGSizeMake: any;
declare const android: any;
…
```

We’ve imported the `Color` class from NativeScript and defined global constants for `CGSizeMake` (an iOS global function) and `android` (an Android global variable).

Now when we run the code, everything seems fine at first, but a closer look reveals that the shadow in Android is being cut off. This happens because in Android we render only to the bounds of the current element and clip the rest. To fix this, we will wrap the existing button HTML with another layout, this time a `GridLayout` and make it slightly larger than the button itself, to give the shadow enough room to render.

**_float-btn.component.ts_**

```
…
@Component({
    moduleId: module.id,
    selector: “float-btn”,
    template:
    <gridlayout class="float-btn-wrapper">
        <stacklayout class="float-btn-shadow" (loaded)="onLoaded($event)">
            <stacklayout class="float-btn" (tap)="onTap($event)" (touch)="onTouch($event)"> 
                <label class="float-btn-text" [text]="text"></label>
            </stacklayout>
        </stacklayout>
    </gridlayout>
    ,
    styles: [
         
            .float-btn-wrapper {
                width:75;
                height:75;
            }
…
```

Now we have enough space and both platforms render (almost) the same shadow.

Guess what? You’ve reached the end of the bonus round and I hope you’ve realized that you can use this technique to add shadows to your own views if you want, not necessarily just to the FAB. But keep this in mind; rendering shadows is expensive and will degrade performance. Using a shadow on one view here and there is OK, but don’t start slapping shadows on everything. Also, the Android method I’ve shown above is designed for a native `ViewGroup`, not a regular view. If you don’t know what that is, think of it this way: NativeScript layouts are android `ViewGroup`s and other widgets like labels and buttons are views. So you can only use the above technique on NativeScript layouts. There is another technique for labels and buttons, but that’s a topic for another post.

Hope you enjoyed this tutorial. No go make something FABulous!
