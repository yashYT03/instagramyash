import React, { useEffect, useState } from 'react'
import Post from "./Post"
import imglogo from "../public/avater-removebg-preview.png";


const posts = [
    {
        id:"123",
        username:"_IITIAN_YASH_",
        userImg: {imglogo},
        img : "../public/myimg.jpg",
        caption: "Anonymous",
      
    },
    ];
function Posts() {
  return (
    <div>
        {posts.map(post => (
            <Post key={post.id}
         id={post.id}
         username={post.username}
         userImg ={post.userImg}
         uservideo={post.uservideo}

         img={post.img}
         caption={post.caption}
            />
    ))}
    </div>
  )
}

export default Posts
