import React, {ChangeEvent, FormEvent, useState} from "react";

export const useForm = (callback: any, initialState = {}) => {
	const [values, setValues] = useState(initialState)

	// onChange
	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValues({...values, [event.target.name]: event.target.value})
	}

	// onSubmit
	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		//triggering the callback
		await callback()
	}

	//return values
	return {
		onChange,
		onSubmit,
		values,
	}
}