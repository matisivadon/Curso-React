import React from 'react'
import CartImg from '../assets/shopping-cart.png'
import '../styles/NavBar.css';

const CartWidget = () => {
    return <img className='cart-img' src={CartImg} alt='Cart-Img'/>
}

export default CartWidget