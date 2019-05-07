import React, { Component } from 'react';
import './css/App.css';
import TodoList from './components/TodoList';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="app">
        <TodoList />
      
      </div>
     );
  }
}
 


export default App;
