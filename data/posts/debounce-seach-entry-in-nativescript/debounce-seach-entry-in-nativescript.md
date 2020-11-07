---
path: '/posts/debounce-seach-entry-in-nativescript'
title: 'How to Debounce Search Input in NativeScript'
author: 'tyler_blake'
createdDate: '2020-11-06'
updatedDate: '2020-11-06'
draft: false
tags: ['NativeScript', 'Debounce']
image: debounce-seach-entry-in-nativescript-poster.png
---

Do you have a large list of data in your mobile app with search functionality? Are you using a **debounce** function?

You should!

Let me show you how! 😁

### The Problem

Have you ever been typing in a search bar and had a typo so you immediately hit backspace a bunch then try typing again and the list looks locked up for a few seconds or lagging behind what text is actually in the search bar?

This is likely caused by searching or filtering on `(textChange`) which will trigger that logic on **every** key press.

### The Solution

If only we had a way to delay the filtering or wait until the user stops typing before executing the filter logic... enter **debouce**!

A debounce function forces a function to wait a certain amount of time before running again.

It helps to prevent spamming a function which typically the root cause of the performance issues mentioned above.

### Implementation

**Note:** There are a ton of ways to implement a debounce function this is just a way I've done it recently and wanted to share.

I used an npm library `throttle-debounce` so first we must install it using:

`npm install throttle-debounce --save`

Then we implement the debounce function.

Don't forget to import! 😁

`import { debounce } from 'throttle-debounce';`

```typescript
textSearchDebounce = debounce(500, (searchBarArgs) => {
  const searchBar = <SearchBar>searchBarArgs.object;
  const searchValue = searchBar.text.toLowerCase();

  if (searchValue !== '') {
    this.filteredListItems = new ObservableArray(
      this.listItems.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  } else {
    this.filteredListItems = this.listItems;
  }
});
```

The first parameter for my debounce function is the delay you wish to use, this can be whatever you want it to be. Your implementation might vary, but you should always provide a delay.

This means my filter logic will execute **only** after `onTextChanged(args)` has not been called for the duration of the delay. In my case, 500ms or 1/2 a second.

**Note:** I'm using an `ObservableArray` for my list but you could still do the same if you are using a traditional array.

Now we just need to call that `textSearchDebounce` function and pass the `searchText` to it.

Bind our `SearchBar` to our code behind using `(textChange)="onTextChanged($event)"`.

Let's implement our `onTextChanged` function now!

```typescript
onTextChanged(args): void {
  this.textSearchDebounce(args);
}
```

Performance and user feedback is incredibly important in mobile apps. You can use a debounce function in a ton of places, but especially when searching/filtering large lists of data.

Do you use debounce in your mobile apps? Let us know!

I hope this helps you improve the performance of your NativeScript apps!
