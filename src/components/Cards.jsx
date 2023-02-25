import React from "react";
import '../styles/Cards.css'

const Cards = ({item , onAdd})=>{
    const { id, image, price, description,title} = item
    return(
        <div className="cards">  
          <div className="image_box">
            <img src={image} alt="" />
          </div> 
          <div className="details">
            <p>{title}</p>
            <h3>${price}</h3>
            <button onClick={()=>onAdd(item)}> add to cart </button>
          </div>         

        </div>

    )
}

export default Cards