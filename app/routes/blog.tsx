import type { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import styles from "~/styles/tailwind.css"
import {marked} from "marked"
import hljs from 'highlight.js';
import tailwin from "highlight.js/styles/github-dark-dimmed.css"
import { useEffect } from "react";
import { useLoaderData } from "@remix-run/react";


export const links: LinksFunction = () =>{
    return[
        {
            rel:"stylesheet",
            href:tailwin
        },
        {
            rel:"stylesheet",
            href:styles
        }
    ]
}

export const meta:MetaFunction = () =>{
    return { 
        title: `GMARR Blog`,
        description:`This is a blog about my personal notes.` 
      }
}

export const loader:LoaderFunction = async() =>{
    let blogData = await fetch("http://20.232.146.56:1337/posts/1")
    let blogContent = await blogData.json()
    let blogParse = await marked.parse(`${blogContent.body}`)

    return blogParse
}


export default function Blog() {
    useEffect(()=>{
        hljs.initHighlighting()
    },[])

    const data = useLoaderData()

  return (
    <div className="flex items-center justify-center">
        <div className="prose py-10" dangerouslySetInnerHTML={{__html:data}}></div>
    </div>
  )
}
