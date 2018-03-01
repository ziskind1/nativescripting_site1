---
path: "/posts/modal-dialog-checklist"
title: "The NativeScript Modal Dialog Checklist"
author: 'alex_ziskind'
createdDate: '2018-03-01'
updatedDate: '2018-03-01'
draft: false
tags: ["NativeScript", "Tips and Tricks", "Tutorial", "Video"]
image: tns-modal-checklist-poster.png
---

Close your eyes for a moment and imagine yourself creating a modal dialog for a web application. Ok, I know, there are more exciting things to imagine, but roll with it for a moment.
<br><br>

Got it?
<br><br>

Now imagine creating a modal dialog in a NativeScript with Angular app. How far did you get?
<br><br>

The thing is, right now, it’s a pretty involved process. There are a few steps you need to follow to set up a modal dialog in a native app created with NativeScript. Maybe one day it will be easier, but for now I’ve created a checklist that you can follow. Instead of digging through documentation every time you want to make a modal, you can just pull out this handy dandy checklist and implement each step. 
<br><br>



## The Checklist

<div style="background-color: #ffffff; border: 1px solid #eeeeee;padding: 20px;">

### Modal Component Section
- <input type="checkbox" /> Create modal component with ModalDialogParams injected
- <input type="checkbox" /> Add a close handler in the modal component
<br><br>
### ngModule Section
- <input type="checkbox" /> Register ModalDialogService with the ngModule’s providers
- <input type="checkbox" /> Add modal component to the ngModule declarations array
- <input type="checkbox" /> Add modal component to the ngModule entryComponents array
<br><br>
### Parent Component Section
- <input type="checkbox" /> Inject ModalDialogService and ViewContainerRef
- <input type="checkbox" /> Create an instance of ModalDialogOptions
- <input type="checkbox" /> Call ModalDialogService.showModal() and handle promise
<br><br>
</div>




<br><br>
This checklist is part of the [NativeScript with Angular Pro course](https://nativescripting.com/course/nativescript-with-angular-pro) that’s right here on NativeScripting. In chapter 6, of the course, I guide you through this entire checklist as we build out a modal dialog, and then I show you how to encapsulate modal functionality in scalable, reusable and strongly typed data structures and service. This way you and your team can get help from your IDE, since you’re using TypeScript, to implement a modal dialog. 
<br><br>

Here is a preview lesson from that chapter.
<br><br>

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/dtwz0gQWcKs" frameborder="0" allowfullscreen></iframe>
</div>


<br><br>
And hey, feel free to refer to the checklist anyway if you wish.
