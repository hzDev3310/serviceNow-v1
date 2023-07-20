import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import Menu from "../../pages/Menu";
import colors from "../colors";
import SearchBar from "./SearchBar";
import { useNavigation } from '@react-navigation/native';

function Navbar() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.navbar}>
      <StatusBar backgroundColor={colors.primary}></StatusBar>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={()=>{
            navigation.navigate('Menu')
          }}
        >
          <MaterialCommunityIcons name="menu" size={40} color={colors.light} />
        </TouchableOpacity>
        <Text style={{ color: colors.light, fontWeight: "800", fontSize: 25 }}>
          ServiceNow
        </Text> 
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <FontAwesome5 name="search" size={30} color={colors.light} />
        </TouchableOpacity>
        <SearchBar
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 70,
    justifyContent: "center",
  },
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default Navbar;
