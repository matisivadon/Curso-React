import React from 'react';
import '../NavBar.css';
import CartWidget from './CartWidget';

function NavBar () {
    return ( 
            <nav className='NavBar'>
                <ul>
                    <li>
                        <a href=''>HOME</a>
                    </li>
                    <li>
                        <a href=''>PRODUCTOS</a>
                    </li>
                    <li>
                        <a href=''>CONTACTO</a>
                    </li>
                    <li>
                        <a href=''><CartWidget/></a>
                    </li>
                </ul>
            </nav> 
    )
}

export default NavBar