import React from 'react'
import {View, StyleSheet} from 'react-native'
import SearchList from './components/List'
import {COLORS} from '../../styles/colors'
import CloseScreenButton from './components/CloseScreenButton'

const Search = () => {
  return (
    <View style={styles.container}>
      <SearchList />
      <CloseScreenButton />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE_AUX,
  },
})
export default Search
