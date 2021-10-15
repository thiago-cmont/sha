import React, {useState, useRef} from 'react';
import {RefreshControl} from 'react-native';

import {useSelector} from 'react-redux';

import {PLACE_SELECTION} from '../../constants/placeSelection';
import PlacesCard from './PlacesCard';
import {SelectData} from './selectData';
import * as S from './styles';

type PlaceSelectorType = {
  places: any;
};

const PlacesList: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlacePicked, setIsPlacePicked] = useState(false);
  const [selectionStep, setSelectionStep] = useState(null);
  const [pickedPlace, setPickedPlace] = useState(null);
  const [pickedDate, setPickedDate] = useState(null);
  const [pickedStartTime, setPickedStartTime] = useState(null);
  const [pickedFinishTime, setPickedFinishTime] = useState(null);
  const times = SelectData;
  const pagerRef = useRef(null);
  const {places} = useSelector((state: PlaceSelectorType) => state.places);

  const refresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const clearStates = () => {
    setIsPlacePicked(false);
    setSelectionStep(null);
    setPickedPlace(null);
    setPickedDate(null);
    setPickedStartTime(null);
    setPickedFinishTime(null);
  };

  const LoadingIndicator = () => {
    return isLoading ? <S.LoadingIndicator /> : null;
  };

  const placeSelectionHandler = place => {
    setIsPlacePicked(true);
    setPickedPlace(place);
    setSelectionStep(PLACE_SELECTION.DATE);
  };

  return (
    <S.Container>
      {!isPlacePicked ? (
        <S.List
          showsVerticalScrollIndicator={false}
          data={places}
          renderItem={({item}) => {
            return <PlacesCard obj={item} onPress={placeSelectionHandler} />;
          }}
          key={({item}) => item.id}
          ListFooterComponent={LoadingIndicator}
          ListHeaderComponent={<S.PageTitle>Places</S.PageTitle>}
          removeClippedSubviews
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => {
                refresh();
              }}
            />
          }
        />
      ) : (
        <>
          <S.SelectionStepWrapper>
            <S.SelectionStep selected={selectionStep === PLACE_SELECTION.DATE}>
              <S.SelectionStepText>Date</S.SelectionStepText>
              <S.SelectionIcon name="arrow-forward-outline" />
            </S.SelectionStep>
            <S.SelectionStep selected={selectionStep === PLACE_SELECTION.TIME}>
              <S.SelectionStepText>Time</S.SelectionStepText>
              <S.SelectionIcon name="arrow-forward-outline" />
            </S.SelectionStep>
            <S.SelectionStep
              selected={selectionStep === PLACE_SELECTION.CONFIRMATION}>
              <S.SelectionStepText>Confirm</S.SelectionStepText>
              <S.SelectionIcon name="checkmark-done" />
            </S.SelectionStep>
          </S.SelectionStepWrapper>
          <S.SelectionPages
            scrollEnabled={false}
            ref={pagerRef}
            initialPage={0}>
            <S.PagerViewInnerWrappers key={0}>
              <S.SelectionDateCalendar
                onDayPress={day => {
                  setPickedDate(day.dateString);
                  setSelectionStep(PLACE_SELECTION.TIME);
                  pagerRef.current.setPage(1);
                }}
              />
            </S.PagerViewInnerWrappers>
            <S.PagerViewInnerWrappers key={1}>
              <S.Wrapper>
                <S.TimesTitle>
                  {pickedStartTime === null ? 'Start Time' : 'Finish Time'}
                </S.TimesTitle>
                <S.TimeContainer>
                  {times &&
                    times.map(time => (
                      <>
                        <S.Times
                          onPress={() => {
                            if (pickedStartTime === null) {
                              setPickedStartTime(time);
                            } else {
                              setSelectionStep(PLACE_SELECTION.CONFIRMATION);
                              setPickedFinishTime(time);
                              pagerRef.current.setPage(2);
                            }
                          }}>
                          <S.TimesText>{time}</S.TimesText>
                        </S.Times>
                      </>
                    ))}
                </S.TimeContainer>
              </S.Wrapper>
            </S.PagerViewInnerWrappers>
            <S.PagerViewInnerWrappers key={2}>
              <S.ConfirmationContainer>
                <S.TimesTitle>Reservation Confirmed!</S.TimesTitle>
                <S.ConfirmIcon name="checkmark-done" />
              </S.ConfirmationContainer>
            </S.PagerViewInnerWrappers>
          </S.SelectionPages>
          <S.BackText onPress={() => clearStates()}>
            Back to the start
          </S.BackText>
        </>
      )}
    </S.Container>
  );
};
export default PlacesList;
