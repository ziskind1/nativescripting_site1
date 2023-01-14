---
path: '/posts/async-await-in-nativescript'
title: 'Async/Await in NativeScript'
author: 'alex_ziskind'
createdDate: '2018-11-03'
updatedDate: '2019-02-07'
draft: false
tags: ['NativeScript', 'Tips and Tricks', 'Tutorial', 'Video']
image: async-await-in-nativescript-poster.png
---

The mysterious async/await combination has been permeating JavaScriptland the for a bit now. You can use it in NativeScript too, but you need this little trick to get it working.

<br/><br/>

Async/await works for either NativeScript Core, NativeScript with Angular, or NativeScript-Vue. I'll  demonstrate this using the Angular Hello World template, especially since it already has a service set up that returns items to a component. Just in case, here is the service.

<br/><br/>

## TLDR

You can just watch the video tip that shows how to use async/await in NativeScript on [my YouTube channel](youtube.com/c/AlexanderZiskind).

<br/><br/>

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/fGDLjePyQTU" frameborder="0" allowfullscreen></iframe>
</div>

<br><br>


> UPDATE: A few of you asked me about a NativeScript-Vue version of this video tutorial. Here is the update with the Vue version:

<br/><br/>

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/FQmdB5P1iYw" frameborder="0" allowfullscreen></iframe>
</div>

<br/><br/>

> ANOTHER UPDATE: NativeScript supports async/await now out of the box. You can still use the Angular and Vue videos above for more complex examples, but for a really simple example that also doesn't require the extra async/await function code, check out this video:

<br/><br/>

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/9F0sRJQYR9k" frameborder="0" allowfullscreen></iframe>
</div>

<br><br>

> **NOTE:** I'll show the template start code here just in case it changes in the future. This way there is a record of how it used to be.

<br><br>

```typescript
// items=.service.ts
import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable()
export class ItemService {
  private items = new Array<Item>(
    { id: 1, name: 'Ter Stegen', role: 'Goalkeeper' },
    { id: 3, name: 'Piqué', role: 'Defender' },
    { id: 4, name: 'I. Rakitic', role: 'Midfielder' },
    { id: 5, name: 'Sergio', role: 'Midfielder' },
    { id: 6, name: 'Denis Suárez', role: 'Midfielder' }
    // other players removed for brevity
  );
  getItems(): Item[] {
    return this.items;
  }
  getItem(id: number): Item {
    return this.items.filter(item => item.id === id)[0];
  }
}
```

<br><br>

This is as hard coded as it gets. Our items component simply gets a hard coded array of objects (football players) from the service in its initialization method, and binds to them:

<br><br>

```typescript
// items.component.ts
import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'ns-items',
  moduleId: module.id,
  templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {
  items: Item[];
  constructor(private itemService: ItemService) {}
  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }
}
```

<br><br>

## Converting to a Promise

Things aren't as cut and dry as this when calling an HTTP service to fetch data. Typically, there is a fetch call that returns a `Promise`. If you are using Angular's HttpClient, then you will end up with an `Observable`, but it still can be converted to a Promise, so this applies.

<br><br>

What demonstrates the power of async/await is eliminating lots of chains that result from calling `then()` on a `Promise`. So I've converted the simple service call above to one that uses a `Promise` AND ALSO calls `then()` on the result to further process the data:

<br><br>

```typescript
// item.service.ts
...
  public getItems(): Promise<Item[]> {
    return new Promise<Item[]>((resolve, reject) => {
      resolve(this.items);
    }).then((items) => {
      return items.filter(i => i.id >= 23);
    });
  }
...
```

<br><br>

This "fetches" the data, which results in a resolved `Promise`, and then it filters the resulting items based on the `id` property, returning only those players whose `id` is greater or equal to 23. The component that calls this `getItems` function now has to call `then()` on the result.

<br><br>

```typescript
// items.component.ts
...
  ngOnInit(): void {
    this.itemService.getItems().then(items => this.items = items);
  }
}
...
```

<br><br>

In the service `getItems` function, you can keep calling `then` on the result to further process the data, resulting in a chain, reminiscent of what we used to call callback hell (not as bad though).

<br><br>

How do we fix this?

<br><br>

## Converting to Async/Await

Converting the `getItems` function is pretty simple. Here is the code.

<br><br>

```typescript
// item.service.ts
...
  public async getItems(): Promise<Item[]> {
    const items = await new Promise<Item[]>((resolve, reject) => {
      resolve(this.items);
    });

    return items.filter(i => i.id >= 23);
  }
...
```

<br><br>

You have to pretend that the line with the return statement above won't execute until the `Promise` above that line is either resolved or rejected. Think of this code as "paused" until the `Promise` has a result. That's what `await` signifies; we are just hanging on that line of code, awaiting a result from the `Promise`.

<br><br>

## A Problem with a Fix

But the above won't just work in NativeScript out of the box as of right now (perhaps this will be fixed soon). There are two helper functions that are currently missing that actually define how async/await has to work behind the scenes.

- `__awaiter`
- `__generator`

<br><br>

Luckily someone smart at Microsoft created a handy TypeScript helper that we're going to add to our NativeScript project to make things work, by defining the `__awaiter` and `__generator` functions. Create a new file called `tslib.nativescript.ts` and add the following code to it. I know it's a bit long, even after I removed all the licensing comments from the file. See the link for the full file with the license info.

<br><br>

```typescript
// Copied from: https://github.com/Microsoft/tslib/blob/90b4e189558c86cd8779d396c69a8254ce913874/tslib.js#L90-L125

// tslint:disable
if (!('__awaiter' in global)) {
  global['__awaiter'] = function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
}

if (!('__generator' in global)) {
  global['__generator'] = function(thisArg, body) {
    var _: any = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function() {
          return this;
        }),
      g
    );
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = y[op[0] & 2 ? 'return' : op[0] ? 'throw' : 'next']) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [0, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
}
```

<br><br>

To use this code, make sure you import this module so the functions are registered. In your `main.ts` file, add the statement that imports this module:

<br><br>

```typescript
import { platformNativeScriptDynamic } from 'nativescript-angular/platform';
import './tslib.nativescript';
import { AppModule } from './app.module';
platformNativeScriptDynamic().bootstrapModule(AppModule);
```

<br><br>

And everything should just work!
Now you don't have a reason to stay away from this really amazing new feature in JavaScript that is async/await. Try it out today!

<br/><br/>

For more video tutorials about NativeScript, look at our courses on [NativeScripting.com](https://nativescripting.com). The new [Hands-on UI course](https://nativescripting.com/course/nativescript-hands-on-ui) is a pretty popular starting point for those starting out learning NativeScript and how to work with UI.

<br/><br/>

Let me know if you enjoyed this short tutorial on Twitter: <a href="https://twitter.com/digitalix" target="_blank">@digitalix</a> or comment here. And send me your NativeScript related questions that I can answer in video form. If I select your question to make a video answer, I'll send you swag.

<br/><br/>
