import { render } from '@testing-library/react';

import LibStock from './lib-stock';

describe('LibStock', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibStock />);
    expect(baseElement).toBeTruthy();
  });
});
