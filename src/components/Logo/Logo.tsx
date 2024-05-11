import { HiMiniWallet } from 'react-icons/hi2';

import { LogoLink, LogoWrapper } from './style';

export const Logo = (): JSX.Element => {
  return (
    <LogoWrapper>
      <LogoLink to="/">
        <HiMiniWallet size={28} title="WalletHD" /> WalletHD
      </LogoLink>
    </LogoWrapper>
  );
};
