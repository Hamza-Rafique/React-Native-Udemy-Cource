import React from 'react';
import {View, Text,StyleSheet, FlatList} from 'react-native'

const ListEx = () => {
    const friends = [
        {name: 'Friends #1', age: 20},
        {name: 'Friends #2', age: 30},
        {name: 'Friends #3', age: 40},
        {name: 'Friends #4', age: 50},
        {name: 'Friends #5', age: 60},
        {name: 'Friends #6', age: 70},
        {name: 'Friends #7', age: 80,}, 
        {name: 'Friends #18', age: 90},
    ];
    return( <FlatList 
             keyExtractor = {(friends)=> friends.name}
             data={friends} 
             renderItem = {({item})=>{
             return<Text style={styles.textStyle}>{item.name} -age{item.age}</Text>
    }}/>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        margin: 35
    }
});
export default ListEx;