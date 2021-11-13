import * as Styled from './styles';
import PropTypes from 'prop-types';
import SectionBackground from '../SectionBackground';
import Heading from '../Heading';
import TextComponent from '../TextComponent';

function GridImage({ background = false, title, description, grid }) {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((elem) => (
            <Styled.GridElement key={elem.srcImg}>
              <Styled.Image src={elem.srcImg} alt={elem.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
}

GridImage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  grid: PropTypes.arrayOf(
    PropTypes.shape({
      altText: PropTypes.string.isRequired,
      srcImg: PropTypes.string.isRequired,
    }),
  ).isRequired,
  background: PropTypes.bool,
};

export default GridImage;
