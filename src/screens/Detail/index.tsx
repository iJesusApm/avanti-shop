import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Detail = () => {
  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})
export default Detail
