import { useState } from 'react';
import * as Styled from './styles';
import PropTypes from 'prop-types';
import SectionContainer from '../SectionContainer';
import LogoLink from '../LogoLink';
import NavLinks from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

function Menu({ links = [], logoData }) {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <Styled.Button visible={menuVisible} onClick={() => setMenuVisible(true)}>
        {menuVisible ? <CloseIcon /> : <MenuIcon />}
      </Styled.Button>
      <Styled.Container
        visible={menuVisible}
        onClick={() => setMenuVisible(false)}
      >
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
}

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: PropTypes.shape(LogoLink.propTypes).isRequired,
};

export default Menu;
