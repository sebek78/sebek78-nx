import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LibStockProps {}

const StyledLibStock = styled.div`
  color: pink;
`;

export function LibStock(props: LibStockProps) {
  return (
    <StyledLibStock>
      <h1>Welcome to LibStock!</h1>
    </StyledLibStock>
  );
}

export default LibStock;
