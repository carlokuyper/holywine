import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import '../index.css';
import '../css/checkoutPage.css';

const ChechoutShipingUser = (props) => {

    
    let editFormValues = {productId: props.productId,
        username: props.username, name: props.name, surname: props.surname, 
        contact: props.contact, address: props.address};
        console.log(editFormValues);

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

        Axios.patch('http://localhost:5000/api/updateUser/' + productId, payload)
        .then((res)=> {
            if(res){
            console.log("Item Upadted"); 
            props.editRender(true);
            }
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    return (
        <form className='checkout-user-con' onSubmit={updateProd}>
            <div className='small-checkout-con'>
                <p className='checkout-left'>Username: {props.username}</p>
                <p className='checkout-left'>Name: {props.name}</p>
                <p className='checkout-left'>Surname: {props.surname}</p>
            </div>
            <div className='small-checkout-con2'>
                <p className='stock-left1'>Contact: </p>
                <input className="checkout-input-small" defaultValue={props.contact} required name="contact" type="text" placeholder="contact" onChange={updateValues}/>
            </div>
            <div className='small-checkout-con2'>
                <p className='stock-left1'>Address: </p>
                <input className="checkout-input-small" defaultValue={props.address} required name="address" type="text" placeholder="address" onChange={updateValues}/>
            </div>        
            <button className='checkout-user-button' type="submit">Update Info</button>      
        </form>
        
    );
}

export default ChechoutShipingUser;
