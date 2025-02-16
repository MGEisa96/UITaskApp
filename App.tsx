import React from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import MainStack from './src/navigation/MainStack';


function App(): React.JSX.Element {
  return (
    <View style={styles.sectionContainer} >
      <MainStack/>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
    backgroundColor: '#263D94',
    paddingTop: Platform.OS === 'ios' ? '13%' : '5%',
  },
});

export default App;
