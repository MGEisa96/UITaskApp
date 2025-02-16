import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, ICONS, WIDTH } from "../../common";
import AppIcon from "../AppIcon";

const data = [
    {id: 0,label: 'All'},
    {id: 1,label: 'Test',icon: ICONS.MaterialIcons.addShoppingCart},
    {id: 2,label: 'Test 2',icon: ICONS.MaterialIcons.favorite},
    {id: 3,label: 'Test 3',icon: ICONS.MaterialIcons.addShoppingCart},
    {id: 4,label: 'Test 4',icon: ICONS.MaterialIcons.favorite},
];
const RenderItem = ({item,index}) =>{
    const fristItem = index === 0;
    return(
        <TouchableOpacity style={styles.cardStyle}>
         {!fristItem && <AppIcon disabled name={item.icon} color={COLORS.white}/>}
            <Text style={styles.labelStyle}>
                {item?.label}
            </Text>
        </TouchableOpacity>
    );
};
const FilterList = () => {
  return (
    <View style={styles.listContanier}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        contentContainerStyle={styles.listStyle}
        keyExtractor={(item)=>item?.id}
       renderItem={({item,index})=><RenderItem item={item} index={index} />}/>
    </View>
  );
};

export default FilterList;

const styles = StyleSheet.create({
    listContanier: {
        width: WIDTH,
        height: 80,
        paddingTop: '5%',
    },
    listStyle: {
        gap: 10,
        paddingHorizontal: '7%',
    },
    cardStyle: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: COLORS.secondry,
        height: 40,
        borderRadius: 10,
    },
    labelStyle: {
        fontSize: 17,
        color: COLORS.white,
    },
});
