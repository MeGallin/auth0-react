import React, { Component } from 'react';
import Auth from '../Auth';

class CallBack extends Component {
  state = {};
  componentDidMount() {
    const auth = new Auth();

    auth.handleAuthentication();
  }
  render() {
    return <div>Loading...Loading</div>;
  }
}

export default CallBack;
