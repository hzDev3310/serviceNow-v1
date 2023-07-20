import * as React from "react";
import {StyleSheet, Text, View} from 'react-native';

const Separator = ({color, text ,size}) => {
  
    if(text=== 'none' || text===''){
      return(
        <View style={{backgroundColor:color,height : 2}}><Text> </Text></View>
      )
    }else{
      return (
        <View style={[styles.container]}>
          <View style={[styles.separator, {backgroundColor: color}]}><Text> </Text></View>
          <Text style={{color: color, fontSize: size}}>{text}</Text>
          <View style={[styles.separator, {backgroundColor: color}]}><Text> </Text></View>
        </View>
      );
    }
  
};
export default Separator;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
},
separator: {
    marginHorizontal: 10,
    height : 2 ,
    width : '100%'
    
  },
});
