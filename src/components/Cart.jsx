import { useEffect, useState } from "react";
import React  from "react";
import '../styles/cart.css' 
import Navbar from "./Navbar";
import list from "../data";
 
 

const Cart =({cart, setCart,onAdd,onRemove})=>{    
    const itemsPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);
 
        const handleRemove = (id) =>{
            const arr = cart.filter((item)=>item.id !== id);
            setCart(arr);
            // handlePrice();
        }

       const onPlayMovie=()=> {alert('compra realizada com sucesso!'+  ` total: $ ${itemsPrice.toFixed(2)}`)}
    
    
        
     

    return(

        <div>
            <Navbar />
         <article>
           
            {    
                cart?.map((item)=>(
                  
                    <div className="cart_box" key={item.id}>
                        <div className="cart_img">
                            <img src={item.image} />
                            <p>{ item.title}</p>
                        </div>
                        <div className="plus">
                            <button id="plus" key={item.id}  onClick={()=>onAdd(item) }> + </button>
                            
                            <button key={item.id} onClick={()=>onRemove(item) }> - </button>
                        </div>

                        <div className="remove">
                            <span> {item.qty} x {item.price.toFixed(2)}</span>
                            <button type="button"  onClick={() =>handleRemove(item.id)}> remove </button>
                        </div>


                    </div>
                  ))
                 
            }
            <div className="totalPrice">
                <span> Preço total do carrinho:</span>
                <span> $ {itemsPrice.toFixed(2)}</span>
                <button onClick={ ()=>onPlayMovie()}>comprar</button>
            </div>

         </article>
         </div>
    )

}
export default Cart