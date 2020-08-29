import React from 'react';

import Team from '../Team/Team';

import authData from '../../helpers/data/authData';
import rosterData from '../../helpers/data/rosterData';

class TeamContainer extends React.Component {
  state = {
    rosters: [],
  }

  componentDidMount() {
    rosterData.getRosterByUid(authData.getUid())
      .then((rosters) => this.setState({ rosters }))
      .catch((err) => console.error('get roster done broke', err));
  }

  render() {
    const { rosters } = this.state;

    const teamCard = rosters.map((roster) => <Team key={roster.id} team={roster}/>);

    return (
      <div className="card-columns">
        { teamCard }
      </div>
    );
  }
}

export default TeamContainer;
