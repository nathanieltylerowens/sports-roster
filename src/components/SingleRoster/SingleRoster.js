import React from 'react';
import PropTypes from 'prop-types';

import rosterData from '../../helpers/data/rosterData';

class SingleRoster extends React.Component {
  static propTypes = {
    rosterId: PropTypes.string.isRequired,
    setSingleRoster: PropTypes.func.isRequired,
  }

  state = {
    roster: {},
  }

  componentDidMount() {
    const { rosterId } = this.props;
    rosterData.getSingleRoster(rosterId)
      .then((response) => this.setState({ roster: response.data }))
      .catch((err) => console.error('get single roster done broke', err));
  }

  render() {
    const { roster } = this.state;
    const { setSingleRoster } = this.props;

    return (
        <div>
          <h5> {roster.name} </h5>
          <button
            className="btn btn-dark"
            onClick={() => { setSingleRoster(''); }}>X</button>
        </div>
    );
  }
}

export default SingleRoster;
