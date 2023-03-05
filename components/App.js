import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPosts from "./AllPosts";
import OnePost from "./OnePost";

function App(){
    return(
    <>
    <BrowserRouter>
        <Routes>
            <Route element={<AllPosts/>} path="/" exact />
            <Route element={<OnePost/>} path="/:slug" />
        </Routes>
  </BrowserRouter>
  </>
);
}

export default App;
