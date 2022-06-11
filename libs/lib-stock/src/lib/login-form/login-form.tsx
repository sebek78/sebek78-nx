import { CloseIcon } from '@sebek78-nx/ui';
import styled from 'styled-components';

export interface LoginFormProps {
  closeLoginForm: () => void;
}

const StyledLoginForm = styled.div`
  width: 320px;
  /* height */
  position: absolute;
  top: 136px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.palette.background.subtle};
  border: 1px solid ${({ theme }) => theme.palette.border.default};
  border-radius: 6px;
`;

export function LoginForm({ closeLoginForm }: LoginFormProps) {
  return (
    <StyledLoginForm>
      <CloseIcon onClick={closeLoginForm} />
    </StyledLoginForm>
  );
}
