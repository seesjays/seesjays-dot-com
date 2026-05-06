---
layout: "../../layouts/BlogPost.astro"
title: "Apple Shortcuts Are My LEGO Mindstorms"
date: "2022-08-05"
subtext: "Automate your life! Make some Shortcuts!"
sector: me
---

> Assuming everything’s worked, this note and all images in it have been formatted properly and uploaded correctly, (97.5%) automatically!

I’m drafting up changes to my blog, and among some new designs and _maybe_ a different SSG (Gatsby is SUPER NICE! BUT SLOW TO BUILD!) I’ve always had the intention to _streamline my posting process._

I was preparing to sit down, dial in, and spend a week or two learning to make a CLI app in C++ to automate my process. But before taking the plunge and learning the nuances of where Bear notes are stored and how to manipulate them, I had the briefest inclination to check Shortcuts first, see if they maybe had something I could use to manipulate files since it’s so touted for this sorta thing.

It does have file manipulation Actions, and along with them was a lovely suite of Bear Shortcut Actions that suited my use cases (and more) perfectly! Isn’t that neat!?

![A partial list of all the Bear Actions.](/postImages/C9167B4E-315B-42EC-9E55-4EB0F30F92E0-6323-000000B1593FCA96/A18603EB-20B5-4D6F-B877-1DA4EC2FCB5C.png)

I’m not usually a fan of no-code tools; I feel that their command selection often isn’t wide enough, they don’t give me much flexibility/control, and they’re just less satisfying to use. This was a pleasant endeavor, however. Shortcuts is a really nice platform (though the macOS app is oddly laggy,) and yields a lot of control, even including allowances for terminal commands.

With some toying around, I ended up making a nice Shortcut that takes everything I write in a Bear note and converts it to a format my blog can use, all automatically! So convenient. [^shortcut]

With this newfound wonder, I made some other simpler Shortcuts. [One to import](https://www.icloud.com/shortcuts/55b03032034d4c2c9a847cc59eebb4b9) my sizable [CS book collection](https://cjohanaja.com/musings/backlog-motherlode) to Apple Books, and another that queries either a Kanye quote or positive message API and displays the result [whenever I wake up.](https://www.icloud.com/shortcuts/a7350b7a560649b09006869541cdcdab) They’re marvelous to me, and I have even more ideas.

The other exception to my pro-code dogma is, in my opinion, the most interesting LEGO product they kinda no longer make:

## Lego Mindstorms Kits

![The Lego Mindstorms NXT Box](/postImages/C9167B4E-315B-42EC-9E55-4EB0F30F92E0-6323-000000B1593FCA96/81ZBYMUy+3L._AC_SL1290_.jpg)

I remain committed to the notion that the ONLY worthwhile thing they gave us in my elementary school’s Gifted and Talented Kids program was the opportunity to mess with these robot kits once we hit fifth grade.

The software used to drive these bad boys was a no-code solution like no other, one of the most well-architected pieces of software I’ve ever messed with.

![The NXT Programming Software UI](/postImages/C9167B4E-315B-42EC-9E55-4EB0F30F92E0-6323-000000B1593FCA96/nxtIDE.png)

It looks dated, but I tell ye: this was **_state of the ART_** to us youth. Essentially limitless control over a robot with sight, touch, hearing, and motors. It was the closest we were to godhood, save for the fact that we had to work in groups since we had 6 or so sets.

![An NXT controller brick connected to several devices: motors, sight, color, sound, and touch sensors.](/postImages/C9167B4E-315B-42EC-9E55-4EB0F30F92E0-6323-000000B1593FCA96/D52CFB22-F225-4F11-9466-959D8B558A1F.png)

While making my blog post automation, I thought a lot about this particular set and how it bent me further towards writing software. Genuinely, I realized that the reason I didn’t really like no-code tools was because they’re so _limited._ To me, they always failed to scratch that itch of control, Mindstorms and Shortcuts being the rare exceptions to that irk.

Do you have any clue how unlimited the bar was for Mindstorms? People built multitool gauntlets (I shamefully can’t find the video demonstrating one that I loved so much as a kid,) rudimentary Roombas, robot guitars, Rubik’s Cube solvers, automatic catapults, other stuff that doesn’t come to mind. It was just a **universe** of neat projects.

They followed the NXT platform with the greatly improved EV3 set, which I got to play around with in my middle school Principles of Engineering class.

![The Lego Mindstorms EV3 box](/postImages/C9167B4E-315B-42EC-9E55-4EB0F30F92E0-6323-000000B1593FCA96/31313_alt1.jpg)

Since then I’ve had no forays with the lovely kits, and the Robot Inventor set they replaced EV3 with just looks so neutered compared to the kits of yore, with duller robots and block programming reworked to more of a Blockly/Scratch style. It makes sense from the standpoint of mass appeal, but oh how I miss the previous design.

> NXT was and still is my favorite LEGO set, though I never allowed a personal set despite the potential educational boon. =(
>
> > And nowadays, it’s hard to justify spending my money on a kit that isn’t really supported anymore, ironically. Maybe some other day I’ll lose my inhibitions and give in to my kiddish desires.

## Interacting with the "Really Real"

Aside from the aspect of platform control, the other reason I don’t really love no-code environments is their lacking tangibility. Code.org mostly works within the domain of Code.org and Scratch mostly works within the domain of Scratch, nothing more.

It’s hard to word it exactly, but robots are perfectly tangible: they’re really real and make real changes that I can really see in other real things. Shortcuts are "tangible" in that they work across my device with a multitude of different applications, meaning that while it is "sandboxed" from the real world like Scratch and Code.org, the tangibility factor is multitudes larger.

Just look at this post! A tangible effect from a no-code environment, conveniently made for my further convenience. What a world we’re in. Automate your life, make some Shortcuts!

---

A significant issue I’ve been facing was my upload process: I write my post in Bear, copy everything, paste it into a `.md` file in my post directory, then go through the process of replacing all the garbled links that Bear stores images as in the file with actual relative links to the files in my post images directory, along with assigning them individual alt texts. Then I format everything with Prettier and commit+push it.

The particularly busy bit are the images, which is why I rarely use them. The fastest way I get it done is in VSCode, but it’s still really clunky to do so and I’m trying to [reduce my VSCode usage anyway.](https://cjohanaja.com/musings/vimming-it-up)

Furthermore, I always make some last-minute wording/content changes here and there to the files while demoing them on localhost, so the writings I have in Bear are pretty significantly different from what’s actually uploaded to the site. This changes that, and makes me put more effort into writing perfectly in Bear the first time around.

[^shortcut]: [Here’s the shortcut,](https://www.icloud.com/shortcuts/062894e5c5254311bf3a7dee5bb5a49d) though I’m not really certain how well other people could adapt it to their situation. With some changes, _certainly possible._
