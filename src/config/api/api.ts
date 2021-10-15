import Axios from 'axios';

import createFeedApi from './feed';
import createPlacesApi from './places';
import {APIInterface, APIMethodsInterface} from './types';
import createUserApi from './user';

function createApi() {
  const api: APIInterface = {
    instance: Axios.create({
      baseURL: 'http://localhost:3000',
      timeout: 5000,
    }),
    methods: {} as APIMethodsInterface,
  };

  api.methods.user = createUserApi(api.instance);
  api.methods.feed = createFeedApi(api.instance);
  api.methods.places = createPlacesApi(api.instance);

  return api;
}

export default createApi();

export * from './types';
