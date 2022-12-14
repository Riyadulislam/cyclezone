import React, { useState } from 'react';
import {faCalendarDays,faChevronDown,faUser,faLocation} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import colorNames from 'daisyui/src/colors/colorNames';

import 'react-day-picker/dist/style.css';

const Location = () => {
   
    return (
        <div>
        <div className='bg-warning p-8'>
            <div className='pl-4'>
            <h1 className='font-bold text-xl'>Search</h1>
            
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text font-semibold">Location</span>
                </label>
                <div className="  flex input  w-full max-w-xs" type="text" >
             
             <FontAwesomeIcon  style={{color:'gray'}}  className='mt-4 mr-2 bg-white' icon={faLocation} />
                    <input disabled placeholder="Los Angeles United States"/>
                    </div>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text font-semibold">Date Of Travel</span>
                </label>
                <div className="  flex input  w-full max-w-xs" type="text" >
             
         <FontAwesomeIcon  style={{color:'gray'}}  className='mt-4 mr-2 bg-white' icon={faCalendarDays} />
                <input  placeholder="Mon 24 Oct-thu 27 Oct" disabled/>
                </div>
               
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text font-semibold">Type of Bike</span>
                </label>
                <div className="  flex items-center justify-between input  w-full max-w-xs" type="text" >
                <input  placeholder='Road Bike' disabled/>
                <FontAwesomeIcon icon={faChevronDown} style={{color:'gray'}} />
                </div>
             
               

            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text font-semibold">Type For Events</span>
                </label>
                <div className="  flex items-center justify-between input  w-full max-w-xs" type="text" >
                <input  placeholder='La Tour' disabled/>
                <FontAwesomeIcon icon={faChevronDown} style={{color:'gray'}} />
                </div>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text font-semibold">How many riders</span>
                </label>
            <div className="  flex justify-between items-center input  w-full max-w-xs" type="text" >
             <div>
             <FontAwesomeIcon  style={{color:'gray'}}  className='mt-4 mr-2 bg-white' icon={faUser} />
            <input placeholder="2 riders" disabled/>
             </div>
             <FontAwesomeIcon icon={faChevronDown} style={{color:'gray'}} />
             </div>
            </div>
            <div className="mt-5">
            <button type="submit"  className=" text-white p-4 bg-blue-700   rounded-lg w-full max-w-xs">Submit</button>
            </div>
 
            </div>
            </div>
            <img className='mt-3' src="https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2014/05/15/google-maps.png" alt="" />
        
        </div>
    );
};

export default Location;