import * as React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { COLORS, HEIGHT, ICONS, IconType } from '../../common';
import AppIcon from '../../componnet/AppIcon';
import LearnScreen from '../../screens/LearnScreen';
import PlansScreen from '../../screens/PlansScreen';
import ExcericesScreen from '../../screens/ExcericesScreen';
import AboutScreen from '../../screens/AboutScreen';

const IS_IOS = Platform.OS == 'ios';
interface TabOptionType {
  [key: string]: {
    id: number;
    icon: string;
    activeIcon: string;
    title: string;
    size: number;
    type: IconType;
    key: string;
  };
}
const TabOption: TabOptionType = {
  HomeStack: {
    id: 0,
    icon: ICONS.Ionicons.calendar,
    activeIcon: ICONS.Ionicons.calendarOutline,
    title: 'Plan',
    size: 25,
    type: 'Ionicons',
    key: 'HomeStack',
  },
  ExcericesStack: {
    id: 2,
    icon: ICONS.MaterialCommunityIcons.dumbbell,
    activeIcon: ICONS.MaterialCommunityIcons.dumbbell,
    title: 'Excerices',
    size: 25,
    type: 'MaterialCommunityIcons',
    key: 'ExcericesStack',
  },
  LearnStack: {
    id: 3,
    icon: ICONS.FontAwesome5.book,
    activeIcon: ICONS.FontAwesome5.book_open,
    title: 'Learn',
    size: 25,
    type: 'FontAwesome5',
    key: 'LearnStack',
  },
  AboutStack: {
    id: 4,
    icon: ICONS.Ionicons.person,
    activeIcon: ICONS.Ionicons.person,
    title: 'About',
    size: 25,
    type: 'Ionicons',
    key: 'AboutStack',
  },
};

function MyTabBar({state, descriptors, navigation}) {
  return (
    <>
      <View style={styles.containerStyle}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isCartButton = label === 'CartStack';
          console.log('isCartButton ==>', isCartButton);

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              key={label}
              activeOpacity={0.7}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonStyle}>
              {/* {isCartButton&&<View style={styles.counterWrapper}>
                  <AppText style={styles.numberStyle}>
                    {numOfItems}
                  </AppText>
                  </View>} */}
              <AppIcon
                disabled
                type={TabOption[label]?.type}
                name={isFocused ? TabOption[label]?.activeIcon : TabOption[label]?.icon}
                color={isFocused ? COLORS.white : COLORS.Mercury}
                size={TabOption[label]?.size}
              />
              <Text
                style={[
                  styles.labelStyle,
                  {color: isFocused ? COLORS.white : COLORS.Mercury},
                ]}>
                {TabOption[label]?.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {IS_IOS && <View style={styles.safeAreaContainer} />}
    </>
  );
}

const Tab = createBottomTabNavigator();

export const Tabs = () => {

  return (
    <Tab.Navigator
      tabBar={props => MyTabBar({...props})}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeStack" component={PlansScreen} />
      <Tab.Screen name="ExcericesStack" component={ExcericesScreen} />
      <Tab.Screen name="LearnStack" component={LearnScreen} />
      <Tab.Screen name="AboutStack" component={AboutScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: COLORS.secondry,
    flexDirection: 'row',
    borderTopColor: COLORS.Bombay,
    borderTopWidth: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 8,
  },
  safeAreaContainer: {
    backgroundColor: COLORS.secondry,
    height: HEIGHT * 0.03,
  },
  buttonStyle: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondry,
  },
  labelStyle: {
    fontSize: 12,
    marginTop: 6,
    fontWeight: 'bold',
  },
  numberStyle: {
    fontSize: 12,
  },
  counterWrapper: {
    position: 'absolute',
    top: 15,
    width: 16,
    height: 16,
    borderRadius: 25,
    backgroundColor: COLORS.error,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
});
