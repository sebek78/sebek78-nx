import styled from 'styled-components';

// TODO: move positioning to separate component or to props
// TODO: set  no border and width 100% for  mobile view

export const Form = styled.form`
  width: 320px;
  padding: 8px 16px 16px;
  position: absolute;
  top: 136px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.palette.background.subtle};
  border: 1px solid ${({ theme }) => theme.palette.border.default};
  border-radius: 6px;
`;
