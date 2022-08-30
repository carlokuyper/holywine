import React from 'react'
import {useState, useEffect} from 'react'
import Axios from 'axios';

import '../index.css';
import '../css/stock.css';


const StockModal = (props) => {
    // console.log(props);

    let editFormValues = {productId: props.productId, productName: props.productName, productBrand: props.productBrand, productDescription: props.productDescription, price: props.price, storageLocation: props.storageLocation, 
        vintage1: props.vintage1, vintage2: props.vintage2, vintage3: props.vintage3,
        flavour1: props.flavour1, flavour2: props.flavour2, flavour3: props.flavour3,
        size1: props.size1, size2: props.size2, size3: props.size3, image: props.image};

        console.log(editFormValues);

    const [editValues, setEditValues] = useState(editFormValues);

    const updateValues = (e) =>{
        const { name, value } = e.target;
        setEditValues({ ...editValues, [name]: value });
        console.log(editValues);
    }

    const updateProd = (e) => {
        e.preventDefault();
        let productId = props.productId;
        let payload = editValues; 
        console.log(payload);

        Axios.patch('http://localhost:5000/api/updateProducts/' + productId, payload)
        .then((res)=> {
            if(res){
            console.log("Item Upadted"); 
            props.close();
            props.editRender(true);
            }
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    const [imageName, setImageName] = useState("Upload Image");
    const [productImage, setProductImage] = useState();
    const [imgURL, setImgUrl] = useState ();
    const [image, setImage] = useState ();

    let id = props.productId;

    useEffect(()=>{
      Axios.get('http://localhost:5000/api/oneProducts/' + id)
      .then(res => {
          let data = res.data;
                   
          let URL = 'http://localhost:5000/productImages/' + data.image;

          // console.log(id)

          setImgUrl(URL);

          let imgs = data.image;
          setImage(imgs);

      })
  }, []);
  //cHECKS IMG 
//   console.log(image)

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

    
    const closeModal = () => {
        props.close();
      }

    return (
        <div className='stock-modal'>
            <div className='edit-stock-con'>
                <form className='edit-top-con' onSubmit={updateProd}>
                    <div className='addStock-left-con'>
                        <img className='edit-stock-wine-img' id="imgPrev" />
                        <img className='stock-wine-img' src={imgURL} />
                        <p className='stock-left1'>{imageName}</p>
                        <label className='add-product-button1' variant="contained" component="label" >Upload File <input type="file" hidden onChange={getImage}/></label>
                    </div>

                    
                    <div className='addStock-left-con1'>
                        <div className='small-edit-con1'>
                            <p className='stock-left1'>Product Name</p>
                            <input className="edit-input-small1" required name="productName" type="text" defaultValue={props.productName} onChange={updateValues}/>
                        </div>   
                        <div className='small-edit-con1'>                          
                            <p className='stock-left1'>Brand</p>
                            <input className="edit-input-small1" required name="productBrand" type="text" defaultValue={props.productBrand} onChange={updateValues}/>
                        </div>
                        
                        <p className='stock-left1'>Description</p>
                        <textarea className="edit-input-description" required name="productDescription" type="text" defaultValue={props.productDescription} onChange={updateValues}/>

                        <div className='small-edit-con1'>
                            <p className='stock-left1'>Storage Location</p>
                            <input className="edit-input-small1" required name="storageLocation" type="text" defaultValue={props.storageLocation} onChange={updateValues}/>
                        </div>
                        <div className='small-edit-con1'>
                            <p className='stock-left1'>Price</p>
                            <input className="edit-input-small1" required name="price" type="text" defaultValue={props.price} onChange={updateValues}/>
                        </div>
                        <div className='small-edit-con'>
                            <p className='stock-left2'>Vintage</p>
                            <p className='stock-left-name'>5 Years old</p>
                            <p className='stock-left-name'>10 Years old</p>
                            <p className='stock-left-name'>12 Years old</p>
                            <input className="edit-input-small" required name="vintage1" type="text" defaultValue={props.vintage1} onChange={updateValues}/>
                            <input className="edit-input-small" required name="vintage2" type="text" defaultValue={props.vintage2} onChange={updateValues}/>
                            <input className="edit-input-small" required name="vintage3" type="text" defaultValue={props.vintage3} onChange={updateValues}/>
                        </div>
                        
                        <div className='small-edit-con'>
                            <p className='stock-left2'>Variations:</p>
                            <p className='stock-left-name'>5 Years old</p>
                            <p className='stock-left-name'>10 Years old</p>
                            <p className='stock-left-name'>12 Years old</p>
                            <input className="edit-input-small" required name="flavour1" type="text" defaultValue={props.flavour1} onChange={updateValues}/>
                            <input className="edit-input-small" required name="flavour2" type="text" defaultValue={props.flavour2} onChange={updateValues}/>
                            <input className="edit-input-small" required name="flavour3" type="text" defaultValue={props.flavour3} onChange={updateValues}/>
                        </div>

                        <div className='small-edit-con'>
                            <p className='stock-left2'>Sizes:</p>
                            <p className='stock-left-name'>Bottle</p>
                            <p className='stock-left-name'>Box</p>
                            <p className='stock-left-name'>Barrel</p>
                            <input className="edit-input-small" required name="size1" type="text" defaultValue={props.size1} onChange={updateValues}/>
                            <input className="edit-input-small" required name="size2" type="text" defaultValue={props.size2} onChange={updateValues}/>
                            <input className="edit-input-small" required name="size3" type="text" defaultValue={props.size3} onChange={updateValues}/>
                        </div>
                        <button className='edit-button' type="submit">Update Product</button>
                        <h2 className="delete-button" onClick={closeModal}>Close</h2>
                        </div>
                </form>
            </div>
        </div>
    );
}

export default StockModal;