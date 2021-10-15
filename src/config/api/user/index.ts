import {AxiosInstance} from 'axios';
import reactotron from 'reactotron-react-native';

import {UserListDataType, CreateUserInterface} from './types';

export default function createUserApi(api: AxiosInstance): CreateUserInterface {
  async function getUser(): UserListDataType {
    const baseUri = '/users';
    const response = await api.get(baseUri).catch(err => {
      reactotron.log('err on getUsers', err);
      throw err;
    });
    if (response) {
      return response.data;
    }
    return null;
  }

  return {
    getUser,
  };
}

export * from './types';
