import styled from 'styled-components';

export interface LinkButtonProps {
  label: string;
  onClick: () => void;
}

const StyledLinkButton = styled.button`
  margin: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(2)}`};
  font-size: ${({ theme }) => theme.typography.mobile.body2.fontSize};
  line-height: ${({ theme }) => theme.typography.mobile.body2.lineHeight};
  letter-spacing: 1px;
  color: ${({ theme }) => theme.palette.text.accent};
  background-color: transparent;
  cursor: pointer;
  user-select: none;
  border-radius: 6px;
  border: 1px solid;
  border-color: transparent;
  &:hover {
    background-color: ${({ theme }) => theme.palette.background.accentSubtle};
    border-color: ${({ theme }) => theme.palette.border.accent};
  }
`;

export function LinkButton({ label, onClick }: LinkButtonProps) {
  return (
    <StyledLinkButton type="button" onClick={onClick}>
      {label}
    </StyledLinkButton>
  );
}
