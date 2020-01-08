import React from "react";
import "../App.css";

export default class FolderToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFolders: true
    };
  }

  render() {
    if (this.state.showFolders) {
      return <div>yay</div>;
    } else {
      return <div>woo</div>;
    }
  }
}
