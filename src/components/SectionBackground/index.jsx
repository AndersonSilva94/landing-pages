import * as Styled from './styles';
import PropTypes from 'prop-types';
import SectionContainer from '../SectionContainer';

function SectionBackground({ children, background = false }) {
  return (
    <Styled.Container background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
}

SectionBackground.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.bool,
};

export default SectionBackground;
