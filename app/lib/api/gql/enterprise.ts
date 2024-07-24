import { gql } from "@apollo/client"
import { getCookieByName } from "#/components/util/cookie"
import { BSON } from "realm-web"
import { createClient } from "#/lib/api/apolloClient"
import { EnterpriseGqlResult, EnterpriseSchema } from "#/lib/schema/def/enterprise"

export const QUERY_ENTERPRISES = gql`
  query getAllEnterprises($query: EnterpriseQueryInput) {
    enterprises(query: $query) {
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

export async function findEnterprises(
  query?: Partial<Record<keyof EnterpriseSchema, unknown>>,
): Promise<EnterpriseGqlResult[]> 
{
  "use server"
  try {
    const client = createClient(getCookieByName("accessToken")!)
    const {
      data: { enterprises },
    } = await client.query({
      query: QUERY_ENTERPRISES,
      variables: query,
    })
    return enterprises
  } catch (error) {
    console.error(error)
    throw error
  }
}

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
export async function updateEnterprise({
  query,
  set,
}: {
  query: Partial<EnterpriseSchema>
  set: Partial<EnterpriseSchema>
}) {
  try {
    const client = createClient(getCookieByName("accessToken")!)
    const { data } = await client.mutate({
      mutation: UPDATE_ONE_ENTERPRISE,
      variables: {
        query,
        set,
      },
    })
    console.log(data)
    return data
  } catch (error) {
    console.log("The error happened")
    throw error
  }
}

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
