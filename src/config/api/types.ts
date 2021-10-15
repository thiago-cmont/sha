import {AxiosInstance} from 'axios';

import {CreateFeedInterface} from './feed';
import {CreatePlacesInterface} from './places';
import {CreateUserInterface} from './user/types';

export interface APIMethodsInterface {
  user: CreateUserInterface;
  feed: CreateFeedInterface;
  places: CreatePlacesInterface;
}

export interface APIInterface {
  instance: AxiosInstance;
  methods: APIMethodsInterface;
}
