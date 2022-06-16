import { render } from '@testing-library/react';

import ErrorLabel from './error-label';

describe('ErrorLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ErrorLabel />);
    expect(baseElement).toBeTruthy();
  });
});
