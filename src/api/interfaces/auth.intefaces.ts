export interface LoginReqData {
  email: string;
  password: string;
}

export interface LoginResData {
  error?: string;
  success: boolean;
  token?: string;
}

export interface UserProfile {
  _id: string;
  confirmEmailToken: string;
  createdAt: string;
  email: string;
  firstName?: string;
  isEmailConfirmed: boolean;
  lastName?: string;
  profileImage: string;
  resetPasswordExpire?: string;
  resetPasswordToken?: string;
  role: string;
  twoFactorCode?: string;
  twoFactorCodeExpire?: string;
  twoFactorEnable: boolean;
  updatedAt: string;
  username: string;
}
