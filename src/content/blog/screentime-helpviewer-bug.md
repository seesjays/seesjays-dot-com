---
layout: "../../layouts/BlogPost.astro"
title: "MacOS Screen Time HelpViewer Bugfix"
date: "2022-06-16"
subtext: "Quick fix to get your Screen Time back from this dreadful bug."
sector: technical
---

I like to keep track of my Screen Time from time to time and back when I got my MacBook I had a weird bug where the native MacOS HelpViewer application would log *a lot* of Screen Time, like literally the entire day.

While I don’t have a picture of the massive amounts of time it was taking up (because I fixed the issue, and I'm not too certain the bug even exists on newer versions of macOS), I did just help somebody else fix it, so I have this as a ref:

![Bugged HelpViewer Screen Time](/postImages/screentime-helpviewer-bug-picture.png)

## Add an App Limit to HelpViewer in Screen Time

I’ve found that I can kinda get around the bug by adding a 1 minute daily limit to HelpViewer. From what I’ve observed over several months, this breaks nothing that I’m aware of, at all, even the help menus.

![Add an App Limit to HelpViewer](/postImages/screentime-helpviewer-bug-fix.png)

But, I do have to mention: **I don’t use the help menus that often.**
