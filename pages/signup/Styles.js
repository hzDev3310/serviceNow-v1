import { StyleSheet } from "react-native";
import colors from "../../resources/colors";

export default Styles = StyleSheet.create({
    bg: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      backgroundColor: 'rgba(255, 255, 255,0.3)',
      width: '90%',
      padding: 10,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: colors.light,
    },
    input: {
      backgroundColor: colors.secondary,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: colors.light,
      marginVertical: 10,
      fontSize: 20,
      padding: 12,
      width: '100%',
    },
    err:{
      color:"red",
      fontWeight : '600',
      marginLeft :5 
    },
    picker: {
      backgroundColor: colors.secondary,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: colors.light,
      marginVertical: 10,
      fontSize: 20,
  
      width: '100%',
    },
    btn: {
      borderRadius: 15,
      borderWidth: 2,
      borderColor: colors.secondary,
      marginVertical: 10,
      padding: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%',
    },
    btnTxt: {
      fontWeight: '600',
      fontSize: 20,
    },
    separatorContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    separator: {
      marginHorizontal: 10,
      height: 2,
      width: '35%',
      backgroundColor: colors.light,
    },
  });