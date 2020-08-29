import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import connection from '../helpers/data/connection';

import Navbar from '../components/MyNavBar/Navbar';
import TeamContainer from '../components/TeamContainer/TeamContainer';

import './App.scss';
import SingleRoster from '../components/SingleRoster/SingleRoster';

connection();

class App extends React.Component {
  state = {
    authed: false,
    singleRosterId: '',
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

  setSingleRoster = (singleRosterId) => {
    this.setState({ singleRosterId });
  }

  render() {
    const { authed, singleRosterId } = this.state;

    const loadComponent = () => {
      if (authed && singleRosterId.length === 0) {
        return <TeamContainer setSingleRoster={this.setSingleRoster}/>;
      }

      if (authed && singleRosterId.length > 0) {
        return <SingleRoster rosterId={singleRosterId} setSingleRoster={this.setSingleRoster}/>;
      }

      return '';
    };
    return (
      <div className="App">
        <Navbar authed={authed} />
        {loadComponent()}
      </div>
    );
  }
}

export default App;
