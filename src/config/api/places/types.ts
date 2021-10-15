import {EnableSchedulerTracing} from 'scheduler/tracing';

export type PlacesType = {
  apartmentComplexId: number;
  places: [
    {
      image: string;
      id: number;
      label: EnableSchedulerTracing;
      timeAvailable: [{min: string; max: string}];
      available: boolean;
      inUse: [
        {
          apartmentOwnerId: number;
          date: string;
          time: [
            {
              start: string;
              finish: string;
            },
          ];
        },
      ];
    },
  ];
};

export type PlacesListDataType = Promise<PlacesType[]>;

export interface CreatePlacesInterface {
  getPlaces(userApartmentComplexId: number): PlacesListDataType;
}
