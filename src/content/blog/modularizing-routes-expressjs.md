---
layout: "../../layouts/BlogPost.astro"
title: "Modularizing Routes in Express"
date: "2022-06-24"
subtext: "Turn your monolith of an app into multiple parts of a whole."
sector: technical
hue: 45
---

In the Express docs, it's never really nuanced that your app's routes should be split off from the main `app.js` into multiple files depending on how complex they are.

## Starter App

Say you have a basic `app.js` file with two routes, one being absurdly long and complex.

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/long", (req, res) => {
  // imagine there's a ton of code inside of this route, like a morbillion lines.
  // not the most practical example, but I didn't wanna make you scroll too much.
  res.send("Wow, that was a lot of code!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

Wouldn't it be nice to put all this long, messy, disgusting code for /long inside of a different file, for the sake of cleanliness and sanity?

It's easy! Just use an Express Router:

## long.js

Make a file in the same directory, name it `long.js` or anything else you want.

```js
const express = require("express");
const longRouter = express.Router();

longRouter.get("/long", () => {
  // imagine there's a ton of code inside of this route, like a morbillion lines.
  // not the most practical example, but I didn't wanna make you scroll too much.
  res.send("Wow, that was a lot of code!");
});

module.exports = longRouter;
```

Here we make an Express Router, which is just a fancy way of making an app's routes their own objects. It doesn't create an entire app, just a section of it that can be added and removed with ease.

The router's added to this module (file)'s exports at the end, preserving its changes and attributes.

## Using the /long router

Here's the ease. Just import the router object from `long.js` into `app.js` using require.

Once it's imported, we add the route to our app by passing the object into app.use():

```js
const express = require("express");
const app = express();

const long = require("./long");

// Take the routes from the router object and use them in our app
app.use(long);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

Now you've reduced your LOC by a morbillion, and made your code easier to work on.
