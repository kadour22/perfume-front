import React from 'react'
import ParfumeLanding  from "./components/Landing";
import ProductList from "./components/ProductList"
import Header from './components/Header';
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ParfumeLanding/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App