import React from 'react';
import '../App.css';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'David',
      lastName: 'Mitchell'
    };
      this.handleNameChange = this.handleNameChange.bind(this);
    }
    render() {
      return <div>
      <div>First Name: {this.state.firstName}</div>
      <div>Last Name: {this.state.lastName}</div>
      <button type='button' onClick='Edit'>Edit</button>
      </div>
    } 

    handleNameChange(event) {
      this.setState({
        name: event.target.value
      });
    }
};

export default Display;
