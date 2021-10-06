import { ThemeProvider } from 'styled-components';
import Heading from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    const { getByRole } = renderTheme(<Heading>teste</Heading>);
    // debug();

    // verificar o valor de sua children, se ela existe
    const headingTest = getByRole('heading', { name: 'teste' });

    // verificar os estilos
    expect(headingTest).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.size.xlarge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    const { getByRole } = renderTheme(
      <Heading colorDark={false}>teste</Heading>,
    );
    // debug();

    // verificar o valor de sua children, se ela existe
    const headingTest = getByRole('heading', { name: 'teste' });

    // verificar os estilos
    expect(headingTest).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct heading size', () => {
    const { rerender, getByRole } = renderTheme(
      <Heading size="small">teste</Heading>,
    );
    // debug();

    // verificar o valor de sua children, se ela existe
    const headingTest = getByRole('heading', { name: 'teste' });

    // verificar os estilos
    expect(headingTest).toHaveStyle({
      'font-size': theme.font.size.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">teste</Heading>
      </ThemeProvider>,
    );

    expect(getByRole('heading', { name: 'teste' })).toHaveStyle({
      'font-size': theme.font.size.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">teste</Heading>
      </ThemeProvider>,
    );

    expect(getByRole('heading', { name: 'teste' })).toHaveStyle({
      'font-size': theme.font.size.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">teste</Heading>
      </ThemeProvider>,
    );

    expect(getByRole('heading', { name: 'teste' })).toHaveStyle({
      'font-size': theme.font.size.xhuge,
    });
  });

  it('should render correct font-size when using mobile', () => {
    const { rerender, getByRole } = renderTheme(
      <Heading size="huge">teste</Heading>,
    );
    // debug();

    const headingTest = getByRole('heading', { name: 'teste' });

    expect(getByRole('heading', { name: 'teste' })).toHaveStyleRule(
      'font-size',
      theme.font.size.xlarge,
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should render with default values', () => {
    const { getByRole } = renderTheme(<Heading uppercase>teste</Heading>);
    // debug();

    // verificar o valor de sua children, se ela existe
    const headingTest = getByRole('heading', { name: 'teste' });

    // verificar os estilos
    expect(headingTest).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.size.xlarge,
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { getByRole, container } = renderTheme(
      <Heading as="h6">teste</Heading>,
    );
    // debug();

    // verificar o valor de sua children, se ela existe
    const headingTest = getByRole('heading', { name: 'teste' });

    const h6 = container.querySelector('h6');

    // verificar os estilos
    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
