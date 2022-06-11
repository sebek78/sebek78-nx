import { render } from '@testing-library/react';

import Tagline from './tagline';

describe('Tagline', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tagline />);
    expect(baseElement).toBeTruthy();
  });
});
