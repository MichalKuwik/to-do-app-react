import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
class TodoList extends Component {
  render(){
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} 
                todo={todo}
                delTodo = {this.props.delTodo}
                handleMarkComplete={this.props.handleMarkComplete}
                />
    ))
  }
}

TodoList.propTypes = {
  todo: PropTypes.array.isRequired
}

export default TodoList;