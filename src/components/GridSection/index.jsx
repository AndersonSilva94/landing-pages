import * as Styled from './styles';
import PropTypes from 'prop-types';
import SectionBackground from '../SectionBackground';
import Heading from '../Heading';
import TextComponent from '../TextComponent';

function GridSection({ title, description, grid }) {
  return (
    <SectionBackground>
      <Styled.Container>
        <Heading size="huge" uppercase>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((elem) => (
            <Styled.GridElement key={elem.title}>
              <Heading size="medium">{elem.title}</Heading>
              <TextComponent>{elem.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
}

GridSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  grid: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default GridSection;
