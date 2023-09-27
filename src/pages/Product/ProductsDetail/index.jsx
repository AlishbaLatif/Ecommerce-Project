import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserStatusContext } from "../../../App";
import "./styles.css";

const ProductsDetail = () => {

  const {isLoggedIn , setLoggedIn} = useContext(UserStatusContext);
  const navigate = useNavigate();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => {
        setDetail(response.data);
      });
  });
  const params = useParams();

  return (
    <div className="productDetail">
      <div><img className="productDetailImages" src={detail.image} alt="" /></div>
      <div className="productDetailContainer">
      <h2>
        {detail.title}
      </h2>
      <h5>
        Price: US${detail.price}
      </h5>
      <h5>
        Category: {detail.category}
      </h5>
      <h6>
         Description
      </h6>
      <p className="descriptionJustify"> {detail.description}</p>
      <div className="btnProductDetailContainer">
      <button className="btnBuyNow">Buy Now</button>
     
      <button onClick={()=>navigate("/cart")} className="btnAddToCart">Add To Cart</button>
  
      </div>

      </div>

    </div>
  );
};

export default ProductsDetail;
