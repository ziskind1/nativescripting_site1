---
path: '/posts/announcing-the-release-of-the-nativescript-oauth-plugin'
title: 'Announcing the Release of the NativeScript OAuth Plugin'
author: 'alex_ziskind'
createdDate: '2016-08-23'
updatedDate: '2016-08-23'
draft: false
tags: ['Azure', 'NativeScript', 'OAuth', 'Office365']
image: announcing-the-release-of-the-nativescript-oauth-plugin-poster.png
---

We’ve been hard at work getting the NativeScript OAuth 2 Plugin ready to work with Microsoft and Facebook accounts for a workflow that’s as streamlined as possible. The goal was to remove confusion and with the version 1.0 release, we’ve done just that, as well as added Android support.

#### Versions used in this post 

* NativeScript: 2.2.1
* nativescript-oauth plugin: 1.0.2 

For a review of prerequisites as well as some conceptual overview take a look at the [pre-release post here](https://nativescripting.com/posts/using-oauth-with-nativescript).

## Why would I want this?

1. Doesn’t use any third party libraries. All code is written _NativeScriply_. That is, everything is written in TypeScript/JavaScript without external libraries or CocoaPods
2. Open source, of course. We’ve already taken community contribution, which is awesome
3. All the inner workings of OAuth are abstracted away so you don’t need to worry about it
4. Integrates seamlessly with the upcoming Microsoft Graph TypeScript SDK that we’ve diligently working on

## What has changed in the latest release

1. The API is simpler. You only need to import from the `nativescript-oauth` module and all functions and interfaces live at the top level in the module.
2. There is no longer a need to update your references.d.ts file.
3. Android support!
4. Automatic token refresh

## Instructions summary and video tutorial

Instructions on registering a Microsoft Live app or Office 365 app or Microsoft Graph app are [here](https://msdn.microsoft.com/en-us/library/bb676626.aspx)

If you want to watch a video tutorial on setting up the app with a Microsoft account, you can view it [here](https://youtu.be/nwf928oFGCM), but keep an eye on the changes section above as some things featured in the video have changed, specifically items #1 and #2

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/nwf928oFGCM" frameborder="0" allowfullscreen></iframe>
</div>

Once you’ve created your NativeScript project and have your app registered with your OAuth provider, you can install the NativeScript OAuth plugin, which is just a NPM package that is easily installed using this command 

```
tns plugin add nativescript-oauth
```

Wherever you need to use the nativescript-oauth module, you need to import it

```
import * as tnsOAuthModule from ‘nativescript-oauth’;
```

In your app.ts file (or app.js if you’re not using TypeScript), you will bootstrap your authentication provider data bits like this

### Office365/Microsoft Graph

```
var o365InitOptions : tnsOAuthModule.TnsOAuthOptionsOffice365 = {
    clientId: ‘e392f6aa-da5c-434d-a42d-a0e0a27d3964’, //client id for application (GUID)
    scope: [‘Files.ReadWrite’, ‘offline_access’]
};
tnsOAuthModule.initOffice365(o365InitOptions);
```

Or, if you’re using Facebook

### Facebook

```
var facebookInitOptions : tnsOAuthModule.TnsOAuthOptionsFacebook = {
    clientId: ‘1819818654921817’,
    clientSecret: ‘b7e58f212b51e4d639bed857171c992a’,
    scope: [‘email’]
};
tnsOAuthModule.initFacebook(facebookInitOptions);
```

**_Note:_** Make sure you do this before you execute `application.start(…)`

Notice that Microsoft only requires the ClientId and scope, but Facebook also require the ClientSecret. These are all values you should have access to when registering your app. ClientId is the identifier of your application and is some unique value. Microsoft uses UUIDs and Facebook uses long integers. Scope tells the provider what permissions your app has. I'm sure you've seen the screens that say something like "App so-and-so want to post to Facebook on your behalf"; well that's the permission level that you control with scope. Read the provider's documentation to get all the available scopes.

Once you have that done, you can call the login function whenever you need to authenticate your user. This will probably be on the login page.

```
tnsOAuthModule.login()
     .then(()=>{
       console.log(‘logged in’);
     })
     .catch((er)=>{
       console.log(er);
     });
```

The `login` function returns a JavaScript Promise object so you can listen for successful login or failures.

You can get to the access token whenever you need to pass it to the API

```
var token = tnsOAuthModule.accessToken();
```

When you are calling the API of the service you are using, whether it is Office 365, Microsoft Graph, or Facebook, you will need to pass it the access token with every request so it knows who you are, so to speak.

We included a convenience function that will check for token expiration, attempt to get a fresh token from the provider, and reathenticate the user if necessary. This is the `ensureValidToken` function. You can use it before each of your calls to the API, like this

```
tnsOAuthModule.ensureValidToken()
     .then((token: string) => {
       //OK to call the API
     })
     .catch((er)=>{
       //log error
     });

```

## Summary

Go on and take advantage of this helpful plugin for NativeScript, especially if you are going to be using Office 365 or the Microsoft Graph API, as those will have a separate TypeScript based SDK out that’s in development as this is being published. Contributions are also welcomed at the project’s [GitHub home](https://github.com/alexziskind1/nativescript-oauth).
