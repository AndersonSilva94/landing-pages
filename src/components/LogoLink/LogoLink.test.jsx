import { renderTheme } from '../../styles/render-theme';
import LogoLink from '.';

describe('<LogoLink />', () => {
  it('should render text Logo', () => {
    const { getByRole } = renderTheme(
      <LogoLink link="#target" text="Olá Mundo!" />,
    );
    const logo = getByRole('heading', { name: /olá mundo!/i });
    expect(logo).toBeInTheDocument();
    expect(logo.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render image Logo', () => {
    const { getByRole } = renderTheme(
      <LogoLink link="#target" text="Olá Mundo!" srcImg="image.jpg" />,
    );
    const logo = getByRole('heading', { name: /olá mundo!/i });
    expect(logo).toBeInTheDocument();
    const imgLogo = getByRole('img', { name: /olá mundo!/i });
    expect(imgLogo).toHaveAttribute('src', 'image.jpg');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Olá Mundo!" srcImg="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
