import { getCookieByName } from "#/components/util/cookie"

import { ApolloError, gql } from "@apollo/client"
import { createClient } from "../apolloClient"
import {
  CategoryGqlInsert,
  CategoryGqlQuery,
  CategoryGqlResult,
  CategorySchema,
} from "#/lib/schema/def/category"

export const FIND_CATEGORIES = gql`
  query queryCategories($query: CategoryQueryInput) {
    categories(query: $query) {
      _id
      createdAt
      description
      name
    }
  }
`

export async function findCategories(
  variables?: CategoryGqlQuery,
){
  //: Promise<CategoryGqlResult[]> 
  try {
    const client = createClient(getCookieByName("accessToken")!)
    const {
      data: { categories },
    } = await client.query<{
      categories:
      CategoryGqlResult[]
    }>({
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

export const INSERT_ONE_CATEGORY = gql`
  mutation insertOneCategory($newCategory: CategoryInsertInput!) {
    insertOneCategory(data: $newCategory) {
      _id
      name
    }
  }
`

export async function insertOneCategory(variables: CategoryGqlInsert): Promise<{
  categories: Partial<Record<keyof CategoryGqlResult, unknown>>[]
}> {
  try {
    const client = createClient(getCookieByName("accessToken")!)
    const { data } = await client.mutate({
      mutation: INSERT_ONE_CATEGORY,
      variables,
    })
    return data
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