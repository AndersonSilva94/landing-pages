import { renderTheme } from '../../styles/render-theme';
import GridTwoColumns from '.';
import mock from './mock';

describe('<GridTwoColumns />', () => {
  it('should render two columns grid', () => {
    const { container, getByRole } = renderTheme(<GridTwoColumns {...mock} />);
    expect(getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
