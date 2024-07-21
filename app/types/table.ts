/**
 * @description This is a general type for react table props
 * @type
 * @example GeneralDataTableWrapperProps<{_id: string}>
 */
export type GeneralDataTableWrapperProps<DataItem extends { _id: unknown }> = {
  data: DataItem[]
  lng: string
}
