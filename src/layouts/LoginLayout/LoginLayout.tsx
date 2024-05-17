import { ReactNode } from 'react';

import { LoginLayoutContainer, LoginLayoutWrapper } from './style';

interface LoginLayoutProps {
  children: ReactNode;
}

export const LoginLayout = ({ children }: LoginLayoutProps): JSX.Element => {
  return (
    <LoginLayoutWrapper>
      <LoginLayoutContainer>{children}</LoginLayoutContainer>
    </LoginLayoutWrapper>
  );
};
