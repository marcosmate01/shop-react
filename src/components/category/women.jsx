import React from "react";
import list from "../../data";
import Navbar from "../Navbar";



const filterObj = list.filter((item) => item.category === "women's clothing");
console.log( filterObj)

const Women = ({handleClick,onAdd})=>{
    


    return(
       
        <div>
            <Navbar />
         <section>
            {
                filterObj.map((item)=>
                <div className="cards">  
                <div className="image_box">
                  <img src={item.image} alt="" />
                </div> 
                <div className="details">
                  <p>{item.title}</p>
                  <h3>${item.price}</h3>
                  <button onClick={()=>onAdd(item)}> add to cart </button>
                </div>         
      
              </div>
      
                )
                            
                
            }

         </section>
         </div>

    )
}

export default Women