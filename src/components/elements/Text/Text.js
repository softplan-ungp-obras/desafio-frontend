import React from 'react';
import PropTypes from 'prop-types';
import { CText } from './styles';

export default function Text({ className, as, level, children }) {
  // const Tag = `${as}`;

  return (
    <CText as={as} className={className} level={level}>
      {children}
    </CText>
  );
}

Text.defaultProps = {
  as: 'p',
  level: '3',
  className: '',
};

Text.propTypes = {
  level: PropTypes.oneOf(['1', '2', '3', '4']),
  className: PropTypes.string,
  as: PropTypes.oneOf(['p', 'span', 'label']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
