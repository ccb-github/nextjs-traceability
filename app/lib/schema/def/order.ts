import { type BSON } from "realm-web"
import { type ProductSchema } from "#/lib/schema/def/product"
import { type NormalSchemaObject } from "#/lib/schema/format"

export type OrderSchema = {
  _id: BSON.ObjectID
  customerId: string
  orderTime: Date
  transitionId: BSON.ObjectID
  paymentMethod: string
  products: Array<ProductSchema>
}

/**
 * @description Type for Order data insert
 */
export type OrderGqlInsert = OrderSchema

export type OrderGqlResult = Partial<
  Record<keyof OrderSchema, unknown>
> & {
  _id: string
}

const OrderSchemaObject: NormalSchemaObject<keyof OrderSchema> = {
  name: "Order",
  properties: {
    _id: {
      name: "_id",
      dataType: "objectId",
      indexed: true,
      optional: false,
      mapTo: "_id",
    },
    customerId: {
      name: "customerId",
      dataType: "string",
      indexed: false,
      optional: false,
      mapTo: "customerId",
    },

    orderTime: {
      name: "orderTime",
      dataType: "date",
      indexed: false,
      optional: false,
      mapTo: "orderTime",
    },
    paymentMethod: {
      name: "paymentMethod",
      dataType: "string",
      indexed: false,
      optional: false,
      mapTo: "paymentMethod",
    },
    transitionId: {
      name: "transitionId",
      dataType: "objectId",
      indexed: false,
      optional: false,
      mapTo: "transitionId",
    },
    products: {
      name: "products",
      dataType: "list",
      objectType: "Product",
      indexed: false,
      optional: false,
      mapTo: "products",
    },
  },
  primaryKey: "_id",
  embedded: false,
}

export default OrderSchemaObject
