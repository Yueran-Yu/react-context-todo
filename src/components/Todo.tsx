import React from "react";

export const Todo: React.FC<Props> = ({todo, updateTodo}) => {
	const checkTodo: string = todo.status ? `line-through` : ``
	const isShowButton: string = todo.status ? `hide-button` : `Card--button`
	return (
		<div className='Card'>
			<div className='Card--text'>
				<h1 className={checkTodo}>{todo.title}</h1>
				<span className={checkTodo}>{todo.description}</span>
			</div>
			{/*here is calling updateTodo function*/}
			<button className={isShowButton} onClick={() => updateTodo(todo.id)}>Complete</button>
		</div>
	)
}
