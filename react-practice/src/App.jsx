import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Error from "./Pages/Error";
import About from "./Pages/About";
import ContextPrvide from "./Context/ContextPrvide";
import UseRefFile from "./useRefFolder/UseRefFile";
import CRUD from "./CRUD";
import Login from "./Pages/Login";
import Protect from "./Pages/Protect";
import Crud1 from "./Pages/Crud1";
import Crud2 from "./Crud2";
import Carousel from "./Pages/carousel/Carousel";

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextPrvide>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Protect><Home /></Protect>} />
            <Route path="/crud" element={<CRUD />} />
            <Route path="/crud2" element={<Crud2 />} />
            <Route path="/crud1" element={<Crud1 />} />
            <Route path="/carousel" element={<Carousel />} />
            <Route path="*" element={<Error />} />
            <Route path="/About" element={<Protect><About /></Protect>} />
            <Route path="/useref" element={<UseRefFile />} />
            <Route path="/products/:id" element={<Products />} />
          </Routes>
        </ContextPrvide>
      </BrowserRouter>
    </>
  );
}

export default App;
