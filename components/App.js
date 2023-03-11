import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPosts from "./AllPosts";
import OnePost from "./OnePost";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Home from "./Pages/Home";
import Footer from "./Footer/Footer";

function App(){
    return(
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route element={<Home/>} path="/" exact />
            <Route element={<OnePost/>} path="/about" />
            <Route element={<OnePost/>} path="/blog/:slug" />
        </Routes>
        <Footer/>
    </BrowserRouter>
  </>
);
}

export default App;
