export type PlaceCardPropType = {
  image: string;
  timeAvailable: {
    min: string;
    max: string;
  };
  label: string;
};

export interface PlacesCardInterface {
  obj: PlaceCardPropType;
  onPress: (place: PlaceCardPropType) => void;
}
