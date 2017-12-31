import PropTypes from 'prop-types';

export const post = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  content: PropTypes.string,
});

export default PropTypes;
