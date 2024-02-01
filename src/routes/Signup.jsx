import React, {useState} from "react";
import './Signup.css';
import { Link, useNavigate } from "react-router-dom";



const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    lname: '',
    email: '',
    password: '',
    phone: '',
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

      localStorage.setItem('userData', JSON.stringify(formData));

      setFormData({
        name: '',
        lname: '',
        email: '',
        password: '',
        phone:'',
      });
      navigate('/Login')
    };
  
  return (

<div class="singup-backdrop is-hidden">
  <div class="singup-container">
    <p class="singup-header">ZAREJESTRUJ SIĘ</p>
    <form action="#" class="singup-form" onSubmit={handleSubmit}>
      <div class="field email-field">
        <div class="input-field">
          <input type="email" placeholder="Podaj E-mail" class="email" name = "email" required value={formData.email} onChange={handleChange}/>
        </div>
        <span class="singup-error email-error">
          <i class="bx bx-error-circle singup-error-icon"></i>
          <p class="singup-error-text">Please enter a valid email</p>
        </span>
      </div>
      <div class="field user-name-field">
        <div class="input-field">
          <input type="text" placeholder="Podaj Imię" class="user-name" required pattern="{1,}" name = "name" value={formData.name} onChange={handleChange} />
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
          <input type="text" placeholder="Podaj Nazwisko" class="user-lastname" required pattern="{1,}" name = "lname" value={formData.lname} onChange={handleChange}/>
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
          <input type="number"  min="500000000" max="999999999" placeholder="Podaj nr telefonu" class="user-phone" name = "phone" required value={formData.phone} onChange={handleChange}/>
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
            placeholder="Podaj hasło"
            class="password"
         required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,36}" name = "password" 
         value={formData.password} onChange={handleChange}/>
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
            placeholder="Powtórz hasło"
            class="cPassword"
            required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,36}"
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
