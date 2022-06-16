import styled from 'styled-components';

export interface ErrorLabelProps {
  message?: string;
}

const StyledErrorLabel = styled.div`
  display: block;
  margin: ${({ theme }) => theme.spacing(1)} 0;
  color: ${({ theme }) => theme.palette.text.danger};
  font-size: ${({ theme }) => theme.typography.mobile.body1.fontSize};
  line-height: ${({ theme }) => theme.typography.mobile.body1.lineHeight};
  width: 100%;
  text-align: left;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.desktop.body1.fontSize};
    line-height: ${({ theme }) => theme.typography.desktop.body1.lineHeight};
  }
`;

export function ErrorLabel({ message }: ErrorLabelProps) {
  if (!message) return null;

  return <StyledErrorLabel>{message}</StyledErrorLabel>;
}

export default ErrorLabel;
