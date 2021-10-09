import { renderTheme } from '../../styles/render-theme';
import SectionBackground from '.';

describe('<SectionBackground />', () => {
  it('should render with background dark', () => {
    const { getByRole, container } = renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(getByRole('heading')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with background light', () => {
    const { getByRole, container } = renderTheme(
      <SectionBackground>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(getByRole('heading')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
