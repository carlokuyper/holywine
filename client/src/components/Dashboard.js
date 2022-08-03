import Cards from "./Cards";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Dashboard = () => {


    return(
        <>
            <Navbar />
            <div className="main-img-con">    
                <div className="img-con">
                    <div className="text-con">
                        <h3 className="main-text">Need some wine? <br/> Why not browse our collection, of the best around</h3>
                            
                        <a href="#big-card-con"><p className='class-button-cart' >To the wine!</p></a>
                    </div>
                </div>
            </div>

            <div className="divider">
                <p className="divider-text"> New arivals</p>
            </div>
            <div className="card-con-horizontal ">
                <Cards />
                <Cards />
                <Cards /> 
                <Cards />
                <Cards />
                <Cards />
            </div>

            <div className="divider">
                <p className="divider-text"> Sort by: Price</p>
            </div>
            <div id="big-card-con">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>

            
            <Footer />
        </>
    );
}

export default Dashboard;