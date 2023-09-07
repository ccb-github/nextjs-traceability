import { gql } from "@apollo/client"

export const GET_ALL_CATGORIES = gql`
  query getAllCatgories($query: CategoryQueryInput) {
    categories(query: $query) {
      _id
      name
      createdAt
      description
    }
  }
`
