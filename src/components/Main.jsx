import React, { Component } from "react";

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>Home</h3>
        {this.props.auth.isAuthenticated() && (
          <p>
            you are still logged in. <a href="/secret">secret area</a>{" "}
          </p>
        )}

        <div>
          {!this.props.auth.isAuthenticated() && (
            <button onClick={this.props.auth.login}>Login</button>
          )}
        </div>
      </div>
    );
  }
}

export default Main;
