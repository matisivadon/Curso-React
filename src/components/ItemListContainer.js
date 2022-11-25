import React, {useEffect, useState} from 'react';
import Item from './Item'
import {useParams} from 'react-router-dom';
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import '../styles/Item.css';

const ItemListContainer = () => {
    const [allProducts, setAllProducts] = useState(null)

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, 'products')
            getDocs(itemsCollection).then((snapshot) => {
                const products = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }))
                setAllProducts(products)
            })

    }, [])
    
    return (
        <>
         <h1 className='title'>BIKE PRO</h1>
         <div className='card-container'>
            {allProducts && allProducts.map((product) => (
                <Item key={product.id} product={product}/>
            ))}
         </div>

        </>
    )
}

export default ItemListContainer