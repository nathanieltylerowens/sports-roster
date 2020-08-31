import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Navbar.scss';

import Auth from '../Auth/Auth';

class Navbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">New Zealand All Blacks</a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {
              authed
                ? <button className="nav-link btn btn-dark logout-button" onClick={this.logoutClickEvent}>Logout</button>
                : <Auth />
            }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
