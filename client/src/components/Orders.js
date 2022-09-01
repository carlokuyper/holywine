import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import '../css/orders.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import OrderItems from "./OrderItems";

const Orders = () => {

    let navigate = useNavigate();
    // Read all the DB Items 
    const [renderProducts, setRenderProducts] = useState(false);
    const [readProducts, setReadProducts] = useState();  

    return (
        <>
            <Navbar/>
            <h1 className="page-title">Orders</h1>
            <div className='order-holder-con'>
                <OrderItems />
            </div>
            <Footer/>
        </>
    );
}

export default Orders;
