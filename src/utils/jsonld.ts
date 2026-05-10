export type SchemaType =
  | "BlogPosting"
  | "ProfilePage"
  | "CollectionPage"
  | "WebPage"
  | false;

export type JSONLDItem = {
  name: string;
  url: string;
};

type PageJSONLDOptions = {
  title?: string;
  description?: string;
  url: string;
};

type BlogPostingJSONLDOptions = PageJSONLDOptions & {
  date?: string;
};

type CollectionPageJSONLDOptions = PageJSONLDOptions & {
  items?: JSONLDItem[];
};

export const me = {
  "@type": "Person",
  name: "Christian Ohanaja",
  url: "https://cjohanaja.com",
  logo: {
    "@type": "ImageObject",
    url: "https://cjohanaja.com/moosie.png",
  },
  sameAs: [
    "https://github.com/seesjays",
    "https://www.linkedin.com/in/seesjays",
    "https://x.com/seesjays",
    "https://instagram.com/seesjays",
  ],
  jobTitle: "Software Engineer",
};

const generalPageJSONLD = ({ title, description, url }: PageJSONLDOptions) => ({
  "@context": "https://schema.org",
  name: title,
  description,
  url,
});

export const blogPostingJSONLD = ({
  title,
  description,
  url,
  date,
}: BlogPostingJSONLDOptions) => ({
  ...generalPageJSONLD({ title, description, url }),
  "@type": "BlogPosting",
  headline: title,
  publisher: me,
  author: me,
  image: "https://cjohanaja.com/ggs.png",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": url,
  },
  ...(date && {
    dateCreated: date,
    datePublished: date,
    dateModified: date,
  }),
});

export const profilePageJSONLD = ({
  title,
  description,
  url,
}: PageJSONLDOptions) => ({
  ...generalPageJSONLD({ title, description, url }),
  "@type": "ProfilePage",
  jobTitle: "Software Engineer",
  description:
    "Software engineer and music critic building frontend, backend, and distributed systems projects.",
  mainEntity: me,
});

export const collectionPageJSONLD = ({
  title,
  description,
  url,
  items,
}: CollectionPageJSONLDOptions) => ({
  ...generalPageJSONLD({ title, description, url }),
  "@type": "CollectionPage",
  author: me,
  about: {
    "@type": "Blog",
    name: title,
    url,
  },
  ...(items?.length && {
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: item.url,
      })),
    },
  }),
});

export const webPageJSONLD = (options: PageJSONLDOptions) => ({
  ...generalPageJSONLD(options),
  "@type": "WebPage",
});

type BuildJSONLDOptions = CollectionPageJSONLDOptions & {
  schemaType: SchemaType;
  date?: string;
};

export const buildJSONLD = ({
  schemaType,
  title,
  description,
  url,
  date,
  items,
}: BuildJSONLDOptions) => {
  switch (schemaType) {
    case "BlogPosting":
      return blogPostingJSONLD({ title, description, url, date });
    case "ProfilePage":
      return profilePageJSONLD({ title, description, url });
    case "CollectionPage":
      return collectionPageJSONLD({ title, description, url, items });
    case "WebPage":
      return webPageJSONLD({ title, description, url });
    default:
      return undefined;
  }
};
