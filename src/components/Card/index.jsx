import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";


function Card(props) {
  const navigate = useNavigate();
 

  return (
    <div onClick={() =>
      navigate(`/product/product-details/${props.id}`)
    } className="cart-container">
      <img className="productPageImges" src={props.image} alt="" />
      <div className="titleManage"><h6>{props.title}</h6></div>
      <div className="price-rating-container">
        <h6>Price: US${props.price}</h6>
        <button
                onClick={() =>
                  navigate(`/product/product-details/${props.id}`)
                }
              >
                Product Details
              </button>
        {/* <h4>Rating: {props.rating}</h4> */}
        
      </div>
    </div>
  );
}

export default Card;
