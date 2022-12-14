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

    //Add Products To Cart
    const [selectedVintage, setSelectedVintage] = useState();
    const [selectedVariations, setSelectedVariations] = useState();
    const [selectedSize, setSelectedSize] = useState();
    const [selectedQty, setSelectedQty] = useState(1);
    // console.log(name + price + " " + image + " " + selectedVintage + " " + selectedSize);

    let totalPrice = (productData.price * selectedQty);

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
            productName:  productData.productName,
            productBrand:  productData.productBrand,
            productDescription:  productData.productDescription,
            totalPrice: totalPrice,
            price: productData.price,
            image: productData.image, 
            vintage: selectedVintage,
            variations: selectedVariations,
            size: selectedSize,
            qty: selectedQty,
        }
    
        payloadData.append("information", JSON.stringify(payload));

        console.log(payload);
        Axios.post('http://localhost:5000/api/newCart', payload)
        .then((res)=> {
            if(res){
            console.log("Item Added"); 
            setRenderProducts(true);
            alert("Product added to cart")
            navigate('/')
            }
        })
        .catch(function (error) {
            console.log(error);
        });

    }
    
    // {props.price}


    
    // Read all the DB Items and sorts them by date
    const [readProductsDate, setReadProductsDate] = useState();
    const [renderProductsDate, setRenderProductsDate] = useState(false);
    const [topTen, setTopTen] = useState();

    useEffect(()=>{

        //Gets all items from DB
        Axios.get('http://localhost:5000/api/allProducts')
        .then(res =>{
            let data = res.data;
            const productItem = data.map((item)=> <Cards key={item._id} productId={item._id} date={item.date}
            productName={item.productName} productBrand={item.productBrand} productDescription={item.productDescription} price={item.price} storageLocation={item.storageLocation} 
            age={item.age} flavours={item.flavours} sizes={item.sizes} stock={item.stock} image={item.image}
            vintage1={item.vintage.vintage1} vintage2={item.vintage.vintage2} vintage3={item.vintage.vintage3}
            flavour1={item.variations.flavour1} flavour2={item.variations.flavour2} flavour3={item.variations.flavour3}
            size1={item.size.size1} size2={item.size.size2} size3={item.size.size3}            

            editRender={setRenderProductsDate}/>);

            setTopTen(data.slice(-10).map((item)=> <Cards key={item._id} productId={item._id} date={item.date}
            productName={item.productName} productBrand={item.productBrand} productDescription={item.productDescription} price={item.price} storageLocation={item.storageLocation} 
            age={item.age} flavours={item.flavours} sizes={item.sizes} stock={item.stock} image={item.image}
            vintage1={item.vintage.vintage1} vintage2={item.vintage.vintage2} vintage3={item.vintage.vintage3}
            flavour1={item.variations.flavour1} flavour2={item.variations.flavour2} flavour3={item.variations.flavour3}
            size1={item.size.size1} size2={item.size.size2} size3={item.size.size3}            
            editRender={setRenderProductsDate}/>))


            // console.log(productItem);
            const productItems = productItem.sort((a, b) => b.props.date - a.props.date);
            
            // let productItems = productItem.sort((a, b) => new Date(...a.date.split('/').reverse()) - new Date(...b.date.split('/').reverse()));
            setReadProductsDate(productItems);
            setRenderProductsDate(false);
        });
    }, [renderProductsDate]);


    let rating = Math.floor(Math.random(2) * 5);

    return (
        <>
            <Navbar/>
            <div className='product-holder'>
                {/* <div onClick={dashboard}>back</div> */}
                <img className='product-wine-img' src={imgURL}/>

                <h2 className='product-title'>{productData.productName}</h2>
                <h3 className='product-link-text'>{productData.productBrand}</h3>

                <div className='rating-con'>
                    <img className='star-icon' src='./images/star.png'/>
                    <p className='rating-text'>2.5</p>
                </div>
                <p className='product-description'>Available Stock: {productData.stock}</p>

                <h3 className='product-description'>Description</h3>
                <p className='product-des'>{productData.productDescription}</p>
                {/* The wine cellars of Cricova is the second largest wine cellar in Moldova, after Milestii Mici (largest in the world). It boasts 120 kilometres (75 mi) of labyrinthine roadways, versus MM's 200 kilometres (120 mi), tunnels have existed under Cricova since the 15th century, when limestone was dug out to help build Chi??in??u. They were converted into an underground wine emporium in the 1950s... */}
            </div>
            <form className='prodcut-cart' onSubmit={addCart}>
                <h2 className='product-price'>R {productData.price}</h2>
                <p className='product-variations'>Wine Age</p>
                <select className='product-select'  name="vintage" id="vintage"  onChange={(e) => setSelectedVintage(e.target.value)} required>
                    <option value="" selected disabled hidden>Select an Option</option>
                    <option value="2002">2002</option>
                    <option value="2006">2006</option>
                    <option value="2008">2008</option>
                    <option value="2012">2012</option>
                </select>

                <p className='product-variations'>Variations</p>

                <select className='product-select' name="variations" id="variations" onChange={(e) => setSelectedVariations(e.target.value)} required>
                    <option value="" selected disabled hidden>Select an Option</option>
                    <option value="blackberry">Blackberry</option>
                    <option value="cherry">Cherry</option>
                    <option value="plum">Plum</option>
                </select>

                <p className='product-variations'>Size</p>

                <select className='product-select' name="size" id="size" onChange={(e) => setSelectedSize(e.target.value)} required>
                    <option value="" selected disabled hidden>Select an Option</option>
                    <option value="bottle">Single Bottle</option>
                    <option value="box">Box</option>
                    <option value="barrel">Wine Barrel</option>
                </select>

                <p className='product-variations'>Quantity</p>
                <input className="edit-product-qty" min="1" max="10" required name="qty" defaultValue={1} type="number" placeholder="Qty" onChange={(e) => setSelectedQty(e.target.value)}/>
                <h3 className='total-product'>Total R {totalPrice}</h3>
                <button  type="submit" className='cart-button'>Add to Cart</button>
                <p className='product-delivery'>R60 for delivery</p>
                
            </form>

            <div className="divider">
                <p className="divider-text">
                    New arivals</p>
            </div>
            <div className="card-con-horizontal ">
                {topTen}
            </div>

            <Footer/>
        </>
    );
}

export default ProductPage;
