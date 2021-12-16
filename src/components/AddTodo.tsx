import React, {FormEvent, useContext, useState} from "react";
import {TodoContext} from "../context/TodoProvider";

const AddTodo: React.FC = () => {
	// when only need to get part of the context properties, you can use assertion to define the type
	const {saveTodo} = useContext(TodoContext) as ContextType
	const [formData, setFormData] = useState<ITodo | any>()

	const handleForm = (e: FormEvent<HTMLInputElement>): void => {
		setFormData({
			...formData,
			[e.currentTarget.id]: e.currentTarget.value
		})
	}
	const handleSaveTodo = (e: FormEvent, formData: ITodo) => {
		e.preventDefault()
		if (formData === undefined) {
			alert('Please enter content first.')
		} else {
			saveTodo(formData)
			Array.from(document.querySelectorAll('input')).forEach(
				input => (input.value = ''))
		}
	}

	return (
		<form className='Form' onSubmit={e => handleSaveTodo(e, formData)}>
			<div>
				<div>
					<label htmlFor='name'>Title</label>
					<input onChange={handleForm} type='text' id='title'/>
				</div>
				<div>
					<label htmlFor='description'>Description</label>
					<input onChange={handleForm} type='text' id='description'/>
				</div>
			</div>
			<button disabled={formData === undefined}>Add button</button>
		</form>
	)
}

export default AddTodo;
