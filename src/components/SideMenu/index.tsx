import React, {useState, useRef} from 'react';
import {Animated} from 'react-native';

import {useDispatch} from 'react-redux';

import {asyncLogoutUser} from '../../store/ducks/user';
import {SCREEN_WIDTH} from '../../utils/dimensions';
import * as S from './style';

const SideMenu: React.FC = () => {
  const [openned, setOpenned] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);
  const sideMenuWidth = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const sideMenuWidthHandler = () => {
    setAnimationFinished(false);
    Animated.timing(sideMenuWidth, {
      toValue: openned ? 0 : 1,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      setOpenned(!openned);
      setAnimationFinished(true);
    });
  };

  const logout = () => {
    dispatch(asyncLogoutUser());
  };

  return (
    <>
      <S.Container
        style={{
          width: sideMenuWidth.interpolate({
            inputRange: [0, 1],
            outputRange: [0, SCREEN_WIDTH * 0.5],
          }),
        }}>
        {animationFinished && (
          <>
            <S.PageTitle onPress={() => sideMenuWidthHandler()}>
              Close Menu
            </S.PageTitle>
            <S.PageTitle onPress={() => logout()}>Logout</S.PageTitle>
          </>
        )}
      </S.Container>
      {!openned && (
        <S.Hamburguer name="md-menu" onPress={() => sideMenuWidthHandler()} />
      )}
    </>
  );
};

export default SideMenu;
