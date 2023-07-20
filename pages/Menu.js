import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../resources/colors";
import { job, work } from "../resources/data";

const Navbar = () => {
  const navigator = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.menu, { backgroundColor: colors.primary }]}
      onPress={() => {
        work.work = item;
        navigator.navigate("Home", { refresh: true });
      }}
    >
      <Text style={[styles.txt,{color: colors.light,}]}>{item}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View>

        {/* bouton pour retourner a la page home */}
        
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => {
            navigator.navigate("Home");
          }}
        >
          <MaterialCommunityIcons name="close" size={40} color={colors.light} />
        </TouchableOpacity>


          {/* liste des category des service */}
        <FlatList
          data={job}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={styles.profil}>

        {/* bouton pour retourner a la page login */}
        <TouchableOpacity
          style={[styles.menu, { backgroundColor: colors.light,alignItems : "center" }]}
          onPress={() => {
            navigator.navigate("Login");
          }}
        >
          <Text style={[styles.txt, { color: colors.primary,alignItems : "center" }]}>Connexion</Text>
        </TouchableOpacity>

        
          {/* bouton pour retourner a la page signup */}
        <TouchableOpacity
          style={[styles.menu, { backgroundColor: colors.light, }]}
          onPress={() => {
            navigator.navigate("SignIn");
          }}
        >
          <Text style={[styles.txt, { color: colors.primary }]}>Inscription</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    width: "100%",
    height: "100%",
    padding: 10,
    justifyContent: "space-between",
  },
  menu: {
    margin: 10,
    padding: 15,
    borderRadius: 15,
  },
  txt: {
    fontSize: 25,
    fontWeight: "700",
  },
  profil: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default Navbar;
