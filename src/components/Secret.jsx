import React, { Component } from "react";

class Secret extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>
          Welcome {this.props.auth.auth0.baseOptions.tenant}, this is your
          secret area!
        </p>
        <p>
          <a href="/">Return home</a>
        </p>
        <p>
          <button onClick={this.props.auth.logout}>Logout</button>
        </p>
      </div>
    );
  }
}

export default Secret;
