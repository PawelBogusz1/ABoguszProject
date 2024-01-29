import React from "react";
import './Login.css';
import { Link } from "react-router-dom";


const Login = () => {
	return (
<div class="login-backdrop is-hidden">
  <div class="login-modal">
    <p class="login-header">ZALOGUJ SIĘ DO BILBLIOTEKI</p>
    <form action="#" class="login-form">
      <div class="field email">
        <div class="input-area">
          <input type="text" placeholder="Email Address" />
          <i class="icon fas fa-envelope"></i>
          <i class="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div class="error error-txt">Email can't be blank</div>
      </div>
      <div class="field password">
        <div class="input-area">
          <input type="password" placeholder="Password" />
          <i class="icon fas fa-lock"></i>
          <i class="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div class="error error-txt">Password can't be blank</div>
      </div>
      <div class="login-info-error"></div>
      <Link to='/Dashboard'>
      <input type="submit" value="Login" class="login-button" />
      </Link>
     <p class="register">JEŚLI NIE JESTEŚ ZAREJESTROWANY KLIKNIJ <Link to='/Signup'>TUTAJ</Link></p>
    </form>
  </div>
</div>
  );
  };

export default Login;