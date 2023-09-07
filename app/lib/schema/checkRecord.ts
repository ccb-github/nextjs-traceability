import { SchemaObject } from "#/types/schema"

const CheckRecord: SchemaObject = {
  embedded: false,
  name: "CheckRecord",
  primaryKey: "_id",
  properties: {
    _id: {
      indexed: true,
      mapTo: "_id",
      name: "_id",
      optional: false,
      type: "objectId",
    },
    device: {
      indexed: false,
      mapTo: "device",
      name: "device",
      optional: false,
      type: "string",
    },
    target: {
      name: "target",
      type: "select",
      objectType: "Checker",
      indexed: false,
      optional: false,
      mapTo: "target",
    },
    method: {
      indexed: false,
      mapTo: "method",
      name: "method",
      optional: true,
      type: "string",
    },
    name: {
      indexed: false,
      mapTo: "name",
      name: "name",
      optional: false,
      type: "string",
    },
    operator: {
      indexed: false,
      mapTo: "operator",
      name: "operator",
      objectType: "Checker",
      optional: true,
      type: "object",
    },
    result: {
      indexed: false,
      mapTo: "result",
      name: "result",
      optional: false,
      type: "string",
    },
  },
}

export default CheckRecord
