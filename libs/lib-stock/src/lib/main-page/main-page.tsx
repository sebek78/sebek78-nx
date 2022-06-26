import { memo } from 'react';
import styled from 'styled-components';
import { useApiQuery } from '@sebek78-nx/data-access';

const StyledMainPage = styled.div`
  color: pink;
`;

export const MainPage = memo(function MainPage() {
  const { data, error, isError, isLoading, isSuccess } = useApiQuery(
    'testData',
    '/'
  );

  console.log(new Date().toLocaleTimeString(), data);

  return (
    <StyledMainPage>
      <h1>Welcome to MainPage!</h1>
    </StyledMainPage>
  );
});
