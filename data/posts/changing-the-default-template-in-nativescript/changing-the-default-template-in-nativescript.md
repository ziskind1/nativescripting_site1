---
path: '/posts/changing-the-default-template-in-nativescript'
title: 'Changing the default template in NativeScript'
author: 'alex_ziskind'
createdDate: '2016-07-30'
updatedDate: '2016-07-30'
draft: false
tags: ['NativeScript', 'Tips and Tricks', 'TypeScript']
image: changing-the-default-template-in-nativescript-poster.png
---

Has this ever happened to you? You create a new NativeScript project and then realize that you wanted to use TypeScript? Your options are: 

1. Delete the project and recreate it using the TypeScript flag. 
2. Delete all JavaScript files, add TypeScript to the project, and recreate the files in TypeScript. 
3. Convert existing files to TypeScript. 

I usually end up using the first option, but I do this quite often and it got annoying. If you find yourself in the same boat, this tip should help you out.

Since I work mostly in TypeScript these days, I want to have that be my default option when creating a new NativeScript project. Just a recap; to create a new NativeScript project using the TypeScript template and not have to convert to typescript later, which you can do anytime as [shown in this video tutorial](https://youtu.be/2JDXnduTlgs), you pass the `—tsc` flag or the `—template typescript` flag to the create command like this

```
tns create myproject —tsc
```

or

```
tns create myproject —template typescript
```

I was getting a bit frustrated with forgetting to pass the typescript flag when I was creating my NativeScript projects. Since most of the time I want to start off with TypeScript as my default, I had to do a little digging to find out where I can do that. And while this may not be the ideal place, I found one that works. Here are the steps.

1. Go to your global NativeScript installation folder. On a Mac this is located in `/urs/local/lib/node_modules/nativescript/`
2. Open the `create-project.js` file that is located in the `/lib/commands/` folder. This is the file that contains the create project logic, as you may have guessed by the name. Keep in mind that you need root access to be able to save here, so you may need to run your editor as `sudo`.
3. Find the `execute` function. This shouldn’t be so hard since it’s the ONLY function of this class.
4. Add the following highlighted line and save the file. This will basically bypass the logic that checks for the template you used and force NativeScript to create the project using the TypeScript template.

```
CreateProjectCommand.prototype.execute = function (args) {
    var _this = this;
    return (function () {
        if ((_this.$options.tsc || _this.$options.ng) && _this.$options.template) {
            _this.$errors.fail(“You cannot use —ng or —tsc options together with —template.”);
        }
        var selectedTemplate;
        if (_this.$options.tsc) {
            selectedTemplate = constants.TYPESCRIPT_NAME;
        }
        else if (_this.$options.ng) {
            selectedTemplate = constants.ANGULAR_NAME;
        }
        else {
            selectedTemplate = _this.$options.template;
        }
        selectedTemplate = constants.TYPESCRIPT_NAME;
        _this.$projectService.createProject(args[0], selectedTemplate).wait();
    }).future()();
};
```

Now go and test this out by creating a new NativeScript project, but don’t pass in a template

```
tns create myproject
```

This should create a new project using the TypeScript template. Woohoo!

You can use the same exact technique if you want your default template be Angular 2, but instead of using `constants.TYPESCRIPT_NAME` you would use `constants.ANGULAR_NAME` like this

```
selectedTemplate = constants.ANGULAR_NAME;
```

**Warning 1:** If you do this, you will not be able to use any other templates since you will force NativeScript to ALWAYS use the TypeScript template

**Warning 2:** Keep in mind that this change will be lost the next time you upgrade NativeScript, but maybe, just maybe, we will get the option to set our own default template as a configuration option some time in the future.
