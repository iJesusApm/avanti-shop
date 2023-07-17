export type Product = {
  id: string
  title: string
  description: string
  featuredImage: {
    id: string
    url: string
  }
  variants: {
    edges: {
      node: {
        price: {
          amount: number
          currencyCode: string
        }
      }
    }[]
  }
}

export type GetProductResponse = {
  data: {
    products: {
      edges: {
        node: Product
      }[]
    }
  }
}
