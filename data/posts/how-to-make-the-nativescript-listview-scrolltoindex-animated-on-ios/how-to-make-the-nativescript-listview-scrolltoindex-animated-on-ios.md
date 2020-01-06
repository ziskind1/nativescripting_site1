---
path: '/posts/how-to-make-the-nativescript-listview-scrolltoindex-animated-on-ios'
title: 'How to make the NativeScript ListView scrollToIndex Animated on iOS'
author: 'alex_ziskind'
createdDate: '2016-04-04'
updatedDate: '2016-04-04'
draft: false
tags: ['iOS', 'NativeScript', 'Tips and Tricks']
image: how-to-make-the-nativescript-listview-scrolltoindex-animated-on-ios-poster.png
---

If we want to jump directly to a row in our ListView, there is a handy function in NativeScript called scrollToIndex. Sometimes we want a more natural scroll that animated the scrolling motion, this keeps our human brains more in tune with the list that we are using. We get better oriented and know if we are scrolling up or down. This post includes a video tutorial on what needs to be done to get that scroll to animate in iOS.

#### Related Resources

* [NativeScript ListView Scrolling Video Tutorial](https://youtu.be/XC24UaP8A6g)

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/XC24UaP8A6g" frameborder="0" allowfullscreen></iframe>
</div>

This video tip shows you how to programmatically scroll to a position in your ListView (which is just a UITableView in iOS).
  
The code listing below is the scrolling function that is called when we want to perform a scroll programmatically. If we detect that we are running iOS, then we hook into the native iOS API for a UITableView and call the `scrollToRowAtIndexPathAtScrollPositionAnimated` function on it, passing `true` as the last parameter to indicate that we want to animate. 

```
private srollListView(position: number) {
     if (this._listView.ios) {
        this._listView.ios.scrollToRowAtIndexPathAtScrollPositionAnimated(
            NSIndexPath.indexPathForItemInSection(position, 0),
            UITableViewScrollPosition.UITableViewScrollPositionTop,
            true
        );
     }
     else {
         this._listView.scrollToIndex(position);
     }
}
```

Happy Coding!
