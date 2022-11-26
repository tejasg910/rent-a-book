import React, {  useState } from 'react'
import { BiShow } from 'react-icons/bi';
import { BiHide } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Signup = () => {
    const [reveal, setReveal] = useState(false)
    const [userDetails, setUserDetails] = useState({
        fname :"",
        lname: "",
        mobile: "",
        address: "",
        email: "", 
        password: ""
    });

    const onHandleChange =(e)=>{
        setUserDetails({...userDetails, [e.target.name]:e.target.value})
    }

    const onReveal = ()=>{
        if(reveal===true){
            setReveal(false)
        }else{
            setReveal(true)
        }
    }
    const signUp = async(e)=>{
e.preventDefault()
const response = await fetch(`http://localhost:5000/api/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
     
    },
    body: JSON.stringify({firstName: userDetails.fname, lastName: userDetails.lname, email: userDetails.email, address: userDetails.address, mobile: userDetails.mobile, password: userDetails.password})


 
  });
  const json = await  response.json();
  console.log(json)

    }
    return (
        <div>

            <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div class="w-full max-w-md space-y-8">
                    <div>
                        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Create your account</h2>

                    </div>
                    <form class="mt-8 space-y-6" >
                        <input type="hidden" name="remember" value="true" />
                        <div class="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label for="fname" class="sr-only">First Name</label>
                                <input onChange={onHandleChange} value={userDetails.firstName} id="fname" name="fname" type="text" autocomplete="fname" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" placeholder="First Name" />
                            </div>
                            <div>
                                <label for="lname" class="sr-only">Last Name</label>
                                <input onChange={onHandleChange} value={userDetails.lastName}  id="lname" name="lname" type="text" autocomplete="lname" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" placeholder="Last Name" />
                            </div>
                            <div>
                                <label for="mobile" class="sr-only">Mobile</label>
                                <input onChange={onHandleChange} value={userDetails.lastName}  id="mobile" name="mobile" type="text"  required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" placeholder="Enter mobile Number" />
                            </div>
                            <div>
                                <label for="address" class="sr-only">Address</label>
                                <input onChange={onHandleChange} value={userDetails.lastName}  id="address" name="address" type="text"  required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" placeholder="Enter your address" />
                            </div>
                            <div>
                                <label for="email-address" class="sr-only">Email address</label>
                                <input onChange={onHandleChange} value={userDetails.email} id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" placeholder="Email address" />
                            </div>
                            <div className='relative'>
                                <label for="password" class="sr-only">Password</label>
                                <input onChange={onHandleChange} value={userDetails.password}  id="password" name="password" type={reveal? "text": "password"} autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" placeholder="Password"  /> <span onClick={onReveal} className='absolute cursor-pointer top-3 right-4 z-10'>{reveal?<BiShow/> : <BiHide/>}</span>
                            </div>
                        </div>

                        <div class="flex items-center justify-between">
          
  
          <div class="text-sm">
          <span>or</span>  <Link to={'/signin'}><span  class="font-medium text-green-600 hover:text-green-500">Sign in</span></Link>
          </div>
        </div>
                        <div>
                            <button onClick={signUp}  class="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3">

                                    <svg class="h-5 w-5 text-green-500 group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
