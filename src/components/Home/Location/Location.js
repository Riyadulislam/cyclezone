import React from 'react';
import { faBicycle,faStar,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text font-semibold">Date Of Travel</span>
                </label>
                <div className="input input-bordered w-full max-w-xs" type="text" >
                <FontAwesomeIcon  className='' icon={faCalendarDays} />
                <input placeholder="Type here"/>
                </div>
               
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text font-semibold">Type of Bike</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text font-semibold">Type For Events</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text font-semibold">How many riders</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
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