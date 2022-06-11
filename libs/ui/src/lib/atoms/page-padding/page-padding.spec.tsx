import { render } from '@testing-library/react';

import PagePadding from './page-padding';

describe('PagePadding', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PagePadding />);
    expect(baseElement).toBeTruthy();
  });
});
