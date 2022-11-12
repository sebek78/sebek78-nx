import { render } from '@testing-library/react';

import TableContent from './table-content';

describe('TableContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableContent />);
    expect(baseElement).toBeTruthy();
  });
});
