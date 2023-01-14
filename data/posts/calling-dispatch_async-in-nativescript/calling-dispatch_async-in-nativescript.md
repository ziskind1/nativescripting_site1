---
path: '/posts/calling-dispatch_async-in-nativescript'
title: 'Calling dispatch_async in NativeScript'
author: 'alex_ziskind'
createdDate: '2016-07-05'
updatedDate: '2016-07-05'
draft: false
tags: ['iOS', 'NativeScript', 'Office365']
image: calling-dispatch_async-in-nativescript-poster.png
---

Those of us that have been looking for a way to call `dispatch_async(dispatch_get_main_queue(…))` in iOS environments while developing with JavaScript in the NativeScript framework have been SOL for a while. However, I am pleased to present a short and sweet solution here that saved my behind when I really badly needed to call this function due to a third party CocoaPod that wasn’t returning me to the main thread after a network call.

#### Versions used in this post 

* NativeScript: 2.1.0

## The Problem

I have been using a CocoaPod for calling into the Microsoft Graph APIs in Office 365. These APIs are still not finished, but they are coming along. The problem came along when I noticed that after a network call completed and my data was returned, the application UI was not updating. I am binding NativeScript’s `Repeater` widget to an `ObservableArray` and not seeing anything show up. This was driving me crazy, especially since I used the exact same UI and business logic to fetch and display data just fine from my own service.

When I started digging around in Microsoft’s open sourced CocoaPod project, I noticed that they weren’t dispatching back to the main thread after finishing a call to their Office 365 Graph API. So I tried using `dispatch_async(dispatch_get_main_queue(…))` directly in my JavaScript, but the main thread function call isn’t bridged. I decided to reach out to a buddy at Telerik for a suggestion and he showed me the following solution. This worked perfectly for my case, and it may work for your case, but I suggest a good amount of testing before publishing with this code.

## The Solution

Wrapping your async callback in the following function does the trick. Make sure you do your standard checks for iOS before calling this code, of course. 

**_async-helper.ts_**

```
export let invokeOnRunLoop = (function() {
    var runloop = CFRunLoopGetMain();
    return function(func) {
        CFRunLoopPerformBlock(runloop, kCFRunLoopDefaultMode, func);
        CFRunLoopWakeUp(runloop);
    }
}());
```

As you can see, this is basically a more verbose way of doing the same thing as `dispatch_get_main_queue()`

To use this function, simply import it and wrap your callback with it, like so:

**_my-service.ts_**

```
import { invokeOnRunLoop } from ‘./async-helper’;
export function loadData<t>(requestObj) {
    return new Promise<t>((resolve, reject)=>{
        requestObj.execute((response, error) => {
            invokeOnRunLoop(()=>{
                if (!error){
                    resolve(response.children);
                } else {
                    reject(error);
                }
            });
        });
    });
}
</t></t>
```

## Conclusion

I hope this helps someone struggling with calling `dispatch_async(dispatch_get_main_queue(…))` in iOS when running in the JavaScript environment like NativeScript.
