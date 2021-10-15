import {s} from 'react-native-size-matters';
import styled from 'styled-components/native';

export const FeedListImage = styled.Image.attrs({resizeMode: 'stretch'})`
  width: ${s(150)}px;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
