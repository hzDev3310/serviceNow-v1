import React, { useState } from "react";
import {
  View,
  TextInput,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { data } from "../data";
import Services from "./Services";
import colors from "../colors";

const SearchBar = ({ modalVisible, setModalVisible }) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const handleSearch = (text) => {
    const newData = data.filter((item) => {
      const itemName = item.name.toLowerCase();
      const itemWork = item.work.toLowerCase();
      const itemFamilyName = item.famillyName.toLowerCase();
      const queryLower = text.toLowerCase();
      return (
        itemName.includes(queryLower) ||
        itemWork.includes(queryLower) ||
        itemFamilyName.includes(queryLower)
      );
    });
    setQuery(text);
    setFilteredData(newData);
  };
  return (
    <Modal visible={modalVisible}>
      <View style={styles.modalContent}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search for serice"
            value={query}
            onChangeText={handleSearch}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <View style={styles.x} >
            <MaterialCommunityIcons name="close" size={50} color={colors.light} />
            </View>
          </TouchableOpacity>
        </View>
        <Services data={filteredData}></Services>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    height : 50,
  },
  searchBar: {
    borderWidth: 2,
    borderColor: colors.secondary,
    padding: 10,
    borderRadius: 15,
    flex: 1,
  },
  searchButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 10,
  },
  searchButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  x:{
    backgroundColor : colors.danger,
    height : 50,
    width : 50,
    borderRadius : 15,
    justifyContent : "center",
    alignItems:"center",
    marginLeft: 5
  }
});

export default SearchBar;
