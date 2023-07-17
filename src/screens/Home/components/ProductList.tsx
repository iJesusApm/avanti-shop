import React, {useEffect, useState} from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'
import ProductItem from './ProductItem'
import {Product} from '../../../types/product'
import {getProducts} from '../../../services/products'

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts()
        setProducts(response)
      } catch (error) {
        console.log('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [])

  const renderProductItem = ({item}: {item: Product}) => <ProductItem product={item} />

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={products}
        contentContainerStyle={styles.list}
        keyExtractor={item => item.id}
        renderItem={renderProductItem}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 16,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  list: {
    flexGrow: 1,
  },
})

export default ProductList
