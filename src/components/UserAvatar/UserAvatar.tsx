import { UserAvatarPhoto, UserAvatarWrapper } from './style';

export const UserAvatar = (): JSX.Element => {
  const avatar = 'default-user.jpg';
  const fullName = 'Paris Kostopoulos';

  return (
    <UserAvatarWrapper>
      <UserAvatarPhoto
        src={avatar || 'default-user.jpg'}
        alt={`Avatar of ${fullName}`}
      />
      <span>{fullName}</span>
    </UserAvatarWrapper>
  );
};
