import React from 'react';
import { Outlet } from 'react-router-dom';
import BikeList from '../components/BikeList/BikeList';
import Header from '../components/Home/Header/Header';
import Footer from '../components/Shared/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <div className='px-36'>
            <Navbar ></Navbar>
            <Header></Header>
            <Outlet></Outlet>
            </div>
            <BikeList></BikeList>
            <div className='px-36'>
            <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Main;