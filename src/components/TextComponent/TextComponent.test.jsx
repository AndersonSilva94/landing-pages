import { renderTheme } from '../../styles/render-theme';
import TextComponent from '.';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
  it('should render', () => {
    const { getByText } = renderTheme(
      <TextComponent>test component</TextComponent>,
    );
    expect(getByText(/test component/i)).toBeInTheDocument();
  });
  it('should have the defined style', () => {
    const { getByText } = renderTheme(
      <TextComponent>test component</TextComponent>,
    );
    const textElement = getByText(/test component/i);

    expect(textElement).toHaveStyle({
      'font-size': theme.font.size.medium,
    });
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <TextComponent>test component</TextComponent>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
