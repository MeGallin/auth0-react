import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import Secret from "./components/Secret";
import NotFound from "./components/NotFound";
import CallBack from "./components/CallBack";

class App extends Component {
  render() {
    console.log(this.props.auth.auth0);
    let mainComponent = "";
    switch (this.props.location) {
      case "":
        mainComponent = <Main {...this.props} />;
        break;
      case "secret":
        mainComponent = this.props.auth.isAuthenticated() ? (
          <Secret {...this.props} />
        ) : (
          <NotFound />
        );
        break;
      case "callback":
        mainComponent = <CallBack />;
        break;
      default:
        mainComponent = <NotFound />;
    }
    return (
      <div className="App">
        {/* <Main /> */}
        {mainComponent}
      </div>
    );
  }
}

export default App;
