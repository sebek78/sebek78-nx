import styled from 'styled-components';

export type ButtonVariant = 'accent' | 'success';

export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: ButtonVariant;
  type?: 'submit' | 'button';
}

const StyledButton = styled.button<{ variant: ButtonVariant }>`
  margin: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(2)}`};
  font-size: ${({ theme }) => theme.typography.mobile.body2.fontSize};
  line-height: ${({ theme }) => theme.typography.mobile.body2.lineHeight};
  letter-spacing: 1px;
  cursor: pointer;
  user-select: none;
  color: ${({ theme }) => theme.palette.text.default};

  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case 'accent':
        return theme.palette.background.accentEmphasis;
      default:
        return theme.palette.background.successEmphasis;
    }
  }};

  border-radius: 6px;
  border: 1px solid;
  border-color: ${({ theme, variant }) => {
    switch (variant) {
      case 'accent':
        return theme.palette.border.accent;
      default:
        return theme.palette.border.success;
    }
  }};

  &:hover {
    background-color: ${({ theme, variant }) => {
      switch (variant) {
        case 'accent':
          return theme.palette.background.accentSubtle;
        default:
          return theme.palette.background.successSubtle;
      }
    }};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.desktop.body2.fontSize};
    line-height: ${({ theme }) => theme.typography.desktop.body2.lineHeight};
  }
`;

export function Button({
  label,
  onClick,
  variant = 'accent',
  type = 'button',
}: ButtonProps) {
  return (
    <StyledButton onClick={onClick} variant={variant} type={type}>
      {label}
    </StyledButton>
  );
}
