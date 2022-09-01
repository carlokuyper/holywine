import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import '../index.css';
import '../css/checkoutPage.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import CheckoutCard from "./CheckoutCard";

const CheckoutPagePrice = (props) => {

  
    let navigate = useNavigate();

    let formVals = ["username", "name", "surname", "address", "contact", "password"];
  
    const [formValues, setFormValues] = useState(formVals);
  
    const getValues = (e) =>{
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    }
  
    const addOrder = (e) => {
        e.preventDefault();   
        let payload = {
            productName: props.productName, 
            productBrand: props.productBrand,
            productDescription: props.productDescription,
            price: props.price, 
            vintage: props.vintage,
            variations: props.variations,
            size: props.size,
            qty: props.qty,
        }
  
        console.log(payload);
  
        Axios.post('http://localhost:5000/api/newOrder', payload)
        .then((res)=> {
            if(res){
            console.log("User Added");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }  
    let test = [0].props;
    console.log(test);
    
    return (
        <>
            <form className='checkout-pay' onSubmit={addOrder}>
                <h3 className='checkout-pay-title'>Here </h3>
                <div className='checkout-total-price'>
                        <p className='checkout-total'>Shipping: </p>
                        <p className='checkout-total-nr'>60</p>
                        <p className='checkout-total-nr'>R</p>
                </div>
                <div className='checkout-total-price'>
                        <p className='checkout-total'>Total: </p>
                        <p className='checkout-total-nr'>R 684</p>
                </div>
                <button className='checkout-product-button'  type="submit">Checkout</button>
            </form>
        </>
    );
}

export default CheckoutPagePrice;
