import { useApiQuery } from '@sebek78-nx/data-access';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MainPageProps {}

const StyledMainPage = styled.div`
  color: pink;
`;

export function MainPage(props: MainPageProps) {
  const { data, error, isError, isLoading, isSuccess } = useApiQuery(
    'testData',
    '/'
  );

  console.log(data);

  return (
    <StyledMainPage>
      <h1>Welcome to MainPage!</h1>
    </StyledMainPage>
  );
}
