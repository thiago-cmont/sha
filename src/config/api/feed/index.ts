import {AxiosInstance} from 'axios';
import reactotron from 'reactotron-react-native';

import {FeedListDataType, CreateFeedInterface} from './types';

export default function createFeedApi(api: AxiosInstance): CreateFeedInterface {
  async function getFeed(): FeedListDataType {
    const baseUri = '/feed';
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
    getFeed,
  };
}

export * from './types';
