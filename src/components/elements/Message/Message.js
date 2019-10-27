import React from 'react';
import PropTypes from 'prop-types';
import { Box } from './styles';

export default function Message({ type, children }) {
  return <Box type={type}>{children}</Box>;
}

Message.propTypes = {
  type: PropTypes.oneOf(['error', 'success']).isRequired,
  children: PropTypes.node.isRequired,
};
