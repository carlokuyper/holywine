import React from 'react'
import {useState, useEffect} from 'react'
import Axios from 'axios';

import '../index.css';
import '../css/stock.css';


const StockModal = (props) => {
    // console.log(props);
 
    // Read all the DB Items 
    const [readProducts, setReadProducts] = useState();
    const [renderProducts, setRenderProducts] = useState(false);


    let defaultFormVals = ["productName", "productBrand", "productDescription", "price", "storageLocation", "vintage1", "vintage2", "vintage3", "variation1", "variation2", "variation3", "size1", "size2", "size3"];

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
        var flavours = +formValues['variation1'] + +formValues['variation2'] + +formValues['variation3'];
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
                fiveYears: +formValues['vintage1'],
                tenYears: +formValues['vintage2'],
                twelveYears: +formValues['vintage3'],
            },
            variations: {
                flavour1: +formValues['variation1'],
                flavour2: +formValues['variation2'],
                flavour3: +formValues['variation3'],
            },
            size: {
                single: +formValues['size1'],
                box: +formValues['size2'],
                barrel: +formValues['size3'],
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

    const closeModal = () => {
        props.close();
      }

    return (
        <div className='stock-modal'>
            <div className='edit-stock-con'>
                <div className='edit-top-con'>
                    <img className='edit-stock-wine-img' src='./brett-jordan-fAz5Cf1ajPM-unsplash.jpg' />
                    <p>{imageName}</p>

                    <p className='stock-left'>Product Name</p>
                    <input className="edit-input" type="text" placeholder="Product Name"/>
                    <p className='stock-left'>Brand</p>
                    <input className="edit-input" type="text" placeholder="Brand"/>

                    <p className='stock-left'>Description</p>
                    <textarea className="edit-input-description" type="text" cols="50" rows="5" placeholder="Product Description"></textarea>
                    <div className='small-edit-con'>
                        <p className='stock-left'>Storage</p>
                        <input className="edit-input-small" type="text" placeholder="Storage"/>
                    </div>
                    <div className='small-edit-con'>
                        <p className='stock-left'>Vintage</p>
                        <input className="edit-input-small" type="text" placeholder="Vintage"/>
                    </div>
                    <div className='small-edit-con'>
                        <p className='stock-left'>Size</p>
                        <input className="edit-input-small" type="text" placeholder="Box"/>
                    </div>
                </div>
                <div className='edit-button'>Add Product</div>
                <h2 className="delete-button" onClick={closeModal}>Close</h2>
            </div>
        </div>
    );
}

export default StockModal;