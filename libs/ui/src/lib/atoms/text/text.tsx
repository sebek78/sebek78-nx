import { ReactNode } from 'react';
import styled from 'styled-components';

export interface TextProps {
  children: ReactNode;
}

const StyledText = styled.div`
  color: ${({ theme }) => theme.palette.text.default};
`;

export function Text({ children }: TextProps) {
  return <StyledText>{children}</StyledText>;
}
