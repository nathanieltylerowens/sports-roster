import React from 'react';
import PropTypes from 'prop-types';

import Team from '../Team/Team';

import authData from '../../helpers/data/authData';
import rosterData from '../../helpers/data/rosterData';

class TeamContainer extends React.Component {
  static propTypes = {
    setSingleRoster: PropTypes.func.isRequired,
  }

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
    const { setSingleRoster } = this.props;

    const teamCard = rosters.map((roster) => <Team key={roster.id} team={roster} setSingleRoster={setSingleRoster}/>);

    return (
      <div className="card-columns">
        { teamCard }
      </div>
    );
  }
}

export default TeamContainer;
