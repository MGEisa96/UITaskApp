import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import AppIcon from '../AppIcon';
import { COLORS, ICONS, WIDTH } from '../../common';

const SearchInput = () => {
  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
        <AppIcon name={ICONS.Ionicons.searchOutline} type={'Ionicons'} color={COLORS.white}/>
      <TextInput style={styles.inputStyle} placeholder="Search" placeholderTextColor={COLORS.white}/>
        </View>
        <View style={styles.iconStyle}>
        <AppIcon
            name={ICONS.FontAwesome6.sliders}
             type={'FontAwesome6'}
              color={COLORS.white}
              size={20}
              />
        </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
    container: {
        marginTop: '4%',
        width: WIDTH,
        paddingHorizontal: WIDTH * 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    inputContainer: {
        width: '92%',
        height: 45,
        flexDirection: 'row',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLORS.secondry,
        paddingHorizontal: 16,
    },
    inputStyle: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 10,
        textAlign: 'left',
        color: COLORS.white,
    },
    iconStyle: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: COLORS.secondry,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
