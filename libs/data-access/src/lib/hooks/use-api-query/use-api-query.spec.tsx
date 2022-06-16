import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useApiQuery from './use-api-query';

describe('useApiQuery', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useApiQuery());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
