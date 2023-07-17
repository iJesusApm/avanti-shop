import {Product, GetProductResponse} from '../types/product'
import {get} from './api'

export const getProducts = async (): Promise<Product[]> => {
  const query = encodeURIComponent(
    '{products(first: 50){edges {node {id title description featuredImage {id url} variants(first: 3){edges {node {price {amount currencyCode}}}}}}}}'
  )
  const path = `?query=${query}`

  const response = await get<GetProductResponse>(path)

  const products = response.data.products.edges.map(edge => edge.node)
  return products
}
