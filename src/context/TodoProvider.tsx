import React, {createContext, ReactNode, useState} from "react";


// this provider need to provide the todos list data, save to do function and update to do function
export const TodoContext = createContext<ContextType | null>(null)

const TodoProvider: React.FC<ReactNode> = ({children}) => {
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

	// use setTodos function to save the to do to
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
		// eslint-disable-next-line array-callback-return
		todos.filter(todo => {
			if (todo.id === id) {
				// todo.status = true
				setTodos([...todos, {...todo, status: true}])
			}
		})
	}

	return (
		<TodoContext.Provider value={{todos, saveTodo, updateTodo}}>
			{children}
		</TodoContext.Provider>
	)
}

export default TodoProvider;