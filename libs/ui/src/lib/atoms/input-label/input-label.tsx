import styled from 'styled-components';

export interface InputLabelProps {
  text: string;
}

const StyledInputLabel = styled.label`
  display: block;
  margin: ${({ theme }) => theme.spacing(1)} 0;
  color: ${({ theme }) => theme.palette.text.default};
  font-size: ${({ theme }) => theme.typography.mobile.h3.fontSize};
  line-height: ${({ theme }) => theme.typography.mobile.h3.lineHeight};
  width: 100%;
  text-align: left;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.desktop.h3.fontSize};
    line-height: ${({ theme }) => theme.typography.desktop.h3.lineHeight};
  }
`;

export function InputLabel({ text }: InputLabelProps) {
  return <StyledInputLabel>{text}</StyledInputLabel>;
}
