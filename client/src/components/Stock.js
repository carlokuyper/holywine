import '../index.css';
import '../css/stock.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import StockCards from "./StockCards";

const Stock = () => {


    return (
        <>
            <Navbar/>
            <h1 className="page-title">Products</h1>
            <div className="stock-divider">
                <p className="stock-divider-text">
                    New arivals</p>
            </div>
            <div className='stock-holder-con '>
                <StockCards />
                <StockCards />
                <StockCards />
                <StockCards />
                <StockCards />
                <StockCards />
                <StockCards />
                <StockCards />
                <StockCards />
                <StockCards />
                <StockCards />
                <StockCards />
                <StockCards />
                <StockCards />
                <StockCards />
                <StockCards />
                
            </div>
            <Footer/>
        </>
    );
}

export default Stock;
