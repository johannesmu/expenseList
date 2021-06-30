import React, {useState,useEffect} from 'react';
import {View, StyleSheet} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import Theme from './Theme';

export function Dropdown( props ) {
  return(
    <View>
      <RNPickerSelect 
      items={props.categories} 
      onValueChange={props.handler}
      style={PickerStyle}
      />
    </View>
  )
}

const PickerStyle = StyleSheet.create({
  inputIOS: {
    padding: 10,
    backgroundColor: Theme.silver,
    textAlign: 'center',
  },
  inputAndroid: {
    padding: 10,
    backgroundColor: Theme.silver,
    textAlign: 'center',
  },
  
})