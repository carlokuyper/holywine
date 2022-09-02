import React from 'react';
import { useState, useEffect } from 'react';
import Cards from "./Cards";
import Axios from 'axios';
import Footer from "./Footer";
import Navbar from "./Navbar";

const Dashboard = (props) => {

    // Read all the DB Items and sorts them by default
    const [readProducts, setReadProducts] = useState();
    const [renderProducts, setRenderProducts] = useState(false);
    const [topTen, setTopTen] = useState();

    useEffect(()=>{

        //Gets all items from DB
        Axios.get('http://localhost:5000/api/allProducts')
        .then(res =>{
            let data = res.data;
            const productItem = data.map((item)=> <Cards key={item._id} productId={item._id} 
            
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

    // Read all the DB Items and sorts them by date
    const [readProductsDate, setReadProductsDate] = useState();
    const [renderProductsDate, setRenderProductsDate] = useState(false);

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

    //Sorting function
    // const sortArray = type => {
    //     const types = {
    //       albums: 'albums',
    //       members: 'members',
    //       formed: 'formed_in',
    //     };
    //     const sortProperty = types[type];
    //     const sorted = bands.sort((a, b) => b[sortProperty] - a[sortProperty]);
    //     console.log(sorted);
    //     setData(sorted);
    //   };
    
    return(
        <>
            <Navbar />
            <div className="main-img-con">    
                <div className="img-con">
                    <div className="text-con">
                        <h3 className="main-text">Need some wine? <br/> Why not browse our collection, of the best around</h3>
                            
                        <a href="#big-card-con"><p className='class-button-cart' >To the wine!</p></a>
                    </div>
                </div>
            </div>

            <div className="divider">
                <p className="divider-text"> New arivals</p>
                {/* <select id='test' onChange={(e) => setFruit(e.target.value)}>
                    <option value="ascend">Ascend</option>
                    <option value="descend">Descend</option>
                    <option value="price">Price</option>
                </select> */}
            </div>
            <div className="card-con-horizontal ">
                {/* {readProductsDate} */}
                {topTen}
            </div>

            <div className="divider">
                <p className="divider-text"> All items</p>
            </div>
            <div id="big-card-con">
                {readProducts}
            </div>

            
            <Footer />
        </>
    );
}

export default Dashboard;