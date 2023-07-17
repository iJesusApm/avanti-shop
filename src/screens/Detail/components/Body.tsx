import React from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import {Product} from '../../../types/product'
import {COLORS} from '../../../styles/colors'

type BodyDetailProps = {
  product: Product
}

const BodyDetail = ({product}: BodyDetailProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.featuredImage.url}} style={styles.productImage} resizeMode="cover" />
      <View style={styles.productInfoContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>Price: ${product.variants.edges[0].node.price.amount}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productImage: {
    width: '100%',
    height: '75%',
  },
  productInfoContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
    textAlign: 'justify',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.WHITE,
    marginBottom: 8,
  },
})

export default BodyDetail
