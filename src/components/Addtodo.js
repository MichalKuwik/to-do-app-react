import React, { Component } from 'react';


class Addtodo extends Component {
  state = { 
    value: '',
   }

   //on submit method
   handleonsubmit = (e) => {
      e.preventDefault();
      this.props.addtodo(this.state.value);
      this.setState({
        value: ''
      })
   }


   //method handleInputChange
   handleInputChange = (e) => {
    this.setState({
       value: e.target.value
     })
   }


  render() { 
    return ( 
      
      <form onSubmit={this.handleonsubmit} style={{display: 'flex'}}>
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