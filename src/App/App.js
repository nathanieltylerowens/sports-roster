import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import connection from '../helpers/data/connection';

import Navbar from '../components/MyNavBar/Navbar';
import Team from '../components/Team/Team';

import './App.scss';

connection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    const loadComponent = () => {
      if (authed) {
        return <Team />;
      }
      return '';
    };
    return (
      <div className="App">
        <h1>INSIDE APP COMPONENT</h1>
        <Navbar authed={authed} />
        {loadComponent()}
      </div>
    );
  }
}

export default App;
