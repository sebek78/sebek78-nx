import { memo } from 'react';
import styled from 'styled-components';
import { useApiQuery } from '@sebek78-nx/data-access';
import { Routes, Route } from 'react-router-dom';
import { UserProfile } from '../user-profile/user-profile';

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
      <Routes>
        <Route path="/" element={<h1>Main Page</h1>} />
        <Route path="profile" element={<UserProfile />} />
      </Routes>
    </StyledMainPage>
  );
});
