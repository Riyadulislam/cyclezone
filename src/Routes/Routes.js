
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home/Home';
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
                },
                {
                    path:'/home',
                    element:<Home></Home>
                }
            ]
           
        }
    ])
   


export default router;