import React, {createContext, ReactNode, useState} from 'react';

// the null type is used to initialize the context with null value
export const TodoContext = createContext<ContextType | null>(null)

const TodoProvider: React.FC<ReactNode> = ({children}) => {
	const [todos, setTodos] = useState<ITodo[]>([{
		id: 1,
		title: 'post 1',
		description: 'this is my first description',
		status: false
	}, {
		id: 2,
		title: 'post 2',
		description: 'this is my second description',
		status: true
	}])


	const saveTodo = (todo: ITodo) => {
		const newTodo: ITodo = {
			id: Math.random(), // not really unique - but fine for this example
			title: todo.title,
			description: todo.description,
			status: false
		}
		setTodos([...todos, newTodo])
	}

	const updateTodo = (id: number) => {
		// eslint-disable-next-line
		todos.filter((todo: ITodo) => {
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

export default TodoProvider;