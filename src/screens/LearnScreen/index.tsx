import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../common';

const LearnScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Learn Screen</Text>
    </View>
  );
};

export default LearnScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  titleStyle: {
    fontSize: 20,
    color: COLORS.white,
  },
});