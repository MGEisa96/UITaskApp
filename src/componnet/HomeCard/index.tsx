import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, HEIGHT, horizontalScale, ICONS, IMAGES_URL, normalizeFontSize, WIDTH } from '../../common';

const HomeCard = () => {
  return (
    <View style={styles.cardWrapper}>
        <View>
      <Text style={styles.titleStyle}>Article Title</Text>
      <Text style={styles.subTitleStyle}>Description goes here</Text>
        </View>
        <Image
        source={{uri: IMAGES_URL.emptyImage}}
        style={styles.imageStyle}
        resizeMode="contain"
        />
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
    cardWrapper: {
        width: WIDTH * 0.86,
        backgroundColor: COLORS.secondry,
        alignSelf: 'center',
        borderRadius: 12,
        padding: WIDTH * 0.06,
        height: HEIGHT * 0.15,
        marginTop: '10%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleStyle: {
        fontSize: normalizeFontSize(15),
        fontWeight: 'bold',
        color: COLORS.white,
    },
    subTitleStyle: {
        fontSize: normalizeFontSize(12),
        // fontWeight: 'bold',
        color: COLORS.white,
    },
    imageStyle: {
        width: horizontalScale(65),
        height: horizontalScale(65),
        backgroundColor: 'red',
        borderRadius: 14,
    },
});
