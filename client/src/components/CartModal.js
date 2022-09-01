import React from 'react';
import '../index.css';
import '../css/cartModal.css';
import Axios from 'axios';
const CartModal = (props) => {
    let images = "http://localhost:5000/productImages/" + props.image

    
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

    return(
        <div className="cart-card-con">
            <img className='cart-card-img' src={images}/>
            <div className='cart-tex-con'>
                <a href="/ProductPage"><p className='cart-left-text-link'>{props.productName}</p></a>
                
                <p className='cart-left-text'>R {props.price}</p>     
            </div>
            <img className='cart-delete' onClick={deleteItem} src='./images/blackDelete.png'/>

        </div>
    );
}

export default CartModal;