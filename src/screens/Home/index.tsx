import React from 'react'
import {View, StyleSheet} from 'react-native'
import Header from '../../components/Header'
import Footer from '../../components/SearchFooterButton'
import CollectionList from './components/CollectionList'
import ProductList from './components/ProductList'
import {COLORS} from '../../styles/colors'

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CollectionList />
      <ProductList />
      <Footer />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE_AUX,
  },
})
export default Home
