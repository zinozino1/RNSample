
import {observable} from 'mobx';
import { useObserver } from 'mobx-react';
import { View } from 'react-native';

const data1 = observable({
  field1: '',
  filed2: '',
});

const data2 = observable({
  field1: '',
  filed2: '',
});

const method1 = () => {
  return 1;
};

const method2 = async () => {
  const res = await fetch(...);
};

const Store = () => {
  return {
    data1,
    data2,
    method1,
    method2,
  };
};

export default Store


const Component1 =  () => {

  const {store} =  Store()

  return useObserver(() => {
    return  <View></View>
  })
}