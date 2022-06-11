import styled from 'styled-components';

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  margin: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(2)}`};
  font-size: ${({ theme }) => theme.typography.mobile.body2.fontSize};
  line-height: ${({ theme }) => theme.typography.mobile.body2.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  cursor: pointer;
  user-select: none;
  background-color: ${({ theme }) => theme.palette.background.accentEmphasis};
  color: ${({ theme }) => theme.palette.text.primary};
  border: 1px solid;
  border-color: ${({ theme }) => theme.palette.border.accentEmphasis};
  border-radius: 6px;
  &:hover {
    background-color: ${({ theme }) => theme.palette.background.accent};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.desktop.body2.fontSize};
    line-height: ${({ theme }) => theme.typography.desktop.body2.lineHeight};
  }
`;

export function Button({ label, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
}
