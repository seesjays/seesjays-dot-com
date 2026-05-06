---
layout: "../../layouts/BlogPost.astro"
title: "Updating Chart Type in ChartJS"
date: "2022-06-28"
subtext: "How to update the type of a ChartJS chart"
hue: 45
---

It helps to display a chart in different forms, sometimes.

Different charts are good are portraying data in different ways, and when I needed to swap a chart between Radar and Bar types I found that the **"only"** way to do so is by destroying the chart using `CHART_REF.destroy()` and recreating it with the new type.

Depending on how you structured it, the dataset **can** remain the same in some cases, though it depends on how you want to display it.