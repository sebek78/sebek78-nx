import styled from 'styled-components';
import { Tagline } from '@sebek78-nx/ui';

/* eslint-disable-next-line */
export interface HomepageProps {}

const StyledHomepage = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily.regular};
`;

export function Homepage(props: HomepageProps) {
  return (
    <StyledHomepage>
      <Tagline text="Część tego, co zarabiasz, powinieneś zatrzymać dla siebie." />
    </StyledHomepage>
  );
}
