---
path: '/posts/my-nativescript-gitignore-file'
title: 'My NativeScript .gitignore File'
author: 'alex_ziskind'
createdDate: '2017-08-11'
updatedDate: '2017-08-11'
draft: false
tags: ['NativeScript', 'Tips and Tricks']
image: my-nativescript-gitignore-file-poster.png
---

This is a quick post just for anyone who’s looking for a .gitignore file to add to their NativeScript projects that they version using Git. 

At this point, none of the NativeScript out of the box templates generate a .gitignore file. This may be because not everyone uses Git and not everyone has the same preferences. So here are my preferences for those that may be searching for a starting point. Note: I use TypeScript with for NativeScript, so you’ll see that JavaScript files are ignored. If you are using plain old JavaScript, then you’ll have to omit that line.

Here is the file

```
.DS_Store
node_modules
platforms
lib
hooks
dist
*.js
*.map
*.log
```

Please submit any useful settings you may have in the comments below, or tweet at me @digitalix

Enjoy!
