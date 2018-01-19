import PropTypes from 'prop-types';

export const post = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
  description: PropTypes.string,
  content: PropTypes.string,
  hidden: PropTypes.bool,
  date: PropTypes.number,
});

export default PropTypes;
