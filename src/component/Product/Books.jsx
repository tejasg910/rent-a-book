import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';


const Books = ({showBook}) => {
  const [books, setbooks] = useState(null);
  async function  getBooks() {
 const a  = await  fetch("http://localhost:5000/getbooks");
const data = await a.json();
setbooks(data.data)

 
}



  useEffect(() => {
 getBooks();

  }, []);
 console.log(books)
  return (
    <div><section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">

        
        {books && books.map((item)=>{
        return <div key={item._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.image}/>
          </a>
          <div className="mt-4">
          <p className="mt-1 "> Rating: {item.rating}</p>

            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">BOOKS</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">{item.bookName}</h2>
            <p className="mt-1 text-green-600">₹{item.price}</p>

            <Link to='/bookdetails'> 
            <button onClick={()=>{showBook(item._id)}} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  See Details
</button>
</Link>

          </div>
        </div>})}
       
        
      </div>
    </div>
  </section>
</div>
  )
}

export default Books