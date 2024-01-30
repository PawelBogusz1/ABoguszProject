import React, { useState } from "react";
import './Login.css';
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

const Login = () => {

  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");

  const [flag, setFlag] = useState("");
  const [dashboard, setDashboard] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem('SePassword').replace(/"/g, "");
    let mail = localStorage.getItem('SeEmail').replace(/"/g, "");

    if (!emaillog || !passwordlog){
      setFlag(true);
    }
    else if ((!passwordlog !== pass) || (!emaillog !== mail)){
      setFlag(true);
    }
    else{
      setDashboard(!dashboard);
      setFlag(false);
    } 
  }

  return (
<div class="login-backdrop is-hidden">
  <div class="login-modal">
    <p class="login-header">ZALOGUJ SIĘ DO BILBLIOTEKI</p>
    <form action="#" class="login-form">
      <div class="field email">
        <div class="input-area">
          <input type="email" placeholder="Adres E-mail" required onChange={(event) => setEmaillog(event.target.value)} />
          <i class="icon fas fa-envelope"></i>
          <i class="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div class="error error-txt">Email can't be blank</div>
      </div>
      <div class="field password">
        <div class="input-area">
          <input type="password" minLength="10" maxLength="36" placeholder="Podaj hasło" required onChange={(event) => setPasswordlog(event.target.value)} />
          <i class="icon fas fa-lock"></i>
          <i class="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div class="error error-txt">Password can't be blank</div>
      </div>
      <div class="login-info-error"></div>
      <Link to='/Dashboard'>
      <input type="submit" value="Login" class="login-button" onClick={handleLogin}/>
      </Link>
     <p class="register">JEŚLI NIE JESTEŚ ZAREJESTROWANY KLIKNIJ <Link to='/Signup'>TUTAJ</Link></p>
    </form>
  </div>
</div>
  );
  };

export default Login;
