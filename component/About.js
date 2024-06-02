
import { StyleSheet, Text, View, Image, ScrollView,SafeAreaView } from "react-native";
import React from 'react';
const cer=require("../assets/icons8-certification-30.png");
const cer2=require("../assets/icons8-star-24.png");

export default function About() {
  return (
    <ScrollView>
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.about}>
      <Text style={styles.text}>Professional Online Makeup Course</Text>
      <View style={styles.container}>
      <View style={styles.imgcer}>
      <Image source={cer}></Image>
        <Text style={styles.note}>Certification Programme</Text>
        </View>
        <View style={styles.imgcer}>
        <Image source={cer2}></Image>
        <Text style={styles.note}>Rated 4.85/5</Text>
        </View>
      </View>
      <View>
        <Text style={styles.note2}>India's No.1 Online Makeup Course</Text>
        <Text style={styles.note2}>Learn by LIVE Do-it together Classses</Text>
        <Text style={styles.note2}>Unlimited Practise Session to Master Skills</Text>
      </View>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    flex:3,
    backgroundColor:'#000000',
  },
  about: {
  flex:5,
  justifyContent:'flex-start',
  padding:16,
  height:200,
  },
  text:{
    color:'#ffffff',
    fontSize:30,
    
  },
  note:{
    textAlign:'center',
    color:'pink',
    fontSize:13,
  },
  note2:{
    paddingTop:10,
    paddingLeft:5,
    color:'#ffffff',
    fontSize:16,
  },
  container:{
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  imgcer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
  },
});
