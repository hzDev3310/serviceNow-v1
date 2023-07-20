//page pour consulter le profil


import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import colors from "../resources/colors";

function ModifyProfil({ route, navigation }) {
  const { work, name, famillyName, location, phoneNumber, image } =
    route.params;
  const [job, setJob] = useState(work);
  const [city, setCity] = useState(location);
  const [num, setNum] = useState(phoneNumber);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#fff"}></StatusBar>

      <View style={styles.profil}>
        <View style={styles.imgContainer}>
          <View style={styles.imgBg}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={image}
            ></Image>
          </View>
          <TouchableOpacity
          onPress={()=>{
            alert('comming soon')
          }}
          style={styles.star}>
            <MaterialCommunityIcons
              name="pencil-box"
              size={70}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.name}>
            {name} {famillyName}
          </Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.detailsBg}>
          <TouchableOpacity
          onPress={()=>{
            alert('comming soon')
          }}
          >
            <MaterialCommunityIcons
              name="pencil-box"
              size={50}
              color={colors.primary}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
              }}
            />
          </TouchableOpacity>
          <MaterialCommunityIcons
            style={{ marginVertical: 5 }}
            name="briefcase"
            size={30}
            color="#5A5A5A"
          >
            {work}
          </MaterialCommunityIcons>
          <MaterialCommunityIcons name="map-marker" size={30} color="#5A5A5A">
            {location}
          </MaterialCommunityIcons>
          <MaterialCommunityIcons name="phone" size={30} color="#5A5A5A">
            {phoneNumber}
          </MaterialCommunityIcons>
          
        </View>
      </View>
      <View style={{ width: "100%", padding: 20 }}></View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
 <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            padding: 10,
            borderRadius: 15,
            margin: 20,
            flexDirection: "row",
            justifyContent : "center",
            alignItems : "center"
          }}
          onPress={() => {
            alert("votre compte est supprimè");
            navigation.navigate("Login")
          }}
        >
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={30}
            color={colors.light}
          >
            
          </MaterialCommunityIcons>
        
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            padding: 10,
            borderRadius: 15,
            margin: 20,
            flexDirection: "row",
            justifyContent : "center",
            alignItems : "center"
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <MaterialCommunityIcons
            name="logout-variant"
            size={30}
            color={colors.light}
          >
            
          </MaterialCommunityIcons>
          <Text
          style={{color:colors.light, fontWeight : "500",fontSize : 25}}
          >{" "}
            Log out</Text>
        </TouchableOpacity>

       

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  profil: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.light,
  },
  imgBg: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: colors.primary,
    borderRadius: 150,
    overflow: "hidden",
  },
  imgContainer: {
    width: 310,
    height: 310,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  separator: {
    height: 3,
    width: "100%",
    backgroundColor: "#CED0CE",
    marginVertical: 5,
  },
  star: {
    position: "absolute",
    top: 20,
    right: 20,

    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  starTxt: {
    fontSize: 27,
  },
  img: {
    width: "120%",
    height: "120%",
  },
  txtBg: {
    flexDirection: "row",
  },
  name: {
    fontSize: 30,
    fontWeight: "700",
  },
  detailsBg: {
    width: "100%",
    marginVertical: 10,
    marginTop: 10,
  },
  ratingBg: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 15,
  },
  call: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.success,

    padding: 10,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  text: {
    color: "#fff",
    fontSize: 25,
    marginHorizontal: 10,
  },
});
export default ModifyProfil;
