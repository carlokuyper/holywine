import '../index.css';
import '../css/checkoutPage.css';


const CheckoutCard = () => {


    return(
        <>
             <div className="checkout-item-con">
                <div className='checkout-stats'>
                    <img className='checkout-wine-img' src='./brett-jordan-fAz5Cf1ajPM-unsplash.jpg'/>
                    <p className='checkout-text'>Sauvignon Blanc</p>
                    <p className='checkout-link-text'>Simonsig</p> 
                </div>
                   

                <div  className='checkout-options-con'>
                    <h2 className='checkout-text-right'>R259.24</h2> 
                    
                    <div className='checkout-delete-con'>
                        <p className='checkout-text-right'>Delete</p>
                        <img src='./images/delete.png' className='checkout-edit-img' />  
                    </div>
                </div>
                

            </div>
               
                
        </>
        
    );
}

export default CheckoutCard;