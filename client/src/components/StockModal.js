import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

import '../index.css';
import '../css/stock.css';


const StockCards = (props) => {
    const closeModal = () => {
        props.rerender();
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
                <div className='edit-button' onClick={closeModal}>Done</div>
                <h2 className="delete-button">Delete</h2>
            </div>
        </div>
    );
}

export default StockCards;