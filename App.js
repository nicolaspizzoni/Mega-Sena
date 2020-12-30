import React from 'react';
import {View, StyleSheet} from 'react-native';

import Mega from './components/Mega';

export default () => (
  <View style={style.App}>
    <Mega />
  </View>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6495ED',
    padding: 20,
  },
});
