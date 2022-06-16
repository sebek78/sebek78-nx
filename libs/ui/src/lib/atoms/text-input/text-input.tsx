import {
  Message,
  Path,
  UseFormRegister,
  ValidationRule,
} from 'react-hook-form';
import styled from 'styled-components';

export interface TextInputProps<T> {
  register: UseFormRegister<T>;
  label: Path<T>;
  // required: Partial<{
  //   required: Message | ValidationRule<boolean>;
  //   maxLength: ValidationRule<number>;
  //   minLength: ValidationRule<number>;
  // }>;
  type?: 'text' | 'password';
}

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

export function TextInput<T>({
  register,
  label,
  // required,
  type = 'text',
}: TextInputProps<T>) {
  return <StyledTextInput {...register(label /*, required*/)} type={type} />;
}
