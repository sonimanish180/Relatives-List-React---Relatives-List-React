import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relatives = ["Manish", "Mrigank", "Pratik", "Karuna"];
    return (
      <>
        <ol key="relativeList">
          {relatives.map((relative, index) => (
            <li key={`relativeListItem${index + 1}`}>{relative}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
