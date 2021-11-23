/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
//import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import {API_URL} from './lib/api';

const renderItems = ({item}) => {
  return (
    <View style={styles.contentItem}>
      <View style={styles.contentProfile}>
        <Text>{item.id}</Text>
      </View>
      <View style={styles.contentTxt}>
        <Text>{item.name}</Text>
      </View>
    </View>
  );
};

const App = () => {
  const [mode, setMode] = useState('rank');
  const [data, setData] = useState(
    Array.from({length: 20}).map((v, i) => {
      return {id: i, name: 'msg'};
    }),
  );
  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    const data = fetch(API_URL)
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
      });
  }, []);

  const onEndReached = () => {
    fetchingData();
  };

  const fetchingData = () => {
    console.log('data fetching');
    const mockData = Array.from({length: 10}).map((v, i) => {
      return {id: i, name: 'msg'};
    });
    setData([...data, ...mockData]);
  };

  return (
    // container
    <View style={styles.container}>
      {/* header */}
      <View style={[styles.header, styles.textAlign]}>
        <Text style={styles.text}>Header</Text>
      </View>
      {/* main */}
      <View style={styles.main}>
        {/* content - rank */}
        <View style={styles.mainRank}>
          <View>
            <Text>Rank</Text>
            <Text>Name</Text>
            <Text>Volume</Text>
            <Text>Price</Text>
          </View>
          <View style={styles.content}>
            <FlatList
              data={data}
              renderItem={renderItems}
              onEndReached={onEndReached}></FlatList>
          </View>
        </View>

        {/* content - search */}
      </View>
      {/* footer -> 메뉴 추가 */}
      <View style={[styles.footer, styles.textAlign]}>
        <View style={styles.footerRank}>
          <Text style={styles.text}>Realtime</Text>
        </View>
        <View
          style={[
            styles.footerSearch,
            {borderLeftColor: '#fff', borderLeftWidth: 0.3},
          ]}>
          <Text style={styles.text}>Search</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // container
  container: {
    flex: 1,
  },

  // header
  header: {
    flex: 1,
    backgroundColor: '#555',
  },

  // main
  main: {
    flex: 6,
  },
  mainRank: {
    flex: 1,
  },
  mainSearch: {
    flex: 1,
  },

  content: {
    flex: 3,
    backgroundColor: '#fff',
  },
  contentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#111',
    borderWidth: 0.5,
  },
  contentProfile: {padding: 10},
  contentTxt: {padding: 10},
  footer: {
    flex: 1,
    backgroundColor: '#444',
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  textAlign: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerRank: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  footerSearch: {
    flex: 1,
    alignItems: 'center',

    justifyContent: 'center',
    height: '100%',
  },
});

export default App;
