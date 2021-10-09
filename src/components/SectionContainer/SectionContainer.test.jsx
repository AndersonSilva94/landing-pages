import { renderTheme } from '../../styles/render-theme';
import SectionContainer from '.';

describe('<SectionContainer />', () => {
  it('should render content', () => {
    const { getByRole, container } = renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>,
    );
    expect(getByRole('heading')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
