import React from 'react';
import {StyleSheet, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ICONS, IconsTransform, IconType, normalizeFontSize } from '../../common';

interface IconConfig {
  [key: string]: React.ComponentType<any>;
}

const iconConfig: IconConfig = {
  MaterialIcons,
  Ionicons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome6,
};
interface AppIconProps {
  type?: IconType;
  name?: string;
  size?: number;
  color?: string;
  style?: TextStyle | TextStyle[] | undefined;
  disabled?: boolean;
  onPress?: () => void;
  iconWrapperStyle?: ViewStyle;
}

const AppIcon: React.FC<AppIconProps> = ({
  type = 'MaterialIcons',
  name = ICONS.MaterialIcons.done,
  size = 24,
  color = 'black',
  disabled = false,
  onPress,
  style,
  iconWrapperStyle,
}) => {
  const IconComponent = iconConfig[type];
  if (!IconComponent) {
    console.warn(`Invalid icon type: ${type}`);
    return null;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      style={[styles.iconWrapperStyle, iconWrapperStyle]}>
      <IconComponent
        name={name}
        size={normalizeFontSize(size)}
        color={color}
        style={[IconsTransform, style]}
      />
    </TouchableOpacity>
  );
};

export default AppIcon;
const styles = StyleSheet.create({
  iconWrapperStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
