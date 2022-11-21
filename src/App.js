
import './App.css';
import "./index.css"
import { BrowserRouter, Routes, Route, json } from "react-router-dom";

import Navbar from './component/Navbar';
import Home from './component/Home';
import Books from './component/Product/Books';
import BookDetail from './component/Product/BookDetail';
import React, {useState} from 'react';
import Cart from './component/Product/Cart';
export default function App() {
const [bookId, setbookId] = useState("");
const [cart, setCart] = useState([])

  const showBookDetails = (_id)=>{
console.log(_id)
setbookId(_id)

localStorage.setItem("currentBookId", _id)
  }
console.log(cart)

  const save = ()=>{
    if(!localStorage.getItem('bookCart')){
      localStorage.setItem('bookCart', JSON.stringify(cart))
    }
    else{
      const data  = localStorage.getItem('bookCart')
      console.log('this is data',JSON.parse(data))
    }
  }
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Navbar/>}>
    <Route index element={<Home/>}/>
    <Route path="/books"  element={<Books showBook={showBookDetails}/>}/>
    <Route path="/bookdetails" element={<BookDetail setCart={setCart} save={save} cart={cart} />}/>
    <Route path="/cart" element={<Cart />}/>


  
   </Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}


