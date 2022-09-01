import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import '../index.css';
import '../css/checkoutPage.css';
import CheckoutPagePrice from "./CheckoutPagePrice";

const CheckoutCard = (props) => {

    // Implement an update feature from cart, got it to send and update from the card side to the db
    const [selectedVintage, setSelectedVintage] = useState(props.vintage);
    const [selectedVariations, setSelectedVariations] = useState(props.variations);
    const [selectedSize, setSelectedSize] = useState(props.size);
    const [selectedQty, setSelectedQty] = useState(props.qty);
    // const totalPrice = useState(props.totalPrice);
    
    //Caluclate price
    let totalPrice = props.price * selectedQty;

    // const priceCal = totalPrice

    let editFormValues = {productId: props.productId,
        productName: props.productName, productBrand: props.productBrand, 
        productDescription: props.productDescription,
        totalPrice: totalPrice, price: props.price, vintage: selectedVintage, 
        variations: selectedVariations, size: selectedSize, 
        qty: selectedQty, image: props.image};
        // console.log(editFormValues);

    const [editValues, setEditValues] = useState(editFormValues);

    const updateValues = (e) =>{
        const { name, value } = e.target;
        setEditValues({ ...editValues, [name]: value });
        // console.log(editValues);
    }

    const updateProd = (e) => {
        e.preventDefault();
        let productId = props.productId;
        let payload = editValues; 
        console.log(payload);

        Axios.patch('http://localhost:5000/api/updateCart/' + productId, payload)
        .then((res)=> {
            if(res){
            console.log("Item Updated"); 
            props.editRender(true);
            }
        })
        .catch(function (error) {
            console.log(error);
        });

    }
    const deleteItem = () => {
        // console.log(props.productId);
    
        if (window.confirm("Are you sure you want to remove: " + props.productName) === true) {
            Axios.delete('http://localhost:5000/api/deleteCart/' + props.productId)
            .then((res)=> {
              if(res){
                 console.log("Deleted:" + props.productName);
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

    

    return(
        <>
             <div className="checkout-item-con">
                <img className='checkout-wine-img' src={images}/>
                <div className='checkout-stats'>
                   
                    <p className='checkout-text'>{props.productName}</p>
                    <p className='checkout-link-text'>{props.productBrand}</p> 
                    <p className='checkout-text-2'>{props.productDescription}</p> 
                </div>

                {/* <div className='checkout-stats-1'>
                    <p className='checkout-text-1'>Vintage: {props.vintage}</p> 
                    <p className='checkout-text-1'>Variations: {props.variations}</p> 
                    <p className='checkout-text-1'>Size: {props.size}</p> 
                    <p className='checkout-text-1'>Quanity: {props.qty}</p> 
                </div> */}

                <div  className='checkout-options-con'>
                    <h2 className='checkout-text-right' >Total: R {totalPrice}</h2> 
                    <p className='checkout-text-right'> Price: R {props.price}</p> 
                    <div className='checkout-delete-con'>
                    <p className='checkout-text-right' onClick={updateProd} >Update</p>
                        <p className='checkout-text-right-1' onClick={deleteItem} >Delete</p>
                        <img src='./images/delete.png' className='checkout-edit-img' onClick={deleteItem} />  
                    </div>
                </div>
                <div  className='checkout-stats-1'>
                    <p className='product-variations'>Vintage</p>
                    <select className='product-select1' defaultValue={selectedVintage} name="vintage" id="vintage"  onChange={(e) => setSelectedVintage(e.target.value)} onClick={updateValues} required>
                        <option value="2002">2002</option>
                        <option value="2006">2006</option>
                        <option value="2008">2008</option>
                        <option value="2012">2012</option>
                    </select>

                    <p className='product-variations'>Variations</p>
                    <select className='product-select1' defaultValue={selectedVariations} name="variations" id="variations" onChange={(e) => setSelectedVariations(e.target.value)} onClick={updateValues} required>
                        <option value="" selected disabled hidden>Select an Option</option>
                        <option value="blackberry">blackberry</option>
                        <option value="cherry">cherry</option>
                        <option value="plum">plum</option>
                    </select>

                    <p className='product-variations1'>Size</p>
                    <select className='product-select1' defaultValue={selectedSize} name="size" id="size" onChange={(e) => setSelectedSize(e.target.value)} onClick={updateValues} required>
                        <option value="" selected disabled hidden>Select an Option</option>
                        <option value="bottle">Single Bottle</option>
                        <option value="box">Box</option>
                        <option value="barrel">Wine Barrel</option>
                    </select>
                        <p className='product-variations1'>Quanity</p> 
                        <input className="product-select2" min="1" max="10" defaultValue={props.qty} required name="qty" type="number" placeholder="Qty" onChange={(e) => setSelectedQty(e.target.value)} onClick={updateValues}/>
                </div>
                

            </div>
               
                
        </>
        
    );
}

export default CheckoutCard;