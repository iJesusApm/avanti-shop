import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {Image, StyleSheet, View, Platform, TouchableOpacity, StatusBar} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {COLORS} from '../../../styles/colors'

const Header = () => {
  const navigation = useNavigation()

  const goBack = () => {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={goBack}>
        <Ionicons name="arrow-back" size={24} color={COLORS.WHITE} />
      </TouchableOpacity>
      <Image source={require('../../../assets/resources/avanti.png')} style={styles.logo} resizeMode="contain" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight,
    backgroundColor: COLORS.BLACK,
  },
  goBackButton: {
    padding: 8,
  },
  logo: {
    marginLeft: 16,
    width: 100,
    height: 30,
  },
})

export default Header
