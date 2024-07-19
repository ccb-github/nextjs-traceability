import { NormalSchemaObject } from "#/lib/schema/format"
import { BSON } from "realm-web"
export type CheckRecordSchema = {
  _id: BSON.ObjectID
  method: string
  name: string
  result: string
  device?: BSON.ObjectID
}

/**
 * @description Filter to query CheckRecord
 */
export type CheckRecordGqlFilter = Partial<CheckRecordSchema>

/**
 * @description Type for CheckRecord data insert
 */
export type CheckRecordGqlInsert = CheckRecordSchema

export type CheckRecordGqlResult = Partial<
  Record<keyof CheckRecordSchema, unknown>
> & {
  _id: string
}

export const checkRecordSchemaObject: NormalSchemaObject<keyof CheckRecordSchema> = {
  embedded: false,
  name: "CheckRecord",
  primaryKey: "_id",
  properties: {
    _id: {
      indexed: true,
      mapTo: "_id",
      name: "_id",
      optional: false,
      dataType: "objectId",
    },
    device: {
      indexed: false,
      mapTo: "device",
      name: "device",
      optional: false,
      dataType: "string",
    },
   
    method: {
      indexed: false,
      mapTo: "method",
      name: "method",
      optional: true,
      dataType: "string",
    },
    name: {
      indexed: false,
      mapTo: "name",
      name: "name",
      optional: false,
      dataType: "string",
    },
   
    result: {
      indexed: false,
      mapTo: "result",
      name: "result",
      optional: false,
      dataType: "string",
    },
  },
}

export default checkRecordSchemaObject
