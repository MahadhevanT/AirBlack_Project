import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
const logoimg = require("./assets/2-500x500.png");
import About from './component/About';
import Forms from './component/Forms';
import Connection from "./component/Connection";
import Footer from "./component/Footer";

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
        source={logoimg}
        style={{
          height: 200,
          width: 360,
          resizeMode:'stretch',
          marginTop:40,
        }}
      ></Image>
      <StatusBar style="auto"></StatusBar>
      <About />
      <Forms/>
    <Connection/>
    <Footer/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
});
