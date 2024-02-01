import React, { useState } from "react";
import './Login.css';
import Dashboard from "./Dashboard";
import {useNavigate, Link} from 'react-router-dom';

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      const storedUserData = JSON.parse(localStorage.getItem('userData'));
      if (storedUserData && storedUserData.email === formData.email && storedUserData.password === formData.password){
        alert("Zalogowano!");
        setFormData({
          email: '',
          password: '',
        });
        
        navigate('/Dashboard');
      } else{
        alert("Email lub hasło niepoprawne! Spóbuj ponownie.")
      }
      
    };


  return (
<div class="login-backdrop is-hidden">
  <div class="login-modal">
    <p class="login-header">ZALOGUJ SIĘ DO BILBLIOTEKI</p>
    <form action="#" class="login-form"  onSubmit={handleSubmit}>
      <div class="field email">
        <div class="input-area">
          <input type="email" placeholder="Adres E-mail" name="email" value={formData.email} onChange={handleChange}/>
          <i class="icon fas fa-envelope"></i>
          <i class="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div class="error error-txt">Email can't be blank</div>
      </div>
      <div class="field password">
        <div class="input-area">
          <input type="password" minLength="10" maxLength="36" placeholder="Podaj hasło" required name="password" value={formData.password} onChange={handleChange}/>
          <i class="icon fas fa-lock"></i>
          <i class="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div class="error error-txt">Password can't be blank</div>
      </div>
      <div class="login-info-error"></div>
      
      <input type="submit" value="Login" class="login-button"/>
      
     <p class="register">JEŚLI NIE JESTEŚ ZAREJESTROWANY KLIKNIJ <Link to='/Signup'>TUTAJ</Link></p>
    </form>
  </div>
</div>
  );
  };

export default Login;
