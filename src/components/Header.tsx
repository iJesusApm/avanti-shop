import React from 'react'
import {Image, StyleSheet, View, StatusBar, Platform} from 'react-native'
import {COLORS} from '../styles/colors'

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.BLACK} />
      <Image source={require('../assets/resources/avanti.png')} style={styles.logo} resizeMode="contain" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight,
    paddingBottom: 16,
    backgroundColor: COLORS.BLACK,
  },
  logo: {
    width: 150,
    height: 30,
  },
})

export default Header
