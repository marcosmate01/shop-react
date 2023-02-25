import './App.css'
 import Amazon from './components/Amazon'
import Cart from './components/Cart'
import { useState } from 'react'
import './styles/Amazon.css'
import Man from './components/category/Man'
import Women from './components/category/women'
import Jewelery from './components/category/Jewelery'
import Electronics from './components/category/Electronics'

import {BrowserRouter, Route, Router, Routes } from 'react-router-dom'

 

function App() {   
  const [cart, setCart ] = useState([])  
   
  const onAdd = (item) => {
    const exist = cart.find((x) => x.id === item.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

   

  const onRemove = (item) => {
    const exist = cart.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== item.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };


 
  return (       
    <div> 

      <BrowserRouter> 
          <Routes>             
          <Route path='/cart'  element={<Cart  cart={cart} setCart={setCart} onAdd={onAdd} onRemove={onRemove}  />}  />
           <Route path='/'    element={ <Amazon   onAdd={onAdd} setCart={setCart}    />}  />
           <Route path='/man'  element={<Man   onAdd={onAdd}/>} />     
           <Route path='/women' element={ <Women   onAdd={onAdd}/>} />  
           <Route path='/jewelery' element={ <Jewelery   onAdd={onAdd}/>} />  
           <Route path='/electronics' element={ <Electronics onAdd={onAdd}  />} />

        </Routes>

     </BrowserRouter>
      


    </div>   
     
     
  )
}

export default App
