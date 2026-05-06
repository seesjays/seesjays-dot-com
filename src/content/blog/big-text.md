---
layout: "../../layouts/BlogPost.astro"
title: "I Love Big Text, Do You?"
date: "2022-05-06"
subtext: "The text and line spacing on my personal site(here) is big, and I love it that way."
sector: me
---

I just hope I haven’t made everything on my site so egregiously big.

Throughout the entire design of it, when I was considering exactly what I wanted this to **be,** a core objective of mine was to make it so I could **read the darn things I write** from a suitable distance (~<2ish feet away from my eyes) without my glasses. Because I thought that if you can’t comfortably read the stuff on the site you have absolute control over, then you’re doing a disservice to yourself, no?

I messed with [`Typography.js`](https://kyleamathews.github.io/typography.js/) a bunch, tweaked sizings, checked all the themes and settled on _Fairy Gates._ And while I like to think it was a decision based on the typographical design (I really do think Quattrocento Sans and Work Sans work beautifully together!) I suppose it wouldn’t be fair to not acknowledge that the default font size being a nice 20 probably influenced that decision. I thought about making it bigger, I really did, but I felt that would be excessive, and it was fine enough for my eyes.

> This may be the part where you're thinking: "Wait, 20px? Isn't that pretty darn normal?"
>
> > True, 20px isn't exactly the black sheep I make it out to be. Medium's default is 20px, from what I've checked, Flavio Copes has posts in 20px, etc. But I (very) often stumble across sites that go a bit below or stick to default sizings, like this [neat piece](https://zan.bearblog.dev/why-i-waste-time/) I read on Hacker News recently. So why do I define this particularly normal choice as "Big Text?" Because it's not the standard. 16px is the usual "default." I digress.

Anyway, to further reach my goal, I ended up increasing the base line height to 2 from 1.45, which helps me a ton because while closely spaced lines are nice for fitting a bunch of stuff in a small space, I have infinite space in my domain, and well-spaced lines give me great comfort.

What's weird, though, is that the few tweaks I made in Typography.js don't seem to apply to mobile devices? I'd fix it manually through CSS but I don't know if that would screw with whatever voodoo the library's doing. If it bothers me for long enough then I'll do just that.

> Funny enough I've seen mobile-unoptimized blogs, so I did try to make sure there wouldn't be overflow issues with my big design, cross-checking using Firefox's, Chrome's, and Safari's responsive device gizmos. (I don't own multiple phones, so I suppose this is a "suitable enough" check.)

I digress. Overall, I think the theme choice and line spacing makes things look cozy and unique. I just hope readers don’t find the design off-putting. Either way, oh well. More space, big text, reading bliss (except on mobile devices, for now.) It’s my site, and I will enlarge if I want to.
