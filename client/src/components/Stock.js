import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import '../index.css';
import '../css/stock.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import StockCards from "./StockCards";
import StockAddModal from "./StockAddModal";

const Stock = (props) => {

    //Add product modal 
    const [modal, setModal] = useState();
    
    const addProductModal = () =>{
        setModal(<StockAddModal 
          close={setModal} 
          id={props.productId} 
        />);
    }

    // Read all the DB Items 
    const [readProducts, setReadProducts] = useState();
    const [renderProducts, setRenderProducts] = useState(false);

    useEffect(()=>{
        Axios.get('http://localhost:5000/api/allProducts')
        .then(res =>{
            let data = res.data;
            const productItem = data.map((item)=> <StockCards key={item._id} productId={item._id} date={item.date}
            
            productName={item.productName} productBrand={item.productBrand} productDescription={item.productDescription} price={item.price} storageLocation={item.storageLocation} 
            age={item.age} flavours={item.flavours} sizes={item.sizes} stock={item.stock} image={item.image}

            vintage1={item.vintage.vintage1} vintage2={item.vintage.vintage2} vintage3={item.vintage.vintage3}
            flavour1={item.variations.flavour1} flavour2={item.variations.flavour2} flavour3={item.variations.flavour3}
            size1={item.size.size1} size2={item.size.size2} size3={item.size.size3}            

            editRender={setRenderProducts}/>);
            setReadProducts(productItem);
            setRenderProducts(false);
        });
    }, [renderProducts]);

    let defaultFormVals = ["productName", "productBrand", "productDescription", "price", "storageLocation", "vintage1", "vintage2", "vintage3", "flavour1", "flavour2", "flavour3", "size1", "size2", "size3"];

    const [formValues, setFormValues] = useState(defaultFormVals);
    const [imageName, setImageName] = useState("Name of File will appear here");

    const [productImage, setProductImage] = useState();

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
    return (
        <>
            <Navbar/>
            {modal}
            <h1 className="page-title">Stock</h1>
            <button variant="contained" component="label" >Upload File <input type="file" hidden onChange={getImage}/></button>
            <div className='add-product-button' onClick={addProductModal}>Add new Product</div>
            
            
            <div className="stock-divider">
                <p className="stock-divider-text">
                    New arivals</p>
            </div>
            <div className='stock-holder-con '>
                {readProducts}
            </div>
            <Footer/>
        </>
    );
}

export default Stock;
