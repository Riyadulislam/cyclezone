import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
 
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <div className='flex justify-center items-center'>
    <FontAwesomeIcon className='text-white rounded-full bg-blue-400 p-3 mr-3'  icon={faBicycle} />
    <a className="font-bold text-xl"> Go_Velo</a>
    </div>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    <li tabIndex={0}>
        <a>
          USD
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li tabIndex={0}>
        <a>
          United Kingdom
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><label tabIndex={0} className=" mr-2 btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item bg-yellow-500">0</span>
        </div>
      </label></li>
    
      <li><Link className='border mr-3 '>Login</Link></li>
      <li><Link className='border bg-blue-600 btn-md'>Register</Link></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;