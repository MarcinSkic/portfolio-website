import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import remarkRetext from "remark-retext";
import retextEnglish from "retext-english";
import retextReadability from "retext-readability";
import retextIndefiniteArticle from "retext-indefinite-article";
import retextEquality from "retext-equality/en";
import retextPassive from "retext-passive";
import retextRepeatedWords from "retext-repeated-words";
import retextSimplify from "retext-simplify";
import retextSpell from "retext-spell";
import { unified } from "unified";
import reporter from "vfile-reporter";
import dictionaryEn from "dictionary-en";
import readingTime from "remark-reading-time";
import rehypeExternalLinks from "rehype-external-links";

const ignoredWords = [
  "Wakatime",
  "suboptimal",
  "freeform",
  "Clockify",
  "autocomplete",
];

/** @type {import("mdsvex").MdsvexOptions} */
const mdsvexConfig = {
  extensions: [".svx", ".md"],
  remarkPlugins: [
    readingTime,
    saveReadingTime,
    [
      remarkRetext,
      unified()
        .use(retextEnglish)
        .use(retextReadability, { age: 20 })
        .use(retextIndefiniteArticle)
        .use(retextEquality)
        .use(retextPassive)
        .use(retextRepeatedWords)
        .use(retextSimplify)
        .use(retextSpell, { dictionary: dictionaryEn, ignore: ignoredWords }),
    ],
    reportRetextWarnings,
  ],
  rehypePlugins: [
    [rehypeExternalLinks, { rel: ["noopener"], target: "_blank" }],
  ],
};

function saveReadingTime() {
  return function (_, file) {
    file.data.fm = {
      ...file.data.fm,
      readingTime: `${Math.ceil(file.data.readingTime.minutes)} min`,
    };
  };
}

function reportRetextWarnings() {
  return function (_, file) {
    if (!file.data.fm.published) {
      console.warn(reporter(file, { verbose: true }));
    }
  };
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
  },

  extensions: [".svelte", ".svx", ".md"],
};

export default config;
