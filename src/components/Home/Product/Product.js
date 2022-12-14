import React from 'react';
import Location from '../Location/Location';
import Rentbike from '../Rentbike/Rentbike';

const Product = () => {
    return (
        <div className='mt-5'>
    
<div class="grid grid-cols-3 gap-4">
<div class="..."><Location></Location></div>

  
  <div class="col-span-2 ..."><Rentbike></Rentbike></div>
 
</div>
        </div>
    );
};

export default Product;