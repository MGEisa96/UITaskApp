import { View, Text, Image, StyleSheet } from "react-native";
import React from 'react';
import { COLORS, HEIGHT, IMAGES_URL, normalizeFontSize, WIDTH } from '../../common';

const ListCard = ()=>{
    return(
      <View style={styles.cardWrapperStyle}>
        <Image source={{uri: IMAGES_URL.emptyImage}} style={styles.imageStyle} resizeMode={'cover'}/>
        <View>
        <Text style={styles.titleStyle}>
        Excerices Title
        </Text>
        <Text style={styles.subTitleStyle}>
        Description goes here
        </Text>
        </View>
      </View>
    )
  }
  export default ListCard;
const styles = StyleSheet.create({
    cardWrapperStyle: {
        width: WIDTH * 0.4,
        gap: normalizeFontSize(16),
        marginBottom: normalizeFontSize(10),
        paddingBottom: normalizeFontSize(10),
     },
    imageStyle: {
        width: '100%',
        height: HEIGHT * 0.19,
        borderRadius: 12,
        alignSelf: 'center',

     },
     titleStyle: {
        fontSize: normalizeFontSize(15),
        color: COLORS.white,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
     },
     subTitleStyle: {
        fontSize: normalizeFontSize(12),
        color: COLORS.white,
     },
});