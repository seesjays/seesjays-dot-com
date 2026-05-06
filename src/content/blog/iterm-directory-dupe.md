---
layout: "../../layouts/BlogPost.astro"
title: "How to open the same directory in a new iTerm2 window or tab"
date: "2022-08-13"
subtext: "cd infinity is now a thing of the past."
sector: technical
---

Sometimes I want the same directory in multiple terminals, such as when I’m editing a site’s code in Neovim in one tab while having the site loaded and hot reloading in another tab.

However, to have x number of terminals with the same directory open, I would have to make a new tab/window and cd into that directory x amount of times. How many times would I possibly have to do this? God knows, but any more than once seems inefficient to me.

> I didn’t want to modify profiles, haven’t dove into that segment of iTerm2 yet, so these solutions avoid doing that.

The most basic method I found was to just run:

```sh
open . -a iterm2 # You could actually replace "iterm2" with "terminal" to use the native one, if you want
```

This does about what you’d expect, opens the same directory in a new terminal **window.** Quite convenient.

But if you want to open the same directory in a new **tab,** there’s actually a very handy menu option to do so. **_(Shell > Duplicate Tab)_**

![The menu option for duplicating an iTerm2 tab](/postImages/F3757C86-C905-4AFC-A25D-8A8683D0C8C5-3995-00000022E329C7CB/E2CAC9DC-0F7A-47F6-BD3B-C4601C67F08E.png)

You can set a keybinding for _Duplicate Tab_ in **_(Preferences > Keys > +)_**

![iTerm2 keybinding page, with a window that displays a bind target of "Duplicate Tab"](/postImages/F3757C86-C905-4AFC-A25D-8A8683D0C8C5-3995-00000022E329C7CB/3372B9C3-02FC-496C-8A21-467661E2AE37.png)

No more excessive `cd`’ing! Lovely.
