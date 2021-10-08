import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
  it('should render', () => {
    const { getByRole } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(getByRole('heading')).toBeInTheDocument();
  });
});
