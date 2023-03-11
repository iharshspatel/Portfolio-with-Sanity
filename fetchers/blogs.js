import { useState,useEffect } from "react";
import blogMapper from "../utils/blogsMapper";
import sanityClient from "../client";

function useGetBlogs(){

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "post"]{
            title,
            slug,
            description,
            publishedAt,
        }`
          )
          .then((data) =>{
            setBlogs(blogMapper(data));
          })
          .catch(console.error);
      }, []);

    return blogs
}

export default useGetBlogs