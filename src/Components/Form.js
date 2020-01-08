import React from "react";
import "../App.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "David",
      lastName: "Mitchell",
      firstNameChanged: false,
      lastNameChanged: false,
      firstNameTemp: "David",
      lastNameTemp: "Mitchell"
    };
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
          placeholder={this.state.firstNameTemp}
          onChange={this.handleFirstNameChange}
        />
        <input
          type="text"
          id="lastName"
          placeholder={this.state.lastNameTemp}
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
      firstNameChanged: true,
      firstNameTemp: event.target.value
    });
  };

  handleLastNameChange = event => {
    this.setState({
      lastNameChanged: true,
      lastNameTemp: event.target.value
    });
  };

  Save = () => {
    if (this.state.firstNameChanged) {
      this.setState({
        firstNameChanged: false,
        firstName: this.state.firstNameTemp
      });
    }

    if (this.state.lastNameChanged) {
      this.setState({
        lastNameChanged: false,
        lastName: this.state.lastNameTemp
      });
    }

    this.setState({
      firstNameChanged: false,
      lastNameChanged: false
    });
  };

  Cancel = () => {
    this.setState({
      firstNameChanged: false,
      lastNameChanged: false
    });
  };

  render() {
    return (
      <div>
        {this.Display()}
        {this.Input()}
      </div>
    );
  }
}
