import React from 'react'
import useGetBlogs from '../../fetchers/blogs'
import CardContainer from '../Layouts/CardContainer/CardContainer'

const Blog = () => {
  let blogs = useGetBlogs()
  return (
    <>
        {blogs && <CardContainer cards={blogs} title={`Blogs`}/>}
    </>
  )
}

export default Blog