---
layout: "../../layouts/BlogPost.astro"
title: "How to easily modify the body’s CSS on a Gatsby site"
date: "2022-04-18"
subtext: "Change the body's CSS any way you want on any Gatsby page using React-Helmet."
sector: technical
hue: 266
---

If you’ve used Gatsby for a bit, you’ll know that you’re (mostly) restricted to modifying the inside of your site’s `body` content, and to modify elements outside of the body you’ll have to mess with `html.js` or have to configure Gatsby’s SSR files to achieve your goal. And there’s _nothing really wrong_ with those solutions. But if you’d wanted to, say, add dynamic colors to each page (like I have for my posts), you’d _probably_ be out of luck using either of those.

You could do something like this with some in-component JS. But there's three problems with that approach:

1. You would have to modify the DOM
2. Your page would be unstyled until everything loads and all of your JS runs (which isn't exactly instantaneous)
3. Related to point 2: Gatsby doesn't really recognize running JS, just the DOM content, so your styles won't be made static

## Installing react-helmet and its corresponding Gatsby plugin.

Both solutions utilize `react-helmet` in _slightly_ different ways, so install that first.
`npm install gatsby-plugin-react-helmet react-helmet`

> You may be wondering "Isn't react-helmet client side? Why not run some JS in a component to make dynamic per-page styles?"
> Simply put, Gatsby'll render out the react-helmet stuff to really-real HTML, so these solutions are
> as good as loading CSS files, if not better. (it's directly in the HTML, yay for smaller CSS files!)

## Method A: React Helmet and Inline CSS

This solution should be suitable in most cases. You can utilize any CSS rules you'd like, change anything around, all that good stuff.
Modify this component any way you'd like. I have it setup to change the `background-color` of my pages based on a hexcode I pass in.

```jsx
const BodyColorizer = ({ hex }) => {
  return (
    <Helmet>
      <style>{`body { background-color: ${hex}; }`}</style>
    </Helmet>
  );
};
```

## Method B: React Helmet and Body Attributes

Method A is great for individual styles, but what if you'd wanted to add **entire classes** to the body tag? That's where B comes in.

I read around and found that `react-helmet` is supportive of [body attributes.](https://stackoverflow.com/a/46405558) Why does the package made specifically for modifying the page head have a feature for messing with the body? I don't know, but it's handy nonetheless. Let's use it:

```jsx
const BodyClassifier = ({ className }) => {
  return <Helmet>bodyAttributes={{ class: className }}</Helmet>;
};
```

<br/>

___
The beauty of `react-helmet` is that there's very little nuance to using it and next to no configuration. Just drop this into your layout or a subcomponent of it and you'll be set.

And if you weren't previously aware, you can use `react-helmet` from the get-go to add a `style` tag to the page head, if you don't really need to modify the body specifically.
