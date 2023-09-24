import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import ItemList from './components/ItemList';
import { useState } from 'react';
import Cart from './components/Cart';

function App() {

  const[cart,Setcart]=useState([])

  const handleAddToCart = (item) =>{
    Setcart([...cart, item])
  }


  return (

    <BrowserRouter>
      <div className="app">

        <header>
          <div className='d-flex justify-content-between align-items-center'>
            <h1>Grocery Delivery App</h1>
            <Link to='/cart' className="cart-link mt-0">View Cart</Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route exact path='/' element={<ItemList cartItems={cart}  handleAddToCart={handleAddToCart}/>} />
            <Route exact path='/cart' element={<Cart cartItems={cart} />} />
          </Routes>
        </main>
        <footer>
          Copyrights reserved
        </footer>
      </div>
    </BrowserRouter >

  )
}

export default App;
