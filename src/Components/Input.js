import React from 'react';
import '../App.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'David',
      lastName: 'Mitchell'
    };
      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);

    }
    render() {
      return <div>
      <input type='text' id ="firstName" value={this.state.firstName} onChange={this.handleNameChange}/>
      <input type='text' id = "lastName" value={this.state.lastName} onChange={this.handleNameChange}/>
      <button type='button' onClick='Save'>Save</button>
      <button type='button' onClick='Cancel'>Cancel</button>
      </div>
    } 

    handleFirstNameChange(event) {
      this.setState({
        firstName: event.target.value,
      });
    }

    handleLastNameChange(event) {
      this.setState({
        lastName: event.target.value,
      });
    }

};

export default Input;