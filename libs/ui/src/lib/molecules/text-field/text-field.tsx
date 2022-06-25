import { MessageType } from '@sebek78-nx/types';
import { Path, UseFormRegister } from 'react-hook-form';
import { InputLabel } from '../../atoms/input-label/input-label';
import { MessageLabel } from '../../atoms/message-label/message-label';
import { TextInput } from '../../atoms/text-input/text-input';

export interface TextFieldProps<T> {
  labelText: string;
  message: string | undefined;
  messageType: MessageType;
  register: UseFormRegister<T>;
  inputLabel: Path<T>;
  type?: 'text' | 'password';
}

export function TextField<T>({
  labelText,
  message,
  messageType,
  register,
  inputLabel,
  type = 'text',
}: TextFieldProps<T>) {
  return (
    <>
      <InputLabel text={labelText} />
      <MessageLabel message={message} type={messageType} />
      <TextInput register={register} label={inputLabel} type={type} />
    </>
  );
}
