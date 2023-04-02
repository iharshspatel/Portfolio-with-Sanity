import React from 'react'
import useGetBlogs from '../../fetchers/blogs'
import Hero from '../Hero/Hero'
import CardContainer from '../Layouts/CardContainer/CardContainer'
import projects from '../../constants/projects'

const Home = () => {
  let blogs = useGetBlogs();
  return (
    <>
    <Hero/>
    {blogs && <CardContainer cards={blogs} title={`Recent Blogs`}/>}
    {projects && <CardContainer isProjectContainer={true} cards={projects} title={`Projects`}/>}
    </>
  )
}

export default Home