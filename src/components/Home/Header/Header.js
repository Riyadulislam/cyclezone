import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            
            <Link className='mr-3 text-blue-600'><Link to='/home'>Home</Link> <FontAwesomeIcon icon={faGreaterThan  } />  </Link>
            <Link className='mr-3 text-blue-600'><Link to='/product'>Product</Link> <FontAwesomeIcon icon={faGreaterThan  } />    </Link>
            <Link>Search Result</Link>
            
        </div>
    );
};

export default Header;