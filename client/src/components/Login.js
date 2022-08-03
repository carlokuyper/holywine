import '../index.css';
import '../css/login.css';

const Login = () => {


    return(
        <div className="login-con">
            <img className="sign-logo" src="./images/logo.png"/>
            <div className='signin-con'>
                <h2 className='sing-title'>Sign In</h2>
                <p className='sign-text'>Email</p>
                <input className="singbar" type="text" placeholder="Email"/>
                <p className='sign-text'>Password</p>
                <input className="passbar" type="text" placeholder="Password"/>
                
                <a href='/'><div className='sign-button'>Sign In</div></a>
            </div>
        </div>
    );
}

export default Login;