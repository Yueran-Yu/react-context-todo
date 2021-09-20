import React, {FormEvent, useContext, useState} from 'react';
import {TodoContext} from "../context/TodoProvider";

const AddTodo: React.FC = () => {
	//get the .to-do data
	const {saveTodo} = useContext(TodoContext) as ContextType // b不知道为啥加了ContextType只有saveTodo的报错TS2339就消失了
	// Using typecasting on the useContext hook to avoid Typescript throwing errors because the context will be null at the beginning

	const [formData, setFormData] = useState<ITodo | {}>()
	const handleForm = (e: FormEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			// input 里有个 id  这个能直接 组成{key:value}， 用id来定位特定属性 基本上是动态绑定
			[e.currentTarget.id]: e.currentTarget.value
		})
	}

	const handleSaveTodo = (e: FormEvent, formData: ITodo | any) => {
		e.preventDefault()
		saveTodo(formData)
	}

	return (
		<form className='Form' onSubmit={e => handleSaveTodo(e, formData)}>
			<div>
				<div>
					<label htmlFor="name">Title</label>
					<input type="text" id='title' onChange={handleForm}/>
				</div>
				<div>
					<label htmlFor="description">Description</label>
					<input type="text" name='description' id='description' onChange={handleForm}/>
				</div>
			</div>
			<button disabled={formData === undefined}>Add Todo</button>
		</form>
	)
}

export default AddTodo;
