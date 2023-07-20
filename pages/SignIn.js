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





function SignIn({ navigation }) {

  const isAlphabetic = str => {
    return /^[a-zA-Z]+$/.test(str);
  };
  
  //test if the input are empty or not
  
  const isValidInputs = () => {
    if (
      user.name === '' ||
      user.familyName === '' ||
      user.job === '' ||
      user.city === '' ||
      user.job === 'Please select your job' ||
      user.city === 'Please select your City' ||
      user.number === '' ||
      user.user === '' ||
      user.password === ''
    ) {
      return false;
    } else return true;
  };
  
  //vefication the correct inputs
  
   const testName = () => {
    if (!isAlphabetic(user.name)) {
      return false;
    } else {
      return true;
    }
  };
   const testFamilyName = familyName => {
    if (!isAlphabetic(familyName)) {
      return false;
    } else return true;
  };
  
   const testNum = number => {
    if (
      number.length != 8 ||
      !['2', '4', '5', '7', '9'].includes(number.charAt(0))
    ) {
      return false;
    } else return true;
  };
   const testPassword = password => {
    if (password.length < 6) {
      return false;
    } else return true;
  };
   const testUser = testUser => {
    if (!isAlphabetic(user.charAt(0)) || user.length < 6) {
      return false;
    } else return true;
  };
  

  const [user, setUser] = useState({
    id: data.length,
    name: "",
    familyName: "",
    rating: 0,
    work: "",
    location: "",
    phoneNumber: "",
    user: "",
    password: "",
    image: require("../resources/images/new.png"),
  });

  const [isValid, setIsValid] = useState(false);

  const handleSignUp = () => {
    const isFormValid = user.name && user.familyName && user.work && user.location && user.phoneNumber && user.user && user.password;
    setIsValid(isFormValid);
    if (isFormValid) {
      data.push(user);
      navigation.navigate("Profil", { work: user.work,
        name: user.name,
        familyName: user.familyName,
        location: user.location,
        rating: user.rating,
        phoneNumber: user.phoneNumber,
        image: user.image, });
    }else{
      alert("compléter l'inscription");
    }
  };

  return (
    <ImageBackground
      source={require("../resources/images/bg.jpg")}
      style={styles.container}
    >
      <View style={styles.bg}>
        <TextInput
          style={[
            styles.input,
            !testName() && user.name !== '' && {borderColor: 'red'},
          ]}
          placeholder="nom"
          value={user.name}
          onChangeText={text => setUser({...user, name: text})}
        />

        <TextInput
          
          style={styles.input}
          placeholder="prenom"
          value={user.familyName}
          onChangeText={text => setUser({...user, familyName: text})}
        />
        <TextInput
          
          style={styles.input}
          placeholder="work"
          value={user.work}
          onChangeText={text => setUser({...user, work: text})}
        />
        <TextInput
          
          style={styles.input}
          placeholder="region"
          value={user.location}
          onChangeText={text => setUser({...user, location: text})}
        />
        <TextInput
          
          style={styles.input}
          placeholder="numéro"
          value={user.phoneNumber}
          onChangeText={text => setUser({...user, phoneNumber: text})}
        />
        <TextInput
          
          style={styles.input}
          placeholder="user"
          value={user.user}
          onChangeText={text => setUser({...user, user: text})}
        />
        <TextInput
          
          style={styles.input}
          placeholder="mot de pass"
          value={user.password}
          onChangeText={text => setUser({...user, password: text})}
        />

        <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
          <Text style={styles.txtBtn}>Inscription</Text>
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback
      onPress={
        ()=>{
          navigation.navigate("Home")
        }
      }

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
    borderColor:colors.light,
    borderWidth : 5
  },
  bg: {
    borderWidth: 4,
    borderColor: "white",
    backgroundColor: colors.primary,
    width: "80%",
    paddingVertical:20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  txt: {
    fontSize: 30,
    color: colors.light,
    fontWeight: "600",
  },
  btn: {
    borderWidth: 2,
    borderColor: colors.secondary,
    backgroundColor: colors.light,
    height: 58,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding : 10
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

export default SignIn;
