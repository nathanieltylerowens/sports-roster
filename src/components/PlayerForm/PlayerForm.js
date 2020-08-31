import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

class playerForm extends React.Component {
  static propTypes = {
    rosterId: PropTypes.string.isRequired,
    createPlayer: PropTypes.func.isRequired,
    updatePlayer: PropTypes.func.isRequired,
    playerThatIAmEditing: PropTypes.object.isRequired,
  }

  state = {
    imageUrl: '',
    name: '',
    position: '',
    isEditing: false,
  }

  componentDidMount() {
    const { playerThatIAmEditing } = this.props;
    if (playerThatIAmEditing.name) {
      this.setState({
        imageUrl: playerThatIAmEditing.imageUrl,
        name: playerThatIAmEditing.name,
        position: playerThatIAmEditing.position,
        isEditing: true,
      });
    }
  }

  changeImageUrlEvent = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  changePositionEvent = (e) => {
    e.preventDefault();
    this.setState({ position: e.target.value });
  }

  savePlayerEvent = (e) => {
    e.preventDefault();
    const { imageUrl, name, position } = this.state;
    const { createPlayer, rosterId } = this.props;

    const newPlayer = {
      imageUrl,
      name,
      position,
      rosterId,
      uid: authData.getUid(),
    };

    createPlayer(newPlayer);
  }

  editPlayerEvent = (e) => {
    e.preventDefault();
    const { imageUrl, name, position } = this.state;
    const { updatePlayer, playerThatIAmEditing, rosterId } = this.props;

    const playerWithChanges = {
      imageUrl,
      name,
      position,
      rosterId,
      uid: authData.getUid(),
    };
    updatePlayer(playerThatIAmEditing.id, playerWithChanges);
  }

  render() {
    const {
      imageUrl,
      name,
      position,
      isEditing,
    } = this.state;

    return (
      <form className="col-6 offset-3">
        <div className="form-group">
          <label htmlFor="playerImageUrl">Players Pic</label>
          <input
            type="text"
            className="form-control"
            id="playerImageUrl"
            placeholder="https://www.allblacks.com/teams/all-blacks/"
            value={imageUrl}
            onChange={this.changeImageUrlEvent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="playerName">Players Name</label>
          <input
            type="text"
            className="form-control"
            id="playerName"
            placeholder="Jimmy Stewart"
            value={name}
            onChange={this.changeNameEvent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="playerPosition">Player Position</label>
          <input
            type="text"
            className="form-control"
            id="playerPosition"
            placeholder="Enter Player Position"
            value={position}
            onChange={this.changePositionEvent}
          />
        </div>
        {
          isEditing
            ? <button className="btn btn-dark" onClick={this.editPlayerEvent}>Edit Player</button>

            : <button className="btn btn-primary" onClick={this.savePlayerEvent}>Save Player</button>
        }
      </form>
    );
  }
}

export default playerForm;
