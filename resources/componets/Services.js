import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import colors from "../colors";
import Service from "./Service";

function Services({ data }) {
  
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <Service
            index={item.id}
            name={item.name}
            familyName={item.famillyName}
            phoneNumber={item.phoneNumber}
            rating={item.rating}
            location={item.location}
            work={item.work}
            image={item.image}
          />
        )}
        contentContainerStyle={styles.contentContainer}
      />
      <View style={{ height: 150 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export default Services;
