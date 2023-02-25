import React from "react";
import {AiOutlineShoppingCart} from 'react-icons/ai' 
  

import '../styles/Navbar.css'
import {Link} from 'react-router-dom'


const Navbar =({size})=>{
    return (
        <nav>
             <div className="nav_box">
                <span className="my_shop">
                    <Link to='/'>
                      mm. shopping
                     </Link>
                   
                </span>
                <div className="cart">
                    <span   >
                        <Link to="/cart"> 
                        <AiOutlineShoppingCart/>
                         
                        </Link>
                  
                    </span>
                    <span> {size} </span>
                </div>
                
             </div>

             <div className="itens">
                <ul>
                <li>
                        <Link to='/'>                                       
                        Home                       
                        </Link>           
                                     
                    </li>

                    <li>
                        <Link to='/man'>                                       
                         men's clothing                         
                        </Link>           
                                     
                    </li>

                    <li>                         
                       <Link to='/women'>
                        women's clothing
                        </Link>                       

                    </li>


                    <li>                         
                       <Link to='/jewelery'>
                        jewelery
                        </Link>                       

                    </li>


                    <li>                         
                       <Link to='/electronics'>
                        electronics
                        </Link>                       

                    </li>
                </ul>
             </div>
              
        </nav>
    )
}

export default Navbar