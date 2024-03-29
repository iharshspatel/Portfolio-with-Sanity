import { useState,useEffect } from "react";
import sanityClient from "../client";

function useGetBlogDetails(slugObject){
console.log(slugObject);
const [slug, setSlug] = useState(slugObject);
const [postData, setPostData] = useState(null);
const [loading, setLoading] = useState(true);


useEffect(() => {
  sanityClient
    .fetch(
      `*[slug.current == $slug]{
        title,
        slug,
        body,
       "name": author->name,
     }`,
      { slug }
    )
    .then((data) =>{
      setPostData(data[0]);
      setLoading(false);
      console.log(postData);
    } )
    .catch(console.error);
}, [slug]);

return [postData,loading]

}

export default useGetBlogDetails;
