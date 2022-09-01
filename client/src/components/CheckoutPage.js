import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import '../index.css';
import '../css/checkoutPage.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import CheckoutCard from "./CheckoutCard";
import CheckoutPagePrice from "./CheckoutPagePrice";

const CheckoutPage = (props) => {

    
    // Read all the DB Items 
    const [readProducts, setReadProducts] = useState();
    const [renderProducts, setRenderProducts] = useState(false);

    useEffect(()=>{
    Axios.get('http://localhost:5000/api/allCart')
    .then(res =>{
      let data = res.data;
      const productItem = data.map((item)=> <CheckoutCard key={item._id} productId={item._id} 
      productName={item.productName} productBrand={item.productBrand} productDescription={item.productDescription}
       
      price={item.price} image={item.image} vintage={item.vintage} variations={item.variations} size={item.size} qty={item.qty} 
      
      editRender={setRenderProducts}/>);

      setReadProducts(productItem);
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

    // Read all the DB Items 
    const [readProducts1, setReadProducts1] = useState();
    const [renderProducts1, setRenderProducts1] = useState(false);
    const [dataArray, setDataArray] = useState();

    useEffect(()=>{
    Axios.get('http://localhost:5000/api/allCart')
    .then(res =>{
      let data = res.data;
      let arrayData = []
      const productItem1 = data.map((item)=> <CheckoutPagePrice key={item._id} productId={item._id}       
      productName={item.productName} productBrand={item.productBrand} productDescription={item.productDescription}
      price={item.price} totalPrice={item.totalPrice}  image={item.image} vintage={item.vintage} variations={item.variations} size={item.size} qty={item.qty} 
      editRender={setRenderProducts1}/>);

      setReadProducts1(productItem1);
      console.log(productItem1);
      setRenderProducts1(false);
      setDataArray(productItem1)
    });
    }, [renderProducts1]);

    <CheckoutPagePrice dataArray={dataArray}/>
    
    
    let defaultFormVals1 = ["name", "price", "image", "vintage", "variations", "size", "qty"];

    const [formValues1, setFormValues1] = useState(defaultFormVals1);
    const [imageName1, setImageName1] = useState("Name of File will appear here");

    const [productImage1, setProductImage1] = useState();

    const getValues1 = (e) =>{
    const { name, value } = e.target;
    setFormValues1({ ...formValues1, [name]: value });
    }

    return (
        <>
            <Navbar/>
            <h1 className="page-title">Checkout Page</h1>
            <div className='checkout-holder-con'>
                <CheckoutPagePrice />
               {readProducts}                
            </div>
            
            
            <Footer/>
        </>
    );
}

export default CheckoutPage;
