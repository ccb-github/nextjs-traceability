import ReactTable from "#/components/common/ReactTable"
import { queryProducts } from "#/lib/api/apolloService"
import { type BasePageProps } from "#/types/pageProp"
import { type SchemaResultMapper } from "#/types/schema"

import React from "react"

export default async function EnterpriseProductManagePage({
  params: { lng },
}: BasePageProps) {
  // The url is lowercase, but the schema name to search the database are like 'Name', we need to convert first
  const products  = await queryProducts()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <div id="data-table" className="h-full w-full">
      <ReactTable
        data={products}
        columnList={
          [
            "name",
            "assemblePlace",
            "produceDay",
            "shelfLife",
            "producer",
          ] as Array<keyof SchemaResultMapper["Product"]>
        }
        schemaType={"Product"}
        deleteEnabled={true}
        lng={lng}
        // actionButtons={[
        //   (id: string) => (
        //     <Button key={0} className="m-auto" onClick={async () => {
        //       "use server"
        //       try {
        //         const updateResult = await updateProducts({
        //           query: new BSON.ObjectId(id),
        //           set: {
        //             status: "出库"
        //           }
        //         }) 
        //       } catch (error) {
        //         throw error
        //       }
        //     }}>
        //     </Button>
        //   ),
        // ]}
      />
    </div>
  )
}
