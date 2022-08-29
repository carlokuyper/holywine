import '../index.css';
import '../css/productpage.css';
import Cards from "./Cards";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductPage = () => {

    return (
        <>
            <Navbar/>
            <div className='product-holder'>
                <img className='product-wine-img' src='./brett-jordan-fAz5Cf1ajPM-unsplash.jpg'/>

                <h2 className='product-title'>Cabernet Sauvignon Shiraz</h2>
                <h3 className='product-link-text'>Simonsig</h3>

                <div className='rating-con'>
                    <img className='star-icon' src='./images/star.png'/>
                    <p className='rating-text'>4.8</p>
                </div>

                <h3 className='product-description'>Description</h3>
                <p className='product-des'>The wine cellars of Cricova is the second largest wine cellar in Moldova, after Milestii Mici (largest in the world). It boasts 120 kilometres (75 mi) of labyrinthine roadways, versus MM's 200 kilometres (120 mi), tunnels have existed under Cricova since the 15th century, when limestone was dug out to help build Chişinău. They were converted into an underground wine emporium in the 1950s...</p>

            </div>
            <div className='prodcut-cart'>
                <h2 className='product-price'>R 259.21</h2>
                <p className='product-delivery'>R60 for delivery</p>

                <p className='product-variations'>Vintage</p>

                <select className='product-select' name="vintage" id="vintage">
                    <option value="2002">2002</option>
                    <option value="2006">2006</option>
                    <option value="2008">2008</option>
                    <option value="2012">2012</option>
                </select>

                <p className='product-variations'>Size</p>

                <select className='product-select' name="size" id="size">
                    <option value="single">Single Bottle</option>
                    <option value="box">Box (6 Bottles)</option>
                    <option value="barrel">Wine Barrel (24 Bottles)</option>
                </select>

                <div className='cart-button'>Add to Cart</div>
            </div>

            <div className="divider">
                <p className="divider-text">
                    New arivals</p>
            </div>
            <div className="card-con-horizontal ">
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>

            <Footer/>
        </>
    );
}

export default ProductPage;
