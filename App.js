import 'config/ReactotronConfig';
import React from 'react';
import { View } from 'react-native';
import Routes from 'routes';

import styles from 'styles/app';

const App = () => (
  <View style={styles.app}>
    <Routes />
  </View>
);

export default App;
