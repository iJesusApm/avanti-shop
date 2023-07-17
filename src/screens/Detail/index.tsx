import React from 'react'
import {View, StyleSheet} from 'react-native'
import {useRoute} from '@react-navigation/native'

import {COLORS} from '../../styles/colors'
import Header from './components/Header'
import Body from './components/Body'

import type {RouteProp} from '@react-navigation/native'
import {SCREENS_ROUTES} from '../../navigation/constants'
import type {RootParamList} from '../../navigation/navigator/Root'

type ProductDetailsRouteProp = RouteProp<RootParamList, typeof SCREENS_ROUTES.DETAIL>

const DetailsScreen = () => {
  const {params} = useRoute<ProductDetailsRouteProp>()

  return (
    <View style={styles.container}>
      <Header />
      <Body product={params?.product} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  body: {
    flex: 1,
  },
  productImage: {
    width: '100%',
    height: 300,
  },
  productInfoContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: COLORS.BLACK + 99,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.WHITE,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: COLORS.WHITE,
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
})

export default DetailsScreen
