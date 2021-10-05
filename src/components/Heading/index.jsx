import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

function Heading({ children, light = false }) {
  return <Styled.Title light={light}>{children}</Styled.Title>;
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool.isRequired,
};

export default Heading;
