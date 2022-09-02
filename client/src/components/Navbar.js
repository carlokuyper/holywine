import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import '../index.css';
import '../css/navbar.css';
import CartModal from "./CartModal";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate();
    const dashboard = () =>{
        sessionStorage.clear();
        navigate("/");
    }

    // Read all the DB Items 
    const [readProducts, setReadProducts] = useState();
    const [renderProducts, setRenderProducts] = useState(false);
    
    const [calTotalPrice, setCalTotalPrice] = useState();

    useEffect(()=>{
    Axios.get('http://localhost:5000/api/allCart')
    .then(res =>{
      let data = res.data;
      const productItem = data.map((item)=> <CartModal key={item._id} productId={item._id} 
      productName={item.productName} productBrand={item.productBrand} productDescription={item.productDescription}
       
      price={item.price} image={item.image} vintage={item.vintage} variations={item.variations} size={item.size} qty={item.qty} 
      totalPrice={item.totalPrice}
      editRender={setRenderProducts}/>);

      setReadProducts(productItem);
      setRenderProducts(false);
      const totalPrice = data.map( e => e.totalPrice).reduce((prev, curr, indx) => {return prev + curr}, 0)
      setCalTotalPrice(totalPrice)
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

    const logOut = () => {
        navigate('/Login');
        sessionStorage.clear();

    }

    return(
        <div className="nav">
           <img onClick={dashboard} className="logo" src="./images/logo.png"/>
            

            <div className="dropdown">
                <img src='./images/julian-wan-WNoLnJo7tS8-unsplash.jpg' className="dropbtn nav-user"/>
            
                
                <div className="dropdown-content">
                    <a onClick={logOut}>Sign Out</a>
                    <a href="#">Profile</a>

                    <a href="/Orders">Orders</a>
                    <a href="/Stock">Stock</a>
                    
                </div>
            </div>

            
            <div className="cart-dropdown">
                <img className="cart-icon" src="./images/addtocart.png"/>
            
                
                <div className="cart-dropdown-content">
                    <div className='divHover'>{readProducts}</div>
                    
                    
                    <div className='cart-total-con'>
                        <div className='cart-total-price'>
                            <p className='cart-total'>Total: </p>
                            <p className='cart-total-nr'>R {calTotalPrice}</p>
                        </div>
                        <a href='/CheckoutPage'><div className='checkout-button'>Checkout</div></a>
                    </div>
                </div>
            </div>
           

            {/* <input className="searchBar" type="text" placeholder="Search..."/> */}
        </div>
    );
}

export default Navbar;