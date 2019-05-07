import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  state = {  }
  render() { 

    //deconstructing

    return ( 
      <div>
        <h4>Nowe zadanie</h4>
      </div>
     );
  }
}
 
TodoItem.propTypes = {
  todo: PropTypes.array.isRequired
}

export default TodoItem;