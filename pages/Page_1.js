import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import colors from "../resources/colors";

function Page_1({ navigation }) {
  return (
    <ImageBackground
      source={require("../resources/images/bg.jpg")}
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../resources/images/ismaik.png")}
        style={{
          height: 150,
          width: 170,
          resizeMode: "cover",
          position: "absolute",
          top: 70,
          left: 10,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 70,
          right: 20,
          overflow: "hidden",
          borderRadius: 75,
          width: 150,
          height: 150,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/icon.png")}
          style={{
            width: 170,
            height: 170,
          }}
        />
      </View>

      <View
        style={{
          justifyContent: "space-around",
          display: "flex",
          flexDirection: "row",
          padding: 10,
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: colors.light,
            width: "45%",
            height: 235,
            borderRadius: 15,
            margin: 11,
            overflow: "hidden",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Image
            source={require("../resources/images/hamza.jpeg")}
            style={{
              width: "97%",
              height: 170,
              borderWidth: 3,
              borderColor: colors.primary,
              borderRadius: 15,
            }}
          />
          <Text
          style={{
            fontSize: 17,
            fontWeight: "700",
            margin : 10
          }}
          >Hamza Sayari</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.light,
            width: "45%",
            height: 235,
            borderRadius: 15,
            margin: 11,
            overflow: "hidden",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Image
            source={require("../resources/images/sou.png")}
            style={{
              width: "97%",
              height: 170,
              borderWidth: 3,
              borderColor: colors.primary,
              borderRadius: 15,
            }}
          />
          <Text
          style={{
            fontSize: 17,
            fontWeight: "700",
            margin : 10
          }}
          >Soulayma attia</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 40,
          right: 20,
          backgroundColor: colors.light,
          padding: 10,
          borderRadius: 15,
        }}
        onPress={() => {
          navigation.navigate("Welcome", { refresh: true });
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "700",
          }}
        >
          Suivant
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default Page_1;
