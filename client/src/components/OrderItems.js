import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import '../css/orders.css';
import OrderItemsHead from "./OrderItemsHead";
import OrderItemsBody from "./OrderItemsBody";


const OrderItems = (props) => {

    let navigate = useNavigate();
    // Read all the DB Items 
    const [renderProducts, setRenderProducts] = useState(false);
    const [readProducts, setReadProducts] = useState();

    useEffect(()=>{
    Axios.get('http://localhost:5000/api/allUsers')
    .then(res =>{
      let data = res.data;
      const productItem = data.map((item)=> <OrderItemsHead key={item._id} productId={item._id} 
      name={item.name} surname={item.surname} contact={item.contact}
      address={item.address} username={item.username}  
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


    let productId = sessionStorage.getItem("productId");
    console.log(productId);

    const [imgUrl, setImgUrl] = useState();

    const [productData, setProductData] = useState({
        productName: "",
        productPrice: "",
        productDesc: "",
        productStock: "",
        varOne: "",
        varTwo: "",
        varThree: "", 
        image:""
    });

    const backHome = () =>{
        sessionStorage.clear();
        navigate("/");
    }

    useEffect(()=>{
        Axios.get('http://localhost:5000/api/oneproduct/' + productId)
        .then(res => {
            let data = res.data;
            setProductData({
                productName: data.name,
                productPrice: data.price,
                productDesc: data.description,
                productStock: data.stock,
                varOne: data.variations.green,
                varTwo: data.variations.red,
                varThree: data.variations.blue
            })
            let URL = 'http://localhost:5000/productImages/' + data.image;
            setImgUrl(URL);

        })
    }, []);
    


    const [renderProducts1, setRenderProducts1] = useState(false);
    const [readProducts1, setReadProducts1] = useState();

    const [ids, setIds] = useState();
    
    useEffect(()=>{
        Axios.get('http://localhost:5000/api/allCart')
        .then(res =>{
          let data = res.data;
          const productItem1 = data.map((item)=> <OrderItemsBody key={item._id} productId={item._id} 
          productName={item.productName} productBrand={item.productBrand} productDescription={item.productDescription}
           
          price={item.price} image={item.image} vintage={item.vintage} variations={item.variations} size={item.size} qty={item.qty} 
          
          editRender={setRenderProducts1}/>);
    
          setReadProducts1(productItem1);
          setRenderProducts1(false);
            
          const idss = data.map( e => e._id);
          setIds(idss)
        });
        }, [renderProducts1]);
        
        console.log(ids);
        
        let defaultFormVals1 = ["name", "price", "image", "vintage", "variations", "size", "qty"];
    
        const [formValues1, setFormValues1] = useState(defaultFormVals1);
        const [imageName1, setImageName1] = useState("Name of File will appear here");
    
        const [productImage1, setProductImage1] = useState();

        const deleteItem = (e) => {
            e.preventDefault();  
            for(let i=0; i < ids.length; i++){
                if (window.confirm("Product(s) are shiped") === true) {
                    Axios.delete('http://localhost:5000/api/deleteCart/' + ids[i])
                    .then((res)=> {
                      if(res){
                         console.log("Deleted");
                         props.editRender(true);
                      }
                  })
                  .catch(function (error) {
                      console.log(error);
                  });
                } 
            }
        }

    return (
        <>
            <div className='order-holder'>
                {readProducts}

                <table>
                    <tr>
                        <th>Product</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Vintage</th>
                        <th>Variations</th>
                        <th>Size</th>
                        <th>Quantity</th>
                    </tr>
                    {readProducts1}
                </table>
                <p className="dispatch-btn" onClick={deleteItem}>Dispatch</p>
            </div>
        </>
    );
}

export default OrderItems;
