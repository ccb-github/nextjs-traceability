import ReactTable from "#/components/common/ReactTable"
import { queryProducts } from "#/lib/api/apolloService"
import { type BasePageProps } from "#/types/pageProp"
import { type SchemaResultMapper } from "#/types/schema"
import React from "react"

export default async function AdminProductManagePage({
  params: { lng },
}: BasePageProps) {
  // The url is lowercase, but the schema name to search the database are like 'Name', we need to convert first
  const products  = await queryProducts()

  return (
    <div id="data-table" className="h-full w-full">
      <ReactTable
        data={products}
        columnList={
          ["name"]
        }
        schemaType={"Category"}
        deleteEnabled={true}
        lng={lng}
      />
    </div>
  )
}
