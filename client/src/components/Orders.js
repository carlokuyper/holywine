import '../index.css';
import '../css/orders.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import OrderItems from "./OrderItems";

const Orders = () => {


    return (
        <>
            <Navbar/>
            <h1 className="page-title">Orders</h1>
            <div className='order-holder-con'>
                <OrderItems />
                <OrderItems />
                <OrderItems />
                <OrderItems />
            </div>
            <Footer/>
        </>
    );
}

export default Orders;
