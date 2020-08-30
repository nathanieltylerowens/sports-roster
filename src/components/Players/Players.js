import React from 'react';
import PropTypes from 'prop-types';

import playerShape from '../../helpers/propz/playerShape';

class Players extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    deletePlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, deletePlayer } = this.props;
    deletePlayer(player.id);
  }

  render() {
    const { player } = this.props;

    return (
      <div className="card bg-white text-primary border-0">
        <img className="card-img" src={player.imageUrl} alt={player.name} />
          <div className="card-img-overlay">
            <button className="btn btn-dark" onClick={this.deletePlayerEvent}><i className="fas fa-trash"></i></button>
            <h5 className="card-title">{player.name}</h5>
            <h5 className="player-pos">{player.position}</h5>
          </div>
      </div>
    );
  }
}

export default Players;
