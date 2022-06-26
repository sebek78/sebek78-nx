import { render } from '@testing-library/react';

import Flexbox from './flexbox';

describe('Flexbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Flexbox />);
    expect(baseElement).toBeTruthy();
  });
});
