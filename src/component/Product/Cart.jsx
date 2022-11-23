import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';

const Cart = () => {
    let navigate = useNavigate();

const [myCart, setMyCart] = useState(null)
const [key, setKey] = useState(null)


useEffect(() => {
   const data  = localStorage.getItem('bookCart');
    setMyCart(JSON.parse(data))

}, [key]);

const checkOut =(e)=>{

e.preventDefault()


navigate('/cart/checkout')

}

const clearCart = (e)=>{
    e.preventDefault()
    localStorage.removeItem('bookCart')
    setKey(Math.random())
}
  return (
    <div>
        
<div className="overflow-x-auto relative">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Book name
                </th>
                <th scope="col" className="py-3 px-6">
                    Writer
                </th>
                <th scope="col" className="py-3 px-6">
                    rating
                </th>
                <th scope="col" className="py-3 px-6">
                    Price
                </th>
                <th scope="col" className="py-3 px-6">
                    Quantity
                </th>
            </tr>
        </thead>
        <tbody>
           {myCart && myCart.map((item)=>{
           return <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.bookName}
                </th>
                <td className="py-4 px-6">
                    {item.writer}
                </td>
                <td className="py-4 px-6">
                    {item.rating}
                </td>
                <td className="py-4 px-6">
                    ₹{item.price*item.quantity}
                </td>
                <td className="py-4 px-6">
                    {item.quantity}
                </td>
            </tr>})}
           
        </tbody>
    </table>
</div>

<div className='mt-6 flex justify-center'>

  { myCart && <Link to={'/checkout'}>
<div onClick={checkOut}   className="relative rounded mr-4 px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-700 transition-all ease-out duration-300">
<span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span className="relative" >Checkout</span></div>
</Link>}



<div onClick={clearCart}  className="relative rounded px-5 py-2.5 overflow-hidden group bg-red-500 relative hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
<span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span className="relative" >Clear Cart</span>
</div>

</div>
    </div>
  )
}

export default Cart