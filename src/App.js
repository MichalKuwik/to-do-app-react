import React, { Component } from 'react';
import './css/App.css';
import TodoList from './components/TodoList';

class App extends Component {
  state = { 
      todos: [
        {
          'id': '1',
          'title': 'Posprzątać pokój',
          'complited': true
        },
        {
          'id': '2',
          'title': 'Umyć okno',
          'complited': false
        },
        {
          'id': '3',
          'title': 'Nakarmić kota',
          'complited': false
        }
      ]
   }

   //deltodo method
   delTodo = (id) => {
    console.log(id);
   }

   //handle mark complete?true:false
   //create new array - method map
   handleMarkComplete = (id) => {
     this.setState({
       todos: this.state.todos.map(todo => {
         if(todo.id === id){
           todo.complited = !todo.complited;
         }
         return todo;
       })
       
     })
   }

  render() { 
    return ( 
      <div className="app">

        <TodoList todos= {this.state.todos}
                  delTodo = {this.delTodo}
                  handleMarkComplete={this.handleMarkComplete}
        />
      </div>
     );
  }
}
 


export default App;
