import { MessageType } from '@sebek78-nx/types';
import styled from 'styled-components';

export interface MessageLabelProps {
  message?: string;
  type?: MessageType;
}

const StyledMessageLabel = styled.div<{ type: MessageType }>`
  display: block;
  margin: ${({ theme }) => theme.spacing(1)} 0;
  color: ${({ theme, type }) => {
    switch (type) {
      case 'error':
        return theme.palette.text.danger;
      case 'success':
        return theme.palette.text.success;
      default:
        return theme.palette.text.default;
    }
  }};
  font-size: ${({ theme }) => theme.typography.mobile.body1.fontSize};
  line-height: ${({ theme }) => theme.typography.mobile.body1.lineHeight};
  width: 100%;
  text-align: left;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.desktop.body1.fontSize};
    line-height: ${({ theme }) => theme.typography.desktop.body1.lineHeight};
  }
`;

export function MessageLabel({ message, type = 'default' }: MessageLabelProps) {
  if (!message) return null;

  return <StyledMessageLabel type={type}>{message}</StyledMessageLabel>;
}
