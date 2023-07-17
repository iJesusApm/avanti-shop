import React from 'react'
import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native'
import {Product} from '../../../types/product'
import {COLORS} from '../../../styles/colors'
import {useNavigation} from '@react-navigation/native'
import {SCREENS_ROUTES} from '../../../navigation/constants'

type ProductItemProps = {
  product: Product
}

const ProductItem = ({product}: ProductItemProps) => {
  const navigation = useNavigation()
  const handlePress = () => {
    navigation.navigate(SCREENS_ROUTES.DETAIL, {product})
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.border}>
        <Image source={{uri: product.featuredImage.url}} style={styles.image} />
        <Text numberOfLines={1} style={styles.title}>
          {product.title}
        </Text>
        <Text style={styles.subTitle}>${product.variants.edges[0].node.price.amount}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    alignSelf: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  border: {
    borderColor: COLORS.GRAY,
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {
    width: 160,
    height: 220,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 12,
    marginTop: 4,
  },
  subTitle: {
    color: COLORS.GRAY,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 12,
    marginVertical: 4,
  },
})

export default ProductItem
