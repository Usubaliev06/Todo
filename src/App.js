import './App.css';
import { Component } from 'react';
import Header from './components/header/Header';
import CreateTodo from "./components/create-todo/CreateTodo.jsx"
import TodoLists from "./components/todo-lists/TodoLists"



// function App() {
//   return (
//     <div className="App">
//       Todo
//     </div>
//   });

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      isLoading: true,

    }
    this.handleCreateTodo = this.handleCreateTodo.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.onEdit = this.onEdit.bind(this)
    this.onCheck = this.onCheck.bind(this)
    // this.onChange=this.onChange.bind(this)
  }

  componentDidMount() {
    const localData = JSON.parse(localStorage.getItem('todos')) || [];
    this.setState({ todos: localData })
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 2500)
  }

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos))

  }

  componentWillUnmount() {

  }





  handleCreateTodo(str) {
    this.setState({ todos: [...this.state.todos, { id: Math.random(), title: str }] })
  }

  onEdit(id, newText) {
    const newArr = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, title: newText
        }
      }
      return todo
    })
    this.setState({ todos: newArr })
  }

  onDelete(id) {
    const newTodos = this.state.todos.filter((item) => item.id !== id);
    this.setState({ todos: newTodos })
  }

  onCheck(id) {
    // alert('hello' + id)
    const Check = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status }
      }
      return todo
    })
    this.setState({ todos: Check })

  }

  render() {
    if (this.state.isLoading) {
      return <div className='text-center  mt-5'>
        <img
         width={"150px"} 
         src="https://c.tenor.com/pgO8hZgOW5AAAAAM/loading-bar.gif" 
         alt='#'>
        </img>
      </div>
    }
    return (
      <div className='App'>
        <Header count={this.state.todos.length}
          done={this.state.todos.filter((todo) => todo.status).length} />
        <main className='main'>
          <CreateTodo onCreate={this.handleCreateTodo} />
          <TodoLists
            todos={this.state.todos}
            onDelete={this.onDelete}
            onCheck={this.onCheck}
            onEdit={this.onEdit}
          />

        </main>
      </div>
    )
  }
}



export default App;
