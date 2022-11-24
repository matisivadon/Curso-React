import React, {useEffect, useState} from 'react';
import Item from './Item'
import {useParams} from 'react-router-dom';
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import '../styles/Item.css';


// const products = [
// {
//     id:1,
//     nombre:"Specialized Epic S-Works",
//     precio:"4.000.000",
//     imagen: "https://d22fxaf9t8d39k.cloudfront.net/1652a8622eded61cb5dcbf4e877325fa5f4757ee6298f20062ed6502ebbe67bb70115.jpeg",
//     type: "mtb"

// },
// {
//     id:2,
//     nombre:"Specialized Turbo",
//     precio:"3.000.000",
//     imagen:"https://d22fxaf9t8d39k.cloudfront.net/f958b38cc3bbefb846b19b06152debd64a9c9b781fd53ba2d3729f0f311e68cf70115.jpeg",
//     type: "mtb"
// },
// {
//     id:3,
//     nombre:"Specialized Epic Pro",
//     precio:"2.700.000",
//     imagen:"https://d22fxaf9t8d39k.cloudfront.net/d24327d39555f2223e178d84438b8d981f67cd370e1cd6c675f4d10a9cf631dd70115.jpeg",
//     type: "mtb"
// },
// {
//     id:4,
//     nombre:"Specialized Rockhopper",
//     precio:"333.500",
//     imagen:"https://d22fxaf9t8d39k.cloudfront.net/815c5d0296beb8b23f177904daa1e6f5bb6d8f217f9c451a58a98db8cbefd38570115.jpeg",
//     type: "mtb"
// },
// {
//     id:5,
//     nombre:"Specialized Allez",
//     precio:"392.000",
//     imagen:"https://d22fxaf9t8d39k.cloudfront.net/2642d9c4bede9beba1746f10f328694a50596ee6998e62162bcea4342d45521f70115.jpeg",
//     type: "ruta"
// },
// {
//     id:6,
//     nombre:"Specialized Tarmac",
//     precio:"1.800.000",
//     imagen:"https://d22fxaf9t8d39k.cloudfront.net/27fe6d72133c3f7f23d81a4215fa408dcaf9cf4b3f33469c4972230850f2f19170115.jpeg",
//     type: "ruta"
// }          
// ]    

// const ItemListContainer = () => {

//     const [data, setData] = useState([])

//     const {typeId} = useParams()

//     useEffect (() => {
//         const getData = new Promise (resolve => {
//             setTimeout (() => {
//                 resolve(products)
//             }, 2000)
//         })
//        typeId ? getData.then(res => setData(res.filter(product => product.type === typeId))) : getData.then(res => setData(res))
//     }, [typeId])

const ItemListContainer = () => {
    const [allProducts, setAllProducts] = useState(null)
    const [allCategories, setAllCategories] = useState(null)
    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, 'products')
        // const categoryCollection = collection (db, 'categories')
        Promise.all([
            getDocs(itemsCollection).then((snapshot) => {
                const products = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }))
                setAllProducts(products)
            }),
            // getDocs(categoryCollection).then((snapshot) => {
            //     const categories = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }))
            //     setAllCategories(categories)
            // })    
        ])

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