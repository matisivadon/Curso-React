import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import {Routes, Route} from 'react-router-dom';
import './styles/Item.css'


function App() {

  return (
    <>
        
          <NavBar/>
        
        
        <main>
          <Routes>
            <Route exact path='/' element ={<ItemListContainer/>} />
            <Route exact path='/category/:typeId' element ={<ItemListContainer/>} />
            <Route exact path='/item/:product.id' element ={<ItemDetailContainer/>} />
            <Route exact path='/category/:typeId/item/:itemId' element ={<ItemDetailContainer/>} />
          </Routes>
        </main>    
    </>

  )
}

export default App;
