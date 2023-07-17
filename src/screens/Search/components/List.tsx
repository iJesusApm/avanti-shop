import React, {useEffect, useState} from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {Product} from '../../../types/product'
import {getProducts} from '../../../services/products'
import {COLORS} from '../../../styles/colors'
import ProductItem from './Product'
import SearchInput from './SearchInput'

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [searchValue, setSearchValue] = useState('')

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

  const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))

  const renderProductItem = ({item}: {item: Product}) => <ProductItem product={item} />

  const renderSeparator = () => <View style={styles.separator} />

  const handleSearchChange = (text: string) => {
    setSearchValue(text)
  }

  return (
    <View style={styles.container}>
      <SearchInput value={searchValue} onChangeText={handleSearchChange} />
      <FlatList
        data={filteredProducts}
        contentContainerStyle={styles.list}
        keyExtractor={item => item.id}
        renderItem={renderProductItem}
        ItemSeparatorComponent={renderSeparator}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flexGrow: 1,
    marginHorizontal: 16,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.LIGHTGRAY,
  },
})

export default ProductList
