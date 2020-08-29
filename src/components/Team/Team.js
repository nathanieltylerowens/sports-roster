import React from 'react';

import rosterShape from '../../helpers/propz/rosterShape';

class Team extends React.Component {
  static propTypes = {
    roster: rosterShape.rosterShape,
  }

  render() {
    const { team } = this.props;

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{team.name}</h5>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  }
}

export default Team;
