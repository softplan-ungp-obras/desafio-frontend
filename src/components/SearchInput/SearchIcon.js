import React from 'react';
import PropTypes from 'prop-types';

const SearchIcon = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
    >
      <g
        width={props.size}
        height={props.size}
        strokeWidth="2"
        stroke={props.color}
        fill="none"
      >
        <path d="M17.29 17.71l-5-5" />
        <circle cx="8" cy="8" r="5" />
      </g>
    </svg>
  );
};

SearchIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};

export default SearchIcon;
