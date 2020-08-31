import React from 'react';
import PropTypes from 'prop-types';

import Players from '../Players/Players';
import PlayerForm from '../PlayerForm/PlayerForm';

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
    showForm: false,
    editPlayer: {},
  }

  goGetPlayers = () => {
    const { rosterId } = this.props;
    playerData.getPlayersByRosterId(rosterId)
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('get playas done broke', err));
  };

  createPlayer = (newPlayer) => {
    playerData.createPlayer(newPlayer)
      .then(() => {
        this.goGetPlayers();
        this.setState({ showForm: false });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    const { rosterId } = this.props;

    rosterData.getSingleRoster(rosterId)
      .then((response) => this.setState({ roster: response.data }))
      .catch((err) => console.error('get single roster done broke', err));

    this.goGetPlayers();
  }

  deletePlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then(() => {
        this.goGetPlayers();
      })
      .catch((err) => console.error('delete playas done broke', err));
  }

  editPlayer = (playerToEdit) => {
    this.setState({ showForm: true, editPlayer: playerToEdit });
  }

  updatePlayer = (playerId, editedPlayer) => {
    playerData.updatePlayer(playerId, editedPlayer)
      .then(() => {
        this.goGetPlayers();
        this.setState({ showForm: false, editPlayer: {} });
      })
      .catch((err) => console.error('update playa done broke', err));
  }

  render() {
    const {
      roster, players, showForm, editPlayer,
    } = this.state;
    const { setSingleRoster, rosterId } = this.props;

    const playerCards = players.map((player) => <Players key={player.id} player={player} deletePlayer={this.deletePlayer} editPlayer={this.editPlayer}/>);

    return (
        <div>
          <h5> {roster.name} </h5>
          <div className="mb-3">
          <button className="btn btn-primary" onClick={() => { this.setState({ showForm: !showForm }); }}>
            <i className={showForm ? 'far fa-times-circle' : 'far fa-plus-square'}></i>
          </button>
          {showForm ? <PlayerForm rosterId={rosterId} createPlayer={this.createPlayer} playerThatIAmEditing={editPlayer} updatePlayer={this.updatePlayer}/> : ''}
          </div>
          <button
            className="btn btn-dark"
            onClick={() => { setSingleRoster(''); }}>Go Back</button>
          <div className="card-columns">
            {playerCards}
          </div>
        </div>
    );
  }
}

export default SingleRoster;
