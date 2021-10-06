import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Home from '.';
import { theme } from '../../styles/theme';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});

// const { getByRole } = renderTheme(<Home />);
/* const headingContainer = getByRole('heading', {
    name: 'Hello World!',
  }).parentElement;

  expect(headingContainer).toHaveStyle({
    background: theme.colors.mainBg,
  });

  expect(headingContainer).toMatchSnapshot();
  expect(headingContainer).toHaveStyleRule('background', 'red'); */
