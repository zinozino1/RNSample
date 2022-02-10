import {AsyncStorage, Keyboard} from 'react-native';

export const sleep = time => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
};

export const fetchingAsyncStorageAndDoJob = async (
  loadingCb,
  updatedArray,
  stateCb,
  type,
) => {
  try {
    loadingCb(true);
    const res = await AsyncStorage.getItem('task');
    if (res) {
      const updatedTodos = updatedArray;
      stateCb();
      Keyboard.dismiss();
      await AsyncStorage.setItem('task', JSON.stringify(updatedTodos));
      loadingCb(false);
    }
  } catch (error) {
    console.log(error);
  }
};
