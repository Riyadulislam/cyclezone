import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='mt-4'>
           
            <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
				<div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
					
                    <FontAwesomeIcon className='text-white rounded-full bg-blue-700 p-3'  icon={faBicycle} />
				</div>
				<span className="self-center text-2xl font-semibold">Go_velo</span>   
			</a>
            <p className=''>Your all-in-one rental app</p>
            <img src="https://tse4.mm.bing.net/th?id=OIP.ihAQWI5xbf1aUTNq1kVZLQHaBk&pid=Api&P=0" className="" /> 
		</div> 
       
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
       
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-gray-50 font-semibold">Company</h3>
				<ul className="space-y-1 mt-6">
					<li className=''>
						<a className='text-blue-700 ' rel="noopener noreferrer" href="#">About Us</a>
					</li>
					<li>
						<a className='text-blue-700 ' rel="noopener noreferrer" href="#">Giging back</a>
					</li>
					
				</ul>
			</div>
			<div className="space-y-3">
				<br></br>
				<ul className="space-y-1">
					<li>
						<a className='text-blue-700' rel="noopener noreferrer" href="#">Contact</a>
					</li>
					<li>
						<a className='text-blue-700' rel="noopener noreferrer" href="#">Terms and Service</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className=" dark:text-gray-50 font-semibold">Other Service</h3>
				<ul className="space-y-1">
					<li>
						<a className='text-blue-700' rel="noopener noreferrer" href="#">Become a brand ambassador</a>
					</li>
					<li>
						<a className='text-blue-700' rel="noopener noreferrer" href="#">Become a go velo rental</a>
					</li>
					<li>
						<a className='text-blue-700' rel="noopener noreferrer" href="#">Guides</a>
					</li>
				</ul>
			</div>
			
		</div>
	</div>
	<div className="py-6 text-sm text-center dark:text-gray-400">© 2022 Go velo All rights reserved</div>
</footer>
        </div>
    );
};

export default Footer;