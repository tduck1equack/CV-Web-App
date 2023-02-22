import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import {useState} from 'react'
import NameCard from './components/NameCard.js';
import Scrollbar from './components/Scrollbar.js';
import Navbar from './components/Navbar.js';
import Picture from './components/ProfilePicture';
const Counter = () => {
	const [count, setCount] = useState(0)

	const onIncrease = () => {
		setCount(count + 1)		
	}

	return (
		<div>
			<div>{count}</div>
			<button onClick={onIncrease}>Increase</button>
		</div>
	)
}

const App = () => {
	return (
		<div>
			<Navbar title="Homepage" one="General" two="Address" three="Contact" dropdown="Miscellaneous"/>
			<NameCard className="name-card" id="bob" name="Bob" />
			<NameCard className="name-card" id="jack" name="Jack" />
      <Counter />
      <Counter />
      <Counter />
	  <TodoList />
	  <Picture source="./art/ph1.jpg" />
		</div>
	)
}

const TodoList = () => {

	const [todoItems, setTodoItems] = useState(["homework", "shopping"])	

	const addItem = () => {
		setTodoItems(prev => {
			return [...prev, "new todo item"]
		})
	}

	const todoItemLi = todoItems.map(item => {
		return <li>{item}</li>
	})

	return (
		<div>
			<button onClick={addItem}>Add</button>
			<ul>
				{todoItemLi}
			</ul>
		</div>
	)
}

export default App;
