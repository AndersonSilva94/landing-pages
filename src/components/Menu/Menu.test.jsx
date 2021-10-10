import { renderTheme } from '../../styles/render-theme';
import { fireEvent } from '@testing-library/react';
import Menu from '.';

import linksMock from '../NavLinks/mock';
import { theme } from '../../styles/theme';
const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('should render Logo and Main Menu Nav', () => {
    const { getByRole, container } = renderTheme(
      <Menu links={linksMock} logoData={logoData} />,
    );
    expect(getByRole('heading', { name: /logo/i })).toBeInTheDocument();
    expect(getByRole('navigation', { name: /main menu/i })).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render menu mobile and button  for open and close the menu', () => {
    const { getByLabelText, container } = renderTheme(
      <Menu links={linksMock} logoData={logoData} />,
    );
    const button = getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(getByLabelText('Open menu')).toBeInTheDocument();

    // clicando no botão
    fireEvent.click(button);

    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });
    expect(getByLabelText('Close menu')).toBeInTheDocument();

    // clicando no MenuContainer
    fireEvent.click(menuContainer);

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should not render links', () => {
    const { queryByRole, container } = renderTheme(
      <Menu logoData={logoData} />,
    );

    expect(
      queryByRole('navigation', { name: /main menu/i }).firstChild,
    ).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
