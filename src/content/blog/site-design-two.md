---
layout: "../../layouts/BlogPost.astro"
title: "Site Design Two"
date: "2023-02-14"
subtext: "I've changed my site!"
sector: me
---

Long overdue, I’ve recently redesigned my personal site. Originally I _only_ wanted to change around the homepage so I could add an Experience section, but wound up changing pretty much everything about the design in the process.

![Old version of my homepage](/postImages/site-design-two/old-index.png)

![New version of my homepage](/postImages/site-design-two/homepage-new.png)

**Making everything on the page rounded?** So pleasant, but so unserious. I'm trying to take myself more seriously here.

**A pastel-only palette?** Visually relaxing, but sort of drab (and hard to make work in dark mode).

**Having a flavor essay on the homepage?** Kinda made me cringe reading it, though that’s mostly a fault of my writing.

**A sidebar?** I actually didn’t want to drop this, but I realized it would look kinda awkward the more projects I added. Also, it made the index need its own layout since the code behind it was different from the rest of my old site. Not great to maintain, overall.

## Color System 4? (I lost track)

For starters, I’ve leaned both closer to and away from the color theming thing I had going on before. Having everything on the page including the background color match was nice, but..

1. It was kinda iffy in places in terms of accessibility
2. It made posts slightly annoying to read in some cases, like when the background was light green, for example
3. Restricted what I could do with colors in most cases. Like, I could never have a white/black component on the page because it "had to match" everything else. Not fun!

![light green was annoying sometimes](/postImages/site-design-two/light-green-annoying.png)

Back when I was making the initial design I just wanted it to stand out more than anything. I think that colors are best suited for accents, now. I'm no professional designer, but it feels nicer this way.

## Making the design + code 10 times simpler using TailwindCSS

I used to have a really complex setup that used [styled-components](https://styled-components.com/) and custom React props and CSS variables and Sass that made things really, **really** annoying to work with. I’m not gonna bore you with the details, but I did [rant about it.](https://cjohanaja.com/musings/tech-debt/)

Anyway, now it’s all CSS variables and some magic I weaved with [Tailwind.](https://tailwindcss.com/) It’s super nice having an expansive system I can just pick colors from until it works, instead of having to make absolutely everything custom and manage its implementation. Working on my site is a joy again.

[Swatches Test Page](https://cjohanaja.com/swatches)
![A small sample of my custom swatch system](/postImages/site-design-two/custom-swatches.png)

## Astronomical: Gatsby to Astro

I also switched from [Gatsby](https://www.gatsbyjs.com/) to [Astro.](https://astro.build/) Very long time coming, in my eyes. Gatsby’s a real nice framework, but when you get into the thick of it, also real bloated and a mess to configure. I never needed to use GraphQL for anything more than setting up the Markdown pages, which Astro handles for me. My `gatsby-config` file was 200+ lines long. I used server side rendering. Things got messy.

I asked around for advice and [Jerome](https://jero.zone/) recommended switching to Astro like [Ben](https://benborgers.com/) did so I could keep my JSX setup, and I’m glad he did. The code changes I needed to make were very minimal, and overall I’m happy with its paradigms.

> There was an issue I ran into regarding image optimization, [so I wrote a package for that.](https://github.com/ChrisOh431/astro-remark-eleventy-image#readme) I’m super pleased with where everything’s at right now, and making pages is much more straightforward than it was with Gatsby.
