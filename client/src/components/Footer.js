import '../index.css';
import '../css/footer.css';



const Footer = () => {


    return(
        <div className="footer-con">
            <a href='/'><img className='footer-logo' src='../images/logo.png' alt="centered image"/></a>
            <div className='right-con'>
                <p className='footer-text'>Please follow our socail media pages</p>
                <a href='https://www.facebook.com/theopenwindow/'><img className='social-media' src='./images/facebook.png'/></a>  
                <a href='https://twitter.com/open_window_?lang=en'><img className='social-media' src='./images/twitter.png'/></a>  
            </div>
            
        </div>
    );
}

export default Footer;