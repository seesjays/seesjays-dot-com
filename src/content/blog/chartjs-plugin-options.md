---
layout: "../../layouts/BlogPost.astro"
title: "Accessing Plugin Options in ChartJS"
date: "2022-06-24"
subtext: "When I built a ChartJS plugin, I had to access the options in a kinda weird way."
hue: 45
---

I was overriding the default legend plugin in ChartJS and wanted to replace its functions with an HTMLElementLegend using the afterUpdate plugin hook. For reusability's sake I wanted to set an option in my chart that would dictate the ID of the container element, but found that the option wasn't accessible in what was passed to the afterUpdate function's `options` arg, for whatever reason.

```js
const chart = new Chart(ctx, {
    options: {
        type: "radar",
	data: { ... },
	options: options,
    plugins: {
        foobar: {
            importantOption: 42
        }
    }
    }
});
```

In my plugin, I wanted to access whatever was at importantOption, and through trial and error resolved that while I couldn't do it the "sensible" way, it was easy enough to achieve the same goal via `CHART_REF.options.plugins[plugin_ID].importantOption`. Note that it's necessary you have a reference to the chart as some variable or chart getter function.

Likely not what should be done, but works, and I've found no issues with this solution.