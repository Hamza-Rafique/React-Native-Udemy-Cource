import React from "react";
import { Text, StyleSheet, View, Button , TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
 
  return( 
  <View>
    <Text style={styles.text}>Hi there</Text>
    <Button 
        onPress={()=>props.navigation.navigate('Components')}
        title=" Go to Component Demo"
       />
      <Button 
        title='Go to the list Demo'
        onPress={() => props.navigation.navigate('List')}
      />
       <Button 
        title='Go to the image Demo'
        onPress={() => props.navigation.navigate('Image')}
      />
       <Button  style={{margin:10, }}
        title='Go to the ColorsScreen'
        onPress={() => props.navigation.navigate('Colors')}
      />
       <Button 
        title='Go to the SquareDemo'
        onPress={() => props.navigation.navigate('Square')}
        />
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign:"center"
  },
 
});

export default HomeScreen;
