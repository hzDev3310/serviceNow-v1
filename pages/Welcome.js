import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import { locations, location } from "../resources/data";
import colors from "../resources/colors";

function Welcome({ navigation }) {
  const [Location, setLocation] = useState("");

  return (
    <ImageBackground
      source={require("../resources/images/bg.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <SafeAreaView style={styles.screen}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={require('../assets/icon.png')}></Image>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 200,
          }}
        >
          <View style={styles.pickerBg}>

            {/* list pour choisire le region  */}
            <Picker
              selectedValue={Location}
              onValueChange={(value, index) => setLocation(value)}
              mode="dropdown"
              style={styles.picker}
            >
              <Picker.Item
                label="Please select your location"
                value="Unknown"
              />
              {locations.map((loc, index) => (
                <Picker.Item key={index} label={loc} value={loc} />
              ))}
            </Picker>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              location.location = Location;
              navigation.navigate("Home",{ refresh: true });
            }}
          >
            <Text style={styles.txtBtn}>let's get started !</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 20,
          }}
        >
          <Text style={{ fontWeight: "700" }}>created by :</Text>
          <Text style={{ fontWeight: "700" }}>
            hamza sayari 
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 170,
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.light,
  },
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 11,
    borderColor: colors.black,
    backgroundColor: colors.secondary,
    height: 60,
  },
  pickerBg: {
    width: 300,
    height: 60,
    backgroundColor: "#f0f",
    borderRadius: 15,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  btn: {
    borderWidth: 2,
    borderColor: colors.secondary,
    backgroundColor: colors.light,
    width: 180,
    height: 58,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  txtBtn: {
    fontWeight: "700",
    fontSize: 20,
    color: colors.primary,
  },
  imgContainer:{
    width : 200,
    height : 200,
    overflow : "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:100,
    marginBottom : 40,
    backgroundColor:'#fff'
  },
  img:{
    width: '97%', height:'97%',
  }
}
);
