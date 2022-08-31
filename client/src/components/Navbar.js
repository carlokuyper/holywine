import '../index.css';
import '../css/navbar.css';
import CartModal from "./CartModal";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate();
    const dashboard = () =>{
        sessionStorage.clear();
        navigate("/");
    }

    return(
        <div className="nav">
           <img onClick={dashboard} className="logo" src="./images/logo.png"/>
            

            <div className="dropdown">
                <img src='./images/julian-wan-WNoLnJo7tS8-unsplash.jpg' className="dropbtn nav-user"/>
            
                
                <div className="dropdown-content">
                    <a href="/login">Sign Out</a>
                    <a href="#">Profile</a>

                    <a href="/Orders">Orders</a>
                    <a href="/Stock">Stock</a>
                    
                </div>
            </div>

            
            <div className="cart-dropdown">
                <img className="cart-icon" src="./images/addtocart.png"/>
            
                
                <div className="cart-dropdown-content">
                    <div className='divHover'><CartModal /></div>
                    <div className='divHover'><CartModal /></div>
                    <div className='divHover'><CartModal /></div>
                    
                    <div className='cart-total-con'>
                        <div className='cart-total-price'>
                            <p className='cart-total'>Total: </p>
                            <p className='cart-total-nr'>R</p>
                            <p className='cart-total-nr'>684</p>
                        </div>
                        <a href='/CheckoutPage'><div className='checkout-button'>Checkout</div></a>
                    </div>
                </div>
            </div>
           

            <input className="searchBar" type="text" placeholder="Search..."/>
        </div>
    );
}

export default Navbar;