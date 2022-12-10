import { render } from '@testing-library/react';

import SubmenuLabel from './submenu-label';

describe('SubmenuLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SubmenuLabel />);
    expect(baseElement).toBeTruthy();
  });
});
