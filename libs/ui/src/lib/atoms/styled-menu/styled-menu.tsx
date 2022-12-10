import { ReactNode } from 'react';
import styled from 'styled-components';

export interface StyledMenuProps {
  children: ReactNode;
}

const StyledDiv = styled.div`
  height: 40px;
  line-height: 40px;
  padding: 0 ${(props) => props.theme.spacing(4)};
  border-bottom: 2px solid ${(props) => props.theme.palette.border.default};
  background-color: ${(props) => props.theme.palette.background.default};
`;

export function StyledMenu({ children }: StyledMenuProps) {
  return <StyledDiv>{children}</StyledDiv>;
}
