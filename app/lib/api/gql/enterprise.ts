import { gql } from "@apollo/client"
import { getCookieByName } from "#/components/util/cookie"
import { BSON } from "realm-web"
import { createClient } from "#/lib/api/apolloClient"
import { EnterpriseSchema } from "#/lib/schema/def/enterprise"
import { ProductSchema } from "#/lib/schema/def/product"


export const FIND_ENTERPRISES = gql`
  query findEnterprises($query: EnterpriseQueryInput) {
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
) {
  "use server"
  try {
    const client = createClient(getCookieByName("accessToken")!)
    const {
      data: { enterprises },
    } = await client.query({
      query: FIND_ENTERPRISES,
      variables: query,
    })
    return enterprises
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const FIND_ENTERPRISE_BY_ID = gql`
  query findEnterpriseById($id: ObjectId) {
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
export async function updateOneEnterprise({
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
    query: FIND_ENTERPRISE_BY_ID,
    variables: { id: new BSON.ObjectId(id) },
  })
  console.log(`The data in the query function ${JSON.stringify(data)}`)
  return data
}
