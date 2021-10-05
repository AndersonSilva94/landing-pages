import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

function Heading({ children }) {
  return <Styled.Title>{children}</Styled.Title>;
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Heading;
