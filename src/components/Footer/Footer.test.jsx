import { renderTheme } from '../../styles/render-theme';
import Footer from '.';

describe('<Footer />', () => {
  it('should render Footer', () => {
    const { container, getByRole } = renderTheme(
      <Footer html={'<h1>Olá Mundo!</h1>'} />,
    );
    expect(getByRole('heading', { name: 'Olá Mundo!' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
