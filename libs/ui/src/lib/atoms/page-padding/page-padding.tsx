import { ReactNode } from 'react';
import styled from 'styled-components';

export interface PagePaddingProps {
  children: ReactNode;
}

const StyledPagePadding = styled.div`
  width: 100vw;
  height: 100%;
  padding: ${({ theme }) => `0 ${theme.spacing(1)}`};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => `0 ${theme.spacing(2)}`};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `0 ${theme.spacing(3)}`};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => `0 ${theme.spacing(4)}`};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: ${({ theme }) => `0 ${theme.spacing(6)}`};
  }
`;

export function PagePadding({ children }: PagePaddingProps) {
  return <StyledPagePadding>{children}</StyledPagePadding>;
}
