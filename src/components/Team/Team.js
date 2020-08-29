import React from 'react';
import PropTypes from 'prop-types';

import rosterShape from '../../helpers/propz/rosterShape';

class Team extends React.Component {
  static propTypes = {
    roster: rosterShape.rosterShape,
    setSingleRoster: PropTypes.func.isRequired,
  }

  singleRosterEvent = (e) => {
    e.preventDefault();
    const { team, setSingleRoster } = this.props;
    setSingleRoster(team.id);
  }

  render() {
    const { team } = this.props;

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{team.name}</h5>
          <button className="btn btn-dark" onClick={this.singleRosterEvent}>Players  <i className="fas fa-angle-double-right"></i></button>
        </div>
      </div>
    );
  }
}

export default Team;
