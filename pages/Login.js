import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../resources/colors";
import data from "../resources/data";

function Login({ navigation }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState(0);

  //fonction pour verfier l'existence du compte puis naviger au page du profil

  const verify = () => {
    const foundUser = data.find(
      (u) => u.user === user && u.password === password
    );

    if (foundUser) {
      navigation.navigate("modifyProfil", {
        work: foundUser.work,
        name: foundUser.name,
        famillyName: foundUser.famillyName,
        location: foundUser.location,
        rating: foundUser.rating,
        phoneNumber: foundUser.phoneNumber,
        image: foundUser.image,
      });
    } else {
      alert("Incorrect password or user");
    }
  };

  return (
    <ImageBackground
      source={require("../resources/images/bg.jpg")}
      style={styles.container}
    >
      <View style={styles.bg}>
        <Text style={styles.txt}>Nom d'utilisateur</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your  user"
          value={user}
          onChangeText={(text) => setUser(text)}
        />

        <Text style={styles.txt}>Mot de passe</Text>

        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter your  password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.btn} onPress={verify}>
          <Text style={styles.txtBtn}>Connexion</Text>
        </TouchableOpacity>
      </View>

      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <View style={styles.x}>
          <MaterialCommunityIcons name="close" size={50} color={colors.light} />
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: "80%",
    borderColor: colors.secondary,
    borderWidth: 1,
    paddingLeft: 10,
    backgroundColor: colors.secondary,
    borderRadius: 15,
    marginVertical: 15,
  },
  bg: {
    borderWidth: 4,
    borderColor: "white",
    backgroundColor: colors.primary,
    width: "80%",
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  txt: {
    fontSize: 25,
    color: colors.light,
    fontWeight: "600",
  },
  btn: {
    borderWidth: 2,
    borderColor: colors.secondary,
    backgroundColor: colors.light,
    padding: 10,
    height: 58,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  txtBtn: {
    fontWeight: "700",
    fontSize: 25,
    color: colors.primary,
  },

  x: {
    position: "absolute",
    top: 10,
    left: 10,
  },
});

export default Login;
