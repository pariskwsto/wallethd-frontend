import { axiosInstance } from '../axiosInstance';
import { LOCAL_STORAGE_TOKEN_NAME } from '../config';
import { LoginReqData, LoginResData } from '../interfaces';

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
