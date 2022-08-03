import '../index.css';
import '../css/stock.css';
import StockModal from './StockModal';
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

const StockCards = (props) => {
    const [modal, setModal] = useState();
    const editPost = () => {
        setModal(<StockModal upRender={props.rerender} rerender={setModal} original={props.message} id={props.uniqueId} />)
      }
    return (
        <>
        
        {modal}
        <div className="stock-con">
        
            <img className='stock-wine-img' src='./brett-jordan-fAz5Cf1ajPM-unsplash.jpg' />
            <p className='stock-left'>Sauvignon Blanc</p>
            <p className='stock-left'>Simonsig</p>
            <div className='stock-nr-con' >
                <p className='stock-left-1'>Rating: </p>
                <p className='stock-left-1'>2.5</p>
            </div>

            <div className='stock-nr-con' >
                <p className='stock-left-1'>Stock: </p>
                <p className='stock-left-1'>28</p>
                <div className='edit-con'>
                    <img src='./images/edit.png' className='edit-img' onClick={editPost}/> 
                    <img src='./images/delete.png' className='edit-img' />   
                </div>
            </div>
            

        </div>
        </>
    );
}

export default StockCards;