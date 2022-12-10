import { render } from '@testing-library/react';

import StyledMenu from './styled-menu';

describe('StyledMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StyledMenu />);
    expect(baseElement).toBeTruthy();
  });
});
