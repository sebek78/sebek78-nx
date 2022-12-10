import { ReactNode } from 'react';
import styled from 'styled-components';

type FlexDirection = 'row' | 'column';
type JustifyContent = 'center' | 'space-between' | 'flex-start';
type AlignItems = 'center' | 'flex-start';
type FlexWrap = 'nowrap' | 'wrap';

export interface FlexboxProps {
  direction: FlexDirection;
  justify: JustifyContent;
  align: AlignItems;
  wrap: FlexWrap;
  children: ReactNode;
}

const StyledFlexbox = styled.div<FlexboxProps>`
  display: flex;
  height: 100%;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-wrap: ${({ wrap }) => wrap};
`;

export function Flexbox({
  direction = 'row',
  justify = 'center',
  align = 'center',
  wrap = 'nowrap',
  children,
}: Partial<FlexboxProps>) {
  return (
    <StyledFlexbox
      direction={direction}
      justify={justify}
      align={align}
      wrap={wrap}
    >
      {children}
    </StyledFlexbox>
  );
}
