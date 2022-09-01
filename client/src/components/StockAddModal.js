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


    let defaultFormVals = ["date", "productName", "productBrand", "productDescription", "price", "storageLocation", "vintage1", "vintage2", "vintage3", "flavour1", "flavour2", "flavour3", "size1", "size2", "size3"];

    const [formValues, setFormValues] = useState(defaultFormVals);
    const [imageName, setImageName] = useState("Upload Image");

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

    const addProduct = (e) => {
        e.preventDefault();
    
        const payloadData = new FormData();
        
        var age = +formValues['vintage1'] + +formValues['vintage2'] + +formValues['vintage3'];
        var flavours = +formValues['flavour1'] + +formValues['flavour2'] + +formValues['flavour3'];
        var sizes = +formValues['size1'] + +formValues['size2'] + +formValues['size3'];
        var stock = age + flavours + sizes;
        var mydate1 = Date.now()
        
        let payload = {
            date: mydate1,
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
    
        console.log(payload);

        Axios.post('http://localhost:5000/api/newProduct', payloadData)
        .then((res)=> {
        if(res){
            console.log("Item Added"); 
            setRenderProducts(true);
            // props.close();
        }
        })
            .catch(function (error) {
            console.log(error);
            })
            props.close();
        }


        const closeModal = () => {
            props.close();
        }

    return (
        <div className='stock-modal'>
            <div className='edit-stock-con'>
                <form className='edit-top-con' onSubmit={addProduct}>
                    <div className='addStock-left-con'>
                        <img className='edit-stock-wine-img' id="imgPrev" />
                        <p className='stock-left1'>{imageName}</p>
                        <label className='add-product-button1' variant="contained" component="label" >Upload File <input type="file" hidden onChange={getImage}/></label>
                    </div>

                    <div className='addStock-left-con1'>
                        <div className='small-edit-con1'>
                            <p className='stock-left1'>Product Name</p>
                            <input className="edit-input-small1" required name="productName" type="text" placeholder="Product Name" onChange={getValues}/>
                        </div>   
                        <div className='small-edit-con1'>                          
                            <p className='stock-left1'>Brand</p>
                            <input className="edit-input-small1" required name="productBrand" type="text" placeholder="Brand" onChange={getValues}/>
                        </div>
                        
                        <p className='stock-left1'>Description</p>
                        <textarea className="edit-input-description" required name="productDescription" type="text" placeholder="Product Description" onChange={getValues}/>

                        <div className='small-edit-con1'>
                            <p className='stock-left1'>Storage Location</p>
                            <input className="edit-input-small1" required name="storageLocation" type="text" placeholder="Storage Location" onChange={getValues}/>
                        </div>
                        <div className='small-edit-con1'>
                            <p className='stock-left1'>Price</p>
                            <input className="edit-input-small1" required name="price" type="text" placeholder="Price" onChange={getValues}/>
                        </div>
                        <div className='small-edit-con'>
                            <p className='stock-left2'>Vintage</p>
                            <p className='stock-left-name1'>5 Years old</p>
                            <p className='stock-left-name1'>10 Years old</p>
                            <p className='stock-left-name1'>12 Years old</p>
                            <input className="edit-input-small" required name="vintage1" type="number" placeholder="5 Years old" onChange={getValues}/>
                            {/* <p className='stock-left-name'>Vintage</p> */}
                            <input className="edit-input-small" required name="vintage2" type="number" placeholder="10 Years old" onChange={getValues}/>
                            {/* <p className='stock-left-name'>Vintage</p> */}
                            <input className="edit-input-small" required name="vintage3" type="number" placeholder="12 Years old" onChange={getValues}/>
                        </div>
                        
                        <div className='small-edit-con'>
                            <p className='stock-left2'>Variations:</p>
                            <p className='stock-left-name1'>Blackberry</p>
                            <p className='stock-left-name1'>Cherry</p>
                            <p className='stock-left-name1'>Plum</p>
                            <input className="edit-input-small" required name="flavour1" type="number" placeholder="flavour1" onChange={getValues}/>
                            <input className="edit-input-small" required name="flavour2" type="number" placeholder="flavour2" onChange={getValues}/>
                            <input className="edit-input-small" required name="flavour3" type="number" placeholder="flavour3" onChange={getValues}/>
                        </div>

                        <div className='small-edit-con'>
                            <p className='stock-left2'>Sizes:</p>
                            <p className='stock-left-name1'>Bottle</p>
                            <p className='stock-left-name1'>Box</p>
                            <p className='stock-left-name1'>Barrel</p>
                            <input className="edit-input-small" required name="size1" type="number" placeholder="Bottle" onChange={getValues}/>
                            <input className="edit-input-small" required name="size2" type="number" placeholder="Box" onChange={getValues}/>
                            <input className="edit-input-small" required name="size3" type="number" placeholder="Barrel" onChange={getValues}/>
                        </div>
                        <button className='edit-button' type="submit">Add Product</button>
                        <h2 className="delete-button" onClick={closeModal}>Close</h2>
                        </div>
                </form>
            </div>
        </div>
    );
}

export default StockModal;