import "./FormStyles.css";

import React from "react";

const Form = () => {
	return (
		<div className='form'>
			<form action='https://formsubmit.co/980b838f86868bba39e5de878280dbe4' method='POST'>
				<label>Your name</label>
				<input type='text' name='name' placeholder='Type your name' />
				<label>Email</label>
				<input type='email' name='email' placeholder='Type your email' />
				<label>Subject</label>
				<input type='text' placeholder='Type your subject' />
				<label id='message'>Message</label>
				<textarea
					id='message'
					rows='6'
					placeholder='Type Your Message Here'></textarea>
				<button type='submit' className='btn'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Form;
