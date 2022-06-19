import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  CloseIcon,
  ErrorLabel,
  Flexbox,
  FormLabel,
  InputLabel,
  TextInput,
} from '@sebek78-nx/ui';
import { registerSchema } from '@sebek78-nx/util';
import { IRegisterFormInput } from '@sebek78-nx/types';
import { registerUser } from '@sebek78-nx/data-access';
import { Form } from '@sebek78-nx/ui';

export interface RegisterFormProps {
  closeForm: () => void;
}

export function RegisterForm({ closeForm }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormInput>({
    resolver: yupResolver(registerSchema),
  });

  const mutation = useMutation(registerUser, {
    onSuccess: ({ data }) => {
      // TODO: show register success message
      console.log(data);
      closeForm();
    },
    onError: (error: AxiosError) => {
      // TODO: show register incorrect message
      console.log(error.response?.data);
    },
  });

  const onSubmit: SubmitHandler<IRegisterFormInput> = (
    data: IRegisterFormInput
  ) => {
    mutation.mutate(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Flexbox justify="space-between">
        <FormLabel text="Rejestracja" />
        <CloseIcon onClick={closeForm} />
      </Flexbox>
      <InputLabel text="Nazwa użytkownika" />
      <ErrorLabel message={errors.username?.message} />
      <TextInput register={register} label="username" />
      <InputLabel text="Hasło" />
      <ErrorLabel message={errors.password?.message} />
      <TextInput register={register} label="password" type="password" />
      <InputLabel text="Powtórz hasło" />
      <ErrorLabel message={errors.password2?.message} />
      <TextInput register={register} label="password2" type="password" />
      <Flexbox>
        <Button
          variant="success"
          label="Rejestruj"
          onClick={() => undefined}
          type="submit"
        />
      </Flexbox>
    </Form>
  );
}
