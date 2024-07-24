import { type BSON } from "realm-web"
import { NormalSchemaObject } from "#/lib/schema/format"

export type StockSchema = {
  _id: BSON.ObjectID
  address: {
    name: "address",
    dataType: "string",
    indexed: false,
    optional: true,
    mapTo: "address",
  },
  name: {
    name: "name",
    dataType: "string",
    indexed: false,
    optional: false,
    mapTo: "name",
  },
}

/**
 * @description Type for Stock data insert
 */
export type StockGqlInsert = StockSchema

/**
 * @description Type for Stock data result
 */
export type StockGqlResult = Partial<
  Record<keyof StockSchema, unknown>
> & {
  _id: string
}


const stockSchemaObject: NormalSchemaObject<keyof StockSchema> = {
  name: "Stock",
  properties: {
    _id: {
      name: "_id",
      dataType: "objectId",
      indexed: true,
      optional: false,
      mapTo: "_id",
    },
    address: {
      name: "address",
      dataType: "string",
      indexed: false,
      optional: true,
      mapTo: "address",
    },
    name: {
      name: "name",
      dataType: "string",
      indexed: false,
      optional: false,
      mapTo: "name",
    },
  },
  primaryKey: "_id",
  embedded: false,
}

export default stockSchemaObject
