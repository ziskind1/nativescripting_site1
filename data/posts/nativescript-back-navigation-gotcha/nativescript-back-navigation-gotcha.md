---
path: '/posts/nativescript-back-navigation-gotcha'
title: 'NativeScript Back Navigation Gotcha'
author: 'tyler_blake'
createdDate: '2020-06-08'
updatedDate: '2020-06-08'
draft: false
tags: ['NativeScript', 'Navigation', 'Angular']
image: nativescript-back-navigation-gotcha-poster.png
---

Recently I ran into a gotcha with using 'routerExtensions.back()' in a project and wanted to share the problem with you all as well as the solution I used.

### The Problem

In my app I have a detail page, and an edit page. So I need to navigate to the edit page, update some data, then navigate back to the detail page and have it refresh to display the updated info.

**Navigation Stack**

Job Detail -> Job Edit -> Hit back (go back to Job Detail)

Traditionally I would use this.page.on('navigatedTo', () => { //do something}) inside of the detail page. Unfortunately `navigatedTo` is NOT triggered if you navigate back via `routerExtensions.back()`.

### The Solution

In the detail page's code behind, I added this bit of code to subscribe to the router's events.

```typescript
this.routerExtensions.router.events.pipe(
  filter((e: Event): e is RouterEvent => e instanceof NavigationEnd)
    ).subscribe((e: RouterEvent) => {
      if (this._router.url.startsWith('/job-detail/')){
      // When navigation ends, if we are on the page we need to reload data
      this.reloadData();
      }
  });
```

**Note:** This code will fire when you navigate to the page and back to the page. If you ONLY need it to fire when tapping back, you can check the previous URL as well. Let me know if that is something you'd like to see!

### Subscription Management Aside

How you manage subscriptions is important in your Angular apps which makes it also important for NativeScript + Angular apps. 

 You should at least call `unsubscribe()` on the subscription inside of `ngOnDestroy()` inside of your component.

 Personally I use the `takeUntil` rxjs operator along with some code in a BaseComponent which has a destroy subject so my subscriptions will auto `unsubscribe()`  when the component is destroyed.
 
If you'd like to see how I do that let me know and I will share!

I hope this helps you in your NativeScript + Angular apps!

If you have any questions feel free to reach out on Twitter or in the NativeScript slack!