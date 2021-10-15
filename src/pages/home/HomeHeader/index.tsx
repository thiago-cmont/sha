import React from 'react';

import {useSelector} from 'react-redux';

import {appIcon} from '../../../assets';
import SideMenu from '../../../components/SideMenu';
import * as S from './styles';

type UserSelectType = {
  user: any;
};
const HomeHeader: React.FC = () => {
  const {user} = useSelector((state: UserSelectType) => state);
  return (
    <S.Container>
      <SideMenu />
      <S.RowView>
        <S.AppIcon type="CUSTOM" customSource={appIcon} />
        <S.AppIconText type="default" level="2">
          Sweet Home App
        </S.AppIconText>
      </S.RowView>
      <S.HeaderTitles type="default">{user?.name}</S.HeaderTitles>
      <S.HeaderTitles type="default">
        Apartment {user?.apartment}
      </S.HeaderTitles>
    </S.Container>
  );
};
export default HomeHeader;
