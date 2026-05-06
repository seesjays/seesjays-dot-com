---
layout: "../../layouts/BlogPost.astro"
title: "Building The Paired Survey Platform Google Wouldn’t"
date: "2022-07-24"
subtext: "The AP Pilot Project Parity Polling Platform"
sector: me
---

The AP Statistics Pilot Project, one of our final major grades, was so beautifully vague: Students were to create a poll/survey, perform a statistical test with the data, and then write about their findings. Bonus points if you made a presentation for the class. There were some additional specifics regarding the presentation, but the rest was open-ended for the most part.

Suitable projects that some people did included bouncing a frozen and unfrozen ball and seeing which went higher, trying different methods for volleyball practice and seeing what was best for performance, whether or not students who took swimming classes could hold their breath longer, etc etc. It was all so creative!

But I went the flashy route: I’m the only one who elected to survey couples. It seemed like the candidate pool was practically infinite and it lent me the opportunity to do a paired T-Test, which we had just learned. My hypothesis was thus:

> Is there a sizable difference in how genders perceive their own intelligence relative to their romantic partner?

## “How could I possibly over-engineer this?”

I knew I wanted to poll couples since the project start date, the only roadblack was _how_ I would go about doing that. For my survey, I wanted to conduct it in a way that would check a particular set of boxes:

- I didn’t trust the student population enough to answer “truthfully,” so I wanted to put safeguards in place that would prevent one person answering as two people.
- I wanted to make this as effortless as possible, as simple as showing one person a QR code and having them send a matched code to their significant other.
- The poll needed to load fast so I could show it to as many people as possible and dip; I didn’t have many opportunities to reach other students (busy schedule) and school wifi was a travesty in terms of speed.
- I wanted the data easily exported in JSON so I could generate a visualization for the results using [Matplotlib.](https://matplotlib.org)

So in summary, I needed a tightly-integrated platform with absolutely braindead-simple UX that relied on a low payload to make the most of bad connections which could also automatically link two surveys that were recorded asynchronously without further effort from me, with JSON as an export option.

That platform does not exist. Google Forms was the nice, ubiquitous, obvious option, but it clearly wasn’t built for paired surveys, and checked literally none of my boxes. Which makes sense, I don’t think anything like this has ever been _needed_ at scale. Microsoft Forms was in the same boat. I thought SurveyMonkey would be the end-all solution, but despite this [helpful article on T-Tests,](https://www.surveymonkey.com/mp/t-tests-explained/) the product once again didn’t fit my use case.

I looked around. No paired polling platform existed. So I built one for a single major grade.

## Fine, I’ll Do It Myself.

Developing something that serves a very specific need is my fun specialty.

I had to iterate quickly so I could get something functional off the ground fast enough to _actually collect my data_ and create my paper+presentation. I wanted those bonus points. I also wanted my solution to be as low-cost as possible.

This led me to the following stack:

- Frontend
  - Bootstrap - I had a good amount of experience with the library from prior projects and wanted to see _exactly_ how fast I could build something with it. I considered custom CSS to decrease the payload even further but decided against it for the sake of _raw iterative speed._
  - FIrebase - With Firebase, I wouldn’t have to build and get hosting+data storage+server management going for an “actual backend.” I’d built nothing with it before and had some free credits from a hackathon I participated in (which I didn’t actually end up using since their free tier is nice)
    - Webpack - Necessary for the Firebase scripts, and I actually hadn’t worked with Webpack at all prior to this, so it was a lovely learning experience.
- Backend
  - Firestore
- Data Viz
  - Matplotlib

With a bit of testing, slacking, and missed sleep, I cobbled together the platform of my dreams with my ten bare fingers.

## Why yes, I am a UX expert!

These pages were designed primarily with mobile in mind, so they look kinda mediocre on desktop Safari.

![Parity Platform Survey Screen](/postImages/parity-polling-platform/ux-a.png)

Here’s the particularly simple? flow:

1. A user opens a **general** QR code that leads them to a form, where a randomized Form ID is generated on the spot.
2. The user fills in the proper info, then submits the poll

![Parity Platform End Screen](/postImages/parity-polling-platform/ux-b.png)

3. They’re given this lovely end page, their response is sent to my Firestore and a cookie is stored on-device to make sure they come back to the same stage. No resubmits allowed!
4. A **specialized** URL is generated with the previously-mentioned formID included in the query. A QR code is also generated to match the URL. The button on the end page opens up the Share Sheet on iOS and Android so they can text the URL, in case they aren’t close enough to use the QR code.
5. The significant other opens the **specialized** link and is sent to the question page, which pulls the formID from the query, substituting the randomized ID with it. Once they answer, they’re sent to the same end page and their response is linked to the other one via FormID in Firestore _automatically!_

This wonderfully simple flow enabled me to ask people if they’re willing to contribute to my Statistics project, show them the general QR code, and leave, async fire-and-forget style.

I had the perfect, custom paired polling platform setup and ready for primetime.

Was it successful in the end? Sorta.

Why sorta?

## The Absolute Travesty Of My Collection Methods

Remember the slacking I mentioned? Yeah, the platform took me a bit more than a week to put together, and I had less than two to get the whole project finished.

I was in a rush and didn’t apply the best surveying principles. While getting responses from the couples I already knew existed was trivial, the trouble lied in the fact that I was wrong about my estimated candidate pool.

It wasn’t infinite, not at all. In fact, a _significant number of my classes had nothing but singles._ I think the most interesting statistic I collected was that relationship count decreased with class difficulty. I got 4 pairs from Chorale, two from English, _one_ from AP CS A, and a grand total of **ZERO** from AP Stats and Calc AB.

That’s ~7 pairs, hardly a significant dataset. So I got some teachers in the poll. Another 2 pairs, breezy! I still wasn’t sated, though. The culmination of my survey design efforts was centered around me getting truly random responses with ease in hallways and other places outside of class, and it was time to use that crutch.

### Fire And Forget

I approached the “really real responses from random people in the hallway thing” a bit too literally, went about it in the wrong order, with the wrong social perspective.

Imagine a guy you don’t know, phone in hand, walking up to you while you’re walking to class. He asks you, a high schooler entirely clueless to his machinations, with an entirely straight face:

“Are you single?”

You would be completely reasonable to be wary, in fact looking back at it I’m _surprised that I didn’t get flattened by some people._ Bless my socially clueless heart.

For one out of my remaining three days till the due date I lead with that godforsaken question, ‘till I wisened up and started with “Do you wanna answer my survey? It’s for people in relationships” like a normal humanly human.

I did, after a brief socially transformative period, end up getting to 15 pairs, which my stats teacher deemed a “reasonable amount.” Did I mention that she was **absolutely enamored** with my project? Immense pressure on me in particular every day in class with praise for my project subject ever since I submitted my null and alternative hypotheses. Every single day before the due I was asked if my data was ready, and every single day before the due all I could say was “Almost!”

## And the big reveal…

Was that there is _no correlation between gender and the perceived intelligence of one’s partner._ Quite disappointing, I know. Here’s some snippets from the paper:

![Resuls Analysis](/postImages/parity-polling-platform/analysis.png)

![My data failed the Nearly Normal Condition](/postImages/parity-polling-platform/notnormal.png)

![Calculator Output](/postImages/parity-polling-platform/calc-results.png)

## Sunsetting Parity

I had the briefest, _briefest_ glimpse of a future where I became the greatest project manager of all time, threw away my soul, moved to Silicon Valley, got some VC funding, and went public running the first Paired Polling Platform. That was even a slide in my startup-product-demo-esque class presentation I threw together in Keynote during the lunch period before Stats.

!["This is the first paired polling platform to exist on the web."](/postImages/parity-polling-platform/ego-stroking.png)

I learned that I’m a really good presenter, at least. Told the story of my valiant quest to raise the bar for AP Stats Pilot Projects for life, got good laughs out of the class, and played off my disappointing results perfectly. I really leaned into the data collection failings. Humor is key.

![The reuslts slide of my presentation, with celebratory emojis.](/postImages/parity-polling-platform/woo-bad-results.png)

**_I won the bonus points without contest._** Public speaking is a specialty of mine, and I put that skill to work.

The Parity Platform never saw the light of day past that, though. I legitimately thought about it, and while I did fill a completely unserved niche, I just couldn’t find the time to flesh out a concept that didn’t really work when I thought about it more: paired surveys at scale.

I think in the end I built the _problem around the platform,_ not the other way around. In other words I think my use case was one that’s so _uncommon_ and better served by more traditional processes for paired surveys. I just couldn’t justify helming this beyond a school project.

The idea still bounces around though. Might be sitting on an EdTech goldmine.

---

Maybe I was going to build a website regardless of what my survey topic was going to be. I was in a particularly inventive period, and since I got my Macbook that semester I could work on sites in [AP CSA](https://cjohanaja.com/musings/lang-dilemma) and during the alotted work time we got in AP Stats.

You might think 15 pairs is a small sample size, and you'd probably be right. But if you think about it, that's 30 respondents that **did everything correctly.** The amount of single responses I got maddeningly numbeered somewhere in the 50s.
