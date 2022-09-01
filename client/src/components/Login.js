import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import '../css/login.css';

const Login = () => {

    let navigate = useNavigate();

    let formVals = ["username", "password"];

    const [formValues, setFormValues] = useState(formVals);

    const getValues = (e) =>{
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    }

    const loginUser = (e) => {
        e.preventDefault(); 

        let payload = {
            username: formValues['username'],
            password: formValues['password']
        }

        Axios.post('http://localhost:5000/api/loginuser', payload)
        .then((res) => {
          // console.log(res.data);
          if(!res.data){
            alert("Wrong!")
          } else {
            if(res.data.user){
            //   alert("Welcome user")
              sessionStorage.setItem('token', res.data.user);
              navigate("/")
            } else {alert ("Incorect")}
            
          }
        })
        .catch(function(error){
          console.log(error);
        })
    }

    const signUp = () => {
        navigate('/Register');
        sessionStorage.clear();

    }

    return(
        <div className="login-con">
            <img className="sign-logo" src="./images/logo.png"/>
            <form className='signin-con' onSubmit={loginUser}>
                <h2 className='sing-title'>Sign In</h2>
                <p className='sign-text' >Username</p>
                <input className="singbar" type="text" placeholder="Username" label="username" name="username"  onChange={getValues}/>
                <p className='sign-text'>Password</p>
                <input className="passbar" type="password" placeholder="Password" label="Password" name="password" onChange={getValues}/>
                
                <button className='sign-button' type="submit" >Sign In</button>
                <div className='sign-up-button' onClick={signUp}>Sign up?</div>
            </form>
        </div>
    );
}

export default Login;