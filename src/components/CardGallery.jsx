import React from "react";
import "./CardGallery.css";
 

const CardGallery = (props) => {
  return (
    
    <section className="productList">
       

      <div className="productCard">        
          <img className='zoom' src={props.img} alt={props.data.altTitle} />


          <div className="cardInfo">
            <div>
              <h5 className="productTitle">{props.data.title}</h5>
              <h6 className="productInfo"> {props.data.description}</h6>
              <h7 className="productInfo"> {props.data.info}</h7>
            </div>
          </div>     
      </div>
    </section>
  );
};
 
export default CardGallery;
