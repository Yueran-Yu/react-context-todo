import React from "react";

// single to do template

const Todo: React.FC<Props> = ({todo, updateTodo}) => {
	const checkTodo: string = todo.status ? `line-through` : ``
	return (
		<div className='Card'>
			<div className='Card--text'>
				<h1 className={checkTodo}>{todo.title}</h1>
				<span className={checkTodo}>{todo.description}</span>
				<button onClick={() => updateTodo(todo.id)} className={todo.status ? `hide-button` : `Card--button`}>Complete
				</button>
			</div>
		</div>
	)
}

export default Todo;