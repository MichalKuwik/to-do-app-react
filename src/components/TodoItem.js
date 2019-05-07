import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  state = {  }


  //listStyleF()
  listStyleF = () => {
    return{
      background: '#eee',
      padding: '10px',
      borderBottom: '2px #ddd dotted',
      textDecoration: this.props.todo.complited? 'line-through': 'none'
    }
  }

  render() { 

    //deconstructing
    const { id,title } = this.props.todo;

    return ( 
      <div style={this.listStyleF()}>
        <p>
          {title}
        </p>
      </div>
     );
  }
}
 
TodoItem.propTypes = {
  todo: PropTypes.array.isRequired
}




export default TodoItem;