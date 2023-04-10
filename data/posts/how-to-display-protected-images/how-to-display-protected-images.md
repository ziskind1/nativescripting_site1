---
path: '/posts/how-to-display-protected-images'
title: 'How to Display Protected Images Using an Angular Pipe'
author: 'william_tjondrosuharto'
createdDate: '2020-10-11'
updatedDate: '2020-10-11'
draft: false
tags: ['NativeScript', 'Tutorial', 'Image', 'Angular']
image: how-to-display-protected-images-poster.png
---

Displaying images that are behind a protected API is a very common use case when building web and mobile applications, thus creating the need for a clean and easy way to be able to display these types of images using Nativescript's `Image` component. The `Image` component lets you pass a variety of different options to its `src` property, including external urls, local assets, and Nativescript's `ImageSource`. However, we will need to add some custom code when it comes to displaying an image which is behind a protected api that may require some modifications to the http request to be able to access those images.

There are a lot of different ways to modify the http call for images to be able to add additional headers or payload before displaying them using the `Image` component. I'm going to show you one way to achieve this (if you're using Nativescript Angular) using Angular pipes.
By implementing this through pipes rather than a custom component or a service, we gain the benefit of being able to reuse the implementation on different UI components (for instance, if we need to display a protected image using a third party plugin's UI component) and being able to add any additional image processing by chaining a couple of pipes to our image source's bindings.

Lets take a look at the pipe that will be used to modify the api call to get the protected image.

```ts
import { ImageSource, Http } from '@nativescript/core';

transform(url: string): Observable<ImageSource> {
    return from(
      Http.getImage({
        headers: {
          Authorization: `Bearer ${this.getToken()}`, // or whatever additional headers that needs to be passed in
        },
        url: url,
        method: 'GET',
      })
    )
}
```

A pipe has a `transform` function which gets called when the pipe is used either in the template (html) or components/services. In the above snippet, we take the url that is being passed in and instead of making the call using the default http client, we use Nativescript's `Http` module which has a method called `getImage`. It does exactly what the name suggests - gets an image from the specified url. This image can then be returned to the caller and be used to display the protected image.
What makes this method a great fit for this use case is that it lets us modify the http request and add additional payload to the http request such as headers and returns an image of type `ImageSource`, which is one of the type that is supported by the `Image` tag, hence letting us bind the results directly to the `src` property.

_Something to note here is that even if you have an interceptor that adds additional headers to all http calls being made by Angular's http client, you might still have to implement additional logic here to add the additional headers manually since those interceptors might not intercept http calls being made using Nativescript's http client._

Below is what the same code above with some minimal error handling looks like as a pipe that can be imported and used by your components.

```ts
import { Pipe, PipeTransform } from '@angular/core';
import { ImageSource, Http } from '@nativescript/core';
import { Observable, of, from } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Pipe({
  name: 'protectedImage',
})
export class ProtectedImagePipe implements PipeTransform {
  transform(url: string): Observable<ImageSource> {
    return from(
      Http.getImage({
        headers: {
          Authorization: `Bearer ${this.getToken()}`, // or whatever additional headers that needs to be passed in
        },
        url: url,
        method: 'GET',
      })
    ).pipe(
      catchError((er) => {
        return of();
      })
    ) as Observable<ImageSource>;
  }
}
```

To be able to use the pipe above, make sure that the pipe is declared in the same module as the components that will be using it. If the pipe is declared in a different module, make sure that its part of the `exports` array of that module and the module is imported in the component's module that uses it.
After we have the modules figured out, all you need to add to your template is `| protectedImage | async`. `protectedImage` is the name of the pipe we created above, and since it returns an `Observable`, we will need to subscribe to it in the template, hence the `async` pipe.
A regular `Image` component that needs to display a protected image will now look like the following snippet, with all the additional logic being hidden from the template and enclosed within the pipe.

```html
<image [src]="imageUrl | protectedImage | async"></image>
```

I hope this helps shed some light on how we can display protected images in Nativescript Angular. Feel free to comment below or reach out on Twitter if you have any questions.
