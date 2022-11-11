import { render } from '@testing-library/react';

import TableHeaderCell from './table-header-cell';

describe('TableHeaderCell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableHeaderCell />);
    expect(baseElement).toBeTruthy();
  });
});
