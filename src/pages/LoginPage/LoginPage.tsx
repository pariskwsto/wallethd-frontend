import { LoginLayout } from '../../layouts';

import {
  LoginPageBgImage,
  LoginPageBgImageContainer,
  LoginPageContainer,
  LoginPageWrapper,
} from './style';

export const LoginPage = (): JSX.Element => {
  return (
    <LoginLayout>
      <LoginPageWrapper>
        <LoginPageBgImageContainer>
          <LoginPageBgImage />
        </LoginPageBgImageContainer>
        <LoginPageContainer>LoginForm</LoginPageContainer>
      </LoginPageWrapper>
    </LoginLayout>
  );
};
