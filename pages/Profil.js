//page de prfil visble par le client ey chaque client peut donnee le "rating" 


import { MaterialCommunityIcons } from "@expo/vector-icons";

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
import CallButton from "../resources/componets/CallBottun";
import StarRating from "../resources/componets/StarRating";

function Profil({ route }) {
  const { work, name, familyName, location, rating, phoneNumber, image } =
    route.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#fff"}></StatusBar>
      

      <View style={styles.profil}>
        <View style={styles.imgContainer}>
          <View style={styles.imgBg}>
            <Image style={styles.img} source={image} />
          </View>
          <View style={styles.star}>
            <Text style={styles.starTxt}>{rating}⭐</Text>
          </View>
        </View>

        <View>
          <Text style={styles.name}>
            {name} {familyName}
          </Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.detailsBg}>
          <MaterialCommunityIcons style={{marginVertical : 5}} name="briefcase" size={30} color="#5A5A5A">
            {work}
          </MaterialCommunityIcons>
          <MaterialCommunityIcons name="map-marker" size={30} color="#5A5A5A">
            {location}
          </MaterialCommunityIcons>
        </View>
      </View>
      <View style={{ width: "100%", padding: 20 }}>
        <View style={styles.ratingBg}>
          <Text style={styles.text}>reat us</Text>
          <StarRating></StarRating>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
           
            style={styles.call}
          >
            <Text style={styles.text}>{phoneNumber}</Text>
            <CallButton></CallButton>
          </TouchableOpacity>
        </View>
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
    margin: 5,
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
    backgroundColor: colors.light,
    borderColor: colors.primary,
    borderWidth: 2,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
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
    width: "100%",marginVertical : 10
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
export default Profil;
