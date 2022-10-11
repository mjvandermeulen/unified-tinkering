import { createElement, Fragment, useEffect, useState } from "react";
import { unified } from "unified";
import { Root, ListItem } from "mdast";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import remarkStringify from "remark-stringify";
import rehypeStringify from "rehype-stringify";
import markdown from "./markdown/tinker_country.js";
import { visitParents } from "unist-util-visit-parents";
import { remark } from "remark";

async function main() {
    const file = remark()
        // .use(remarkParse)
        // .use(remarkGfm)
        .use(() => (mdast: Root) => {
            console.log("START_MARKER");
            visitParents(mdast, "listItem", (listItem: any, parents) => {
                // The types know `listItem` is a list item, and that `parents` are mdast

                const value = listItem?.children?.[0].children?.[0]?.value;
                if (
                    typeof value === "string" &&
                    value.includes("mvdm-a-label")
                ) {
                    console.log(JSON.stringify({ parents, listItem })); //, null, 2));
                    for (const parent of parents) {
                        console.log({ parent_type: parent.type });
                    }
                    console.log("BREAK_MARKER");
                }
            });
        })
        .use(remarkStringify)
        // .use(remarkRehype)
        // .use(rehypeReact, {createElement, Fragment})
        // .use(rehypeStringify)
        .process(markdown);

    // console.log(JSON.stringify(file, null, 4));
    // console.log();
}

console.log();
main();
