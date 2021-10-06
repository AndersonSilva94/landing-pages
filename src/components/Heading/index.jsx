import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

function Heading({
  children,
  colorDark = true,
  as = 'h1',
  size = 'big',
  uppercase = false,
}) {
  return (
    <Styled.Title
      colorDark={colorDark}
      as={as}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  );
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  colorDark: PropTypes.bool,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: PropTypes.bool,
};

export default Heading;
