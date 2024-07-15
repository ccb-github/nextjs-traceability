import { EmbeddedSchemaMap, NormalSchemaMap } from "#/lib/schema"
import { EmbedSchemaObject, NormalSchemaObject } from "../format"

export type QrcodeSchemaEmbed = {
  value: string
}
export type LocationSchemaEmbed = {
  latitude: number
  longitude: number
}
const qrcodeSchemaEmbedObject: EmbedSchemaObject<keyof QrcodeSchemaEmbed> = {
  
  name: "Qrcode",
  embedded: true,
  properties: {
    value: {
      name: "value",
      dataType: "string",
      indexed: false,
      optional: false,
      mapTo: "value",
    },
  }
}
const locationSchemaEmbedObject: EmbedSchemaObject<keyof LocationSchemaEmbed> = {
  
  name: "Location",
  properties: {
    latitude: {
      name: "latitude",
      dataType: "double",
      indexed: false,
      optional: false,
      mapTo: "latitude",
    },
    longitude: {
      name: "longitude",
      dataType: "double",
      indexed: false,
      optional: false,
      mapTo: "longitude",
    },
  },
  embedded: true,
  
}
const embedSchemaMap: EmbeddedSchemaMap = {
  Location: locationSchemaEmbedObject,
  Qrcode: qrcodeSchemaEmbedObject
}

export default embedSchemaMap
