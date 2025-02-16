import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Tabs } from '../BottomTab';

export type StateType = {
  intro: {
    introState: boolean;
  };
  auth: {
    user: any;
    isSkipd: boolean;
    skipLogin: boolean;
  };
};
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>

    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'TABS_STACK'} component={Tabs} />
    </Stack.Navigator>

    </NavigationContainer>
  );
};
export default MainStack;
