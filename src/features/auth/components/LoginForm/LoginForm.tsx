import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import {
  ErrorMessage,
  LoginFormButton,
  LoginFormElement,
  LoginFormInput,
  LoginFormLabel,
  LoginFormTitle,
  LoginFormWrapper,
} from './style';

export const LoginForm = (): JSX.Element => {
  const schema = z.object({
    email: z
      .string()
      .min(1, { message: 'Email is required' })
      .email('Invalid email address'),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' }),
  });

  type ValidationSchemaType = z.infer<typeof schema>;

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<ValidationSchemaType> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data); // REVIEW
  };

  const hasError = Object.keys(errors).length > 0;

  return (
    <LoginFormWrapper>
      <LoginFormTitle>Sign In</LoginFormTitle>
      <LoginFormElement onSubmit={handleSubmit(onSubmit)}>
        <LoginFormLabel htmlFor="email">Username</LoginFormLabel>
        <LoginFormInput id="email" type="email" {...register('email')} />

        <LoginFormLabel htmlFor="password">Password</LoginFormLabel>
        <LoginFormInput
          id="password"
          type="password"
          autoComplete="current-password"
          {...register('password')}
        />

        {hasError && (
          <ErrorMessage>
            {Object.values(errors).map(({ message }) => {
              return <div key={message}>{message}</div>;
            })}
          </ErrorMessage>
        )}
        <LoginFormButton type="submit">Login</LoginFormButton>
      </LoginFormElement>
    </LoginFormWrapper>
  );
};
