import React from 'react'
import { Datafearture } from './Data/Features/DataFeartures'
export const Features = () => {
  return (
    <div id='feartures'>
        <div class="container mx-auto ">
        <h1 class="text-3xl lg:text-4xl text-orange-400 font-extrabold text-center p-6">
              Hotel Features
            </h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
   
    {Datafearture.map((item) => (
       <div class=" text-6xl   rounded-xl p-4 m-2 flex flex-col  justify-center items-center">
            <img
              className='w-[120px]  p-2  hover:scale-105 ease-in-out duration-300 flex  justify-center items-centerr'
              src={item.img}
              alt='/'
            />
             <div class="flex flex-col  pb-10">
               <span class=" text-center" style={{fontSize : "27px"}}>{item.description}</span>
       
    </div>
            </div>
          ))}  
    </div>
</div>
    </div>
  )
}
