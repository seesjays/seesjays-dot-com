import { getRssString } from "@astrojs/rss";
import { getCollection } from "astro:content";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

const parser = new MarkdownIt();

function absoluteUrl(value, baseUrl) {
  if (!value) {
    return value;
  }

  try {
    return new URL(value, baseUrl).href;
  } catch {
    return value;
  }
}

function sanitizePostContent(content, postUrl) {
  return sanitizeHtml(parser.render(content), {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      a: [
        ...(sanitizeHtml.defaults.allowedAttributes.a ?? []),
        "aria-label",
        "title",
      ],
      code: ["class"],
      img: ["alt", "height", "loading", "src", "title", "width"],
    },
    transformTags: {
      a: (tagName, attribs) => ({
        tagName,
        attribs: {
          ...attribs,
          href: absoluteUrl(attribs.href, postUrl),
        },
      }),
      img: (tagName, attribs) => ({
        tagName,
        attribs: {
          ...attribs,
          src: absoluteUrl(attribs.src, postUrl),
        },
      }),
    },
  });
}

export async function GET(context) {
  const site = new URL(context.site);
  const posts = (await getCollection("blog"))
    .filter((post) => !post.data.draft && post.data.sector !== "extras")
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const rssString = await getRssString({
    title: "Christian Ohanaja's Blog",
    description: "Personal and technical posts by Christian Ohanaja.",
    site,
    stylesheet: "/rss/styles.xsl",
    items: posts.map((post) => {
      const link = `/blog/${post.id}/`;
      const postUrl = new URL(link, site);

      return {
        title: post.data.title,
        description: post.data.subtext,
        pubDate: post.data.date,
        link,
        content: sanitizePostContent(post.body, postUrl),
      };
    }),
    customData: `<language>en-us</language>`,
  });

  return new Response(rssString, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
