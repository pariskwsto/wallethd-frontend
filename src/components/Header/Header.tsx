import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { MdLogout } from 'react-icons/md';

import { UserAvatar } from '../UserAvatar';

import { HeaderContainer, HeaderWrapper } from './style';

export const Header = (): JSX.Element => {
  const isDarkMode = false;

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <UserAvatar />
        {isDarkMode ? <IoMdSunny size={26} /> : <IoMdMoon size={26} />}
        <MdLogout size={26} />
      </HeaderContainer>
    </HeaderWrapper>
  );
};
