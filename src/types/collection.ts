export type Collection = {
  id: string
  handle: string
  title: string
  description: string
  image: {
    id: string
    url: string
  }
}

export type GetCollectionsResponse = {
  data: {
    collections: {
      edges: {
        cursor: string
        node: Collection
      }[]
    }
  }
}
