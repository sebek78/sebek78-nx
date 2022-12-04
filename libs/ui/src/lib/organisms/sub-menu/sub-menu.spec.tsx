import { render } from '@testing-library/react';

import SubMenu from './sub-menu';

describe('SubMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SubMenu />);
    expect(baseElement).toBeTruthy();
  });
});
