import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useUserProfile } from '../../features';
import { Spinner } from '../../ui';

import {
  LoginLayoutContainer,
  LoginLayoutFullPage,
  LoginLayoutWrapper,
} from './style';

interface LoginLayoutProps {
  children: ReactNode;
}

export const LoginLayout = ({ children }: LoginLayoutProps): JSX.Element => {
  const { isAuthenticated, isPendingUserProfile } = useUserProfile();

  if (isPendingUserProfile) {
    return (
      <LoginLayoutFullPage>
        <Spinner />
      </LoginLayoutFullPage>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <LoginLayoutWrapper>
      <LoginLayoutContainer>{children}</LoginLayoutContainer>
    </LoginLayoutWrapper>
  );
};
