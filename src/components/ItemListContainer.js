import React, {useEffect, useState} from 'react';
import Item from './Item'
import NavBar from './NavBar'
import {useOutlet, useParams} from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import '../styles/Item.css';

const ItemListContainer = () => {
    const [allProducts, setAllProducts] = useState(null)
    const [allCategories, setAllCategories] = useState(null)
    const [isFiltering, setIsFiltering] = useState(false)
    const [filteredProducts, setFilteredProducts] = useState(null)
    

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, 'products')
        // const categoryCollection = collection(db, 'categories')
            getDocs(itemsCollection).then((snapshot) => {
                const products = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }))
                setAllProducts(products)
            })
    }, [])

    const onFilter =(categoryId) => {
        const db = getFirestore()
        const q = query(collection(db, 'products'), where('categoryId', '==', categoryId))

        getDocs(q).then((snapshot) => {
            const filterproducts = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }))
            setFilteredProducts(filterproducts)
            setIsFiltering(true)
        })
    }    

    return (
        <>
        <nav>

            {isFiltering && filteredProducts && filteredProducts.map((category) => {
                <NavBar key={category.index} onFilter={onFilter}/>
            })}

         </nav>

         <h1 className='title'>BIKE PRO</h1>

         <div className='card-container'>
            {isFiltering && filteredProducts && filteredProducts.map((product) => (
                <Item key={product.id} product={product}/>
            ))} :
            {allProducts && allProducts.map((product) => (
                <Item key={product.id} product={product}/>
            ))}
         </div>

        </>
    )
}

export default ItemListContainer