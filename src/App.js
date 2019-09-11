import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import TodoList from './Components/TodoList'
import Header from './Components/Header'
import About from './Components/About'
import AddItem from './Components/AddItem'
// import uuid from 'uuid'

import './App.css';
import Axios from 'axios';


export default class App extends React.Component {
  state = {
    todos: [],
  }

  // Get data from API
  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => this.setState({ todos: response.data }))
  }

  // Toggle Complete
  markComplete = id => {
    this.setState({ todo: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      } 
      return todo
    })})
  }

  // Delete item
  delTodo = id => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
    
  }

  // Add Item
  addItem = title => {
      Axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(response => this.setState({ todos: [...this.state.todos, response.data]}))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddItem addItem={this.addItem}/>
                <TodoList 
                  todos={this.state.todos} 
                  markComplete={this.markComplete} 
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>

    )
  }
}

