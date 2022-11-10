import React from 'react';
import ItemCount from './ItemCount';
import '../styles/ItemDetail.css';

const ItemDetail = ({data}) => {

    const onAdd = (quantity) => {
        console.log(`Seleccionaste la cantidad de ${quantity} bicicletas`)
    }

    return (
        <>
        <div className='container-detail'>
            <article className='card-detail'>
                <img className='card-img-dt' src={data.imagen} alt={data.nombre}/>
                <h2 className='card-title-dt'>{data.nombre}</h2>
                <p className='card-p-dt'>${data.precio}</p>
                <p className='card-descript'>{data.description}</p>
            </article>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </div>
        </>
    )
}

export default ItemDetail