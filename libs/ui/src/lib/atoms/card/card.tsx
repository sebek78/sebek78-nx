import styled from 'styled-components';
import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
}

const StyledCard = styled.div`
  width: 100%;
  padding: 8px 16px 16px;
  background-color: ${({ theme }) => theme.palette.background.subtle};
  border-top: 1px solid ${({ theme }) => theme.palette.border.default};
  border-bottom: 1px solid ${({ theme }) => theme.palette.border.default};
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: ${({ theme }) => theme.breakpoints.sm};
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.palette.border.default};
  }
`;

export function Card({ children }: CardProps) {
  return <StyledCard>{children}</StyledCard>;
}
