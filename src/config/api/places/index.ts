import {AxiosInstance} from 'axios';
import reactotron from 'reactotron-react-native';

import {CreatePlacesInterface, PlacesListDataType} from './types';

export default function createPlacesApi(
  api: AxiosInstance,
): CreatePlacesInterface {
  async function getPlaces(userApartmentComplexId): PlacesListDataType {
    const baseUri = '/apartmentComplexPlaces';
    const response = await api.get(baseUri).catch(err => {
      reactotron.log('err on getUsers', err);
      throw err;
    });
    if (response) {
      const userApartmentComplex = response.data.map((user, index) => {
        if (user.apartmentComplexId === userApartmentComplexId) {
          return index;
        }
        return false;
      });
      if (userApartmentComplex) {
        return response.data[userApartmentComplex].places;
      }
    }
    return null;
  }
  return {
    getPlaces,
  };
}

export * from './types';
