import React, { Component } from 'react';
import './css/App.css';
import TodoList from './components/TodoList';
import Header from './layout/Header';
import Addtodo from './components/Addtodo';

class App extends Component {
  state = { 
      todos: [
        {
          'id': '1',
          'title': 'Posprzątać pokój',
          'complited': false
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

   //deltodo method, convey id from child component
   //operator spread create copy new array todos and filter and assign todo.id !== id - DELETE todoitem!

   delTodo = (id) => {
     this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
   }


   //handle mark complete?true:false
   //create new array for help method map
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

   //handleAddtodo
   handleAddtodo = (value) => {
     console.log(value);
   }

  render() { 
    return ( 
      <div className="app">
          <div className="container">
            <Header />
            <Addtodo addtodo = {this.handleAddtodo}/>
            <TodoList todos= {this.state.todos}
                      delTodo = {this.delTodo}
                      handleMarkComplete={this.handleMarkComplete}
            />
            </div>
      </div>
     );
  }
}
 


export default App;
