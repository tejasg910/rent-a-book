import React from 'react'
import 'tw-elements';
import Carosoul from './HomeComponents/Carosoul';
import Features from './HomeComponents/Features';

const Home = () => {
  return (
    <div className='bg-green-500'>
        {/* <h2 className='text-3xl mx-2  text-white font-mono'>Lets goooooooooooooo!</h2> */}

    <Carosoul/>


<Features/>

    </div>
  )
}

export default Home
