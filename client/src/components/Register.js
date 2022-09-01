import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import '../css/login.css';

const Register = () => {

  
  let navigate = useNavigate();

  let formVals = ["username", "password"];

  const [formValues, setFormValues] = useState(formVals);

  const getValues = (e) =>{
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
  }

  const addNewUser = (e) => {
      e.preventDefault(); 

      let payload = {
          username: formValues['username'],
          password: formValues['password']
      }

      console.log(payload);

      Axios.post('http://localhost:5000/api/adduser', payload)
      .then((res)=> {
          if(res){
          console.log("User Added");
          navigate("/Login"); 
          }
      })
      .catch(function (error) {
          console.log(error);
      });
  }  

    const signIn = () => {
      navigate('/Login');
      sessionStorage.clear();
    }

    return(
      <div className="login-con">
        <img className="sign-logo" src="./images/logo.png"/>
        <form className='signin-con' onSubmit={addNewUser}>
            <h2 className='sing-title'>Sign up</h2>
            <p className='sign-text' >Username</p>
            <input className="singbar" type="text" placeholder="username" label="username" name="username"  onChange={getValues}/>
            <p className='sign-text'>Password</p>
            <input className="passbar" type="password" placeholder="Password" label="Password" name="password" onChange={getValues}/>
            
            <button className='sign-button' type="submit" >Sign up</button>
            <div className='sign-up-button' onClick={signIn}>Sign in?</div>
        </form>
      </div>
    );
  }

export default Register;