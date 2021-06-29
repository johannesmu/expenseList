import React, {useState,useEffect} from 'react';
import {View} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';

export function Dropdown( props ) {
  return(
    <View>
      <RNPickerSelect 
      items={props.categories} 
      onValueChange={props.handler}  
      />
    </View>
  )
}