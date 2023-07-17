import React, {useEffect, useState} from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'
import CollectionItem from './CollectionItem'
import {Collection} from '../../../types/collection'
import {getCollections} from '../../../services/collections'

const CollectionList = () => {
  const [collections, setCollections] = useState<Collection[]>([])

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await getCollections()
        setCollections(response)
      } catch (error) {
        console.log('Error fetching collections:', error)
      }
    }

    fetchCollections()
  }, [])

  const renderCollectionItem = ({item}: {item: Collection}) => (
    <CollectionItem collection={item} onPress={() => console.log(item)} />
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Collections</Text>
      <FlatList
        data={collections}
        keyExtractor={item => item.id}
        renderItem={renderCollectionItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
})

export default CollectionList
