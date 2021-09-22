import React, {createContext, useState} from "react";

// if you don't set the type for the createContext, the 'value' will complain once you pass the three params to it
export const TodoContext = createContext<ContextType | null>(null)

const TodoProvider: React.FC = ({children}) => {
	const [todos, setTodos] = useState<ITodo[]>([{
		id: 1,
		title: 'post 1',
		description: 'this is my first description',
		status: false
	},
		{
			id: 2,
			title: 'post 2',
			description: 'this is my second description',
			status: true
		}])

	const saveTodo = (todo: ITodo) => {
		const newTodo = {
			id: Math.random(),
			title: todo.title,
			description: todo.description,
			status: false
		}
		setTodos([...todos, newTodo])
	}
	const updateTodo = (id: number) => {
		todos.filter(todo => {
			if (todo.id === id) {
				todo.status = true
				setTodos([...todos])
			}
		})
	}

	return (
		<TodoContext.Provider value={{todos, saveTodo, updateTodo}}>
			{children}
		</TodoContext.Provider>
	)
}

export default  TodoProvider;
