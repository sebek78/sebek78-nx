import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TextInputProps {}

const StyledTextInput = styled.input`
  display: block;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(1)}`};
  font-size: ${({ theme }) => theme.typography.desktop.body2.fontSize};
  line-height: ${({ theme }) => theme.typography.desktop.body2.lineHeight};
  color: ${({ theme }) => theme.palette.text.default};
  background-color: ${({ theme }) => theme.palette.background.default};
  border: 1px solid ${({ theme }) => theme.palette.border.default};
  border-radius: 6px;
  outline: none;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.palette.text.accent};
  }
`;

export function TextInput(props: TextInputProps) {
  return <StyledTextInput />;
}
