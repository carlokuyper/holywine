import '../index.css';
import '../css/cartModal.css';


const CartModal = () => {


    return(
        <div className="cart-card-con">
            <img className='cart-card-img' src='./brett-jordan-fAz5Cf1ajPM-unsplash.jpg'/>
            <div className='cart-tex-con'>
                <a href="/ProductPage"><p className='cart-left-text-link'>Sauvignon Blanc</p></a>
                
                <p className='cart-left-text'>R259.24</p>     
            </div>
            <img className='cart-delete' src='./images/blackDelete.png'/>

        </div>
    );
}

export default CartModal;