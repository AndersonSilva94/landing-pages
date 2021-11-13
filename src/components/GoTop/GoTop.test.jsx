import { renderTheme } from '../../styles/render-theme';
import GoTop from '.';

describe('<GoTop />', () => {
  it('should render GoTop component', () => {
    const { container, getByRole } = renderTheme(<GoTop />);
    expect(getByRole('link', { name: /go to top/i })).toBeInTheDocument();
    expect(getByRole('link', { name: /go to top/i })).toHaveAttribute(
      'href',
      '#',
    );
    expect(container).toMatchSnapshot();
  });
});
