// import React, {useState, useEffect} from 'react';
// import {useParams} from 'react-router-dom';
// import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
// import CartWidget from './CartWidget';
// import {NavLink} from 'react-router-dom';
// import '../styles/NavBar.css';


// const NavBar = () => {

//     const [goToMtb, setGoToMtb] = useState(null)
//     const [goToRuta, setGoToRuta] = useState(null)
//     const {category} = useParams()

//     useEffect(()=> {
//         const db = getFirestore()
//         const queryMtb = query(collection(db, 'categories'), where('category', '==', 'Mountain Bike'))
//         const queryRuta = query(collection(db, 'categories'), where('category', '==', 'Ruta'))

//             Promise.all ([
//                 getDocs(queryMtb).then((snapshot) => {
//                     setGoToMtb(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))) 
//                 }),
                
//                 getDocs(queryRuta).then((snapshot) => {
//                     setGoToRuta((snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))))
//                 }) 
//             ])
//             console.log(goToMtb,goToRuta)
//     },[category])


//     return ( 
//             <nav className='navbar-container'>
//                 <ul className='navbar'>
//                     <li className='navbar-items'>
//                         <NavLink to='/'>HOME</NavLink>
//                     </li>
//                         <li className='navbar-items'>
//                             <NavLink to={`category/${goToMtb}`}>MONTAÑA</NavLink>
//                         </li>
//                         <li className='navbar-items'>
//                             <NavLink to={`category/${goToRuta}`}>RUTA</NavLink>
//                         </li>
//                         <li className='navbar-items-cart'>
//                             <NavLink to='/cart'> <CartWidget/> </NavLink>
//                         </li>
//                 </ul>
//             </nav> 
//     )
// }

// export default NavBar

import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom';
import '../styles/NavBar.css';


const NavBar = ({onFilter}) => {

    const [urls, setUrls] = useState([])

    useEffect(()=> {
        const db = getFirestore()
        const categories = collection(db, 'categories')
        getDocs(categories).then((snapshot) =>  setUrls(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))) )
    },[])

    return ( 
            <nav className='navbar-container'>
                <ul className='navbar'>
                    <li className='navbar-items'>
                        <NavLink to='/'>HOME</NavLink>
                    </li>
                        {urls.length && urls.map((url, index)=>{
                            return(
                                <li className='navbar-items' key={index} onClick={onFilter}>
                                    <NavLink to={`category/${url.category}`}>{url.category}</NavLink>
                                </li>
                            )
                        })}
                        <li className='navbar-items-cart'>
                            <NavLink to='/cart'> <CartWidget/> </NavLink>
                        </li>
                </ul>
            </nav> 
    )
}

export default NavBar