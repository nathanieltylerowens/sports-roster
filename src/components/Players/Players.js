import React from 'react';
import PropTypes from 'prop-types';

import playerShape from '../../helpers/propz/playerShape';

class Players extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    deletePlayer: PropTypes.func.isRequired,
    editPlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, deletePlayer } = this.props;
    deletePlayer(player.id);
  }

  editPlayerEvent = (e) => {
    e.preventDefault();
    const { editPlayer, player } = this.props;
    editPlayer(player);
  }

  render() {
    const { player } = this.props;

    return (
      <div className="card bg-white text-primary border-0">
        <img className="card-img" src={player.imageUrl} alt={player.name} />
            <h5 className="card-title bg-dark">{player.name}</h5>
            <h5 className="player-pos bg-dark">{player.position}</h5>
            <div className="btn-group" role="group">
              <button className="btn btn-light" onClick={this.deletePlayerEvent}><i className="fas fa-trash"></i></button>
              <button className="btn btn-light" onClick={this.editPlayerEvent}><i className="far fa-edit"></i></button>
            </div>
      </div>
    );
  }
}

export default Players;
