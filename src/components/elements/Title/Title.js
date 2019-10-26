import React from 'react';
import PropTypes from 'prop-types';
import { CTitle } from './styles';

export default function Title({ className, as, level, children }) {
  const Tag = `h${as}`;

  return (
    <CTitle className={className} level={level}>
      <Tag>{children}</Tag>
    </CTitle>
  );
}

Title.defaultProps = {
  className: '',
};

Title.propTypes = {
  level: PropTypes.oneOf(['headline', 'title', 'subtitle', 'label']).isRequired,
  className: PropTypes.string,
  as: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
