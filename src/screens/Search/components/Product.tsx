import React from 'react'
import {TouchableOpacity, Image, Text, StyleSheet, View} from 'react-native'
import {Product} from '../../../types/product'
import {COLORS} from '../../../styles/colors'
import {Ionicons} from '@expo/vector-icons'

type ProductItemProps = {
  product: Product
}

const ProductItem = ({product}: ProductItemProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: product.featuredImage.url}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.variants.edges[0].node.price.amount}</Text>
      </View>
      <Ionicons name="ios-arrow-forward" size={20} color={COLORS.BLACK} style={styles.arrowIcon} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.GRAY,
  },
  arrowIcon: {
    marginRight: 16,
  },
})

export default ProductItem
