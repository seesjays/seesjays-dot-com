---
layout: "../../layouts/BlogPost.astro"
title: "Leveling Down: Vimming It Up"
date: "2022-07-12"
subtext: "Exiting vim is easy, everything else is the hard part."
sector: me
---

Over the past month or so, I’ve made some significant efforts towards using the “lower level” software at my disposal. I’ve added all ~~8~~ of my emails to Apple's Mail client, rather than using Gmail and Outlook. Reminders is finally seeing some usage after years of neglect. I’m slowly incorporating writing using Notes and Bear into my diet instead of putting everything in Notion.

It’s all an effort of exploring software that isn’t confined to browsers and webviews. Not that they’re an _entirely bad thing_ at all, I just find it fascinating to go native.

The most difficult transition for me has been my trek into the world of (Neo)vim. I thought it would be cool to rely on just terminal usage instead of Xcode for my C++ explorations, and for the most part, it is! But this particular change also brings _a lot_ of pains that were abstracted away from my silly little world.

## Editing is entirely different

Text input in Neovim is entirely different from any text editing application I’ve had experience with, which is pretty alarming considering that’s its primary purpose.

Neovim is widely touted as highly customizable, and I’d be certain it is if I’d bother with the stuff. Right now I’m trying to get adjusted to the basic principles of how to use the thing, so I’ve set aside configuring it in every which way. None of the [really cool setups](https://neovim.io/screenshots/) that the more acquainted people have going on for me, just the unflavored oatmeal that is the default install.

It’s a legendary command line program heavily reliant on arcane keybindings and commands, which is great for efficiency but horrendous for beginners. I know for certain the solution lies in _actually using the keybinds_ to commit them to memory, but I often find myself wanting to do an action but wondering how exactly to do so and then looking it up, losing efficiency points.

## Uncomfiness

You don’t get the comforts that something like VSCode or Xcode provide. I dearly, **dearly** miss the former’s Command Palette. I miss using Prettier for formatting. I miss all my extensions. I miss my color themes.

Most of all, I miss using the GUI tools for `git`. For better or worse, I’ve actually got little experience using anything but the basic `add` `commit` and `push` commands, and the GUI that VSCode w/ GitLens provided was phenomenal for my productivity.

But I know I won’t always be able to rely on such things, thus I prepare by learning the baser forms in the terminal.

I suppose there’s some very nice things about using Neovim, too:

- VSCode starts very fast, especially on M1. But Neovim starts **instantaneously.** I can open a file in a project in a singular command instead of clicking through GUIs.
- I get to actually utilize the knowledge I have and find out more about terminal git.
- IDEs compile things weirdly. Xcode, for example, puts my compiled CLI programs into a weird binary folder in an entirely different location instead of the parent folder of the project, and I _hate_ that.
- It’s a really clean program with no UI clutter.
- I can’t lie: when I’m in a stride, I _do_ edit a tad faster.

> The Vim community is nice and mature, plus there’s plenty of resources for me to learn the thing. But what alarms me is their central dogma:
>
> > Vim changes **you** to suit **its** editing style, not the other way around.

---

Another reason I switched besides the nativity thing is that VSCode, for some reason, goofed up my color profile. My precious, vibrant colors have been washed out by sRGB, and I took the nuclear route instead of reinstalling.

Also, I think it’ll be funny to show up to uni as an intermediate vim user. With its reputation as a more “difficult” and “less featured” editor, it has notoriety as programming on hard mode.

[One of the most legendary programming pitfalls](https://stackoverflow.com/questions/11828270/how-do-i-exit-vim) is that people don’t even know how to _exit the program!_ I would achieve wizard status once I get everything down to a natural level and get a souped-up config.

![This post in Neovim](/postImages/neovim-post-recursion.jpeg)
