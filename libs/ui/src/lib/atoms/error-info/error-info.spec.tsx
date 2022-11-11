import { render } from '@testing-library/react';

import ErrorInfo from './error-info';

describe('ErrorInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ErrorInfo />);
    expect(baseElement).toBeTruthy();
  });
});
