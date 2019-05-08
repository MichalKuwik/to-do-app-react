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
          <button onClick={this.props.delTodo.bind(this, id)} 
                  style={btnStyle}>x
          </button>
        </p>
      </div>
     );
  }
}
 
TodoItem.propTypes = {
  todo: PropTypes.array.isRequired
}

//styles of btn x
const btnStyle = {
  display: 'inline-block',
  float:'right',
  background: 'red',
  color: '#fff',
  borderRadius: '50%',
  border: 'none',
  padding:'5px 10px',
  fontSize: '1rem',
  cursor: 'pointer',
}


export default TodoItem;