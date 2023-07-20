import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../colors";
import CallButton from "./CallBottun";

function Service({
  work,
  name,
  familyName,
  location,
  rating,
  phoneNumber,
  image,
  index,
}) {
  const navigation = useNavigation();
  return (
    <View style={styles.bg}>
      <TouchableOpacity
        style={styles.profil}
        onPress={() => {
          navigation.navigate("Profil", {
            work,
            name,
            familyName,
            location,
            rating,
            phoneNumber,
            image,
          });
        }}
      >
        <View style={styles.imgBg}>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={image}></Image>
          </View>
        </View>
        <View style={styles.txtBg}>
          <Text style={styles.job}>{work}</Text>
          <Text style={styles.name}>
            {name} {familyName}
          </Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.social}>
        <Text style={styles.rating}>{rating}⭐</Text>
        <CallButton phoneNumber={phoneNumber}></CallButton>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: {
    backgroundColor: colors.light,
    width: "100%",
    height: 150,
    borderRadius: 15,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  profil: {
    height: 150,
    width: "50%",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  imgBg: {
    width: 120,
    height: 120,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  imgContainer: {
    width: 110,
    height: 110,
    overflow: "hidden",
    borderRadius: 55,
  },
  txtBg: {
    marginLeft: 10,
    height: "100%",
    justifyContent: "center",
  },
  job: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.primary,
  },
  location: {
    marginVertical: 2,
    fontWeight: "700",
    fontSize: 15,
  },
  name: {
    fontSize: 15,
  },
  social: {
    justifyContent: "space-between",
    padding: 20,
  },
  rating: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "sans-serif",
  },
});
export default Service;
