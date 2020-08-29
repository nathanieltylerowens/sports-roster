import React from 'react';

import playerShape from '../../helpers/propz/playerShape';

class Players extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;

    return (
      <div className="card bg-white text-primary border-0">
        <img className="card-img" src={player.imageUrl} alt={player.name} />
          <div className="card-img-overlay">
            <h5 className="card-title">{player.name}</h5>
            <h5 className="player-pos">{player.position}</h5>
          </div>
      </div>
    );
  }
}

export default Players;
