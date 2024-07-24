import { BSON } from "realm-web"
import { NormalSchemaObject } from "#/lib/schema/format"

/**
 * @description The data model of category collection
 * category stands for the category of the 
 * {@link import("./product.ts")}
 */
export type CategorySchema = {
  _id: BSON.ObjectID
  description: string
  name: string
  createdAt: Date
}

export type CategoryGqlQuery = Partial<
  Record<keyof CategorySchema, unknown>
> 

export type CategoryGqlInsert = CategorySchema

export type CategoryGqlResult = Partial<
  Record<keyof CategorySchema, string>
> & {
  _id: string
}
/**
 * @type {NormalSchemaObject} Template  Instanize with {@link CategorySchema}
 */
const categorySchemaObject: NormalSchemaObject<keyof CategorySchema> = {
  name: "Category",
  properties: {
    _id: {
      name: "_id",
      dataType: "objectId",
      indexed: true,
      optional: false,
      mapTo: "_id",
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
    createdAt: {
      name: "createdAt",
      dataType: "date",
      indexed: false,
      optional: false,
      mapTo: "createdAt",
    },
  },
  primaryKey: "_id",
  embedded: false,
}

export default categorySchemaObject
