---
layout: "../../layouts/BlogPost.astro"
title: "Let There Be Dark (End Light Mode Derision, Please)"
date: "2022-09-30"
subtext: "Light moders are human, too."
sector: me
---

Embarrassingly, I’ve been hacking away at implementing a dark mode for about three weeks (of course, with college and stuff also taking up time within that three weeks.) Nonetheless, it’s here, and [as I promised,](https://cjohanaja.com/blog/tech-debt) it’s great. Still in need of tweaks here and there, but it’s great. Trust me.

## Why was this not a thing in the first place?

I know, right? It seems like an obvious "initial thing" that a blog’s gotta have, since people are so fond of their darkness.

The exclusion of dark mode was originally a feature, not an oversight. I’ll tell you this: I am a light mode evangelist. Most of the time, I have everything I possibly can (except what I write code in, for now) in light mode.

I appreciate the existence of dark mode for the times I need it, but I’m one of the seemingly rare sort that isn’t comfortable with light text on a dark background in most cases.

Yes, we exist.

### Dark Mode Reactionaries

I don’t know how or when, but there’s been an overall shift in how people view each other, and it feels like it’s trending towards being plain mean: People who’re caught using anything in light mode are ridiculed in lots of online (and sometimes offline) places.

Send screenshots of Discord or Reddit or Twitter or iMessage or X software in light mode to a dark mode denizen, and a non-insignificant amount of time, you _will_ face derision. "Ewww, you use light mode?" is the socially encouraged **"LOOK AT _THIS GUY!_ HE’S WEIRD! HE USES SOFTWARE DIFFERENTLY THAN ME"** of the net and I hate it.

Keeping everything light made my site feel more personal, like my little act of rebellion against the norm.

![It was me against the world.](/postImages/0EA63C92-EB65-4EE1-9C49-A92D3F270DBF-12781-00000B5A2C147515/itookontheworld.gif)

Immature and short-sighted, yes, I admit.

No longer shall that be the case. Realistically, why would I WANT people to not feel comfy reading what I write? It was self-sabotage. I like it when people like what I make, my really-real friends asked why I didn’t have a dark mode, and I wanted to see how nice I could fit it into the color thing I’ve got going on.

I’m compassionate for the robots (and maybe people) that read what I write. So, I put bunches of effort into making it as usable and pretty as I could.

This was no simple feat. I quite literally structured my blog and its components around light mode, with no consideration for theme switching at all in the beginning. [My bad.](https://cjohanaja.com/blog/tech-debt) So I had to re-architect a lot of things, and that’s where the past three weeks went. [^rearchitecting]

Nonetheless, things are dark now. And I finally rest, watching the sun set on a grateful internet.

---

You may be thinking: "Why all this blathering over what largely seems like an inside joke?"

Matters of accessibility shouldn’t BE "haha you’re weird" inside jokes, methinks. That, and the "joke" just gets _painfully old_ after a while, you know?

And don’t pretend that there aren’t people that act with genuine snobbishness and get personally offended when somebody has the gall to show them the color white every once in a while.

Yes, they exist.

## Very Subjective Case Studies Of An Endangered Species Taken Out Of Context

> Lonely in a CS lecture? Open Discord in light mode! It’s like a free "talk to me" beacon, and you already know how the conversation’s starting!

For starters, I find Twitter’s hover state for tweets in dark mode to be far less discernible compared to the light mode’s. Just my dual pennies.

> In both of these instances, the top tweet is being hovered.

![Two Tweets, one atop the other. One is highlighted, but it’s hard to tell which since the contrast is low.](/postImages/0EA63C92-EB65-4EE1-9C49-A92D3F270DBF-12781-00000B5A2C147515/1D7000C1-05DD-497F-83A1-50BC6AEE9D3B.png)

![Two Tweets atop each other, in light mode. It’s easy enough to tell the top one is highlighted.](/postImages/0EA63C92-EB65-4EE1-9C49-A92D3F270DBF-12781-00000B5A2C147515/08C59E63-8081-4ACA-951E-8509FCEC4435.png)

### A Small Sample of Light Mode Derision across a small variety of servers and platforms

These bits were collected within the span of 15 minutes via text search. Imagine what one sees through daily internet browsing, and you can kinda see where the feeling of being ostracized comes from.

![Someone calling discord light mode users sinners](/postImages/0EA63C92-EB65-4EE1-9C49-A92D3F270DBF-12781-00000B5A2C147515/5A201305-AA60-4C0E-8824-58FC35CD0BE1.png)

![Someone questions 'why the actual curse would you use discord light mode' and another warns others to never use it](/postImages/0EA63C92-EB65-4EE1-9C49-A92D3F270DBF-12781-00000B5A2C147515/6252668F-9F63-4C58-AAF2-8F72A6FBFAB8.png)

![Someone equating FaceTime in light mode to cancer](/postImages/0EA63C92-EB65-4EE1-9C49-A92D3F270DBF-12781-00000B5A2C147515/EAAB72F3-DEBD-4268-AE47-98D4203B473B.png)

![One guy making the same joke about light mode four separate times](/postImages/0EA63C92-EB65-4EE1-9C49-A92D3F270DBF-12781-00000B5A2C147515/F9DF6810-6C5A-47F5-AEA1-66F766551262.png)

![Someone saying ‘they don’t talk to light mode users’](/postImages/0EA63C92-EB65-4EE1-9C49-A92D3F270DBF-12781-00000B5A2C147515/0C6A93AB-4494-422C-A5CB-7D104D93321F.png)

This guy's asking the questions that need to be asked:
[Why do people hate discord light mode users? Or is it just me? r/discordapp](https://www.reddit.com/r/discordapp/comments/wlswhi/why_do_people_hate_discord_light_mode_users_or_is/)

![Tweets saying light moders are immature and unhappy](/postImages/0EA63C92-EB65-4EE1-9C49-A92D3F270DBF-12781-00000B5A2C147515/165C1935-7308-4AE2-8D39-959C7EB3BC74.png)

![Tweet calling light mode users psychotic](/postImages/0EA63C92-EB65-4EE1-9C49-A92D3F270DBF-12781-00000B5A2C147515/130EB503-3417-4232-B3AD-E4AF7C1391ED.png)

Really, I wish I was dedicated enough to this to scour the whole net for every appearance of dark mode reactionaries. The point I’m getting at is that theme preference is the lowest hanging, most dead horsefruit you could possibly pick/beat.


[^rearchitecting]: I had a color system where I would pass named HSL(Hue, Saturation, Lightness) values as arrays down to components through props and apply them using [styled-components.](https://styled-components.com/) That’s the best oversimplification I can pull out without sounding like an absolute buffoon with how I originally wrote everything.

    I thought I would be doing a lot more experimental and unique stuff with the freedom of it, but I didn’t find a use case where the prior structure was particularly useful or pleasant to use.

    > It was actually a bother in lots of cases, but I found fun (and still kinda do sometimes) in working with overly-complex drivel. That’s just me.

    Anyway, I tossed out the entire previous color system and moved to sanity-land by doing everything with CSS variables. They’re so convenient, love `em!

    There are still some changes I need to make real quick to get things perfect, one is optimizing how blog post styles are applied (it's kinda weird). But, it’s shipped! The reworks paid off; it’s much easier to work with the site, and I got to do a lot of spring code cleaning while changing the system around.
