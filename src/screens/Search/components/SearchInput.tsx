import React from 'react'
import {StyleSheet, TextInput, View, Platform, StatusBar, Image} from 'react-native'
import {COLORS} from '../../../styles/colors'

type SearchInputProps = {
  value: string
  onChangeText: (text: string) => void
}

const SearchInput = ({value, onChangeText}: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.BLACK} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search Product"
          placeholderTextColor={COLORS.LIGHTGRAY}
          value={value}
          onChangeText={onChangeText}
        />
        <Image source={require('../../../assets/resources/avanti.png')} style={styles.logo} resizeMode="contain" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight,
    backgroundColor: COLORS.BLACK,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: COLORS.WHITE,
  },
  logo: {
    width: 100,
    height: 24,
    marginLeft: 16,
  },
})

export default SearchInput
