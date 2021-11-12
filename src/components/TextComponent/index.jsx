import * as Styled from './styles';
import PropTypes from 'prop-types';

function TextComponent({ children }) {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
}

TextComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextComponent;
