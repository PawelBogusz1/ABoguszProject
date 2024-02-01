import "./FormStyles.css";

import React from "react";

const Form = () => {
	return (
		<div className='form'>
			<form
				action='https://formsubmit.co/980b838f86868bba39e5de878280dbe4'
				method='POST'>
				<label>Imię</label>
				<input type='text' name='name' placeholder='Wpisz swoje Imię' />
				<label>E-mail</label>
				<input type='email' name='email' placeholder='Wpisz swój e-mail' />
				<label>Temat</label>
				<input type='text' placeholder='Wpisz Temat' />
				<label id='message'>Treść</label>
				<textarea id='message' rows='6' placeholder='Napisz wiadomość'></textarea>
				<button type='submit' className='btn'>
					Wyślij
				</button>
			</form>
		</div>
	);
};

export default Form;
