import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Item.css';


const Item = ({info}) => {

    return (
         <article className='card'>
            <Link to ={`item/${info.id}`}>
                <img className='card-img' src={info.imagen} alt={info.nombre}/>
            </Link>
                <h2 className='card-title'>{info.nombre}</h2>
                <p className='card-p'>${info.precio}</p>
        </article>


    )
}

export default Item