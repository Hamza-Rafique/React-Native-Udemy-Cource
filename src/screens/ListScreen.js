import React from 'react';
import {View, Text,StyleSheet, FlatList} from 'react-native'

const ListScreen = () => {
    const friends = [
        {name: 'Friends #1'},
        {name: 'Friends #2'},
        {name: 'Friends #3'},
        {name: 'Friends #4'},
        {name: 'Friends #5'},
        {name: 'Friends #6'},
        {name: 'Friends #7'},
        {name: 'Friends #18'},
    ];
    return( <FlatList 
             keyExtractor = {(friends)=> friends.name}
             data={friends} 
             renderItem = {({item})=>{
             return<Text style={styles.textStyle}>{item.name}</Text>
    }}/>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        margin: 35
    }
});
export default ListScreen;