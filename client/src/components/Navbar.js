import '../index.css';
import '../css/navbar.css';
import CartModal from "./CartModal";

const Navbar = () => {


    return(
        <div className="nav">
            <a href='/'><img className="logo" src="./images/logo.png"/></a>
            

            <div class="dropdown">
                <img src='./images/julian-wan-WNoLnJo7tS8-unsplash.jpg' className="dropbtn nav-user"/>
            
                
                <div class="dropdown-content">
                    <a href="/login">Sign Out</a>
                    <a href="#">Profile</a>

                    <a href="/Orders">Orders</a>
                    <a href="/Stock">Products</a>
                    
                </div>
            </div>

            
            <div class="cart-dropdown">
                <img className="cart-icon" src="./images/addtocart.png"/>
            
                
                <div class="cart-dropdown-content">
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