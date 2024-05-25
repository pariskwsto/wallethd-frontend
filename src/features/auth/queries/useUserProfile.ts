import { useQuery } from '@tanstack/react-query';

import { getUserProfileApi, UserProfile } from '../../../api';

export const useUserProfile = (): {
  isAuthenticated: boolean;
  isPendingUserProfile: boolean;
  userProfile: UserProfile | undefined;
} => {
  const { data: userProfileData, isPending: isPendingUserProfile } = useQuery({
    queryKey: ['auth', 'userProfile'],
    queryFn: getUserProfileApi,
    retry: false,
  });

  return {
    isPendingUserProfile,
    userProfile: userProfileData?.data,
    isAuthenticated: !!userProfileData?.success,
  };
};
