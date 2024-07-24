import { NormalSchemaObject } from "#/lib/schema/format"
import { BSON } from "realm-web"

export type RegulatorySchema = {
  _id: BSON.ObjectID
  name: string
  address: string
  description: string
  ownerId: string
}

/**
 * @description Type for Regulatory data insert
 */
export type RegulatoryGqlInsert = RegulatorySchema

/**
 * @description Type for Regulatory data result
 */
export type RegulatoryGqlResult = Partial<
  Record<keyof RegulatorySchema, unknown>
> & {
  _id: string
}

export const regulatorySchemaObject: NormalSchemaObject<keyof RegulatorySchema> = {
  name: "Regulatory",
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
    description: {
      name: "description",
      dataType: "string",
      indexed: false,
      optional: false,
      mapTo: "description",
    },
    name: {
      name: "name",
      dataType: "string",
      indexed: false,
      optional: true,
      mapTo: "name",
    },
    ownerId: {
      name: "ownerId",
      dataType: "string",
      indexed: false,
      optional: false,
      mapTo: "ownerId",
    },
  },
  primaryKey: "_id",
  embedded: false,
}

export default regulatorySchemaObject
