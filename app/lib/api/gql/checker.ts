import { CategoryGqlQuery } from "#/lib/schema/def/category"
import { ApolloError, gql } from "@apollo/client"
import { createClient } from "#/lib/api/apolloClient"
import { getCookieByName } from "#/components/util/cookie"
import { FIND_CATEGORIES } from "#/lib/api/gql/category"
import { CheckerGqlQuery, CheckerGqlResult } from "#/lib/schema/def/checker"

export const FIND_CHECKERS = gql`
  query findCheckers {
    checkers {
      _id
      address
      belong {
        name
      }
      email
      name
    }
  }
`

export async function findCheckers(
  variables?: CheckerGqlQuery,
): Promise<CheckerGqlResult[]> {
  try {
    const client = createClient(getCookieByName("accessToken")!)
    const {
      data: { categories },
    } = await client.query({
      query: FIND_CATEGORIES,
      variables,
    })
    return categories
  } catch (error) {
    if (error instanceof ApolloError) {
      error.clientErrors.length > 0 ? console.error(error.clientErrors) : null
      error.networkError ? console.table(error.networkError) : null
    } else {
      console.error("Unknown type error")
    }
    console.error(error)
    throw error
  }
}
