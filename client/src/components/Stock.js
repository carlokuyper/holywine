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
        //   productName={props.productName} 
        //   productBrand={props.productBrand} 
        //   productDescription={props.productDescription} 
        //   price={props.price}
    
        //   storageLocation={props.storageLocation}
        //   vintageFiveYears={props.vintageFiveYears}
        //   vintageTenYears={props.vintageTenYears}
        //   vintageTwelveYears={props.vintageTwelveYears}
    
        //   variationsFlavour1={props.variationsFlavour1}
        //   variationsFlavour2={props.variationsFlavour2}
        //   variationsFlavour3={props.variationsFlavour3}
    
        //   sizeSingle={props.sizeSingle}
        //   sizeBox={props.sizeBox}
        //   sizeBarrel={props.sizeBarrel}
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

    const getValues = (e) =>{
    const { productName, value } = e.target;
    setFormValues({ ...formValues, [productName]: value });
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


    const addProduct = (e) => {
    e.preventDefault();

    const payloadData = new FormData();
    var age = +formValues['vintage1'] + +formValues['vintage2'] + +formValues['vintage3'];
    var flavours = +formValues['flavour1'] + +formValues['flavour2'] + +formValues['flavour3'];
    var sizes = +formValues['size1'] + +formValues['size2'] + +formValues['size3'];
    var stock = age + flavours + sizes;

    let payload = {
        productName: formValues['productName'],
        productBrand: formValues['productBrand'],
        productDescription: formValues['productDescription'],
        price: +formValues['price'],
        storageLocation: formValues['storageLocation'],
        age: age,
        flavours: flavours,
        sizes: sizes,
        stock: stock,
        vintage: {
            vintage1: +formValues['vintage1'],
            vintage2: +formValues['vintage2'],
            vintage3: +formValues['vintage3'],
        },
        variations: {
            flavour1: +formValues['flavour1'],
            flavour2: +formValues['flavour2'],
            flavour3: +formValues['flavour3'],
        },
        size: {
            size1: +formValues['size1'],
            size2: +formValues['size2'],
            size3: +formValues['size3'],
        }
    }

    payloadData.append("information", JSON.stringify(payload));
    payloadData.append("image", productImage);

    Axios.post('http://localhost:5000/api/newProduct', payloadData)
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
