import React from "react";
import './Signup.css';
import { Link } from "react-router-dom";


const Signup = () => {
	return (

<div class="singup-backdrop is-hidden">
  <div class="singup-container">
    <p class="singup-header">ZAREJESTRUJ SIĘ</p>
    <form action="#" class="singup-form">
      <div class="field email-field">
        <div class="input-field">
          <input type="email" placeholder="Enter your email" class="email" />
        </div>
        <span class="singup-error email-error">
          <i class="bx bx-error-circle singup-error-icon"></i>
          <p class="singup-error-text">Please enter a valid email</p>
        </span>
      </div>
      <div class="field user-name-field">
        <div class="input-field">
          <input type="text" placeholder="Enter your name" class="user-name" />
        </div>
        <span class="singup-error user-name-error">
          <i class="bx bx-error-circle singup-error-icon"></i>
          <p class="singup-error-text">
            Podaj imię
          </p>
        </span>
        
      </div>

      <div class="field user-lname-field">
        <div class="input-field">
          <input type="text" placeholder="Enter your last name" class="user-lastname" />
        </div>
        <span class="singup-error user-name-error">
          <i class="bx bx-error-circle singup-error-icon"></i>
          <p class="singup-error-text">
            Podaj nazwisko
          </p>
        </span>
        
      </div>

      <div class="field user-phone">
        <div class="input-field">
          <input type="number" value="5" min="8" max="10" placeholder="Enter your phone number" class="user-phone" />
        </div>
        <span class="singup-error user-name-error">
          <i class="bx bx-error-circle singup-error-icon"></i>
          <p class="singup-error-text">
            Podaj nr telefonu.
           
          </p>
        </span>
        
      </div>

      <div class="field create-password">
        <div class="input-field">
          <input
            type="password"
            placeholder="Create password"
            class="password"
          />
          <i class="bx bx-hide show-hide"></i>
        </div>
        <span class="singup-error password-error">
          <i class="bx bx-error-circle singup-error-icon"></i>
          <p class="singup-error-text">
            Please enter atleast 8 charatcer with number, symbol, small and
            capital letter.
          </p>
        </span>
      </div>
      <div class="field confirm-password">
        <div class="input-field">
          <input
            type="password"
            placeholder="Confirm password"
            class="cPassword"
          />
          <i class="bx bx-hide show-hide"></i>
        </div>
        <span class="singup-error cPassword-error">
          <i class="bx bx-error-circle singup-error-icon"></i>
          <p class="singup-error-text">Password don't match</p>
        </span>
      </div>
      <div class="singup-info-error"></div>
      <div class="input-field singup-button">
        <input type="submit" value="Signup Now" />
      </div>
    </form>
    <Link to='/'> <p class="register">WRÓĆ NA STRONĘ GŁÓWNĄ</p> </Link>
  </div>
</div>
    );
    };
export default Signup;