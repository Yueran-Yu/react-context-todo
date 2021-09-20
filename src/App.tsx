import React from 'react';
import TodoProvider from "./context/TodoProvider";
import Todos from './containers/Todos'
import AddTodo from "./components/AddTodo";
import './styles.css'

const App = () => {
	return (
		<TodoProvider>
			<main className="App">
				<h1>My Todos</h1>
				<AddTodo/>
				<Todos/>
			</main>
		</TodoProvider>
	);
}

export default App;
