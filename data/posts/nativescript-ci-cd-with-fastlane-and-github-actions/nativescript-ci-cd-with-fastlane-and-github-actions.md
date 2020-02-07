---
path: '/posts/nativescript-ci-cd-with-fastlane-and-github-actions'
title: 'CI/CD for NativeScript apps with Fastlane and GitHub Actions'
author: 'tiago_alves'
createdDate: '2020-02-07'
updatedDate: '2020-02-07'
draft: false
tags: ['NativeScript', 'Fastlane', 'GitHub Actions']
image: nativescript-vue-transitions-poster.png
---


A few months ago I wrote the blog post [Automatic NativeScript App Deployments with fastlane](https://www.nativescript.org/blog/automatic-nativescript-app-deployments-with-fastlane)
showing how to set up _fastlane_ for NativeScript apps. Now, this article takes it a step forward: running the _fastlane_ build process in a GitHub action. Here, we will show you how to build and deploy your app in the cloud automatically and practically for free!

> Note: This article Builds on top of [Automatic NativeScript App Deployments with fastlane](https://www.nativescript.org/blog/automatic-nativescript-app-deployments-with-fastlane)
> and assumes you have that part working.

You can see the complete _fastlane_ and GitHub setup used in this article at https://github.com/tralves/ns-github-actions-demo.

## Why?

I am not going to [repeat myself on why deployments are so boring and hard to do](https://www.nativescript.org/blog/automatic-nativescript-app-deployments-with-fastlane).
_fastlane_ will make this chore much easier, but still, there are good reasons to move the entire process to the cloud.
The main reason is that you no longer need to worry about configuring the deployment environment for each
team member. Even if [_match_](https://docs.fastlane.tools/actions/match/) makes it much easier, you would
still have to share secrets and certificates with your team, configure Xcode accounts, etc. The developer doesn't even need to have a mac to release a new iOS version! Not only that, but
anyone in the team will be able to deploy the app (reducing the [bus factor](https://en.wikipedia.org/wiki/Bus_factor) of the project).
The last is that with _fastlane_ you would need to run only 2 commands to
deploy (e.g. `fastlane ios beta` and `fastlane android beta`), but with GitHub actions, you will need 0
commands, which is even better.

GitHub includes 2.000 minutes of GitHub action runtime per month for free plans and this number grows in
paid plans. Let's say each deploy takes 40 minutes. That's 50 deployments per month! It's a deployment machine for free.

To add a GitHub action that runs your _fastlane_ configuration, we will need to:

- Add secrets to the GitHub repo;
- Adjust the _fastlane_ configuration to run on a cloud instance;
- Create the GitHub Action workflow;

We will detail all these steps next.

## Configuring the secrets

In the [_fastlane_ blog post](https://www.nativescript.org/blog/automatic-nativescript-app-deployments-with-fastlane)
I suggested adding the project secrets (passwords, keys, etc.) in the file `.env.default`. Well, this file
should not be commited along with the source code. Instead, we will add those secret variables to the repository secrets. You will find them in GitHub under "Settings > Secrets" (see [here](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets#creating-encrypted-secrets)).

These are the required secrets:

- `FASTLANE_PASSWORD`: The AppleId account password. More info [here](https://docs.fastlane.tools/best-practices/continuous-integration/#environment-variables-to-set);
- `FASTLANE_USER`: The AppleId account email. More info [here](https://docs.fastlane.tools/best-practices/continuous-integration/#environment-variables-to-set);
- `KEYSTORE_ALIAS`: keystore alias to be used;
- `KEYSTORE_ALIAS_PASSWORD`: password of the keystore alias;
- `KEYSTORE_FILE_B64`: keystore file encoded to base64. This can be generated with `base64 fastlane/keys/mobile.keystore`. Copy/paste the base64 string directly to the secret;
- `KEYSTORE_PASSWORD`: Password of the keystore;
- `MATCH_GIT_BASIC_AUTHORIZATION`: Basic authorization for a GitHub user that can access the _match_ git repository. You can generate it with `echo "<github-user>:<github-password>" | base64`;
- `MATCH_PASSWORD`: Encryption password for the _match_ repository [here](https://docs.fastlane.tools/best-practices/continuous-integration/#environment-variables-to-set)
- `PLAYSTORE_JSON_KEY_DATA`: contents of the `PLAYSTORE_JSON_KEY_DATA` var in `.env.default`;
- `SIGNING_IDENTITY`: Code signing identity to use. e.g. `Apple Distribution: Tiago Alves (47XC3F8J4V)`. See the certificate name in Keychain Access.

I **highly recommend** creating a new AppleId account **without 2FA** and add it as a developer to the Apple developer Team. This will avoid lots of problems with 2FA which will cause the workflow to stop with no warning. Otherwise, you will have to add the `FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD` and `FASTLANE_SESSION` (more info [here](https://docs.fastlane.tools/best-practices/continuous-integration/#environment-variables-to-set)). Not only that, but `FASTLANE_SESSION` will have to be manually re-generated at least once a month, but depending on your region it could be once per day (as it happened to me)! Not good...

## Adjusting the _fastlane_ configuration

There is but one thing we need to add to the `Fastfile` (`fastlane/Fastfile`): the ability to use a custom `macOS` Keychain. We have to do this because we don't have access to the default Keychain in the instance. Throughout the deployment process, _fastlane_ will need to add certificates and provisioning profiles to the Keychain.

In the `ios` platform, we will add a new lane like so:

```
  private_lane :setup_project do
    if is_ci?
      create_keychain(
        name: "actiontest_keychain",
        password: "meow",
        default_keychain: true,
        unlock: true,
        timeout: 3600,
        lock_when_sleeps: false
      )
    end
  end
```

This lane will create a new Keychain and set it as default. The `if is_ci?` will make sure it is only executed when _fastlane_ is running in a GitHub action. This way, you will still be able to run _fastlane_ locally without messing your computer's Keychain Access.

We will also need to tell _match_ to use this Keychain. In the `ios build` lane, replace `match(type: "appstore")` with:

```
    match(
      type: "appstore",
      readonly: is_ci,
      keychain_name:  is_ci? ? "actiontest_keychain" : nil,
      keychain_password: is_ci? ? "meow" : nil)
```

And done! Finally, we can build the workflow!

## The workflow

A GitHub Action workflow is configured in a yaml file in the folder `.github/workflows`, for example
`.github/workflows/publish.yml`.

You can find the [full example file at the demo repo](https://github.com/tralves/ns-github-actions-demo/blob/master/.github/workflows/publish.yml). Let's break it down.

### Triggering the action

The GitHub action needs a trigger, which is configured with `on:`. For example,

```yaml
on:
  push:
    tags:
      - 'v*'
```

This triggers the deployment every time we add a git tag that starts with `v` (for example, `v1.0.3`).
There are lots of other ways to trigger the workflow (see the docs [here](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/configuring-a-workflow#triggering-a-workflow-with-events)).

> Tip: While configuring the GitHub Action, set it to `on: push` so it runs every time you change something.

### Jobs and runners

A GitHub action can contain multiple jobs. Each job will run in parallel in separate instances. Each job
contains one or more steps. In our example, we have:

```yaml
jobs:
  publish_apps:
    runs-on: macos-latest

    steps:
```

Our workflow has only one job, which will run on a `macOS` instance. We need `macOS` to build and deploy
for iOS.

### git checkout

The first step will be checking out the project with the [checkout action](https://github.com/marketplace/actions/checkout) with:

```yaml
- uses: actions/checkout@v2
```

### yarn cache

The [cache action](https://github.com/marketplace/actions/cache) will cache the yarn dependencies to avoid
downloading and installing every dependency on each run:

```yaml
- name: Get yarn cache
  id: yarn-cache
  run: echo "::set-output name=dir::$(yarn cache dir)"

- uses: actions/cache@v1
  with:
    path: ${{ steps.yarn-cache.outputs.dir }}
    key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
    restore-keys: |
      ${{ runner.os }}-yarn-
```

You can [cache npm dependencies](https://github.com/actions/cache/blob/master/examples.md#node---npm) too.

### Install NativeScript

The `macOS` instance comes [packed with almost everything we need](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/software-installed-on-github-hosted-runners#macos-1015).
We only have to install the NativeScript tools with:

```yaml
- name: Install six
  run: pip install six

- name: Install NativeScript
  run: |
    yarn global add nativescript@latest
    tns doctor
    tns package-manager set yarn
```

### Run the fastlane deploy action for iOS

```yaml
- name: tns prepare ios
  run: tns prepare ios --bundle --release --clean --env.production

- name: fastlane ios beta
  env:
    FASTLANE_USER: ${{ secrets.FASTLANE_USER }}
    FASTLANE_PASSWORD: ${{ secrets.FASTLANE_PASSWORD }}
    MATCH_GIT_BASIC_AUTHORIZATION: ${{ secrets.MATCH_GIT_BASIC_AUTHORIZATION }}
    MATCH_PASSWORD: ${{ secrets.MATCH_PASSWORD }}
    SIGNING_IDENTITY: ${{ secrets.SIGNING_IDENTITY }}
    LANG: en_GB.UTF-8
    LC_ALL: en_GB.UTF-8
  uses: maierj/fastlane-action@v1.2.0
  with:
    lane: 'ios beta'
    skip-tracking: true
```

We are running the `tns prepare ios` step previously to the _fastlane_ action itself as a
workaround for a filesystem permission issue (... tell me if you find a better solution...).

We use the [_fastlane_ action](https://github.com/marketplace/actions/fastlane-action) to run the _fastlane_ lane `ios beta`.

In this step, we see a bunch of `${{ secrets.* }}` set to the environment. These will be replaced at runtime with the secret variables [we set previously](#configuring-the-secrets).

### Run the fastlane deploy action for Android

```yaml
- name: Create android keystore
  run: |
    mkdir fastlane/keys
    echo "${{ secrets.KEYSTORE_FILE_B64 }}" | base64 -D > fastlane/keys/nsgithubactionsdemo.keystore

- name: fastlane android alpha
  env:
    KEYSTORE_ALIAS: ${{ secrets.KEYSTORE_ALIAS }}
    KEYSTORE_ALIAS_PASSWORD: ${{ secrets.KEYSTORE_ALIAS_PASSWORD }}
    KEYSTORE_PASSWORD: ${{ secrets.KEYSTORE_PASSWORD }}
    PLAYSTORE_JSON_KEY_DATA: ${{ secrets.PLAYSTORE_JSON_KEY_DATA }}
    LANG: en_GB.UTF-8
    LC_ALL: en_GB.UTF-8
  uses: maierj/fastlane-action@v1.2.0
  with:
    lane: 'android beta'
    skip-tracking: true
```

The first step in this section decodes the keystore that was stored in the [repository secrets](#configuring-the-secrets) and saves it to a file that will be used later.

The second step runs the _fastlane_ lane `android beta`, again with several secrets added to the
environment.

## And done!

And that's it! If all goes well, you will see the workflow running on GitHub under "Actions" (e.g. https://github.com/tralves/ns-github-actions-demo/actions) each time you add a new git tag.

I hope this helps! If it did, please share it with me! If it didn't, hit me up on Twitter or the NativeScript Slack and maybe I can help.
