import React from 'react'

const Carosoul = () => {
  return (
    <div className='bg-teal-500'>    <div
    id="carouselDarkVariant"
    className="carousel slide carousel-fade carousel-dark relative"
    data-bs-ride="carousel"
  >
  
    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
      <button
        data-bs-target="#carouselDarkVariant"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        data-bs-target="#carouselDarkVariant"
        data-bs-slide-to="1"
        aria-label="Slide 1"
      ></button>
      <button
        data-bs-target="#carouselDarkVariant"
        data-bs-slide-to="2"
        aria-label="Slide 1"
      ></button>
    </div>
  
  
    <div className="carousel-inner relative w-full overflow-hidden">
    
      <div className="carousel-item active relative float-left w-full max-h-96 object-fill">
        <img
          src="/matt.jpg"
          className="block w-3/4 max-h-96 object-fill m-auto rounded-md"
         
          alt="Motorbike Smoke"
        />
        
         
      </div>
  
    
      <div className="carousel-item relative float-left w-full max-h-96 ">
        <img
          src="/sincerly.jpg"
          className="block w-3/4 object-fill max-h-96 m-auto rounded-md"
          alt="Mountaintop"
        />
        
         
      </div>
  
      <div className="carousel-item relative float-left w-full max-h-96 ">
        <img
          src="morgan.jpg"
         
          className="block w-3/4 object-fill max-h-96 m-auto rounded-md"
  
          alt="Woman Reading a Book"
        />
       
      </div>
    </div>
  
    <button
      className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
      type="button"
      data-bs-target="#carouselDarkVariant"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
      type="button"
      data-bs-target="#carouselDarkVariant"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}

export default Carosoul