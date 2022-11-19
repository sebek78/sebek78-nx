import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useCompanies from './use-companies';

describe('useCompanies', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useCompanies());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
