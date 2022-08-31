import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import '../css/productpage.css';
import Cards from "./Cards";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductPage = (props) => {

    
    let navigate = useNavigate();

    let productId = sessionStorage.getItem("productId");
    // console.log(productId);

    const [imgURL, setImgUrl] = useState ();

    const [productData, setProductData] = useState({
        productName: "",
        productBrand: "",
        productDescription: "",
        price: "",
        storageLocation: "",

        age: "",
        flavours: "",
        sizes: "",
        stock: "",

        vintage1: "",
        vintage2: "",
        vintage3: "",

        flavour1: "",
        flavour2: "",
        flavour3: "",

        size1: "",
        size2: "",
        size3: ""
    });

    const dashboard = () =>{
        sessionStorage.clear();
        navigate("/");
    }

    useEffect(()=>{
        Axios.get('http://localhost:5000/api/oneProducts/' + productId)
        .then(res => {
            let data = res.data;
            setProductData({
                productName: data.productName,
                productBrand: data.productBrand,
                productDescription: data.productDescription,
                price: data.price,
                storageLocation: data.storageLocation,
                image: data.image,

                age: data.age,
                flavours: data.flavours,
                sizes: data.sizes,
                stock: data.stock,

                vintage1: data.variations.vintage1,
                vintage2: data.variations.vintage2,
                vintage3: data.variations.vintage3,

                flavour1: data.variations.flavour1,
                flavour2: data.variations.flavour2,
                flavour3: data.variations.flavour3,

                size1: data.variations.size1,
                size2: data.variations.size2,
                size3: data.variations.size3
            })
            let URL = 'http://localhost:5000/productImages/' + data.image;
            setImgUrl(URL);

        })
    }, []);

    // let name = productData.productName;
    // let price = productData.price;
    // let image = productData.image;
    // console.log(name + price + " " + image);

    //Add Products To Cart
    const [renderProducts, setRenderProducts] = useState(false);
    let defaultFormVals = ["name", "price", "image"];

    const [formValues, setFormValues] = useState(defaultFormVals);

    const getValues = (e) =>{
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }
   
    const addCart = (e) => {
        e.preventDefault();
    
        let payloadData = new FormData();
    
        let payload = {
            name: formValues['name'],
            price: +formValues['price'],
            image: formValues['image'] 
        }
    
        payloadData.append("information", JSON.stringify(payload));
    
        console.log(payloadData);
        Axios.post('http://localhost:5000/api/newCart', payload)
        .then((res)=> {
            if(res){
            console.log("Item Added"); 
            setRenderProducts(true);
            }
        })
        .catch(function (error) {
            console.log(error);
        });

    }
    
    // {props.price}

    return (
        <>
            <Navbar/>
            <div className='product-holder'>
                <div onClick={dashboard}>back</div>
                <img className='product-wine-img' src={imgURL}/>

                <h2 className='product-title'>{productData.productName}</h2>
                <h3 className='product-link-text'>{productData.productBrand}</h3>

                <div className='rating-con'>
                    <img className='star-icon' src='./images/star.png'/>
                    <p className='rating-text'>4.8</p>
                </div>

                <h3 className='product-description'>Description</h3>
                <p className='product-des'>{productData.productDescription}</p>
                {/* The wine cellars of Cricova is the second largest wine cellar in Moldova, after Milestii Mici (largest in the world). It boasts 120 kilometres (75 mi) of labyrinthine roadways, versus MM's 200 kilometres (120 mi), tunnels have existed under Cricova since the 15th century, when limestone was dug out to help build Chişinău. They were converted into an underground wine emporium in the 1950s... */}
            </div>
            <form className='prodcut-cart' onSubmit={addCart}>
                <h2 className='product-price'>R  {productData.price}</h2>
                <p className='product-delivery'>R60 for delivery</p>

                <p className='product-variations'>Wine Age</p>
                <select className='product-select' name="vintage" id="vintage">
                    <option value="2002">2002</option>
                    <option value="2006">2006</option>
                    <option value="2008">2008</option>
                    <option value="2012">2012</option>
                </select>

                <input className="edit-input-small1" required name="name" type="text" placeholder="name" onChange={getValues}/>
                <input className="edit-input-small1" required name="price" type="text" placeholder="price" onChange={getValues}/>
                <input className="edit-input-small1" required name="image" type="text" placeholder="image" onChange={getValues}/>

                <p className='product-variations'>Size</p>

                <select className='product-select' name="size" id="size">
                    <option value="bottle">Single Bottle</option>
                    <option value="box">Box</option>
                    <option value="barrel">Wine Barrel</option>
                </select>

                <button  type="submit" className='cart-button'>Add to Cart</button>
            </form>

            <div className="divider">
                <p className="divider-text">
                    New arivals</p>
            </div>
            <div className="card-con-horizontal ">
                
            </div>

            <Footer/>
        </>
    );
}

export default ProductPage;
