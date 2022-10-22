import { render } from '@testing-library/react';

import DeleteUserForm from './delete-user-form';

describe('DeleteUserForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DeleteUserForm />);
    expect(baseElement).toBeTruthy();
  });
});
