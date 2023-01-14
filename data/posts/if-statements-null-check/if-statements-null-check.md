---
path: "/posts/if-statements-null-check"
title: How Many If Statements do You Really Need to Check for Null?
author: 'royi_namir'
createdDate: '2018-08-01'
updatedDate: '2018-08-01'
draft: false
tags: ["NativeScript", "JavaScript", "TypeScript", "Tip"]
image: if-statements-null-check-poster-v2.png
---

JavaScript developers have a dirty secret: how we handle null and undefined variables in nested objects.
It's no secret that as JavaScript developers we work with objects that often contain other nested objects and even arrays and primitive types, but it's how we handle nulls that's sometimes shameful. While in a browser, a null reference will just show you a little red circle in Developer Tools, in a NativeScript app, things might be a bit more problematic.

<br/><br/>

Today I want to show you a trick to handle a scenario that we all encounter along our dev journey; treating nulls in TypeScript and JavaScript, which applies to NativeScript apps.

<br/><br/>

## The Problem

What happens if one of the nested objects is `null` or `undefined`, but you don't know which one?

<br/>

You might ask - "So? Where is the problem?".

<br/>

The problem begins if you try to access a property of `null` or `undefined`. This is where things get complicated. Other lnaguages recently got updated to handle these scenarios in elegant ways. For example, C# has solved this nicely using the Null Conditional.

<br/>

Let's say we have this C# code

```c#
    class Student
    {  
      public Address myAddress;
      ...

    }
```

<br/>

Where `Address` itself is

```c#
    class Address
    {
     public HomeAddress myHomeAddress;
     ...
    }
```

<br/>

It is perfectly a valid task to access `myHomeAddress` like this:

```c#
    var student = new Student();
    var myHomeAddress = student.myAddress.myHomeAddress;
```

<br/>

But what if `myAddress` or even `student` is null?

We will get a runtime error called `NullReferenceException`.

Sure we can do this to check for null using conditional statements (aka `if` statements)

```c#
    if (student != null && student.myAddress != null )
    {
        Console.Write(student.myAddress.myHomeAddress ?? "n/a");
    }
```

<br/>

Now, imagine what happens if we have a complex object. Imagine how many `if`'s we'll have!

<br/><br/>

## How C# Solved This

Here is how C# solved this problem by adding the Null Conditional operator to the language.

```c#
     Console.Write(student?.myAddress?.myHomeAddress ?? "n/a");
```

<br/>

Nice right? Ok, Enough with C#, let's talk about TypeScript.

<br/>

Unfortunately, TypeScript doesn't have this operator yet and still waiting for ECMAScript to standardise it.

> **Note:** See <a href="https://github.com/Microsoft/TypeScript/issues/16" target="_blank">this TypeScript issue on GitHub</a> for more info.

<br/><br/>

## A Solution in TypeScript

Say I have this object:

```typescript
var o = {
  a: {
    b: {
      c: [
        {
          k: 1
        },
        {
          k: 2
        },
        {
          k: 3
        }
      ]
    }
  }
};
```

<br/>

And let's say I want to access the second element in the array (which is `k`). Normally I'll have to do this

```typescript
if (o && o.a && o.a.b && o.a.b.c && o.a.b.c[1]) {
  doSomethingWith(o.a.b.c[1].k);
}
```

<br/>

Pretty ugly, isn't it? Again these are just a bunch of `if` statements, disguised with syntactic sugar.

In C# this would be

```C#
    doSomethingWith(o?.a?.b?.c[1]?.k);
```

<br/>

Never fear! I've build a function that can help us with this problem. Here it is:

```typescript
function n<T>(o: T, action: (a: T) => any) {
  let s = action
    .toString()
    .split('return')[1]
    .split('}')[0]
    .split(';')[0];
  s = s.replace(/\[(\w+)\]/g, '.$1');
  s = s.replace(/^\./, '');
  var a = s.split('.');

  for (var i = 1, n = a.length; i < n; ++i) {
    var k = a[i];
    if (o.hasOwnProperty(k)) {
      o = o[k];
    } else {
      return null;
    }
  }
  return o;
}
```

<br/>

This function will allow us to call it like this

```typescript
alert(n(o, k => k.a.b.c[1]));
```

<br/>

You can play with a live demo of this in the <a href="http://www.typescriptlang.org/play/#src=var%20o%20=%20{%20a:%20{%20b:%20{%20c:%20[1,%202,%203]%20}%20}%20};%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0Afunction%20n%3CT%3E(o%20:T%20,%20action%20:%20(a:T)=%3Eany)%20{%20%0D%0A%20%20%20%20%20let%20s%20=%20action.toString().toString().split('return')[1].split('}')[0].split(';')[0];%0D%0A%20%20%20%20s%20=%20s.replace(/\[(\w%2B)\]/g,%20'.$1');%0D%0A%20%20%20%20s%20=%20s.replace(/^\./,%20'');%20%20%20%20%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20var%20a%20=%20s.split('.');%0D%0A%20%20%20%20%20%20%20%0D%0A%0D%0A%20%20%20%20for%20(var%20i%20=%201,%20n%20=%20a.length;%20i%20%3C%20n;%20%2B%2Bi)%20{%20%20%20//i==0%20is%20the%20k%20itself%20%20,aand%20we%20dont%20need%20it%0D%0A%20%20%20%20%20%20%20%20var%20k%20=%20a[i];%0D%0A%20%20%20%20%20%20%20%20if%20(o.hasOwnProperty(k))%20{%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20o%20=%20o[k];%0D%0A%20%20%20%20%20%20%20%20}%20else%20{%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20null;%0D%0A%20%20%20%20%20%20%20%20}%0D%0A%20%20%20%20}%0D%0A%20%20%20%20return%20o;%0D%0A}%0D%0A%0D%0A%0D%0A%0D%0Aalert(%20%20%20n(o,%20(k)%20=%3E%20k.a.b.c[1])%20%20%20%20%20%20%20);" target="_blank">TypeScript playground</a> that I put together.

<br/>

Here is a screenshot of this running in the TypeScript playgound, and I want you to notice a few things here.
[![enter image description here][1]][1]

<br/>

Important things to note:

1.  No try/catch solutions (try/catch should only be used for things which are out of your control)
2.  There is full intellisense and typing recognition
3.  Support for arrays

This function can be used in TypeScript, JavaScript, and of course NativeScript.

<br/>

Until the next article, Take care :)

[1]: https://i.stack.imgur.com/yf2TI.png
