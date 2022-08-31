import React, { useState } from 'react'
import '../index.css';
import '../css/stock.css';
import StockModal from './StockModal';
import { useEffect } from 'react';
import Axios from 'axios';

const StockCards = (props) => {

  // Edit Item
  const [modal, setModal] = useState();

  const editPost = () =>{
  setModal(<StockModal 
    close={setModal} 
    productId={props.productId} date={props.date}
    productName={props.productName} productBrand={props.productBrand} productDescription={props.productDescription} price={props.price} storageLocation={props.storageLocation} 
          
    age={props.age} flavours={props.flavours} sizes={props.sizes} stock={props.stock} image={props.image}

    vintage1={props.vintage1} vintage2={props.vintage2} vintage3={props.vintage3}
    flavour1={props.flavour1} flavour2={props.flavour2} flavour3={props.flavour3}
    size1={props.size1} size2={props.size2} size3={props.size3} 
    editRender={props.editRender}
  />);
  }

  //Item Date
  let itemDate = props.date;
  // .substring(0, 10)

  //Delete Item
  const deleteItem = () => {
  if (window.confirm("Are you sure you want to delete: " + props.productName) === true) {
      Axios.delete('http://localhost:5000/api/deleteProducts/' + props.productId)
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
  
  //Get items Image
  const [imgURL, setImgUrl] = useState ();

  let id = props.productId;

  useEffect(()=>{
    Axios.get('http://localhost:5000/api/oneProducts/' + id)
    .then(res => {
        let data = res.data;
                  
        let URL = 'http://localhost:5000/productImages/' + data.image;

        // console.log(id)

        setImgUrl(URL);
    
      })
  }, []);

  return (
    <>
      {modal}
      <div className="stock-con">
          <img className='stock-wine-img' src={imgURL} />
          
          <p className='stock-left'>{props.productName}</p>
          <p className='stock-left'>{props.productBrand}</p>
          <div className='stock-nr-con' >
              <p className='stock-left-1'>Date: </p>
              <p className='stock-left-1'>{itemDate}</p>
          </div>

          <div className='stock-nr-con' >
              <p className='stock-left-1'>Stock: </p>
              <p className='stock-left-1'>{props.stock}</p>
              <div className='edit-con'>
                  <img src='./images/edit.png' className='edit-img' onClick={editPost}/> 
                  <img src='./images/delete.png' className='edit-img' onClick={deleteItem} />   
              </div>
              
          </div>
          

      </div>
    </>
  )
}

export default StockCards;