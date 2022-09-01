import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import '../index.css';
import '../css/checkoutPage.css';
import CheckoutPage from "./CheckoutPage";

const CheckoutCard = (props) => {

    //Wanted to implement an update feature from cart, but could not get the api to send and update from the card side 
    // const [selectedVintage, setSelectedVintage] = useState(props.vintage);
    // const [selectedVariations, setSelectedVariations] = useState(props.variations);
    // const [selectedSize, setSelectedSize] = useState(props.size);
    const [selectedQty, setSelectedQty] = useState(props.qty);
    
    // let editFormValues = {productName: props.productName, productBrand: props.productBrand, productDescription: props.productDescription,
    //     price: props.price, vintage: props.vintage, variations: props.variations, size: props.size, qty: props.qty, image: props.image};

    // const [editValues, setEditValues] = useState(editFormValues);

    // const updateValues = (e) =>{
    //     const { name, value } = e.target;
    //     setEditValues({ ...editValues, [name]: value });
    //     console.log(editValues);
    // }

    // const updateProd = (e) => {
    //     e.preventDefault();
    //     let productId = props.id;
    //     let payload = editValues; 
    //     console.log(payload);

    //     Axios.patch('http://localhost:5000/api/updateCart/' + productId, payload)
    //     .then((res)=> {
    //         if(res){
    //         console.log("Item Upadted"); 
    //         props.close();
    //         props.editRender(true);
    //         }
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

    // }

    const deleteItem = () => {
        console.log(props.productId);
    
        if (window.confirm("Are you sure you want to delete: " + props.name) === true) {
            Axios.delete('http://localhost:5000/api/deleteCart/' + props.productId)
            .then((res)=> {
              if(res){
                 console.log("Deleted:" + props.name);
                 props.editRender(true);
              }
          })
          .catch(function (error) {
              console.log(error);
          });
        } 
      }
      //get img
      let images = "http://localhost:5000/productImages/" + props.image

      //Caluclate price
      let totalPrice = props.price * selectedQty;


    return(
        <>
             <div className="checkout-item-con">
                <img className='checkout-wine-img' src={images}/>
                <div className='checkout-stats'>
                   
                    <p className='checkout-text'>{props.productName}</p>
                    <p className='checkout-link-text'>{props.productBrand}</p> 
                    <p className='checkout-text-2'>{props.productDescription}</p> 
                </div>

                <div className='checkout-stats-1'>
                    <p className='checkout-text-1'>Vintage: {props.vintage}</p> 
                    <p className='checkout-text-1'>Variations: {props.variations}</p> 
                    <p className='checkout-text-1'>Size: {props.size}</p> 
                    <p className='checkout-text-1'>Quanity: {props.qty}</p> 
                </div>

                <div  className='checkout-options-con'>
                    <h2 className='checkout-text-right'>Total: R {totalPrice}</h2> 
                    <p className='checkout-text-right'> Price: R {props.price}</p> 
                    <div className='checkout-delete-con'>
                    {/* <p className='checkout-text-right' onClick={updateProd} >updatye</p> */}
                        <p className='checkout-text-right-1' onClick={deleteItem} >Delete</p>
                        <img src='./images/delete.png' className='checkout-edit-img' onClick={deleteItem} />  
                    </div>
                </div>

                    {/* Wanted to implement an update feature from cart, but could not get the api to send and update from the card side */}

                {/* <p className='product-variations'>Vintage</p>
                <select className='product-select' defaultValue={selectedVintage} name="vintage" id="vintage"  onChange={(e) => setSelectedVintage(e.target.value)} required>
                    <option value="" selected disabled hidden>Select an Option</option>
                    <option value="2002">2002</option>
                    <option value="2006">2006</option>
                    <option value="2008">2008</option>
                    <option value="2012">2012</option>
                </select>

                <p className='product-variations'>Variations</p>

                <select className='product-select' defaultValue={selectedVariations} name="variations" id="variations" onChange={(e) => setSelectedVariations(e.target.value)} required>
                    <option value="" selected disabled hidden>Select an Option</option>
                    <option value="blackberry">blackberry</option>
                    <option value="cherry">cherry</option>
                    <option value="plum">plum</option>
                </select>

                <p className='product-variations'>Size</p>

                <select className='product-select' defaultValue={selectedSize} name="size" id="size" onChange={(e) => setSelectedSize(e.target.value)} required>
                    <option value="" selected disabled hidden>Select an Option</option>
                    <option value="bottle">Single Bottle</option>
                    <option value="box">Box</option>
                    <option value="barrel">Wine Barrel</option>
                </select> */}
                    {/* <p className='checkout-text-1'>Quanity</p> 
                    <input className="edit-product-qty" min="1" max="10" defaultValue={props.qty} required name="qty" type="number" placeholder="Qty" onChange={(e) => setSelectedQty(e.target.value)}/> */}
                
                

            </div>
               
                
        </>
        
    );
}

export default CheckoutCard;