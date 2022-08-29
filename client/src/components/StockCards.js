import React, { useState } from 'react'
import '../index.css';
import '../css/stock.css';
import StockModal from './StockModal';
import { useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

const StockCards = (props) => {

    // Handle Modal
    const [modal, setModal] = useState();

    let navigate = useNavigate();

    const toProduct = () => { 
    sessionStorage.setItem('productId', props.productId);
    navigate('/productPage');
    }

    const editPost = () =>{
    setModal(<StockModal 
      close={setModal} 
      id={props.productId} 
      productName={props.productName} 
      productBrand={props.productBrand} 
      productDescription={props.productDescription} 
      price={props.price}

      storageLocation={props.storageLocation}
      vintageFiveYears={props.vintageFiveYears}
      vintageTenYears={props.vintageTenYears}
      vintageTwelveYears={props.vintageTwelveYears}

      variationsFlavour1={props.variationsFlavour1}
      variationsFlavour2={props.variationsFlavour2}
      variationsFlavour3={props.variationsFlavour3}

      sizeSingle={props.sizeSingle}
      sizeBox={props.sizeBox}
      sizeBarrel={props.sizeBarrel}
    />);
    }

    const deleteItem = () => {
      console.log(props.productId);

      if (window.confirm("Are you sure you want to delete: " + props.productName) === true) {
          Axios.delete('http://localhost:5000/api/deleteproduct/' + props.productId)
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
      
    const closeModal = () => {
      props.close();
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
                <p className='stock-left-1'>{props.stock}</p>
                <div className='edit-con'>
                    <img src='./images/edit.png' className='edit-img' onClick={editPost}/> 
                    <img src='./images/delete.png' className='edit-img' />   
                </div>
            </div>
            

        </div>
        </>
    )
}

export default StockCards;