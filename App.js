import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Constants from 'expo-constants'

import { Dropdown } from './components/Dropdown'
import {Header} from './components/Header'


const categories = [
  { label: 'Food', value: 'food' },
  { label: 'Coffee', value: 'coffee'},
  { label: 'Transport', value: 'transport' },
  { label: 'Entertainment', value: 'entertaiment' },
  { label: 'Utility', value: 'utility' },
  { label: 'Fuel', value: 'fuel' },
  { label: 'Rent', value: 'rent' },
]


export default function App() {
  const[category, setCategory] = useState()
  const[amount, setAmount] = useState()
  const[expenses, setExpenses ] = useState()


  const dropdownChange = (value) => {
    setCategory( value )
  }

  const amountChange = ( value ) => {
    setAmount( value )
  }
  
  return (
    <View style={styles.container}>
      <Header text="Money Tracker" />
      <View>
        <TextInput 
          style={styles.input} 
          clearTextOnFocus 
          keyboardType='number-pad' 
          onChangeText={amountChange} 
          placeholder="enter amount"
        />
        <Dropdown 
          categories={categories} 
          handler={dropdownChange}  
          placeholder={"select a category"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: Theme.tertiaryLight,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderStyle: 'solid',
    padding: 5,
    fontSize: 18,
    textAlign: 'center',
  },
});

