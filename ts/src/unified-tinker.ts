import {createElement, Fragment, useEffect, useState} from 'react'
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react"
import rehypeStringify from "rehype-stringify";

async function main() {
    const file = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeReact, {createElement, Fragment})
        .use(rehypeStringify)
        .process(markdown);

    console.log();
    console.log(String(file));
    console.log();
}

const markdown = `
---\nlayout: home\n---\n\n# Hi ~~Mars~~Venus!
`

main();

