import React from "react";
import "../App.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "David",
      lastName: "Mitchell"
    };
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  Display = () => {
    return (
      <div>
        <div>First Name: {this.state.firstName}</div>
        <div>Last Name: {this.state.lastName}</div>
        <button type="button" onClick={this.Edit}>
          Edit
        </button>
      </div>
    );
  };

  Input = () => {
    return (
      <div>
        <input
          type="text"
          id="firstName"
          placeholder={this.state.firstName}
          onChange={this.handleFirstNameChange}
        />
        <input
          type="text"
          id="lastName"
          placeholder={this.state.lastName}
          onChange={this.handleLastNameChange}
        />
        <button type="button" onClick={this.Save}>
          Save
        </button>
        <button type="button" onClick={this.Cancel}>
          Cancel
        </button>
      </div>
    );
  };

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    });
  };

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    });
  };

  Save = () => {};
  Cancel = () => {};

  render() {
    return (
      <div>
        {this.Display()}
        {this.Input()}
      </div>
    );
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }
}
