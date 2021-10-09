import * as Styled from './styles';
import Heading from '../Heading';
import PropTypes from 'prop-types';

function LogoLink({ text, srcImg = '', link }) {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {srcImg ? <img src={srcImg} alt={text} /> : <span>{text}</span>}
      </Styled.Container>
    </Heading>
  );
}

LogoLink.propTypes = {
  text: PropTypes.string.isRequired,
  srcImg: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export default LogoLink;
