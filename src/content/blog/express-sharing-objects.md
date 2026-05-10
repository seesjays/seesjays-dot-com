---
layout: "../../layouts/BlogPost.astro"
title: "Sharing Objects Between Express Routes/Middleware"
date: "2022-06-26"
subtext: "Ways to put the same object in multiple routes and middleware in Express."
sector: technical
hue: 45
---

If your routes are [modularized across different files](https://cjohanaja.com/blog/modularizing-routes-expressjs) (like they should be) you may run into the trouble of needing Object/Variable X in a modularized route as well as your main `app.js` file.

```js
// routeA.js
const express = require("express");
const routeA = express.Router();

routeA.get("/a", (req, res) => {
  res.send("Route A");
});

module.exports = routeA;
```

```js
// app.js
const express = require("express");
const app = express();

const routeA = require("./routeA");
const objectX = { foo: 42 };

app.use(routeA);

app.get("/", (req, res) => {
  res.send("Useful Variable in app.js: " + objectX.foo);
});
```

routeA currently doesn't have access to objectX. You can share variables between routes and `app.js` in a couple of ways:

## Initiailizer Function

You can export a function from routeA that accepts the object as an argument and stores its reference in a variable local to the module, then call that function in `app.js` or wherever the variable you want shared is initialized.

```js
// routeA.js
const express = require("express");
const routeA = express.Router();

let objectX;
function initializeRouteA(sharedObject) {
  // guards against empty calls and reinitialization
  if (sharedObject && !objectX) objectX = sharedObject;
}

// ideally this route isn't accessed until ~AFTER~ the init func is called.
routeA.get("/a", (req, res) => {
  res.send("Route A, now with a Useful Variable: " + objectX.foo);
});

module.exports = { initializeRouteA, routeA };
```

```js
// app.js
const express = require("express");
const app = express();

const objectX = { foo: 42 };

const { initializeRouteA, routeA } = require("./routeA");
initializeRouteA(objectX);

app.use(routeA);

app.get("/", (req, res) => {
  res.send("Useful Variable in app.js: " + objectX.foo);
});
```

### Undesirable Traits

There's nothing entirely wrong with this method, but it's not ideal. If you "forget" to call the init function, or it's improperly used, etc etc, you'll run into issues. It's an extra export+require, and adds more functions to call just to get your route working.

## Exported Router Function

A method I've really started to like for this particular use case is to export a function that takes the necessary shared object and returns a router. Inside the function, the shared object is assigned to a local reference and modified any which way you'd like, and you setup the routes.

```js
// routeA.js
const express = require("express");

// routeARouter can be init inside or outside of the function, either works, really.
const routeARouter = express.Router();

function routeA(sharedObject) {
  const objectX = sharedObject;

  routeARouter.get("/a", (req, res) => {
    res.send("Route A, now with a Useful Variable: " + objectX.foo);
  });

  return routeARouter;
}

module.exports = routeA;
```

```js
// app.js
const express = require("express");
const app = express();

const objectX = { foo: 42 };

const routeA = require("./routeA");
app.use(routeA(objectX));

app.get("/", (req, res) => {
  res.send("Useful Variable in app.js: " + objectX.foo);
});
```

It's a nice little self-contained world, and at the end your perfect little router is returned, which means you can just slap the function into app.use() with your arguments (the shared object).

It's such a nice paradigm that you can see it in use in lots of other route/middleware libraries, like `express.urlencoded` and `cookie-parser.`

### Additional Plus

Since you're initializing the route early on with `app.use,` you can validate the object and return a router accordingly with how it was initialized.

```js
// routeA.js
const express = require("express");

// routeARouter can be init inside or outside of the function, either works, really.
const routeARouter = express.Router();

function routeA(sharedObject) {
  if (sharedObject.foo) {
    const objectX = sharedObject;

    routeARouter.get("/a", (req, res) => {
      res.send("Route A, now with a Useful Variable: " + objectX.foo);
    });
  } else {
    // We could throw an error or something here,
    // but we can also define different routes!
    routeARouter.get("/a", (req, res) => {
      res.send("Route A, without a Useful Variable. :(");
    });
  }

  return routeARouter;
}

module.exports = routeA;
```
