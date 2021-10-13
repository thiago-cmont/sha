import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
// eslint-disable-next-line import/no-mutable-exports
let reactotron;

if (__DEV__) {
  console.log(Config.REACTOTRON_IP);
  reactotron = Reactotron.configure({
    host: Config.REACTOTRON_IP,
  })
    .useReactNative()
    .use(reactotronRedux())
    .configure()
    .use(sagaPlugin({except: ['']}))
    .setAsyncStorageHandler(AsyncStorage)
    .connect();
  reactotron.clear();
}

export {reactotron};
