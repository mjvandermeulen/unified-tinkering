import {createElement, Fragment, useEffect, useState} from 'react'
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react"
import remarkStringify from "remark-stringify";
import rehypeStringify from "rehype-stringify";
import markdown from "./markdown/ontario_and_quebec.js"

async function main() {
    const file = await unified()
        .use(remarkParse)
        .use(remarkGfm)


        
        // .use(remarkStringify)
        // .use(remarkRehype)
        // .use(rehypeReact, {createElement, Fragment})
        // .use(rehypeStringify)
        .parse(markdown);

    console.log();
    console.log(JSON.stringify(file, null, 4));
    console.log();
}

main();

