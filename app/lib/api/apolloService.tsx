import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
  ApolloError,
} from "@apollo/client"
import { getCookieByName } from "#/components/util/cookie"
import { BSON } from "realm-web"
import { SchemaResultMapper } from "#/types/schema"
import { FIND_REGULATORIES, UPDATE_REGULATORIES } from "./gql/regulatory"
import {
  QUERY_PRODUCTS,
  GET_PRODUCT_BY_ID,
  UPDATE_ONE_PRODUCT,
  UPDATE_PRODUCTS,
} from "./gql/product"
import {
  GET_ALL_ENTERPRISES,
  GET_ENTERPRISE_BY_ID,
  UPDATE_ONE_ENTERPRISE,
} from "./gql/enterprise"
import { INSERT_ONE_ORDER, QUERY_ORDERS } from "./gql/order"
import { GET_CHECK_RECORDS } from "./gql/checkRecord"
import { cookies } from "next/headers"

// 1. Function to create GraphQL client//"https://realm.mongodb.com/api/client/v2.0/app/application-parking-apwzf/graphql",
//TODO type for token "https://main--time-pav6zq.apollographos.net/graphql",
export const createClient = (token: string) => {
  console.log(`Just mask ${token}`)

  //console.log(token, new Date().toISOString())
  // const app = new Realm.App("application-qrcode-ukplu")
  // console.log(app.currentUser?.accessToken)
  const accessToken = cookies().get("accessToken")?.value
  console.group()
  console.log("The accessToken", accessToken)
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT,
      fetch: async (uri, options) => {
        
        options.headers.Authorization = `Bearer ${accessToken}`;
        return fetch(uri, options);
      },
      // headers: {
      //   Authorization: `Bearer ${authToken}`,
      // },
    }),
    cache: new InMemoryCache(),
    ssrMode: true,
  })
}

export async function getCategories(): Promise<{
  categories: SchemaResultMapper["Category"][]
}> {
  try {
    const client = createClient(getCookieByName("accessToken")!)
    const { data } = await client.query({
      query: gql`
        query getCategories {
          categories {
            _id
            name
            description
          }
        }
      `,
    })
    return data
  } catch (error) {
    console.log((error as ApolloError).networkError)
    throw error
  }
}

export async function addCategory(newCategory: SchemaResultMapper["Category"]) {
  try {
    const client = createClient(getCookieByName("accessToken")!)
    const { data } = await client.mutate({
      mutation: ADD_NEWCATEGORY,
      variables: newCategory,
    })
    return data
  } catch (error) {
    console.log((error as ApolloError).networkError)
    throw error
  }
}

export async function getOneProduct({
  query,
}: {
  query?: Partial<SchemaResultMapper["Product"]>
}): Promise<{ product: Partial<SchemaResultMapper["Product"]> }> {
  try {
    const client = createClient(getCookieByName("accessToken")!)
    const { data } = await client.query({
      query: GET_PRODUCT_BY_ID,
      variables: {
        query,
      },
    })
    return data
  } catch (error) {
    console.log("The error happened")
    throw error
  }
}

export async function getByName(token: string, name: string) {
  const client = createClient(getCookieByName("accessToken")!)
  const { data } = await client.query({
    query: getByNameGql(name),
  })
  console.log(data.length)
  return data
}

export async function queryProducts() {
  "use server"
  try {
    const client = createClient(getCookieByName("accessToken")!)
    const {
      data: { products },
    } = await client.query({
      query: QUERY_PRODUCTS,
    })
    console.log(products.length)
    return products
  } catch (error) {
    switch (Array.isArray(error)) {
      case true:
        (error as unknown[]).map((eachError) => {
          console.error(eachError)
        })
        break
      case false:
        console.error(error)
        break
    }
    console.table(error as ApolloError)
    throw error
  }
}
export async function updateProducts({
  query,
  set,
}: {
  query: Partial<SchemaResultMapper["Product"]>
  set: Partial<SchemaResultMapper["Product"]>
}) {
  try {
    const client = createClient(getCookieByName("accessToken")!)
    const { data } = await client.mutate({
      mutation: UPDATE_PRODUCTS,
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
export async function updateEnterprise({
  query,
  set,
}: {
  query: Partial<SchemaResultMapper["Enterprise"]>
  set: Partial<SchemaResultMapper["Product"]>
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

export async function insertOneOrder(
  insertData: Partial<SchemaResultMapper["Order"]>,
) {
  try {
    const client = createClient(getCookieByName("accessToken")!)
    const { data: resultData } = await client.mutate({
      mutation: INSERT_ONE_ORDER,
      variables: {
        data: insertData,
      },
    })
    console.log(resultData)
    return resultData
  } catch (error) {
    console.log("The error happened")
    throw error
  }
}

export async function updateOneProduct({
  query,
  set,
}: {
  query: Partial<SchemaResultMapper["Product"]>
  set: Partial<SchemaResultMapper["Product"]>
}) {
  try {
    const client = createClient(getCookieByName("accessToken")!)
    const { data } = await client.mutate({
      mutation: UPDATE_ONE_PRODUCT,
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

const getByNameGql = (name: string) => gql`
  query {
    ${name} {
      _id
      name
    }
  }
`

const ADD_NEWCATEGORY = gql`
  mutation addCategory(
    $name: String
    $_id: ObjectId
    $createdAt: DateTime
    $description: String
  ) {
    insertOneCategory(
      data: {
        name: $name
        _id: $_id
        createdAt: $createdAt
        description: $description
      }
    ) {
      name
    }
  }
`
//
const getByNameAndFilterGql = (name: string) => {
  return gql`
    query getByNameAndFilter{
      ${name}{
        name
      }
    }
  `
}



//TODO type the filter

// export async function getByName(token: string, name: string, filter?: GqlFilter) {
//   //console.log(`The cookie at server side ${cookies().get('accessToken')?.value}`)
//   const client = createClient(getCookieByName("accessToken")!);
//   console.log("Important",getByNameAndFilterGql(name))
//   const {
//     data
//   } = await client.query({
//     query: getByNameAndFilterGql(name),

//   });
//   return data
// }

export async function getByNameAndFilter(token: string, name: string) {
  const client = createClient(getCookieByName("accessToken")!)
  console.log("Important", getByNameAndFilterGql(name))
  const { data } = await client.query({
    query: getByNameAndFilterGql(name),
  })
  return data
}

export async function getAllEnterprises() {
  "use server"
  try {
    const client = createClient(getCookieByName("accessToken")!)
    const { data } = await client.query({
      query: GET_ALL_ENTERPRISES,
    })
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function queryOrders(): Promise<SchemaResultMapper["Order"][]> {
  "use server"
  const client = createClient(getCookieByName("accessToken")!)
  try {
    const {
      data: { orders },
    } = await client.query({
      query: QUERY_ORDERS,
    })
    console.log("This is the order now")
    return orders
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getCheckRecords() {
  const client = createClient(getCookieByName("accessToken")!)
  const { data } = await client.query({
    query: GET_CHECK_RECORDS,
  })
  return data
}
export async function getRegulatories({
  query,
}: {
  query?: Partial<SchemaResultMapper["Regulatory"]>
}): Promise<{ regulatories: SchemaResultMapper["Regulatory"][] }> {
  try {
    const client = createClient(getCookieByName("accessToken")!)
    const { data } = await client.query({
      query: FIND_REGULATORIES,
      variables: {
        query,
      },
    })
    return data
  } catch (error) {
    console.log("The error happened")
    throw error
  }
}

export async function updateRegulatories({
  query,
  set,
}: {
  query?: Partial<SchemaResultMapper["Regulatory"]>
  set?: Partial<SchemaResultMapper["Regulatory"]>
}): Promise<{ regulatories: SchemaResultMapper["Regulatory"] }> {
  try {
    const client = createClient(getCookieByName("accessToken")!)
    const { data } = await client.mutate({
      mutation: UPDATE_REGULATORIES,
      variables: {
        query,
        set,
      },
    })
    return data
  } catch (error) {
    console.log("The error happened")
    throw error
  }
}
//TODO Type anyobject not any
// export async function searchGql(
//   accessToken: string,
//   query: DocumentNode,
//   variables?: any,
// ) {}
