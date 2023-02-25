import React from "react";
import list from '../data'
import '../styles/Amazon.css'
import Cards from "./Cards";
import Navbar from "./Navbar";
import '../styles/Navbar.css'
import Cart from "./Cart";
 
 
 
const Amazon =({handleClick,onAdd})=>{
    
    return(
      <div>
          <Navbar />
         <section>
            
            {   
               list.map((item)=>
                <Cards item={item} key={item.id} onAdd={onAdd}  
             // handleClick={handleClick} 
                />
               )
                 
            }
              
           
         </section>   
         
         </div> 
    )
}

export default Amazon   