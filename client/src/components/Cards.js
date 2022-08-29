import '../index.css';
import '../css/cards.css';


const Cards = () => {


    return(
        <div className="item-con">
            <a href='/ProductPage'><img className='wine-img' src='./brett-jordan-fAz5Cf1ajPM-unsplash.jpg'/></a>
            <a href='/ProductPage'><p className='left-text'>Sauvignon Blanc</p></a>
            <p className='left-link-text'>Simonsig</p> 
            <p className='left-text'>R259.24</p>     
            <a href='/ProductPage'><div className='view-product-button'>View Product</div></a>

        </div>
    );
}

export default Cards;