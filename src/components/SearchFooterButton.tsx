import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {COLORS} from '../styles/colors'

const Footer = () => {
  const handlePress = () => {
    // Navegar a la pantalla de búsqueda
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Ionicons name="search" size={32} color={COLORS.WHITE} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  button: {
    backgroundColor: COLORS.BLACK,
    borderRadius: 30,
    padding: 12,
  },
})

export default Footer
