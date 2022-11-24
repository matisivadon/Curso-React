import React from 'react';
import ItemCount from './ItemCount';
import '../styles/ItemDetail.css';

const ItemDetail = ({product}) => {
    const {id,category, image, name, price, description, stock} = product || {}

    const onAdd = (quantity) => {
        console.log(`Seleccionaste la cantidad de ${quantity} bicicletas`)
    }

    return (
        <>
        <div className='container-detail'>
            <article className='card-detail'>
                <img className='card-img-dt' src={image} alt={name}/>
                <h2 className='card-title-dt'>{name}</h2>
                <h3 className='card-p-dt'>${price}</h3>
                <p className='card-category'>{category}</p>
                <p className='card-descript'>{description}</p>
                <p className='card-stock'>{stock} unidades en stock</p>
            </article>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </div>
        </>
    )
}

export default ItemDetail