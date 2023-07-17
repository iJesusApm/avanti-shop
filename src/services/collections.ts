import {Collection, GetCollectionsResponse} from '../types/collection'
import {get} from './api'

export const getCollections = async (): Promise<Collection[]> => {
  const query = encodeURIComponent(
    '{collections(first: 10){edges {cursor node {id handle title description image {id url}}}}}'
  )
  const path = `?query=${query}`

  const response = await get<GetCollectionsResponse>(path)

  const collections = response.data.collections.edges.map(edge => edge.node)
  return collections
}
