import { render } from '@testing-library/react';

import { MessageLabel } from './message-label';

describe('ErrorLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MessageLabel />);
    expect(baseElement).toBeTruthy();
  });
});
