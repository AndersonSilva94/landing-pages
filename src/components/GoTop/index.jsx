import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

function GoTop() {
  return (
    <Styled.Container href="#" aria-label="Go to top" title="Go to top">
      <KeyboardArrowUp />
    </Styled.Container>
  );
}

export default GoTop;
