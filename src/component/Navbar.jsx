import React, {useState, useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import Signin from "./User/Signin";
const Navbar = ({checkSign, setCheckSign}) => {


  const onLogOut =()=>{
    localStorage.removeItem('bookToken')
   setCheckSign(false)
  
  }
  return (
    <>
    <div className="h-20">

    
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900 shadow-xl fixed w-full z-20 ">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    
      <Link className="flex items-center" to={"/"}>
  
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">BOOK A BOOK</span>
        </Link>
    
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
        </li>
        <li>
        <Link  to={'/about'} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
        </li>
        <li>
          <Link to={'/services'} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</Link>
        </li>
        
        <li>
          <Link to={'/contact'} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
        </li>
        <li>

<Link to={'/cart'}><AiOutlineShoppingCart className="text-xl"/></Link>
        </li>
        <li>
{!checkSign &&   <Link to={'/signin'}><button className="text-xm text-white bg-green-500 pr-1 pl-1 rounded-md border-green-800 border-2">Sign in</button></Link>}
{checkSign &&  <button onClick={onLogOut} className="text-xm text-white bg-green-500 pr-1 pl-1 rounded-md border-green-800 border-2">Log out</button>}
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

    
    </>
  );
};

export default Navbar;
