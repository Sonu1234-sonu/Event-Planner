import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";


const App = () => {
  return (
    <>
   
      <BrowserRouter>
        <header>
          <Navbar />
          
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Hero/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path="/login"element={<Login/>}/>

            
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
