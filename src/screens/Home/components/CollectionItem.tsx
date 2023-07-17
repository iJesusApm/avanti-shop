import React from 'react'
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native'
import {Collection} from '../../../types/collection'

type CollectionItemProps = {
  collection: Collection
  onPress: () => void
}

const CollectionItem = ({collection, onPress}: CollectionItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: collection.image.url}} style={styles.image} />
      <Text style={styles.title}>{collection.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default CollectionItem
