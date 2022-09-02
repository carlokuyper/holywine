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

    const [cartArray, setCartArray] = useState();

    let navigate = useNavigate();

    useEffect(()=>{
        
        Axios.get('http://localhost:5000/api/allCart').then(res =>{
            let arrayData = res.data;
            setCartArray(arrayData);
        });
    },[])

    let cartPrice = 0;
    

    let arrayTesting = []

    for (let i = 0; i < cartArray?.length; i++) {
        // console.log(cartArray[i]?.totalPrice);
        // cartPrice = (cartArray[i]?.price * cartArray[i]?.qty)
        cartPrice += cartArray[i]?.totalPrice;
        
        const arrayTest = [cartArray[i]?.totalPrice, cartArray[i]?.price, "BMW"];

        let idea1 = cartArray[i]?.totalPrice
        let idea2 = cartArray[i]?.price
        arrayTesting.push({"totalPrice": cartArray[i]?.totalPrice, "Price" : cartArray[i]?.price})
        // const arrayTesting = [idea1, idea2]
        // console.log(arrayTesting);
    } 
    
    console.log(arrayTesting);



    let cartTotal = cartPrice + 60;

    let formVals = ["username", "name", "surname", "address", "contact", "password"];
  
    const [formValues, setFormValues] = useState(formVals);
  
    const getValues = (e) =>{
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    }
  
    const addOrder = (e) => {
        e.preventDefault();  
        console.log(arrayTesting);
        let payload = arrayTesting;
        
        
        console.log(payload);
  
        Axios.post('http://localhost:5000/api/addOrder', payload)
        .then((res)=> {
            if(res){
            console.log("Order Added");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    } 

    // let addOrder = (
    //     navigate('/CheckoutShiping')
    // )
    
    return (
        <>
            <form className='checkout-pay'>
                <h3 className='checkout-pay-title'>Cart Total </h3>
                <div className='checkout-total-price'>
                        <p className='checkout-total'>Shipping: </p>
                        <p className='checkout-total-nr'>R 60</p>
                </div>
                <div className='checkout-total-price'>
                        <p className='checkout-total'>Total: </p>
                        <p className='checkout-total-nr'>R {cartPrice}</p>
                </div>
                <div className='checkout-total-price'>
                        <h3 className='checkout-total'>Total: </h3>
                        <h3 className='checkout-total-nr'>R {cartTotal}</h3>
                </div>
                <a href='http://localhost:3000/CheckoutShiping'><div className='checkout-product-button' type="submit" >Checkout</div></a>
                {/* <button className='checkout-product-button' type="submit" >Checkout</button> */}
            </form>
        </>
    );
}

export default CheckoutPagePrice;
