---
path: '/posts/force-component-destroy-by-using-page-life-cycle'
title: 'Force Component Destroy by Using Page Life Cycle in NativeScript Angular'
author: 'alex_ziskind'
createdDate: '2019-05-11'
updatedDate: '2019-05-11'
draft: false
tags: ['NativeScript', 'Tutorial', 'Video']
image: force-component-destroy-by-using-page-life-cycle-poster.png
---

NativeScript Angular keeps navigated components alive on a stack. This is great for performance since the framework doesn't have to work as hard to recreate the components that you might return to. However, sometimes you might need manual control over the component life cycle, and you may need to call `ngOnDestroy()` on a component when the Page unloads. This short tutorial will show you how to do that.

## TL;DR

If you prefer watching video, we have you covered, just click on the video below.

<br>

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/c7PEuIKGGiY" frameborder="0" allowfullscreen></iframe>
</div>

## How NativeScript Angular Handles Components During Navigation

In a NativeScript Angular application, when you navigate between top-level components, they are placed on a stack and kept in memory. This is great for performance as the components won't have to be recreated as you navigate back and forth between them. However, there are some occasions where this isn't ideal and it would be preferable for a component to be destroyed when it's navigated away from. For instance, the component could be a memory hog and so it would be a good idea to not have it using up resources when not in use.

## Forcing a Component to Destroy Itself

To make a component destroy itself when the user navigates away from it, you have to make the component call its `ngOnDestroy()` lifecycle hook when the page unloads. This is done by leveraging the host page's life cycle.

<br>

All NativeScript applications (Core, Vue and Angular) have Pages. In NativeScript Angular applications, you have components which live inside pages. Each page has its own lifecycle hooks and each component also has its own lifecycle hooks. So to force a component to destroy itself, it's going to have to interact with its host page's lifecycle hooks. Let's see how this can be done.

<br>

For the demo app, we have a NativeScript Angular app that displays a list view—with the names of football players—and on tapping on one of the list view items, you will navigate to the footballer's detail page.

<br>

As mentioned previously, in NativeScript Angular, Pages host components, so for our app, we have a page that hosts the list of items, i.e. our `ItemsComponent` and another that hosts the details component, i.e. `ItemDetailComponent`. When we navigate from the list view to the details view, we are not only triggering the lifecycle events for our components, we're also triggering the lifecycle events for our NativeScript pages.

<br>

Let's demonstrate this with a common scenario where we need to clean up after ourselves after navigating away from a component (the `ItemsComponent`, in our case).

<br>

First, let's look at the code for that component:

<br>

```typescript
// items.component.ts

import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component ({
  selector: "ns-items",
  moduleId: module.id,
  templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
  items: Array<Item>;
  
  constructor(private itemService: ItemService) {}
  
  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }
}
```

<br>

Now, let's add the `ngOnDestroy()`lifecycle hook handler to the component and see if it will be called when the page unloads.

<br>

```typescript
export class ItemsComponent implements OnInit, OnDestroy {
  ...
  
  ngOnDestroy() {
    console.log('Items destroyed');
  }
}
```

<br>

On running the app and navigating away from the list view, we don't get the logged out message, so `ngOnDestroy()` wasn't called. This is because the component wasn't destroyed, but it was put on a stack. When we navigate back and forth from component to component, the components don't get destroyed, they are just added to and popped off the stack.

<br>

To force a component to be destroyed, you use the `HostListener` from the Angular Core library.

<br>

```typescript
import { Component, OnInit, HostListener } from "@angular/core";
...

export class ItemsComponent implements OnInit, OnDestroy {
  ...
  
  @HostListener('unloaded')
  ngOnDestroy() {
    console.log('Items destroyed');
  }
}
```

<br>

When using `HostListener`, you specify the event you want to listen to on the host of the component. In our case, we listen for the `unloaded` event so that when the page is unloaded, `ngOnDestroy()` will be triggered. We can then release resources and cleanup in this function.

<br>

On running the app, we now get the logged out message which means that we've succeeded in forcing that component to destroy itself.

<br>

That's it, folks! Hopefully, you found this useful. If you have any questions or comments about the tutorial, leave them in the comments below, or get in touch with me on Twitter [@digitalix](https://twitter.com/digitalix?lang=en). You can also send me your NativeScript related questions that I can answer in video form. If I select your question to make a video answer, I'll send you swag. Use the #iScriptNative hashtag.

<br>

For more video tutorials about NativeScript, check out our courses on [NativeScripting.com](https://nativescripting.com). We have courses that cover all flavors of NativeScript (Core, Angular and Vue) and that cater to different levels of experience, whether you are just beginning your journey in the NativeScript world or you have some experience with NativeScript and are looking to level up.
