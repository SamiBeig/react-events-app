import React from "react";
import "../App.css";

export default class FolderToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFolders: true
    };
  }

  toggleFolders = () => {
    this.setState({showFolders: !this.state.showFolders})
  }

  render() {
    if (this.state.showFolders) {
      return <div>
        <h2>Home</h2>
        <div>
          <ul>
            <li>File1</li>
            <li>File2</li>
            <li>File3</li>
          </ul>
        </div>
        <button onClick={this.toggleFolders}>Toggle</button>
      </div>;
    } else {
      return <div>
        <h2>Home</h2>
        <button onClick={this.toggleFolders}>Toggle</button>
      </div>;
    }
  }
}
