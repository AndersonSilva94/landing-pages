import { renderTheme } from '../../styles/render-theme';
import NavLinks from '.';

import mock from './mock';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
  it('should render links', () => {
    const { getAllByRole } = renderTheme(
      <NavLinks links={mock}>Children</NavLinks>,
    );
    expect(getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should render link', () => {
    const { getByText } = renderTheme(
      <NavLinks links={mock}>Children</NavLinks>,
    );
    expect(getByText(/link 8/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should not render links', () => {
    const { queryAllByText } = renderTheme(<NavLinks>Children</NavLinks>);
    expect(queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <NavLinks links={mock}>Children</NavLinks>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
