import { StyleSheet, View } from 'react-native';
import React from 'react';
import { COLORS, HEIGHT, ICONS, WIDTH } from '../../common';
import AppIcon from '../AppIcon';

const Header = () => {
  return (
    <View style={styles.containerStyle}>
      <AppIcon
      name={ICONS.FontAwesome.notifications}
       type="Ionicons"
       color={COLORS.white}
       size={35}
       />
       <AppIcon name={ICONS.FontAwesome.user_circle}
       type="FontAwesome"
        color={COLORS.white}
        size={28}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    containerStyle: {
        width: WIDTH,
        height: HEIGHT * 0.05,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '10%',

    },
});
