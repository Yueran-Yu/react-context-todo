interface ITodo {
	id: number
	title: string
	description: string
	status: boolean
}

type ContextType = {
	todos: ITodo[]
	saveTodo: (todo: Itodo) => void
	updateTodo: (id: number) => void
}