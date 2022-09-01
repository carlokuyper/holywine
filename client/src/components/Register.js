import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import '../css/login.css';

const Register = () => {

  
  let navigate = useNavigate();

  let formVals = ["username", "name", "surname", "address", "contact", "password"];

  const [formValues, setFormValues] = useState(formVals);

  const getValues = (e) =>{
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
  }

  const addNewUser = (e) => {
      e.preventDefault(); 

      let payload = {
          username: formValues['username'],
          name: formValues['name'],
          surname: formValues['surname'],
          address: formValues['address'],
          contact: formValues['contact'],
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
            
            <p className='sign-text-left'>Name</p>
            <p className='sign-text-right'>surname</p>
            <input className="left-input" required type="text" placeholder="Name" label="name" name="name"  onChange={getValues}/>
            <input className="right-input" required type="text" placeholder="Surname" label="surname" name="surname" onChange={getValues}/>
            
            <p className='sign-text-left' >Username</p>
            <p className='sign-text-right'>Password</p>
            <input className="left-input" required type="text" placeholder="Username" label="username" name="username"  onChange={getValues}/>
            <input className="right-input" required type="password" placeholder="Password" label="Password" name="password" onChange={getValues}/>
            
            <p className='sign-text-left'>Contact</p>
            <p className='sign-text-right'>Address</p>
            <input className="left-input" required type="text" placeholder="Contact" label="contact" name="contact"  onChange={getValues}/>
            <input className="right-input" required type="text" placeholder="Address" label="address" name="address" onChange={getValues}/>
            
            <button className='sign-button' type="submit" >Sign up</button>
            <div className='sign-up-button' onClick={signIn}>Sign in?</div>
        </form>
      </div>
    );
  }

export default Register;