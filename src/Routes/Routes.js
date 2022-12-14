
import { createBrowserRouter } from 'react-router-dom';
import Product from '../components/Home/Product/Product';
import Main from '../Layout/Main';


const router =createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/product',
                    element:<Product></Product>
                }
            ]
           
        }
    ])
   


export default router;