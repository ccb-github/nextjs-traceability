import categorySchemaObject, { CategorySchema } from "#/lib/schema/def/category"
import CheckerSchemaObject from "#/lib/schema/def/checker"
import enterpriseSchemaObject, { EnterpriseSchema } from "#/lib/schema/def/enterprise"
import productSchemaObject, { ProductSchema } from "#/lib/schema/def/product"
import regulatorySchemaObject, {
  type RegulatorySchema,
} from "#/lib/schema/def/regulatory"
import checkRecordSchemaObject from "#/lib/schema/def/checkRecord"
import stockSchemaObject from "#/lib/schema/def/stock"
import OrderObject, { OrderSchema } from "#/lib/schema/def/order"

import type {
  EmbedSchemaObject,
  EmbeddedSchemaName,
  NormalSchemaName,
  NormalSchemaObject,
} from "./format"

export type NormalSchemaMap = {
  [key in NormalSchemaName]: NormalSchemaObject
}
export type EmbeddedSchemaMap = {
  [key in EmbeddedSchemaName]: EmbedSchemaObject<string>
}

export const normalSchemaMap: NormalSchemaMap = {
  Category: categorySchemaObject,
  Checker: CheckerSchemaObject,
  CheckRecord: checkRecordSchemaObject,
  Enterprise: enterpriseSchemaObject,
  Product: productSchemaObject,
  Regulatory: regulatorySchemaObject,
  Order: OrderObject,
  Stock: stockSchemaObject,

}
/**
 * @todo Decide if this is still need
 */
export type SchemaTypeMapper = {
  Category: CategorySchema
  Enterprise: EnterpriseSchema
  Product: ProductSchema
  Order: OrderSchema
  Regulatory: RegulatorySchema
}
