import React from 'react'

const Testimonial = () => {
  return (
  
        <div class=" items-center">
        <h1 class="text-3xl lg:text-4xl text-orange-400 font-extrabold text-center p-6">
              Testimonial
            </h1>
 <div class="content">

   <div class="team">
     <div class="card reveal">
       <div>
         <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d" className='testimonial' />
       </div>
       <h4 className='text-gray-400'>Jhon Doe</h4>
       
       <p >"Impeccable service, luxurious accommodations, and outstanding staff. Highly recommended!"</p>
     </div>
     <div class="card reveal">
       <div>
         <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61" className='testimonial'/>
       </div>
       <h4 className='text-gray-400'>Jhon Smith</h4>
       
       <p>"Outstanding hospitality, impeccable cleanliness, and a delightful dining experience. Truly an exceptional stay!"</p>
     </div>
     <div class="card reveal">
       <div>
         <img src="https://user-images.githubusercontent.com/83168881/167544540-8d4c362d-754a-4c44-9b03-1c7d6d20e3a0.jpg" className='testimonial'/>
       </div>
       <h4 className='text-gray-400'>Riya Bhatta</h4>
       
       <p>"Immaculate rooms, friendly staff, and a perfect blend of comfort and luxury. Highly recommended!"</p>
     </div>
   </div>
 </div>
</div>
    
  )
}

export default Testimonial