import PropTypes from 'prop-types';

const rosterShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { rosterShape };
