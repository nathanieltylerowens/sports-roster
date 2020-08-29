import React from 'react';
import PropTypes from 'prop-types';

import Players from '../Players/Players';

import rosterData from '../../helpers/data/rosterData';
import playerData from '../../helpers/data/playerData';

class SingleRoster extends React.Component {
  static propTypes = {
    rosterId: PropTypes.string.isRequired,
    setSingleRoster: PropTypes.func.isRequired,
  }

  state = {
    roster: {},
    players: [],
  }

  componentDidMount() {
    const { rosterId } = this.props;

    rosterData.getSingleRoster(rosterId)
      .then((response) => this.setState({ roster: response.data }))
      .catch((err) => console.error('get single roster done broke', err));

    playerData.getPlayersByRosterId(rosterId)
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('get playas done broke', err));
  }

  render() {
    const { roster, players } = this.state;
    const { setSingleRoster } = this.props;

    const playerCards = players.map((player) => <Players key={player.id} player={player}/>);

    return (
        <div>
          <h5> {roster.name} </h5>
          <button
            className="btn btn-dark"
            onClick={() => { setSingleRoster(''); }}>X</button>
          <div className="card-columns">
            {playerCards}
          </div>
        </div>
    );
  }
}

export default SingleRoster;
