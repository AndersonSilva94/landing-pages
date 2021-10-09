import * as Styled from './styles';
import PropTypes from 'prop-types';

function SectionContainer({ children }) {
  return <Styled.Container>{children}</Styled.Container>;
}

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionContainer;
