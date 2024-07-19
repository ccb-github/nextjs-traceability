import { NormalSchemaObject } from "#/lib/schema/format"
import { BSON } from "realm-web"

export type CheckerSchema = {
  _id: BSON.ObjectID
  address?: string
  belong: BSON.ObjectID
  email: string
  name: string
}

export type CheckerGqlQuery = Partial<
  Record<keyof CheckerSchema, unknown>
> 

/**
 * @description Type for Checker data insert
 */
export type CheckerGqlInsert = CheckerSchema

export type CheckerGqlResult = Partial<
  Record<keyof CheckerSchema, unknown>
> & {
  _id: string
}

const CheckerSchemaObject: NormalSchemaObject<keyof CheckerSchema> = {
  name: "Checker",
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
      defaultValue: "Default address",
      indexed: false,
      optional: true,
      mapTo: "address",
    },
    belong: {
      name: "belong",
      dataType: "object",
      objectType: "Regulatory",
      indexed: false,
      optional: true,
      mapTo: "belong",
    },
    email: {
      name: "email",
      dataType: "string",
      indexed: false,
      optional: false,
      mapTo: "email",
    },
    name: {
      name: "name",
      dataType: "string",
      indexed: false,
      optional: true,
      mapTo: "name",
    },
  },
  primaryKey: "_id",
  embedded: false,
}



export default CheckerSchemaObject
