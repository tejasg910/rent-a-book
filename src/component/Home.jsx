import React from 'react'
import 'tw-elements';
import Carosoul from './HomeComponents/Carosoul';
import Features from './HomeComponents/Features';

const Home = () => {
  return (
    <div className='bg-teal-500'>
        <h2 className='text-3xl mx-2  text-teal-500'>Lets goooooooooooooo!</h2>

    <Carosoul/>


<Features/>

    </div>
  )
}

export default Home
