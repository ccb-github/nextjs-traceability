"use client"
import { useApp } from "#/hooks/useApp"
import { NormalSchemaName, SchemaJson, SchemaName, SchemaObject, SchemaResultMapper } from "#/types/schema"
import { useEffect, useRef, useState } from "react"
//The id must can be stringify
export default function RelatedObjectSelect({
  objectType,
  name,
  displayKey = "name",
  label,
  className,
  ...props
}: {
  objectType: NormalSchemaName
  className?: string
  displayKey: keyof SchemaResultMapper[NormalSchemaName]
  name?: string
  label?: string
  linked?: boolean
  onChangeValue?: (newValue: string) => any
}) {
  //TODO provide the type
  const [dataList, setDataList] = useState<
    SchemaResultMapper[NormalSchemaName][]
  >([])
  const mongoApp = useApp()
  const mongoCol = useRef(
    mongoApp.currentUser
      ?.mongoClient("mongodb-atlas")
      .db("qrcodeTraceability")
      .collection(objectType),
  )
  useEffect(() => {
    mongoCol.current?.find({}).then((res) => {
      setDataList(res)
    })
  }, [])

  return (
    <select
      className={className}
      name={name}
      {...props}
      defaultValue={label || `Select the related ${objectType} item id`}
    >
      {dataList.map((item, key) => {
        return (
          <option key={key} value={item._id.toString()}>
            {item[displayKey]}
          </option>
        )
      })}
    </select>
  )
}