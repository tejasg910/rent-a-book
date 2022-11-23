
import './App.css';
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './component/Navbar';
import Home from './component/Home';
import Books from './component/Product/Books';
import BookDetail from './component/Product/BookDetail';
import React, {useState, useEffect} from 'react';
import Cart from './component/Product/Cart';
import Checkout from './component/Checkout';
export default function App() {
  
const [bookId, setbookId] = useState("");
const [cart, setCart] = useState([]);




  const showBookDetails = (_id)=>{

setbookId(_id)

localStorage.setItem("currentBookId", _id)
  }


  const save = (newdata)=>{
    if(!localStorage.getItem('bookCart')){
     
      localStorage.setItem('bookCart', JSON.stringify([newdata]))
    }
    else{

      

      const data  = localStorage.getItem('bookCart')
      
      const prev = JSON.parse(data);

    // if(Array.from(prev).filter((value)=> prev._id===value._id)){
    //   console.log('found')
    //   console.log(newdata['quantity'])
    //   newdata['quantity'] += newdata.quantity + 1;



    // }else{
    //   console.log('not found')
    // }


     Array.from(prev).map((value, index)=>{
      if(value._id===newdata._id){
     
       newdata['quantity'] = value.quantity+1;
       prev.splice(index, 1)
      }
      else{
    
      }
     })
    
      
    

      prev.push(newdata);
   
      localStorage.setItem('bookCart', JSON.stringify(prev))
     
    }
    toast('Product added to cart successfully!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }



  return (
   <>
   
   <BrowserRouter>
   <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
   <Routes>
    <Route path="/" element={<Navbar />}>
    <Route index element={<Home/>}/>
    <Route path="/books"  element={<Books showBook={showBookDetails}/>}/>
    <Route path="/bookdetails" element={<BookDetail setCart={setCart} save={save} cart={cart} />}/>
    <Route path="/cart" element={<Cart />}/>
    <Route path="/bookdetails/checkout" element={<Checkout/>} cart={cart}/>
    <Route path="/cart/checkout" element={<Checkout/>} cart={cart}/>


  
   </Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}


