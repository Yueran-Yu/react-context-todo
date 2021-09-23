import React, {useState} from "react";
import {useForm} from "./useForm";

const Login = () => {
	const initialState = {
		email: "",
		password: ''
	}

	// a submit function that will execute upon from submission
	const loginUserCallback = async () => {

	}
	// getting the event handlers from our custom hook
	const {onChange, onSubmit, values} = useForm(loginUserCallback, initialState)

	return (
		<form onSubmit={onSubmit}>
			<input type="email" name='email' id='email' placeholder='Email' onChange={onChange} required/>
			<input type="password" name='password' id='password' placeholder='Password' onChange={onChange} required/>
			<button type='submit'>Login</button>
		</form>
	)
}
export default Login;