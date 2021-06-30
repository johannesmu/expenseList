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
      useNativeAndroidPickerStyle={false}
      placeholder={{label:"Select a category", value: null }}
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
    color: 'blue',
  },
  placeholder: {
    color: 'red'
  },
})