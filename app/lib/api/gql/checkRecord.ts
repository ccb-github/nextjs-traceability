import { gql } from "@apollo/client"

export const GET_CHECK_RECORDS = gql`
  query checkRecordsByCheckerId($query: CheckRecordQueryInput) {
    checkRecords(query: $query) {
      device
      target
      method
      target
      # Related products
    }
  }
`
