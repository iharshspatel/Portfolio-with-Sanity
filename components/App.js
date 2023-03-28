import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPosts from "./AllPosts";
import OnePost from "./OnePost";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Home from "./Pages/Home";
import Footer from "./Footer/Footer";
import Blog from "./Pages/Blog";
import BlogDetailsPage from "./Pages/BlogDetails";
import About from "./Pages/About";

function App(){
    return(
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route element={<Home/>} path="/" exact />
            <Route element={<Blog/>} path="/blog" exact />
            <Route element={<About/>} path="/about" />
            <Route element={<BlogDetailsPage/>} path="/blog/:slug" />
        </Routes>
        <Footer/>
    </BrowserRouter>
  </>
);
}

export default App;
