import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import '../index.css';
import '../css/checkoutPage.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import CheckoutCard from "./CheckoutCard";

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

    
    // Wanted to implement an update feature from cart, but could not get the api to send and update from the card side

    // let defaultFormVals1 = ["date", "productName", "productBrand", "productDescription", "price", "storageLocation", "vintage1", "vintage2", "vintage3", "flavour1", "flavour2", "flavour3", "size1", "size2", "size3"];

    // const [formValues1, setFormValues1] = useState(defaultFormVals1);
    // const [imageName1, setImageName1] = useState("Upload Image");

    // const [productImage1, setProductImage1] = useState();

    // const getValues1 = (e) =>{
    // const { name, value } = e.target;
    // setFormValues1({ ...formValues1, [name]: value });
    // }

    

    // const getImage1 = (e) => {

    // // This is where Multer comes in
    // let imageFile = e.target.files[0];
    // setProductImage1(imageFile);

    // let value = e.target.value;
    // let imgName = value.substring(12);
    // setImageName(imgName);

    // let reader = new FileReader();
    // reader.onload = () => {
    //     let output = document.getElementById('imgPrev');
    //     output.src = reader.result;
    // }; 

    // reader.readAsDataURL(e.target.files[0]);

    // }

    // const addProduct = (e) => {
    //     e.preventDefault();
    
    //     const payloadData = new FormData();
        
    //     var mydate1 = Date.now()
        
    //     let payload = {
    //         date: mydate1,
    //         productName: formValues1['productName'],
    //         productBrand: formValues1['productBrand'],
    //         productDescription: formValues1['productDescription'],
    //         price: +formValues1['price'],
    //         storageLocation: formValues1['storageLocation'],
    //         vintage: {
    //             vintage1: +formValues1['vintage1'],
    //             vintage2: +formValues1['vintage2'],
    //             vintage3: +formValues1['vintage3'],
    //         },
    //         variations: {
    //             flavour1: +formValues1['flavour1'],
    //             flavour2: +formValues1['flavour2'],
    //             flavour3: +formValues1['flavour3'],
    //         },
    //         size: {
    //             size1: +formValues1['size1'],
    //             size2: +formValues1['size2'],
    //             size3: +formValues1['size3'],
    //         }
    //     }
        
    //     payloadData.append("information", JSON.stringify(payload));
    //     payloadData.append("image", productImage1);
    
    //     console.log(payload);

    //     Axios.post('http://localhost:5000/api/newProduct', payloadData)
    //     .then((res)=> {
    //     if(res){
    //         console.log("Item Added"); 
    //         setRenderProducts(true);
    //         props.close();
    //     }
    //     })
    //         .catch(function (error) {
    //         console.log(error);
    //         })
    //     }

    return (
        <>
            <Navbar/>
            <h1 className="page-title">Checkout Page</h1>
            <div className='checkout-holder-con'>
                <div className='checkout-pay'>
                    <h3 className='checkout-pay-title'>Summary</h3>
                    <div className='checkout-total-price'>
                            <p className='checkout-total'>Shipping: </p>
                            <p className='checkout-total-nr'>60</p>
                            <p className='checkout-total-nr'>R</p>
                    </div>
                    <div className='checkout-total-price'>
                            <p className='checkout-total'>Total: </p>
                            <p className='checkout-total-nr'>R 684</p>
                    </div>
                    <a href='/CheckoutShiping'><div className='checkout-product-button'>Checkout</div></a>
               </div>
               {readProducts}                
            </div>
            
            
            <Footer/>
        </>
    );
}

export default CheckoutPage;
