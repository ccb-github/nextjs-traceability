import { gql } from "@apollo/client";

export const QUERY_ORDERS = gql`
  query queryOrders {
    orders {
      _id
      customerId
      orderTime
      products {
        _id
        name
      }
      # Related products
    }
  }
`

export const INSERT_ONE_ORDER = gql`
  mutation insertOneOrder($data: OrderInsertInput!) {
    insertOneOrder(data: $data) {
      _id
      products {
        _id
      }
    }
  }
`
// export const INSERT_ORDERS = gql`
//    query insertOrders({}: OrderInsertInput){
//    }
//