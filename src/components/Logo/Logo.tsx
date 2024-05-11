import { LogoImg, LogoWrapper } from './style';

export const Logo = (): JSX.Element => {
  return (
    <LogoWrapper>
      <LogoImg src="/logo.svg" /> WalletHD
    </LogoWrapper>
  );
};
