import React from 'react'
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from './components/ImageDetail';

const ImageScreen = props => {
    return (
        <View>
             <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')}/>
             <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')}/>
             <ImageDetail title="Mountina" imageSource={require('../../assets/mountain.jpg')}/>
             <ImageDetail />
         </View>
    )
}

ImageScreen.propTypes = {

}

export default ImageScreen
