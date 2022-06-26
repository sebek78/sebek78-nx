import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UserProfileProps {}

const StyledUserProfile = styled.div`
  color: pink;
`;

export function UserProfile(props: UserProfileProps) {
  return (
    <StyledUserProfile>
      <h1>Welcome to UserProfile!</h1>
      <Link to="/">Strona główna</Link>
    </StyledUserProfile>
  );
}
