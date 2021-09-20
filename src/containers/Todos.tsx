import React, {useContext} from "react";
import Todo from '../components/Todo'
import {TodoContext} from "../context/TodoProvider";

const Todos = () => {
	const {todos, updateTodo} = useContext(TodoContext) as ContextType

	return (
		<>
			{todos.map((todo: ITodo) => (<Todo key={todo.id} updateTodo={updateTodo} todo={todo}/>))}
		</>
	)
}

export default Todos;