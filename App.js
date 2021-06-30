import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants'

import { Dropdown } from './components/Dropdown'
import { Header } from './components/Header'
import Theme from './components/Theme';

import AsyncStorage from '@react-native-async-storage/async-storage'


const categories = [
  { label: 'Food', value: 'food', inputLabel: "Food" },
  { label: 'Coffee', value: 'coffee', inputLabel: "Coffee" },
  { label: 'Transport', value: 'transport', inputLabel: "Transport" },
  { label: 'Entertainment', value: 'entertaiment', inputLabel: "Entertainment" },
  { label: 'Utility', value: 'utility', inputLabel: "Utility" },
  { label: 'Fuel', value: 'fuel' , inputLabel: "Fuel"},
  { label: 'Rent', value: 'rent', inputLabel: "Rent" },
]


export default function App() {
  const [category, setCategory] = useState()
  const [amount, setAmount] = useState()
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    if (expenses.length > 0) {
      AsyncStorage.setItem('expensesData', JSON.stringify(expenses))
        .then(() => {
          console.log('data stored')
        })
        .catch((error) => {
          console.log(error)
        })
    }
    else {
      AsyncStorage.getItem('expensesData')
        .then((value) => {
          if (value) {
            const items = JSON.parse(value)
            items.forEach((item) => {
              const str = item.id.toString()
              item.id = str
            })
            setExpenses(items)
          }
          else {
            console.log('no data')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  })

  const dropdownChange = (value) => {
    setCategory(value)
  }

  const amountChange = (value) => {
    setAmount(value)
  }

  const addItem = () => {
    const item = { amount: amount, category: category, id: (new Date().getTime()).toString() }
    setExpenses(expenses.concat([item]))
  }

  const Renderer = ({ item }) => (
    <TouchableOpacity style={styles.listItem}>
      <View>
        <Text style={styles.listItemAmount}>${item.amount}</Text>
        <Text>{item.category}</Text>
      </View>
    </TouchableOpacity>
  )

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
        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <FlatList
          data={expenses}
          renderItem={Renderer}
          keyExtractor={(item) => item.id}
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
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderColor: Theme.silver,
    borderBottomWidth: 1,
  },
  listItemAmount: {
    fontSize: 18,
  },
  listItemCategory: {
    fontSize: 12,
  },
});

