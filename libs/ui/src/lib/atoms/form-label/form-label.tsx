import styled from 'styled-components';

export interface FormLabelProps {
  text: string;
}

const StyledFormLabel = styled.div`
  color: ${({ theme }) => theme.palette.text.accent};
  font-size: ${({ theme }) => theme.typography.mobile.h2.fontSize};
  line-height: ${({ theme }) => theme.typography.mobile.h2.lineHeight};
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
  width: 100%;
  text-align: left;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.desktop.h2.fontSize};
    line-height: ${({ theme }) => theme.typography.desktop.h2.lineHeight};
  }
`;

export function FormLabel({ text }: FormLabelProps) {
  return <StyledFormLabel>{text}</StyledFormLabel>;
}
