import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];
function Forms(){
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <ScrollView style={styles.formout}>
    <View style={styles.container}>
    <View style={styles.confull}>
      <Text style={styles.heading}>FILL THE FORM BELOW TO ENQUIRE</Text></View>

      <Text style={styles.txt1}>*Enter your name</Text>
      <TextInput
        style={styles.input}
        placeholder="Eg. Aneesha Mehra"
      />
      <Text style={styles.txt1}>*Enter your Whatsapp Number</Text>
      <View style={styles.row}>
        <Text style={styles.countryCode}>+91</Text>
        <TextInput
          style={styles.whatsappInput}
          placeholder="Eg. 0000000000"
          keyboardType="numeric"
        />
      </View>
    <Text>*Select your Profession</Text>
    <View style={styles.dropdowncontainer}>
      <View style={styles.container}>
    <Dropdown
      style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? 'Select item' : '...'}
      searchPlaceholder="Search..."
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={item => {
        setValue(item.value);
        setIsFocus(false);
      }}/>
      </View>
      </View>
  
<Text>*Select your goal</Text>
<View style={styles.dropdowncontainer}>
  <View style={styles.container}>
    <Dropdown
      style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? 'Select item' : '...'}
      searchPlaceholder="Search..."
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={item => {
        setValue(item.value);
        setIsFocus(false);
      }}
              />
  </View>
  </View>


  <Text >*Select your City</Text>
  <View style={styles.dropdowncontainer}>
  <View style={styles.container}>
    <Dropdown
      style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? 'Select item' : '...'}
      searchPlaceholder="Search..."
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={item => {
        setValue(item.value);
        setIsFocus(false);
      }}
              />
  </View>
  </View>
      
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // marginLeft:10,
    // marginRight:10,
     marginTop:10,
    backgroundColor: '#a9a9a9',
    
  },
  formout:{
    padding:10,
    backgroundColor:"#000000",

  },
  heading: {
    fontSize: 16,
    backgroundColor:'#E91E63',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom:10,
    textAlign:'center',
    padding:10,
  },
  confull:{
    
    backgroundColor:'#E91E63',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  countryCode: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 10,
  },
  whatsappInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    
  },
  txt1:{
    paddingTop:10,
    paddingBottom:10,

  },
  button: {
    backgroundColor: '#E91E63',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdowncontainer:{
    justifyContent:'center',
    alignItems:'center',
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
    
  },
  dropdown: {
    height: 40,
    width:300,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent:'center',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
textname:{
  
},
});

export default Forms;