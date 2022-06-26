import { render } from '@testing-library/react';

import PersonIcon from './person-icon';

describe('PersonIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PersonIcon />);
    expect(baseElement).toBeTruthy();
  });
});
