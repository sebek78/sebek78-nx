import { render } from '@testing-library/react';

import { TableCell } from './table-cell';

describe('TableCell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableCell data="" />);
    expect(baseElement).toBeTruthy();
  });
});
