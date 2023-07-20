//bouton pour appeller directement le serivce


import React from 'react';
import { TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { Zocial } from '@expo/vector-icons';
import colors from '../colors';
const CallButton = ({ phoneNumber }) => {
  const handlePress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.call} >
      <Zocial name="call" size={30} color={colors.light} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    call:{
        backgroundColor:colors.success,
        width:40,
        height:40,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor : '#fff'
    }
})
export default CallButton;
