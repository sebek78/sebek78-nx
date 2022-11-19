import { memo } from 'react';
import styled from 'styled-components';
import { Tagline } from '@sebek78-nx/ui';

const StyledHomepage = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily.regular};
`;

export const Homepage = memo(function Homepage() {
  return (
    <StyledHomepage>
      <Tagline text="Część tego, co zarabiasz, powinieneś zatrzymać dla siebie." />
    </StyledHomepage>
  );
});
