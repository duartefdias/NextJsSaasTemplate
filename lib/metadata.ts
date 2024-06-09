import { Metadata } from "next";

export function constructMetadata({
  title = "Omniscient",
  description = "Fullstack Software as a Service AI Platform",

  noIndex = false,
}: {
  title?: string;
  description?: string;

  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    applicationName: "Omniscient",
    keywords: [
      "AI",
      "OpenAI",
      "replicate",
      "AI Platform",
      "SaaS Application",
      "JavaScript",
    ],

    authors: { name: "Duarte Dias", url: "" },
    creator: "Duarte Dias",

    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
