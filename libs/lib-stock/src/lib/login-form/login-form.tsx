import styled from 'styled-components';
import {
  Button,
  CloseIcon,
  Flexbox,
  FormLabel,
  InputLabel,
  TextInput,
} from '@sebek78-nx/ui';

export interface LoginFormProps {
  closeLoginForm: () => void;
}

const StyledLoginForm = styled.div`
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

export function LoginForm({ closeLoginForm }: LoginFormProps) {
  return (
    <StyledLoginForm>
      <Flexbox justify="space-between">
        <FormLabel text="Logowanie" />
        <CloseIcon onClick={closeLoginForm} />
      </Flexbox>
      <InputLabel text="Login" />
      <TextInput />
      <InputLabel text="Password" />
      <TextInput />
      <Flexbox>
        <Button variant="success" label="Zaloguj" onClick={() => undefined} />
      </Flexbox>
    </StyledLoginForm>
  );
}
