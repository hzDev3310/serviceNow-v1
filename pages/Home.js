import React from "react";
import { ScrollView, View } from "react-native";

import Navbar from "../resources/componets/Navbar";
import Services from "../resources/componets/Services";
import { data, location, work } from "../resources/data";


// tiré les service selon le "rating"

data.sort((a, b) => b.rating - a.rating);


//fonction pour filter les service selon le region

const Data1 = () => {
  const newData = data.filter(
    (item) => item.location.toLowerCase() === location.location.toLowerCase()
  );
  return newData;
};

//fonction pour filter les service selon les autre autre region
const Data2 = () => {
  const newData = data.filter(
    (item) => item.location.toLowerCase() !== location.location.toLowerCase()
  );
  return newData;
};


//fonction pour filter les service selon le travielle selecionner

export const Data3 = (data) => {
  let str = "home";
  if (work.work.toLowerCase() === str.toLowerCase()) {
    return data;
  } else {
    const filteredData = data.filter(
      (item) => item.work.toLowerCase() === work.work.toLowerCase()
    );
    return filteredData;
  }
};


//l'affichage du home page : 

function Home() {
  const Data = Data3(Data1(location.location).concat(Data2(location.location)));
  return (
    <View>
      <Navbar></Navbar>
      <ScrollView style={{ padding: 8 }}>
        <Services data={Data}></Services>
      </ScrollView>
    </View>
  );
}


export default Home;
