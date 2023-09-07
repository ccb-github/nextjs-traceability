import ReactTable from "#/components/common/ReactTable";
import { queryProducts } from "#/lib/api/apolloService"
import { type BasePageProps } from "#/types/pageProp"
import { SchemaResultMapper } from "#/types/schema";

import React from "react"
import { Dropdown } from "semantic-ui-react";


const statusOptions: Array<{ key: number; text: string; value: string }> = [
  { key: 1, text: "Choice 1", value: "Sold" },
  { key: 2, text: "Choice 2", value: "Selling" },
]

export default async function EnterpriseProductManagePage({
  params: { lng },
}: BasePageProps) {
  // The url is lowercase, but the schema name to search the database are like 'Name', we need to convert first
  const products = await queryProducts()

  return (
    <div id="data-table" className="h-full w-full">
      <ReactTable
        data={products}
        columnList={
          ["name", "shelfLife"] as Array<keyof SchemaResultMapper["Product"]>
        }
        // actionButtons={[() => <Dropdown options={statusOptions} />]}
        schemaType={"Product"}
        deleteEnabled={true}
        lng={lng}
      />
    </div>
  )
}
