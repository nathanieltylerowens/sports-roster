import React from 'react';
import PropTypes from 'prop-types';

import playerShape from '../../helpers/propz/playerShape';

import './Players.scss';

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
      <div className="card bg-dark text-primary border-0 single-player">
        <img className="card-img bg-white" src={player.imageUrl} alt={player.name} />
            <h4 className="player-name bg-dark">{player.name}</h4>
            <h6 className="player-pos bg-dark">{player.position}</h6>
            <div className="btn-group col player-buttons" role="group">
              <button className="btn btn-outline-light" onClick={this.deletePlayerEvent}><i className="fas fa-trash"></i></button>
              <button className="btn btn-outline-light" onClick={this.editPlayerEvent}><i className="far fa-edit"></i></button>
            </div>
      </div>
    );
  }
}

export default Players;
