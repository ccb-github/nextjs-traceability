import { SchemaObject } from "#/types/schema";

const Logistic: SchemaObject =  {
  name: "Logistic",
  properties: {
  _id: {
    name: "_id",
    type: "objectId",
    indexed: true,
    optional: false,
    mapTo: "_id",
  },
  customerId: {
    name: "customerId",
    type: "string",
    indexed: false,
    optional: false,
    mapTo: "customerId",
  },
  orderTime: {
    name: "orderTime",
    type: "date",
    indexed: false,
    optional: false,
    mapTo: "orderTime",
  },
  products: {
    name: "products",
    type: "list",
    objectType: "Product",
    indexed: false,
    optional: false,
    mapTo: "products",
  },
  },
  primaryKey: "_id",
  embedded: false,
}

export default Logistic