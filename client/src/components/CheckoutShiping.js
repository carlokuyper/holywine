import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import '../index.css';
import '../css/checkoutPage.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChechoutShipingUser from "./ChechoutShipingUser";
import { useNavigate } from 'react-router-dom';

const CheckoutShiping = () => {

    let navigate = useNavigate();
    // Read all the DB Items 
    const [readUser, setReadUser] = useState();
    const [renderProducts, setRenderProducts] = useState(false);

    useEffect(()=>{
    Axios.get('http://localhost:5000/api/allUsers')
    .then(res =>{
      let data = res.data;
      const productItem = data.map((item)=> <ChechoutShipingUser key={item._id} productId={item._id} 
      name={item.name} surname={item.surname} contact={item.contact}
      address={item.address} username={item.username}  
      editRender={setRenderProducts}/>);

      setReadUser(productItem);
      setRenderProducts(false);
    });
    }, [renderProducts]);

    let defaultFormVals = ["name", "price", "image", "vintage", "variations", "size", "qty"];

    const [formValues, setFormValues] = useState(defaultFormVals);
    const [imageName, setImageName] = useState("Name of File will appear here");

    const [productImage, setProductImage] = useState();

    const getValues = (e) =>{
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    }

    const getImage = (e) => {

    // This is where Multer comes in
    let imageFile = e.target.files[0];
    setProductImage(imageFile);

    let value = e.target.value;
    let imgName = value.substring(12);
    setImageName(imgName);

    let reader = new FileReader();
    reader.onload = () => {
        let output = document.getElementById('imgPrev');
        output.src = reader.result;
    }; 

    reader.readAsDataURL(e.target.files[0]);

    }

    const payBtn = () => {
        navigate('/')
    }

    return (
        <>
            <Navbar/>
            <h1 className="page-title">Checkout Page</h1>
            <div className='checkout-holder-con'>
                {readUser}

                <form className='checkout-shipping-con' onSubmit={payBtn}>                 
                    <div className='small-checkout-con'>
                        <p className='stock-left1'>Name on card: </p>
                        <input className="checkout-input-small" required name="contact" type="text" placeholder="Name on card"/>
                    </div>
                    <div className='small-checkout-con'>
                        <p className='stock-left1'>Card nr: </p>
                        <input className="checkout-input-small"  required name="contact" type="text" placeholder="Card nr"/>
                    </div>
                    <div className='small-checkout-con1'>
                        <p className='stock-left1'>Expiry date</p>
                        <input className="checkout-input-small" required name="address" type="text" placeholder="Expiry date"/>
                    </div>   
                    <div className='small-checkout-con1'>
                        <p className='stock-left1'>CVV</p>
                        <input className="checkout-input-small" required name="address" type="text" placeholder="CVV"/>
                    </div>      
                    <button className='checkout-pay-button' type="submit">Update Info</button>      
                </form>
            </div>
            
            
            <Footer/>
        </>
    );
}

export default CheckoutShiping;
