---
path: '/posts/nativescript-vue-class-components-examined'
title: 'NativeScript-Vue Class Components Examined'
author: 'alex_ziskind'
createdDate: '2019-02-27'
updatedDate: '2019-02-27'
draft: false
tags: ['NativeScript', 'Vue', 'Tips and Tricks', 'TypeScript', 'Video']
image: five-things-vue-class-components-poster.png
---

Using class components in NativeScript-Vue with TypeScript? You need to know these five things. Warning: strong personal opinions follow, but there is no swearing ;)

<br/>

1.  [Right Direction](#Right-Direction)
2.  [Class Component Scaffolding](#Class-Component-Scaffolding)
3.  [Five Things About Class Components in NativeScript-Vue](#Five-Things)
4.  [Related Videos](#Related-Videos)

<a name="Right-Direction"></a>

## First, we're moving in the right direction...

Not only did NativeScript-Vue [recently get TypeScript support](https://nativescripting.com/posts/typescript-class-components-in-nativescript-vue), but as of version 5.2 of the NativeScript CLI, Vue is an officially supported UI library that can be used right out of the box. Yes, you can create and manage NativeScript-Vue apps using nothing but the NativeScript CLI.

## But...

I was a bit surprised that after such a great addition to NativeScript-Vue by a community member (the addition of TypeScript support by Manuel Saelices), that the official version completely lacks TypeScript support for Vue at this time. I'm sure this will change very soon though.

<br/>

Luckily, we can still use the Vue CLI to scaffold out our NativeScript apps. See [this post](https://nativescripting.com/posts/typescript-class-components-in-nativescript-vue) for details on how to do this or you can watch the first video listed below in the Videos section.

<br/>
<br/>

<a name="Class-Component-Scaffolding"></a>

## Class Component Scaffolding

If you are here, then you must already have created a NativeScript-Vue app with TypeScript using the Vue CLI, and you've already installed `vue-class-component` and `vue-property-decorator` as dependencies. If not, then please see the start of this post.

<br/>

Class component `.vue` files aren't that different from their object notation `.vue` files.

Here's an example we'll be working with:

```xml
<template>
  <StackLayout class="form">
    <StackLayout class="input-field">
      <Label text="First Name" class="label font-weight-bold m-b-5"/>
      <TextField v-model="firstName" hint="First Name" class="input input-border"/>
    </StackLayout>
  </StackLayout>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class PersonClassComponent extends Vue {

}
</script>

```

Two important things to note here are that we're exporting a class that inherits from `Vue` and that we've docorated the class with the `@Component` decorator, similar to how we'd do this in Angular.

<br/><br/>

<a name="Five-Things"></a>

## Five Things About Class Components in NativeScript-Vue

If you are serious about using class components in your NativeScript VueJS apps with TypeScript, you need to know these five things. See the videos section below for a video tutorial on using these.

1. Props - data passed in as inputs to your Vue components
2. Data - this is local properties (or the state) of your Vue components
3. Watch - use this to spy on other properties and react to them being changed
4. Computed - don’t create and maintain another property! Use a computed to create a calculated property.
5. Methods - they do stuff! These are your event handlers and other class functions

> **NOTE**: Before using the following, make sure you've added TypeScript and the extra libraries to your project as I show in the first video.

<br/><br/>

### Props

By using the `@Prop` decorator from `vue-property-decorator`, we declare input properties just by decorating class properties.

```xml
<template>
  <StackLayout class="form">
    <StackLayout class="input-field">
      <Label text="First Name" class="label font-weight-bold m-b-5"/>
      <TextField v-model="firstName" hint="First Name" class="input input-border"/>
    </StackLayout>
  </StackLayout>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PersonClassComponent extends Vue {
  @Prop() whatToSay: string;
}
</script>
```

If you're coming from the object notation Vue, then you're used to the code looking like so:

```javascript
export default {
  props: {
    whatToSay: {
      type: String
    }
  }
};
```

<br/>
<br/>

### Data

`data` is really simple with class components. It's just properties on the class:

```xml
<template>
  <StackLayout class="form">
    <StackLayout class="input-field">
      <Label text="First Name" class="label font-weight-bold m-b-5"/>
      <TextField v-model="firstName" hint="First Name" class="input input-border"/>
    </StackLayout>
  </StackLayout>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PersonClassComponent extends Vue {
  @Prop() whatToSay: string;

  //Data
  counter = 1;
  firstName = "Donna";
  initialLastName = "Summer";
  lastName = this.initialLastName;
}
</script>
```

This is what `data` looks like with object notation - pretty ugly in my opinion:

```javascript
data() {
    return {
      counter: 1,
      firstName: "Donna",
      initialLastName: "Summer",
      lastName: "Summer"
    };
  },
```

<br/>
<br/>

### Watch

Watchers are probably the most complicated part because they are defined as class methods with a `@Watch` decorator. The `@Watch` decorator has to specify what property we're spying on.

```xml
<template>
  <StackLayout class="form">
    <StackLayout class="input-field">
      <Label text="First Name" class="label font-weight-bold m-b-5"/>
      <TextField v-model="firstName" hint="First Name" class="input input-border"/>
    </StackLayout>
  </StackLayout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class PersonClassComponent extends Vue {
  @Prop() whatToSay: string;
  counter = 1;
  firstName = "Donna";
  initialLastName = "Summer";
  lastName = this.initialLastName;

  //Watch
  @Watch("firstName")
  onFirstNameChanged() {
    this.lastName = this.initialLastName + this.counter++;
  }
}
</script>
```

BUT, it's still way neater than it is with object notation, which looks like this:

```javascript
watch: {
    firstName: {
      handler() {
        this.lastName = this.initialLastName + this.counter++;
        console.log("first name changed");
      }
    }
  }
```

The triple nested object just to define one single watch is making me want to vomit.

<br/>
<br/>

### Computed

Computeds are my favorite because they are executed exactly how they should be in a class - as getter (and setter) properties.

```xml
<template>
  <StackLayout class="form">
    <StackLayout class="input-field">
      <Label text="First Name" class="label font-weight-bold m-b-5"/>
      <TextField v-model="firstName" hint="First Name" class="input input-border"/>
    </StackLayout>

    <StackLayout class="input-field">
      <Label text="Full Name" class="label font-weight-bold m-b-5"/>
      <Label :text="fullName"/>
    </StackLayout>
  </StackLayout>
</template>


<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class PersonClassComponent extends Vue {
  @Prop() whatToSay: string;
  counter = 1;
  firstName = "Donna";
  initialLastName = "Summer";
  lastName = this.initialLastName;

  //Computed
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @Watch("firstName")
  onFirstNameChanged() {
    this.lastName = this.initialLastName + this.counter++;
  }
}
</script>

```

I'll spare you the gory details of how computeds are implemented in Vue with object notation.

<br/>
<br/>

### Methods

Since we're using classes, guess what! Methods are just methods! Declare an event handler in the template, and then just write a method in your class.

```xml
<template>
  <StackLayout class="form">
    <StackLayout class="input-field">
      <Label text="First Name" class="label font-weight-bold m-b-5"/>
      <TextField v-model="firstName" hint="First Name" class="input input-border"/>
    </StackLayout>

    <StackLayout class="input-field">
      <Label text="Full Name" class="label font-weight-bold m-b-5"/>
      <Label :text="fullName"/>
    </StackLayout>

    <Button text="SPEAK" @tap="speak"/>
  </StackLayout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class PersonClassComponent extends Vue {
  @Prop() whatToSay: string;

  counter = 1;
  firstName = "Donna";
  initialLastName = "Summer";
  lastName = this.initialLastName;

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @Watch("firstName")
  onFirstNameChanged() {
    this.lastName = this.initialLastName + this.counter++;
  }

  //Method
  speak() {
    alert("This is " + this.fullName + " speaking. " + this.whatToSay);
  }
}
</script>

```

<br/>

I know that class components aren’t for everyone and some people really love using pure JavaScript, that’s totally fine too. This is just another way to do it, and if you **are** going to be using TypeScript in your NativeScript-vue apps, then class components is a really good fit. I would even go so far as to say that at the moment, it doesn’t make much sense to use TypeScript **unless** you are using class components.

<br/>
<br/>
<br/>

<a name="Related-Videos"></a>

## Related Videos

Here are three videos where I go into NativeScript-Vue, TypeScript, and Class Components.

### NativeScript-Vue with TypeScript and Class Components

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Z9koujDvpBM" frameborder="0" allowfullscreen></iframe>
</div>

<br><br>

### Using TypeScript Class Components in NativeScript Vue

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/u8lMkgb-8iA" frameborder="0" allowfullscreen></iframe>
</div>

<br><br>

### Async/Await in NativeScript-Vue with TypeScript

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/FQmdB5P1iYw" frameborder="0" allowfullscreen></iframe>
</div>

<br><br>

Why use class components? Simple - the syntax is cleaner. Class properties are automatically data properties. No need for strange functional syntax returned by the data property, **and** you don't have to worry about `this`.

<br/>

<br/><br/>

For more video tutorials about NativeScript, look at our courses on [NativeScripting.com](https://nativescripting.com). If you're feeling adventurous, the new [NativeScript Security Course](https://nativescripting.com/course/securing-nativescript-applications) is an advanced walk-through on making your NativeScript apps secure.

<br/><br/>

Let me know if you enjoyed this short tutorial on Twitter: <a href="https://twitter.com/digitalix" target="_blank">@digitalix</a> or comment here. And send me your NativeScript related questions that I can answer in video form. If I select your question to make a video answer, I'll send you swag - use the hashtag #iScriptNative.

<br/><br/>
