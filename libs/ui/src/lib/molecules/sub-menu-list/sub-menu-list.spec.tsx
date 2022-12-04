import { render } from '@testing-library/react';

import { SubMenuList } from './sub-menu-list';

describe('SubMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SubMenuList menuItems={[]} role={null} />);
    expect(baseElement).toBeTruthy();
  });
});
