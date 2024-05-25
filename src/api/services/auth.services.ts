import { axiosInstance } from '../axiosInstance';
import { LOCAL_STORAGE_TOKEN_NAME } from '../config';
import {
  ApiGenericResponse,
  LoginReqData,
  LoginResData,
  UserProfile,
} from '../interfaces';

const authUrl = '/v1/auth';

export const loginApi = async (data: LoginReqData): Promise<LoginResData> => {
  const res = await axiosInstance.post(`${authUrl}/login`, data);

  const { token } = res.data;

  if (token) {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, token);
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  return res.data;
};

export const getUserProfileApi = async (): Promise<
  ApiGenericResponse<UserProfile>
> => {
  const res = await axiosInstance.get(`${authUrl}/profile`);
  return res.data;
};
