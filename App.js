import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants'

import { Dropdown } from './components/Dropdown'
import {Header} from './components/Header'
import Theme from './components/Theme'


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
        <Text style={styles.label}>Select a category</Text>
        <Dropdown 
          categories={categories} 
          handler={dropdownChange}  
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
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
    backgroundColor: Theme.cultured,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderStyle: 'solid',
    padding: 5,
    fontSize: 18,
    textAlign: 'center',
  },
  label: {
    padding: 5,
    textAlign: 'center',
    backgroundColor: Theme.charcoal,
    color: Theme.silver,
  },
  button: {
    padding: 5,
    backgroundColor: Theme.charcoal,
  },
  buttonText: {
    textAlign: 'center',
    color: Theme.silver,
  }
});

