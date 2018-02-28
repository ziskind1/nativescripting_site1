---
path: "/posts/nativescript-observable-magic-string-property-name-be-gone"
title: "NativeScript Observable Magic String Property Name, Be Gone!"
author: 'alex_ziskind'
createdDate: '2017-12-12'
updatedDate: '2017-12-12'
draft: false
tags: ["NativeScript", "Tips and Tricks", "Tutorial", "Video"]
image: tns-obs-prop-names-poster.png
---

A popular approach in JavaScript APIs these days is to pass a string that matches a property name as a parameter to some function. These are sometimes called ‘magic strings’ and they are very code smelly. In this article and video we will fix this problem.
<br/><br/>

<div class="well">
<h6>Related Resources</h6>
<ul>
<li>
<p>
<a title="NativeScript Observable Magic String Property Names, Be Gone!" href="https://youtu.be/lNcNYFNEaEI" target="_blank">NativeScript Observable Magic String Property Names, Be Gone!</a>
</p>
<iframe src="https://www.youtube.com/embed/lNcNYFNEaEI" frameborder="0" allowfullscreen></iframe>
</li>
</ul>
</div>

And why shouldn’t we use them? After all, JavaScript allows us to access object properties in either of these ways:
<br/><br/>

<pre class="brush: javascript; highlight: []">
obj.property
obj['property']
</pre>

<br/><br/>

Using strings to denote property names is extremely error prone and not refactor friendly. We have enough to worry about when it comes to keeping the code properties and the bound properties in our markup in sync, let’s at least eliminate this worry when it comes to our code.  
<br/><br/>

In NativeScript Core applications a common pattern to support two-way data binding is to create a view model that extends NativeScript’s own Observable. By using Observable’s `get()` and `set()` methods, we get UI updates for free. Unfortunately, these methods accept magic strings to let the API know what property name was updated.  
<br/><br/>

With the help of TypeScript, we can solve this problem using one or both of the following two methods. Pick your favorite or the most appropriate method for your situation.
<br/><br/><br/><br/>

## Setup
We can demonstrate this with a simple “Hello World” application. We can quickly generate a NativeScript app with the common “Hello World” template and TypeScript using this simple CLI command:
<br/><br/>

```
tns create magic-strings-be-gone --tsc
```

<br/><br/>
Open up the project folder in a code editor and open the `main-view-model.ts` file, which defines the `HelloWorldModel` class. The `message` property that we see there with a getter and a setter is bound to a label in the markup. We won’t need a getter and a setter for this exercise, a simple public property will do. Remove the getter and setter for the `message` property and just add a public `message` property of the `srtring` type. You can also remove the private `_message` field if you want, but it’s not bothering anyone, right? Oh, just remove it already, you know you want to.
<br/><br/>

At this point our class should look like this:
<br/><br/>

<pre class="brush: javascript; highlight: []">
export class HelloWorldModel extends Observable {
    private _counter: number;
    constructor() {
        super();
        this._counter = 42;
        this.updateMessage();
    }
    public message: string;
    public onTap() {
        this._counter--;
        this.updateMessage();
    }
    private updateMessage() {
        if (this._counter <= 0) {
            this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        } else {
            this.message = `${this._counter} taps left`;
        }
    }
}
</pre>

<br/><br/>

The problem here is that when we update the `message` property, we don’t get notifications and our UI won’t update. To get the free UI updates, we have to use Observable’s `set()` function to set the message property, which internally triggers notification. So change our `updateMessage()` method to this:
<br/><br/>

<pre class="brush: javascript; highlight: []">
    private updateMessage() {
        if (this._counter <= 0) {
            this.set('message', 'Hoorraaay! You unlocked the NativeScript clicker achievement!');
        } else {
            this.set('message', `${this._counter} taps left`);
        }
    }
</pre>

<br/><br/>

There are those magic strings! Observable’s API requires a string to be sent to the `set()` method and this is where our problems began. If we refactor the code and change the property name or the magic string, or worse, one of the magic strings, then we will have runtime problems that will be extremely hard to diagnose.
<br/><br/>

Let’s fix this, shall we?
<br/><br/><br/><br/>

## Method 1
TypeScript has a handy operator that allows us to create a “list” of strings that are the public property names of a class. Well, that’s not entirely accurate. We can create a `type` that is all the public properties of a class as strings.
<br/><br/>

We can use the amazing `keyof` operator to do this.
<br/><br/>

Just above our `HelloWorldModel` class definition, define a new type and use the `keyof` operator:
<br/><br/>

<pre class="brush: javascript; highlight: []">
type MessageType = keyof HelloWorldModel;
</pre>

<br/><br/>

If our editor provides TypeScript intellisense as Visual Studio Code does, when we hover over the `MessageType` identifier, we’ll see that the new type we created is all the public properties of the `HelloWorldModel` class as strings.
<br/><br/>

This is perfect because now we can create a constant that will be just one of the properties, specifically the message property:
<br/><br/>

<pre class="brush: javascript; highlight: []">
const messageType: MessageType = 'message';
</pre>

<br/><br/>

This constant looks like a string, but it’s not a string. It’s of type `MessageType`. If we try misspelling `message`, we’ll immediately see complication errors. Since we now have a strongly typed constant, we can just use it in the `set()` method call of our `updateMessage()` method:
<br/><br/>

<pre class="brush: javascript; highlight: []">
    private updateMessage() {
        if (this._counter <= 0) {
            this.set(messageType, 'Hoorraaay! You unlocked the NativeScript clicker achievement!');
        } else {
            this.set(messageType, `${this._counter} taps left`);
        }
    }
</pre>

<br/><br/>

Now if we change the property name, we will get compilation errors, which is a whole lot better than getting a runtime error. 
<br/><br/><br/><br/>

## Method 2
If we want a more generic approach and don’t want to add a constant for every property we want to update, then we can use this next method, which is similar in that we still use the `keyof` operator.
<br/><br/>

Create a new file called `observable-extensions.ts` and add the following code to the file:
<br/><br/>

<pre class="brush: javascript; highlight: []">
import { Observable } from 'data/observable';
export function getObservableProperty<T extends Observable, K extends keyof T>(obj: T, key: K) {
    return obj.get(key);
}
export function setObservableProperty<T extends Observable, K extends keyof T>(obj: T, key: K, value: T[K]) {
    obj.set(key, value);
}
</pre>

<br/><br/>

We’re exporting two functions here that act on `Observable`s. Take a look at the generic `setObservableProperty()` function. It specifies that the first parameter is of type `T`, which has to inherit from `Observable`, and our `HelloWorldModel` is such a class. The second parameter is of type `K` which extends the type that is `keyof T`, which is, the list of all public properties of the class that extends `Observable`. There’s a lot to unpack there, but trust me, it works.
<br/><br/>

We can now import the `setObservableProperty()` function in the `main-vew-model.ts` file:
<br/><br/>

<pre class="brush: javascript; highlight: []">
import { setObservableProperty } from './observable-extensions';
</pre>

<br/><br/>
And modify the `updateMessage()` method once again to use the new function:
<br/><br/>

<pre class="brush: javascript; highlight: []">
    private updateMessage() {
        if (this._counter <= 0) {
            setObservableProperty(this, 'message', 'Hoorraaay! You unlocked the NativeScript clicker achievement!');
        } else {
            setObservableProperty(this, 'message', `${this._counter} taps left`);
        }
    }
</pre>

<br/><br/>

This is deceivingly simple looking. It even looks like we have our magic string back, but in reality, the `message` parameter is NOT a string at all. It is a `type`. If we try misspelling, we’ll immediately get TypeScript compilation errors, which is something we didn’t get at the start of this article.
<br/><br/>

TypeScript provides us with some powerful tools to help us not mess up, and the `keyof` operator is a really awesome one. While these techniques are demonstrated in the context of a NativeScript Core application, we can use them in any application where an API requires a magic string as a property name. 
You might also like a video version of this article, [which is available here](https://youtu.be/lNcNYFNEaEI). If you enjoy video learning and you’re interested in more NativeScript development techniques that are beginner to advanced, check out [NativeScripting.com](https://nativescripting.com/) for video courses.
<br/><br/>

Happy coding. 

