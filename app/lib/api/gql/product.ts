import { gql } from "@apollo/client"

export const QUERY_PRODUCTS = gql`
  query queryProducts($query: ProductQueryInput) {
    products(query: $query) {
      _id
      name
      assemblePlace
      status
    }
  }
`

/* export const UPDATE_PRODUCTS2 = gql`
  mutation test(
    $query: ProductQueryInput
    
  ){
    insertOneCategory(data: {
      
    }) {
      
    }
  }
*/

export const UPDATE_PRODUCTS = gql`
  mutation updateProducts(
    $query: ProductQueryInput
    $set: ProductUpdateInput!
  ) {
    updateManyProducts(query: $query, set: $set) {
      matchedCount
      modifiedCount
    }
  }
`

export const GET_PRODUCT_BY_ID = gql`
  query getProductById($query: ProductQueryInput) {
    product(query: $query) {
      _id
      name
      assemblePlace
      description
      status
      category
      shelfLife
    }
  }
`

export const FIND_PRODUCT = gql`
  query findProduct($query: ProductQueryInput) {
    product(query: $query) {
      _id
      name
      assemblePlace
      description
      status
      category
      shelfLife
    }
  }
`

export const UPDATE_ONE_PRODUCT = gql`
  mutation UpdateOneProduct(
    $query: ProductQueryInput!
    $set: ProductUpdateInput!
  ) {
    updateOneProduct(query: $query, set: $set) {
      name
    }
  }
`
