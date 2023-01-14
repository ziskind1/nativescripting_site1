---
path: '/posts/ios-azure-pipelines-testing'
title: 'iOS Testing with Azure Pipelines'
author: 'tyler_blake'
createdDate: '2020-02-14'
updatedDate: '2020-02-14'
draft: false
tags: ['NativeScript', 'Tutorial', 'iOS' , 'Azure', 'Azure Pipeline']
image: ios-azure-pipelines-testing-poster.png
---

Hey Everybody! I recently wrote a post on automated unit testing with NativeScript using Azure Pipelines. After some requests I am now writing a more detailed iOS post. :)

> This post will be specifically for iOS. If you'd like to see how to setup Azure Pipelines in general or for Android, check out my other blog post [here](https://nativescripting.com/posts/azure-pipelines-testing)


## Agenda

1. Install Certificate and Provisioning Profile

2. Set Up Simulator

3. Install Project Dependencies

4. Run Unit Tests


## Install Certificate and Provisioning Profile

If you want to run unit tests for iOS then you will need to include your provisioning profile and certificate in order to build the app.


Here are what those tasks look like:

```
 - task: InstallAppleCertificate@2
	 inputs:
	   certSecureFile: 'dev_certificate.p12'
	   certPwd: 'yourPassword'
	   keychain: 'temp'

 - task: InstallAppleProvisioningProfile@1
	 inputs:
	   provisioningProfileLocation: 'secureFiles'
	   provProfileSecureFile: 'dev.mobileprovision'
```

You will need to upload your certificate and provisioning profile to Azure SecureFiles.

> **NOTE:** We set `keychain: 'temp'`. This means the keychain will be deleted after the pipeline runs.

The arguments for `certSecureFile` and `provProfileSecureFile` are the name of the corresponding file in Azure Secure Files


## Set Up Simulator

Since we selected `MacOS-10.14` as the `vmImage` in the pool, the VM will have XCode installed which means it already has some iOS simulators installed.


## Install Project Dependencies

Similar to my other blog post, we need to install project dependencies again.

```
- task: NodeTool@0
  inputs:
    versionSpec: '10.x'
  displayName: 'Install Node.js'

- script: |
    npm install -g @angular/cli
  displayName: 'npm install -g @angular/cli'

- script: |
    npm install -g nativescript
  displayName: 'npm install -g nativescript'
     
- task: CmdLine@2
  inputs:
    script: |              
       npm install        
    workingDirectory: 'demoApp'
   displayName: 'npm install'
```

Notice again we set `workingDirectory` to the root of our project.


## 4 Run Unit Tests

Now we need to add another task to set up the VM and run unit tests.

```
- task: CmdLine@2
  inputs:
    script: |      
    echo -e "y\ny\nn\nn\nn\nn\nn\nn\nn\ny\ny\ny\ny\ny\n" | tns setup
    tns test ios --justlaunch
    workingDirectory: 'demoApp'
  displayName: 'Run iOS unit tests'
```

> **NOTE:** `echo -e "y\ny\nn\nn\nn\nn\nn\nn\nn\ny\ny\ny\ny\ny\n"` is used to skip through the setup prompts. It will install only iOS dependencies and skip all the Android stuff.


## Final Review

Here is my final `azure-pipelines.yml` file:

```
trigger:
- master
- dev

pool: 
  vmImage: 'macOS-10.14'

jobs:

- job: iOS_Tests
  displayName: iOS Tests
  steps:

  - task: NodeTool@0
    inputs:
      versionSpec: '10.x'
    displayName: 'Install Node.js'

  - script: |
      npm install -g @angular/cli
    displayName: 'npm install -g @angular/cli'

  - script: |
      npm install -g nativescript
    displayName: 'npm install -g nativescript'
     
  - task: CmdLine@2
    inputs:
      script: |              
        npm install        
      workingDirectory: 'demoApp'
    displayName: 'npm install'

  - task: CmdLine@2
    inputs:
     script: |      
      echo -e "y\ny\nn\nn\nn\nn\nn\nn\nn\ny\ny\ny\ny\ny\n" | tns setup
      tns test ios --justlaunch
     workingDirectory: 'demoApp'
    displayName: 'Run iOS unit tests'

```


I hope this helps you implement automated testing in your NativeScript apps!
