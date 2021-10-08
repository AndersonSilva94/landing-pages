import { renderTheme } from '../../styles/render-theme';
import MenuLink from '.';

describe('<MenuLink />', () => {
  it('should render menu link', () => {
    const { getByRole } = renderTheme(
      <MenuLink link="http://www.google.com">Children</MenuLink>,
    );
    const linkTest = getByRole('link', { name: /children/i });
    expect(linkTest).toBeInTheDocument();
  });
  it('should render attributes', () => {
    const { getByRole } = renderTheme(
      <MenuLink link="http://www.google.com">Children</MenuLink>,
    );
    const linkTest = getByRole('link', { name: /children/i });
    expect(linkTest).toHaveAttribute('target', '_self');
  });
  it('should open in a new tab', () => {
    const { getByRole } = renderTheme(
      <MenuLink link="http://www.google.com" newTab={true}>
        Children
      </MenuLink>,
    );
    const linkTest = getByRole('link', { name: /children/i });
    expect(linkTest).toHaveAttribute('target', '_blank');
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link="http://www.google.com" newTab={true}>
        Children
      </MenuLink>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
