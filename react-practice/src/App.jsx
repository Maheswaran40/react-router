import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Error from "./Pages/Error";
import About from "./Pages/About";
import ContextPrvide from "./Context/ContextPrvide";
import UseRefFile from "./useRefFolder/UseRefFile";

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextPrvide>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route path="/About" element={<About />} />
            <Route path="/useref" element={<UseRefFile />} />
            <Route path="/products/:id" element={<Products />} />
          </Routes>
        </ContextPrvide>
      </BrowserRouter>
    </>
  );
}

export default App;
