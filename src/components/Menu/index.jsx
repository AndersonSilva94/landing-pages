import * as Styled from './styles';
import PropTypes from 'prop-types';
import SectionContainer from '../SectionContainer';
import LogoLink from '../LogoLink';
import NavLinks from '../NavLinks';

function Menu({ links = [], logoData }) {
  return (
    <Styled.Container>
      <SectionContainer>
        <Styled.MenuContainer>
          <LogoLink {...logoData} />
          <NavLinks links={links} />
        </Styled.MenuContainer>
      </SectionContainer>
    </Styled.Container>
  );
}

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: PropTypes.shape(LogoLink.propTypes).isRequired,
};

export default Menu;