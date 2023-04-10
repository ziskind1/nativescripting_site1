---
path: "/posts/nativescript-custom-push-notification-sounds"
title: "Add Custom Sounds to your Push Notifications"
author: "william_tjondrosuharto"
createdDate: "2021-04-06"
updatedDate: "2021-04-06"
draft: false
tags: ["NativeScript", "Tutorial", "Notifications", "Android", "iOS"]
image: nativescript-custom-push-notification-sounds-poster.png
---

In mobile app development, one of the most effective engagement tools is notifications. Notifications allow you to increase app retention and improve user experience. Notifications might even be a core requirement for apps such as social media and chat apps.

Notifications, local and push, can be configured to play a custom sound on the users' devices. Reasons for this may vary from acting as a reminder for the user to the app such as a Pacman sound for an arcade-like game to something that differentiates the different types of notifications that the app sends, such as a chat and an ad having different sounds associated to each one.

I'm going to show you how you can configure your apps to play a custom sound when receiving a notification. To keep the blog post short and focused, I'm going to focus only on what needs to be done client-side and how the notifications payload is going to look like. I will be using firebase's push notifications services as an example for the notification payload for this post, however, the same configurations should apply to other push notification services too.

I will split the post into two sections, iOS, and Android to cover the different processes involved in each platform. Before we start, we will need an audio clip. iOS only accepts `.wav`, `.aiff`, and `.caf` extensions, whereas Android accepts `.wav`, `.mp3` and `.ogg` extensions. iOS also has an additional length restriction of the audio clip not to exceed 30 seconds.

## iOS

Push notifications in iOS require a lot of configuration regardless of which push notification service you choose. Eddy Verbruggen has a very detailed step-by-step guide on how to go about this in his [firebase plugin repository](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/master/docs/MESSAGING.md#ios).

To add a custom sound for iOS, add the audio clip for iOS to your project's `App_Resources/iOS/` directory (iOS only accepts `.wav`, `.aiff`, and `.caf` extensions).

### Notification Payload

Update the notification payload to include the name of your audio clip including its extension.

```JSON
{
    ...
    "notification":{
      "title": "I am a notification",
      "body": "I am a notification body",
      "sound": "notification.wav"
    }
}
```

## Android

The same payload as iOS with the `sound` passed in works for devices before Android 8. Android 8 and above use notification channels to play custom sound.

First, add the audio clip to your project's `App_Resources/Android/src/main/res/raw/` directory ((Android only accepts `.wav`, `.mp3` and `.ogg` extensions).

### Create Notification Channel

We will be using some APIs that are available for a more recent Android version. Add the typings for `android-29` to your `references.d.ts` to get IntelliSense in your IDE.

```typescript
// references.d.ts

/// <reference path="./node_modules/@nativescript/types-android/lib/android-29.d.ts" />
```

Let's create a separate file and call it `android-notification.ts` to handle all the Android-specific logic related to notification handling. This includes setting up the notification channel and getting the audio clip from the resources folder.

```typescript
// android-notification.ts

import { isAndroid, Utils } from "@nativescript/core";

export function getResource(
  name: string,
  folder?: string
): { id: string; uri: android.net.Uri } {
  const context = Utils.ad.getApplicationContext();
  const packageName = context.getPackageName();
  const id = context
    .getResources()
    .getIdentifier(name, folder || "raw", packageName);
  const uri = android.net.Uri.parse(
    `${android.content.ContentResolver.SCHEME_ANDROID_RESOURCE}://${packageName}/${id}`
  );
  return { id, uri };
}

export function createAndroidNotificationChannel(channel: {
  id: string;
  name: string;
  description: string;
  soundFilename: string;
}) {
  const ANDROID_OREO_SDK_VERSION = 26;
  if (
    isAndroid &&
    android.os.Build.VERSION.SDK_INT >= ANDROID_OREO_SDK_VERSION
  ) {
    const notificationChannel = new android.app.NotificationChannel(
      channel.id,
      channel.name,
      android.app.NotificationManager.IMPORTANCE_HIGH
    );
    notificationChannel.setDescription(channel.description);
    if (channel.soundFilename) {
      const audioAttributes = new android.media.AudioAttributes.Builder()
        .setContentType(android.media.AudioAttributes.CONTENT_TYPE_SPEECH)
        .setUsage(android.media.AudioAttributes.USAGE_NOTIFICATION)
        .build();
      notificationChannel.setSound(
        getResource(channel.soundFilename).uri,
        audioAttributes
      );
    }
    const context = Utils.ad.getApplicationContext();
    const notificationManager = context.getSystemService(
      android.app.NotificationManager.class
    );
    notificationManager.createNotificationChannel(notificationChannel);
  }
}
```

We now need to update our `main.ts` to call `createNotificationChannel` to create the association between the audio clip and the notification channel. The `id` below is what will be used to identify the channel in the push notification's payload.

```typescript
import { Application, isAndroid } from "@nativescript/core";
import { createAndroidNotificationChannel } from "./android-notification";

if (isAndroid) {
  Application.android.on(
    AndroidApplication.activityCreatedEvent,
    (args: any) => {
      createAndroidNotificationChannel({
        id: "AndroidNotificationId",
        name: "AndroidNotificationName",
        description: "AndroidNotificationDescription",
        soundFilename: "notification", //  filename (without the extension)
      });
    }
  );
}
```

### Notification Payload

Update the notification payload to include the `notification_channel_id`. This id should match what was previously set in the app. If we want to add different sounds for different notifications, we can create multiple notification channels in the app and use their different ids in the notification payload.

```JSON
{
    ...
    "notification":{
      "title": "I am a notification",
      "body": "I am a notification body",
      "sound": "notification.wav",  /* for ios and android's backwards compatibility */
      "android_channel_id": "your_app_channel_id"  /* android's sound is set within the app using notification channels */
    }
}
```

That brings us to the end of the tutorial. If you have any questions or comments about the post, leave them in the comments below, or get in touch with me on Twitter [@williamjuan27](https://twitter.com/williamjuan27).
