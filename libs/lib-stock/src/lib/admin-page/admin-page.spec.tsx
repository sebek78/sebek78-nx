import { render } from '@testing-library/react';

import AdminPage from './admin-page';

describe('AdminPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminPage />);
    expect(baseElement).toBeTruthy();
  });
});
