import {AsyncStorage, Keyboard} from 'react-native';

export const sleep = (time: Number): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
};
