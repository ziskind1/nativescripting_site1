---
path: '/posts/observable-arrays'
title: 'When Should You Use Observable Arrays in NativeScript Core, Angular, and Vue?'
author: 'alex_ziskind'
createdDate: '2019-03-30'
updatedDate: '2019-03-30'
draft: false
tags: ['NativeScript', 'Tutorial', 'Video']
image: tns-observable-arrays-poster.png
---

Typically we bind the ListView and Repeater components to a JavaScript array in NativeScript, but it's not always clear when you should use a regular JavaScript array or ObservableArray. What is so observable about it anyway? That's what we're going to find out here.

## TL;DR

If you prefer watching a video of the tutorial instead, check it out below.

<br/>

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/yq5JjxPYu7Q" frameborder="0" allowfullscreen></iframe>
</div>

<br/>

[ObservableArray](https://docs.nativescript.org/ns-framework-modules/observable-array) extends the functionality of the base JavaScript Array by providing the capability to detect and respond to changes of a collection of objects. It supports known Array methods such as `concat`, `push`, `reduce`, `slice`, `splice`, `reverse` [etc](https://docs.nativescript.org/api-reference/classes/_data_observable_array_.observablearray).

In this article, we'll compare 3 apps—in NativeScript Core, Angular, and Vue—and show you which require the ObservableArray.

## NativeScript Core

First up is NativeScript Core.

For the demo apps, we have 3 different flavors of the following app:

<br/>

![Demo app](./observable-arrays.png)

<br/>

In the XML file, we have a simple UI with a `Button` and a `ListView` that is bound to `itemsObs`.

<br/>

```xml
<Page xmlns="http://www.nativescript.org/tns.xsd" navigatingTo="navigatingTo"
  class="page">

  <StackLayout class="p-20">
      <Button text="Tap the button" tap="{{ onTap }}" class="btn btn-primary btn-active" />

      <ListView items="{{ itemsObs }}">
          <ListView.itemTemplate>
              <Label text="{{ $value }}" />
          </ListView.itemTemplate>
      </ListView>
  </StackLayout>

</Page>
```

<br/>

Next, let's take a look at the View Model:

<br/>

```typescript
import { Observable } from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array';

export class HelloWorldModel extends Observable {

    // public items = ['item1', 'item2'];
    public itemsObs = new ObservableArray(['item1', 'item2']);

    private counter = 3;

    constructor() {
        super();
    }

    public onTap() {
        const newItem = 'item' + this.counter++;
        // this.items.push(newItem);
        this.itemsObs.push(newItem);
    }
}
```

<br/>

We instantiate an `ObservableArray` object `itemsObs` with two strings. We then wire up `onTap()` to push a new string onto the `ObservableArray` when called. The result is that every time the button is tapped, an item will be added to the `ListView`. This happens because the array is Observable.

<br/>

### What Does that Mean Anyway?

An Observable emits items or sends notifications to its observers/subscribers when an event happens. In our case, the observer is the ListView that is bound to the ObservableArray and the event is a change in the data store. So whenever the data changes, the UI is notified and updates itself accordingly (adds an item to the ListView in our case). Very nifty, don't you think?

<br/>

### But Can't You Just Use a Regular Array?

Well, I'm glad you asked. Let's do a little experiment.

We are going to switch out our `ObservableArray` object for a regular array:

<br/>

```typescript
export class HelloWorldModel extends Observable {

    public items = ['item1', 'item2'];
    // public itemsObs = new ObservableArray(['item1', 'item2']);

    ...

    public onTap() {
        const newItem = 'item' + this.counter++;
        this.items.push(newItem);
        // this.itemsObs.push(newItem);
    }
}
```

<br/>

Don't forget to make the change in the XML file:

<br/>

```
<ListView items="{{ items }}">
```

<br/>

If you run the app now, you will find that there is no change to the UI when the button is tapped. Items are getting added to the `items` array with each tap, but the change isn't reflected in the UI. There's nothing notifying the UI that things have changed.

## NativeScript Angular

Moving on to NativeScript Angular...

Let's quickly look at the initial code:

 <br/>

```xml
<StackLayout>

  <Button (tap)="onTap()" class="btn btn-primary" style="background-color:red;"
    text="Tap the button"></Button>

  <ListView [items]="itemsObs">
      <ng-template let-item="item">
          <Label [text]="item"></Label>
      </ng-template>
  </ListView>

</StackLayout>
```

<br/>

View Model:

<br/>

```typescript
import { Component } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent {

    private counter = 3;

    // public items = ['item1', 'item2'];
    public itemsObs = new ObservableArray(['item1', 'item2']);

    public onTap() {
        const newItem = 'item' + this.counter++;
        // this.items.push(newItem);
        this.itemsObs.push(newItem);
    }
}
```

<br/>

It's basically the same code we had previously, so we won't go over it again.

Note that we use the same `ObservableArray` as we did previously; from the `tns-core-modules/data/observable-array` module. We aren't using RxJS Observable.

If you take a look at the running app, you will see that the ListView updates with new items when you tap the button.

### Using a Regular Array

Again, let's switch out the `ObservableArray` for a regular array and see what happens:

<br/>

```typescript
export class AppComponent {

    private counter = 3;

    public items = ['item1', 'item2'];
    // public itemsObs = new ObservableArray(['item1', 'item2']);

    public onTap() {
        const newItem = 'item' + this.counter++;
        this.items.push(newItem);
        // this.itemsObs.push(newItem);
    }
}
```

<br/>

```xml
<ListView [items]="items">
```

<br/>

If you test out the app, you will find that the ListView updates with new items when you tap the button. So with Angular, you don't need to use ObservableArray, you can just use a regular Array and save yourself the overhead of using the former.

## NativeScript-Vue

Now onto our final experiment with NativeScript-Vue.

Again, the code:

<br/>

```vue
<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!" />
        <StackLayout>
            <Button @tap="onTap" class="btn btn-primary" :text="Tap the button"></Button>

            <ListView for="item in itemsObs">
                <v-template>
                    <Label :text="item" />
                </v-template>
            </ListView>
        </StackLayout>
    </Page>
</template>

<script lang="ts">
import { ObservableArray } from "tns-core-modules/data/observable-array";

    export default {
        data() {
            return {
                counter: 3,
                // items: ["item1", "item2"],
                itemsObs: new ObservableArray(["item1", "item2"])
            };
        },

        methods: {
            onTap() {
                const newItem = "item" + this.counter++;
                // this.items.push(newItem);
                this.itemsObs.push(newItem);
            }
        }
    };
</script>

<style scoped>
    ...
</style>
```

<br/>

Run the app, and as usual tapping the button adds items to the ListView.

### Using a Regular Array

Let's see what effect we'll get by using a regular array in the Vue app:

<br/>

```vue
<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!" />
        <StackLayout>
            <Button @tap="onTap" class="btn btn-primary" :text="Tap the button"></Button>

            <ListView for="item in items">
                <v-template>
                    <Label :text="item" />
                </v-template>
            </ListView>
        </StackLayout>
    </Page>
</template>

<script lang="ts">
import { ObservableArray } from "tns-core-modules/data/observable-array";

    export default {
        data() {
            return {
                counter: 3,
                items: ["item1", "item2"],
                // itemsObs: new ObservableArray(["item1", "item2"])
            };
        },

        methods: {
            onTap() {
                const newItem = "item" + this.counter++;
                this.items.push(newItem);
                // this.itemsObs.push(newItem);
            }
        }
    };
</script>

<style scoped>
    ...
</style>
```

<br/>

Test the app and you'll find that the ListView does update with new items on tapping the button, so in Vue, you also don't need the ObservableArray.

## In Summary

From what we've seen, you only need to use ObservableArray when using NativeScript Core. For Angular and Vue, you can just use the regular Array.

For more video tutorials about NativeScript, check out our courses on [NativeScripting.com](https://nativescripting.com/). We cover all flavors of NativeScript—Core, Angular and Vue.

Let me know what you thought of this tutorial on Twitter: [@digitalix](https://twitter.com/digitalix?lang=en) or leave a comment here. You can also send me your NativeScript related questions that I can answer in video form. If I select your question to make a video answer, I'll send you swag. Use the #iScriptNative hashtag.
