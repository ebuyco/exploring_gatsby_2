import React from "react";
import Link from "gatsby-link";


const PostListing = ({post}) => <article>
    {/* <h3>{post.frontmatter.title}</h3>
    <span>{post.frontmatter.date}</span> */}
    {/* <div dangerouslySetInnerHTML={{
        __html: post.html
    }} /> */}
    <h2>Post</h2>
    <p>{post.excerpt}</p>
   
</article>;


export default PostListing;