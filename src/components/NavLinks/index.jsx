import * as Styled from './styles';
import PropTypes from 'prop-types';
import MenuLink from '../MenuLink';

function NavLinks({ links = [] }) {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.Container>
  );
}

NavLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      newTab: PropTypes.bool,
    }),
  ),
};

export default NavLinks;
