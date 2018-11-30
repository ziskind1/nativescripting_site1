---
path: '/posts/xml-comments'
title: 'NativeScript Core XML Comment Blocks'
author: 'shiva_prasad'
createdDate: '2018-11-29'
updatedDate: '2018-11-29'
draft: false
tags: ['NativeScript', 'Tip']
image: xml-comments-poster.png
---

Here I was trying to comment out a large block of XML markup in my NativeScript UI code, but I had another comment right in the middle of the code I was trying to comment. Here's how I was able to do it.

> **Note:** This technique can't be used in html files. It is only for NativeScript Vanilla projects.

## Setup

We all know we can comment like this in an XML file

```xml
<!-- comment -->
```

But what can you do if there is a big block of code you want to comment that has other comments inside it? For example, how do you comment the entire block of code below?

```xml
<StackLayout>
 <!-- comment -->
 <Label />
 .
 .
</StackLayout>
```

You can’t easily comment out the whole block.

## Solution

There are two ways to solve this problem.

### Method 1

When you write your comment, you can write it inside comment blocks

```xml
<?comment Write comment here ?>
```

Here's what it looks like when used inside a NativeScript XML file

```xml
<StackLayout>
 <?comment comment here ?>
 <Label />
 .
 .
</StackLayout>
```

Now you can easily comment out large blocks of code.

### Method 2

Alternatively you can comment out large blocks of code by simply surrounding it in the comment tag, and still continue to use your regular way of writing XML comments

```
<?
<StackLayout>
 <!-- comment -->
 <Label />
 .
 .
</StackLayout>
?>
```

Those are two ways to comment out large blocks of code with other comments inside it in Vanilla NativeScript.

<br/>

Let me know if you enjoyed this tip on Twitter [@MultiShiv19](https://twitter.com/MultiShiv19),
and what else you'd like to see me write about here.
