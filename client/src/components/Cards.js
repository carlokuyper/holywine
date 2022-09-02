import React, { useState } from 'react'
import '../index.css';
import '../css/cards.css';
import { useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

const Cards = (props) => {

  //Adds images to the product cards
 const [imgURL, setImgUrl] = useState ();

  let id = props.productId;
  // console.log(id);

  useEffect(()=>{
    Axios.get('http://localhost:5000/api/oneProducts/' + id)
    .then(res => {
        let data = res.data;
        let URL = 'http://localhost:5000/productImages/' + data.image;
        setImgUrl(URL);
      })
  }, []);

  let navigate = useNavigate();

  const toProduct = () => { 
    sessionStorage.setItem('productId', props.productId);
    navigate('/productpage');
  }

  let rating = Math.floor(Math.random(2) * 5);

  return(
      <div className="item-con">
          <img onClick={toProduct} className='wine-img'  src={imgURL}/>
          <p  onClick={toProduct}className='left-text'>{props.productName}</p>
          <p className='left-link-text'>{props.productBrand}</p> 
          <div className='rating-con'>
              <img className='star-icon1' src='./images/star.png'/>
              <p className='rating-text'>{rating}</p>
          </div>
          <p className='left-text'>R {props.price}</p>     
          <div onClick={toProduct} className='view-product-button'>View Product</div>
      </div>
  );
}

export default Cards;