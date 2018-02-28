---
path: "/posts/getting-platform-specific-in-nativescript"
title: "Getting Platform Specific in NativeScript, and continue with a much"
author: 'alex_ziskind'
createdDate: '2018-01-25'
updatedDate: '2018-01-25'
draft: false
tags: ["NativeScript", "Tips and Tricks", "Tutorial", "Video"]
image: tns-platform-specific-poster.png
---


![poster](tns-platform-specific-poster.png)
![poster](./images/alex_ziskind.png)

Have you ever written platform specific code in NativeScript, whether it was JavaScript or CSS?
Did it look like a giant `if`-`then`-`else` statement? Or maybe you even separated out your platform specific code into separate functions, but you still needed conditional statements and your code for iOS and Android still gets packaged up whether it’s destined for one platform or another. In this series of videos, I’ll show you how to avoid doing this altogether and get only the code you need for a specific platform packaged, all while using clean interfaces and TypeScript.
<br/><br/>

<div class="well">
<h6>Tip #1 - Classes</h6>
<p>
In this first video of the series, I show you how to separate out your platform specific code using TypeScript classes. If you need to execute different code paths on iOS and Android, and you need to encapsulate your logic using a class, this video shows you how to do it.
<br/><br/>
</p>
<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/btq7D7w81C0" frameborder="0" allowfullscreen></iframe>
</div>
</div>

<div class="well">
<h6>Tip #2 - Functions</h6>
<p>
In this second video of the series, I show you how to execute different code while calling a single function. If you need to execute different code on iOS and Android, but you’re using a functional approach, or you have some utility function, and don’t need to create a class, then this video shows you how.
<br/><br/>
</p>
<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/rNe4UJD216A" frameborder="0" allowfullscreen></iframe>
</div>
</div>

<div class="well">
<h6>Tip #3 - CSS</h6>
<p>
In this third video of the series, I show you how the best way I found so far to separate out your platform specific CSS code, while still allowing for code reuse of the styles that are shared between platforms.
<br/><br/>
</p>
<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/v5g6irUI704" frameborder="0" allowfullscreen></iframe>
</div>
</div>


I hope you enjoy the series, and let me know (<a href="https://twitter.com/digitalix" target="_blank">@digitalix</a> on Twitter) if you have a specific need for code separation or you want to see a video of a different case that’s not covered in this series yet.

