---
path: '/posts/fetch-to-httpclient-gotchas'
title: 'NativeScript Fetch to HttpClient Conversion and Gotchas'
author: 'alex_ziskind'
createdDate: '2018-12-11'
updatedDate: '2018-12-11'
draft: false
tags: ['NativeScript', 'Tips and Tricks', 'Tutorial', 'Video']
image: fetch-to-httpclient-gotchas-poster.png
---

Converting fetch to HttpClient to make API calls is pretty straightforward. But sometimes it's not done correctly, especially when abusing the async pipe.

<br/><br/>

It may be beneficial to use HttpClient instead of the good old global fetch API that lives in a browser and NativeScript apps alike. When building Angular apps with NativeScript, using HttpClient has some added sugar like being able to use Http interceptors as well as getting an RxJS Observable as a result by default. But there are some things to watch out for when converting from using fetch to using HttpClient.

<br/><br/>

In this second part of the two-part video series, I first show you how to perform the conversion from the fetch API to using HttpClient in a NativeScript with Angular app. Then I show you some troubles you can face that may not be so obvious on the surface. And, of course, I'll show you how to eliminate those troubles.

<br/><br/>

This video builds upon what we've already done in part one: [Easy Dev Backend for NativeScript apps](https://nativescripting.com/posts/easy-dev-backend-for-nativescript-apps).

<br/><br/>

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/sFOUij61TvI" frameborder="0" allowfullscreen></iframe>
</div>

<br><br>

You'll find more content about NativeScript in our courses area on [NativeScripting.com](https://nativescripting.com). The new [Hands-on UI course](https://nativescripting.com/course/nativescript-hands-on-ui) is a pretty popular starting point for those starting out learning NativeScript and how to work with UI.

<br/><br/>

Let me know if you enjoyed this short tutorial on Twitter: <a href="https://twitter.com/digitalix" target="_blank">@digitalix</a> or comment here. And send me your NativeScript related questions that I can answer in video form. If I select your question to make a video answer, I'll send you swag. Use the hashtag #iscriptnative.

<br/><br/>
