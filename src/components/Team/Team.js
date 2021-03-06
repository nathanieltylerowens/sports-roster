import React from 'react';
import PropTypes from 'prop-types';

import './Team.scss';

import rosterShape from '../../helpers/propz/rosterShape';

class Team extends React.Component {
  static propTypes = {
    roster: rosterShape.rosterShape,
    setSingleRoster: PropTypes.func.isRequired,
    deleteRoster: PropTypes.func.isRequired,
  }

  singleRosterEvent = (e) => {
    e.preventDefault();
    const { roster, setSingleRoster } = this.props;
    setSingleRoster(roster.id);
  }

  deleteRosterEvent = (e) => {
    e.preventDefault();
    const { deleteRoster, roster } = this.props;
    deleteRoster(roster.id);
  }

  render() {
    const { roster } = this.props;

    return (
      <div className="card bg-dark">
        <img className="card-img-top" src={roster.imageUrl} alt={roster.name} />
        <div className="card-body">
          <h5 className="card-title text-white">{roster.name}</h5>
          <button className="btn btn-outline-primary" onClick={this.singleRosterEvent}>Players  <i className="fas fa-angle-double-right"></i></button>
          <button className="btn btn-outline-primary" onClick={this.deleteRosterEvent}>delete</button>
        </div>
      </div>
    );
  }
}

export default Team;
