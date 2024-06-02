import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const img = require('../assets/images.jpeg'); // Path to your uploaded image

const Footer = () => {
  return (
    <ImageBackground source={img} style={styles.background}>
      <View style={styles.layout}>
        <Text style={styles.heading}>Join our growing community of 35,000+ alumni</Text>
        
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Apply Now</Text>
        </TouchableOpacity>

        <View style={styles.iconCon}>
          <Icon name="instagram" size={30} color="#E1306C" style={styles.icon} />
          <Icon name="facebook" size={30} color="#4267B2" style={styles.icon} />
          <Icon name="linkedin" size={30} color="#0077B5" style={styles.icon} />
          <Icon name="twitter" size={30} color="#1DA1F2" style={styles.icon} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add an overlay to make text more readable
    width: '100%',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#E91E63',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 30,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default Footer;
