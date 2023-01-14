---
path: '/posts/get-rid-of-clutter-while-developing-in-nativescript'
title: 'Get Rid of Clutter while Developing in NativeScript'
author: 'alex_ziskind'
createdDate: '2016-01-29'
updatedDate: '2016-01-29'
draft: false
tags: ['NativeScript', 'Visual Studio Code']
image: get-rid-of-clutter-while-developing-in-nativescript-poster.png
---

Here is a quick tip and a video on how to easily clean up you workspace while writing your NativeScript applications in Visual Studio Code.

#### Related Resources

* [Clutter Free NativeScript Development Video Tutorial](https://youtu.be/m-N-EXsuFIc)

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/m-N-EXsuFIc" frameborder="0" allowfullscreen></iframe>
</div>

It’s really easy to hide all those files that just get in the way while developing. Visual Studio Code allows you to easily modify your environment and hiding certain file types or folders is super simple.
  
There are two places where you can make environmental changes in Visual Studio Code:

1. User Settings
2. Workspace Setting

User Settings acts on Visual Studio Code as a whole and will effect every project. So if you don’t want to see the _node_modules_ folder in any of your projects, for example, you can edit the User Settings file and add the `file.excludes` property to the JSON structure.

```
{
    “files.exclude”: {
        “node_modules/”: true
    }
}
```

If you only want to exclude certain files and folders from being displayed in your CURRENT project, use the Workspace Settings instead. Here is an example of my Workspace Settings excludes for TypeScript development of NativeScript apps. Notice I hide all JavaScript files. Gasp!

```
{
    “files.exclude”: {
        “node_modules/”: true,
        “platforms/”: true,
        “hooks/”: true,
        “**/*.js”: true
    }
}
```

Hope this is helpful. Make sure to check out the video where I go through this step by step. Note, if you are pasting the code into an editor, make sure to use proper quotes as the quotes displayed on this post are “smart” quotes and some editors, like Visual Studio Code, don’t like them in JSON objects.
