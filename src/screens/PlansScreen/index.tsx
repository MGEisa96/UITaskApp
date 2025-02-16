import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React from 'react';
import { COLORS, HEIGHT, IMAGES_URL } from '../../common';
import Header from '../../componnet/Header';
import HomeCard from '../../componnet/HomeCard';
import SearchInput from '../../componnet/SearchInput';
import ListCard from '../../componnet/ListCard';
import FilterList from '../../componnet/FilterList';


export default function PlansScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.titleStyle}>Articles</Text>
      <HomeCard/>
      <SearchInput />
      <View style={styles.bottomListStyle}>
        <FilterList />
      <FlatList
      contentContainerStyle={styles.listStyle}
      columnWrapperStyle={styles.columnWrapperStyle}
      renderItem={()=><ListCard/>} data={['1','2','3','4']} numColumns={2}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    titleStyle: {
      fontSize: 40,
      color: COLORS.white,
      alignSelf: 'center',
      fontWeight: 'bold',
    },
    bottomListStyle: {
      flex: 1,
    },
    listStyle:{
      marginTop: '9%',
      paddingHorizontal: 30,
    },
    columnWrapperStyle: {
      gap: 16,
    },
});
