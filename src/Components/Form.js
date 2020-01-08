import React from 'react';
import Display from './Display'
import Input from './Input'
import '../App.css';

class Form extends React.Component {
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
      <Display/>
      <Input/>
      </div>
    } 

    handleNameChange(event) {
      this.setState({
        name: event.target.value
      });
    }
};

export default Form;
