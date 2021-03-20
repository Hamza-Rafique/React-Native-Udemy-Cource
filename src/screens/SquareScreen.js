import React, {useReducer} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from './components/ColorCounter';

const reducer = (state, action) =>{ //action => how to change things
 //state === {red:number, green:number, blue:number};
 //action === {colorToChange:'red' || 'green' ||'blue', amount:15 || -15 }
  switch(action.ColorToChange){
    case'red':
    //nver going to do:
     return {...state, red: state.red + action.amount};
    case 'green':
      return {...state, red: state.red + action.amount};
    case 'blue':
      return {...state, red: state.red + action.amount};
      default:
        return state;
  }
}

const SquareScreen = ({color}) => {

   
     const [state, dispatch] = useReducer(reducer,{red:0, green: 0, blue:0});  //dispatch => is used for run my reducer
     const {red, green, blue } = state;

    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);
    // const Increment = 15;
    //  const setColor = (color) =>{
    //    //color === 'red', 'green', 'blue
    //    //change === +15, -15

    //    switch (color){
    //        case 'red':
    //        red + change > 255 || red + cahnge < 0 ? null : setRed(red + change);
    //         return;
    //        case 'green':
    //         green + change > 255 || green + cahnge < 0 ? null : setGreen(green + change);
    //         return;
    //         case 'blue':
    //        blue + change > 255 || blue + cahnge < 0 ? null : setBlue(blue + change);
    //         return; 
    //    }
    //  }

    return (
       <View>
           <ColorCounter 
                onIncrease={()=>  dispatch({ColorToChange: 'red', amount:COLOR_INCREMENT})}
                onDecrease={() =>  dispatch({ColorToChange: 'red', amount:-1 * COLOR_INCREMENT})}
                color='Red'
            />
           <ColorCounter 
              onIncrease={()=>  dispatch({ColorToChange: 'blue', amount:COLOR_INCREMENT})}
              onDecrease={() =>  dispatch({ColorToChange: 'blue', amount:-1 * COLOR_INCREMENT})}
              color='Blue'
            />
           <ColorCounter 
             onIncrease={()=>  dispatch({ColorToChange: 'green', amount:COLOR_INCREMENT})}
             onDecrease={() =>  dispatch({ColorToChange: 'green', amount:-1 * COLOR_INCREMENT})}
             color='Green'
           />
           <View style={{height:150, width:150,backgroundColor:`rgb(${red},${green},${blue})`}} />
       </View>
    )
}
const styles = StyleSheet.create({})

export default SquareScreen
