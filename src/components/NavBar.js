import React from 'react';
import '../styles/NavBar.css';
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom';

const NavBar = ({name, id, onFilter}) => {
    return ( 
            <nav className='navbar-container'>
                <ul className='navbar'>
                    <li className='navbar-items'>
                        <NavLink to='/'>HOME</NavLink>
                    </li>
                        <li className='navbar-items' id={id} onClick ={onFilter}>
                            <NavLink to='category/mtb'>MONTAÑA</NavLink>
                        </li>
                        <li className='navbar-items'  id={id} onClick ={onFilter}>
                            <NavLink to='category/ruta'>RUTA</NavLink>
                        </li>
                        <li className='navbar-items-cart'>
                            <NavLink to='/cart'> <CartWidget/> </NavLink>
                        </li>
                </ul>
            </nav> 
    )
}

export default NavBar