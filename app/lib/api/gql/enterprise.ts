import { gql } from "@apollo/client"
import { createClient } from "../apolloService"
import { getCookieByName } from "#/components/util/cookie"
import { BSON } from "realm-web"

export const GET_ALL_ENTERPRISES = gql`
  query getAllEnterprises {
    enterprises {
      _id
      name
      address
      createdAt
      creditCode
      name
      registerPlace
    }
  }
`

export const GET_ENTERPRISE_BY_ID = gql`
  query getEnterpriseById($id: ObjectId) {
    enterprise(query: { _id: $id }) {
      _id
      name
      address
      createdAt
      creditCode
      name
      registerPlace
    }
  }
`

export const UPDATE_ONE_ENTERPRISE = gql`
  mutation updateOneEnterprise(
    $query: EnterpriseQueryInput
    $set: EnterpriseUpdateInput!
  ) {
    updateOneEnterprise(query: $query, set: $set) {
      _id
      address
    }
  }
`

// Apollo query section
export async function getEnterpriseById(id: string) {
  const client = createClient(getCookieByName("accessToken")!)
  const { data } = await client.query({
    query: GET_ENTERPRISE_BY_ID,
    variables: { id: new BSON.ObjectId(id) },
  })
  console.log(`The data in the query function ${JSON.stringify(data)}`)
  return data
}