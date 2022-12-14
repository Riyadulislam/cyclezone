import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle,faStar,faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';

const Rentbike = () => {
    const [products,setProduct]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div className=''>
          <p className='font-bold mt-2'>Rent bike hires:5 rent bike hires found</p>
          <div className=' grid gap-4 mt-4'>
            {
                products.map(product=> 
                <div className="border flex  gap-4">
                  <div>
                  <img  src={product.image} className="w-48 h-48 p-4" />
                  </div>
                 <div className='flex justify-between w-full'>
                 <div className='pl-4'>
                    <h1 className="text-2xl font-bold">{product.name} </h1>
                    <h1 className="mt-2">{product.title}</h1>
                    <h1 className="mt-2">{product.Size}</h1>
                    {
                      product.Status=="Available"?
                      <h1 className="mt-2">Booking Status:<button className='bg-green-800 text-white btn-xs rounded-lg'>{product.Status}</button></h1>
                      :<h1 className="mt-2">Booking Status:<button className='bg-yellow-400 font-semibold btn-xs rounded-lg'>{product.Status}</button></h1>
                    }
                    
                   
                    
                    <div className='flex items-center'>
                    <h1 className="p-1 text-white mt-2 mr-2 border bg-blue-600 rounded-xl">{product.Rating}</h1>
                    <div>
                    <FontAwesomeIcon  className='text-yellow-300' icon={faStar} /> <FontAwesomeIcon  className='text-yellow-300'  icon={faStar} /><FontAwesomeIcon  className='text-yellow-300'  icon={faStar} /><FontAwesomeIcon  className='text-yellow-300' icon={faStar} /><FontAwesomeIcon  className='text-yellow-300'  icon={faStar} /> {product.Number}
                    </div>
                    </div>
                    
                  
                  </div>

                  <div className='p-4'>
                    <div className='flex justify-center items-center underline underline-offset-4 '>
                  <FontAwesomeIcon  className='text-blue-600 mr-3' icon={faLocationPin} />
                    <p className='text-blue-600'> {product.Location}</p>
                    </div>
                    <br></br>
                    
                    <p className='font-bold'>{product.Day}</p>
                    <p>{product.Week}</p>   
                  <button className=" mt-2 border rounded-lg text-white p-2 bg-blue-800">Add to Cart</button>
                  </div>
                 </div>
                 </div>
              
            )
            }
              </div>
            
           
        </div>
    );
};

export default Rentbike;