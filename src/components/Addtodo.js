import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Addtodo extends Component {
  state = { 
    value: '',
   }


   //method handleInputChange

  render() { 
    return ( 
      
      <form style={{display: 'flex'}}>
        <input type="text"
               value={this.state.value}
               placeholder="Write todo..."
               name="title"
               onChange={this.handleInputChange}
               style={{flex: '10', padding: '10px'}}
        />

        <input type="submit"
               value="Wyślij"
               className="btn"
               style={{flex:'1',
               textTransform:'uppercase',
               fontWeight: 'bold',
               letterSpacing:'2px'
              
              }}
        />
      </form>
      
     );
  }
}
 
export default Addtodo;