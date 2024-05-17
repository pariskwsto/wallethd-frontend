import styled from 'styled-components';

export const LoginPageWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const LoginPageBgImageContainer = styled.div`
  display: block;
  position: relative;
  width: 50%;
  height: 100%;
`;

export const LoginPageBgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/assets/img/wallet-login-bg-img.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 0;
`;
