import '../index.css';
import '../css/checkoutPage.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import CheckoutCard from "./CheckoutCard";

const CheckoutPage = () => {


    return (
        <>
            <Navbar/>
            <h1 className="page-title">Checkout Page</h1>
            <div className='order-holder-con'>
                <div className='checkout-pay'>
                    <h3 className='checkout-pay-title'>Summary</h3>
                    <div className='checkout-total-price'>
                            <p className='checkout-total'>Shipping: </p>
                            <p className='checkout-total-nr'>60</p>
                            <p className='checkout-total-nr'>R</p>
                    </div>
                    <div className='checkout-total-price'>
                            <p className='checkout-total'>Total: </p>
                            <p className='checkout-total-nr'>684</p>
                            <p className='checkout-total-nr'>R</p>
                    </div>
                    <div className='checkout-product-button'>Checkout</div>
               </div>
                <CheckoutCard />
                <CheckoutCard />
                <CheckoutCard />
                
            </div>
            
            
            <Footer/>
        </>
    );
}

export default CheckoutPage;
