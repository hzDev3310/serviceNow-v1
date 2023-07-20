import * as React from "react";
import {TouchableOpacity, Text} from "react-native";

const AppButton = ({Style, onPress, text,textStyle , backgroundColor,color}) => {
  return (
    <TouchableOpacity style={[Style,{backgroundColor : backgroundColor}]} onPress={onPress} >
      <Text style={[textStyle,{color:color}]}>{text}</Text>
    </TouchableOpacity>
  );
};
export default AppButton;
