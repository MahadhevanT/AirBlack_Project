import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
const video= require("../assets/icons8-video-50.png")

const Connection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Why Should You Join Airblack?</Text>
      <View style={styles.feaCon}>
        <View style={styles.fea}>
          <Image
            source={video}
            style={styles.icon}
          />
          <Text style={styles.feaTxt}>Do-it-together,{"\n"} live on zoom</Text>
        </View>
        <View style={styles.feature}>
          <Image
            source={{
              uri: "https://img.icons8.com/?size=100&id=60003&format=png&color=F25081",
            }}
            style={styles.icon}
          />
          <Text style={styles.feaTxt}>4.8 / 5{"\n"} Rated Classes</Text>
        </View>
        <View style={styles.fea}>
          <Image
            source={{ uri: "https://img.icons8.com/?size=100&id=59769&format=png&color=F25081" }}
            style={styles.icon}
          />
          <Text style={styles.feaTxt}>35000+ {"\n"}Members</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 20,
  },
  head: {
    fontSize: 33,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
  feaCon: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 30,
  },
  fea: {
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  feaTxt: {
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#E91E63",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnTxt: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Connection;
