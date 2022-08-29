import React from 'react'
import {useState, useEffect} from 'react'
import Axios from 'axios';

import '../index.css';
import '../css/stock.css';


const StockModal = (props) => {
    // console.log(props);

    let editFormValues = {name: props.name, price: props.price, description: props.desc, varOne: props.varOne, varTwo: props.varTwo, varThree: props.varThree};

    const [editValues, setEditValues] = useState(editFormValues);

    const updateValues = (e) =>{
        const { name, value } = e.target;
        setEditValues({ ...editValues, [name]: value });
        console.log(editValues);
    }

    const updateProd = (e) => {
        e.preventDefault();
        let productId = props.id;
        let payload = editValues; 
        console.log(payload);

        Axios.patch('http://localhost:5000/api/updateproduct/' + productId, payload)
        .then((res)=> {
            if(res){
            console.log("Item Upadted"); 
            props.close();
            props.editRender(true);
            }
        })
        .catch(function (error) {
            console.log(error);
        });

    }
    
    const closeModal = () => {
        props.close();
      }

    return (
        <div className='stock-modal'>
            <div className='edit-stock-con'>
                <div className='edit-top-con'>
                    <img className='edit-stock-wine-img' src='./brett-jordan-fAz5Cf1ajPM-unsplash.jpg' />
                    <p className='stock-left'>Product Name</p>
                    <input className="edit-input" type="text" placeholder="Product Name"/>
                    <p className='stock-left'>Brand</p>
                    <input className="edit-input" type="text" placeholder="Brand"/>

                    <p className='stock-left'>Description</p>
                    <textarea className="edit-input-description" type="text" cols="50" rows="5" placeholder="Product Description"></textarea>
                    <div className='small-edit-con'>
                        <p className='stock-left'>Storage</p>
                        <input className="edit-input-small" type="text" placeholder="Storage"/>
                    </div>
                    <div className='small-edit-con'>
                        <p className='stock-left'>Vintage</p>
                        <input className="edit-input-small" type="text" placeholder="Vintage"/>
                    </div>
                    <div className='small-edit-con'>
                        <p className='stock-left'>Size</p>
                        <input className="edit-input-small" type="text" placeholder="Box"/>
                    </div>
                </div>
                <div className='edit-button'>Update</div>
                <h2 className="delete-button" onClick={closeModal}>lose</h2>
            </div>
        </div>
    );
}

export default StockModal;