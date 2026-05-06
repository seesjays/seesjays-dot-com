---
layout: "../../layouts/BlogPost.astro"
title: "Render an EJS frontend with objects from the backend"
date: "2022-06-27"
subtext: "How to send objects from the backend to an EJS frontend."
hue: 45
---

I needed to send a few large-ish objects to an EJS template (/stats on Melrady) from the backend. The objects are necessary for a crucial chunk of JS, so I wanted the objects available globally before anything else ran.

```js
// backend bit in Express,
// but you shouldn't be limited to Express at all.

const objy = { foo: 42, bar: -1 };
return res.render("template", {
  SENT_OBJECT_NAME: objy,
});
```

Using a single tag, `<%- const OBJECTS = JSON.stringify(SENT_OBJECT_NAME) %>` inside of a `<script>`, the object will be available to the rest of the page in JS, and you can still use it in the rest of your EJS as `SENT_OBJECT_NAME`.

Make sure to use the tag before whatever JS you need it for.

```ejs
<html lang="en">
  <body>
    <script>
      const received = <%- JSON.stringify(SENT_OBJECT_NAME); %>
      console.dir(received); // { foo: 42, bar: -1 }
    </script>

    <!-- rest of your EJS page and any scripts that use the received objects -->
  </body>
</html>
```

## Prettier Formatting Issue

I use VSCode and Prettier, and format files often. Whenever I formatted, it would turn `<%-` into `<% -`, which breaks everything with this solution. My resolution to that particular issue was to place the object grab tag into a different template file,

```ejs
<!-- objectGrabTag.ejs -->
<script>
  const received = <%- JSON.stringify(SENT_OBJECT_NAME); %>
</script>
```

and include the tag as an EJS partial.

```ejs
<html lang="en">
  <body>
    <%- include('./objectGrabTag') %>

    <!-- rest of your EJS page and any scripts that use the received objects -->

    <script>
      console.dir(received); // { foo: 42, bar: -1 }
    </script>
  </body>
</html>
```
