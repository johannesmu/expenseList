import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Theme from './Theme'

export function Header( props ) {
  return(
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.text}</Text>
      <Image style={styles.headerLogo} source={require('../assets/money_star_logo.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Theme.mindaro,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
  },
  headerLogo: {
    width: 36,
    height: 36,
  }
})