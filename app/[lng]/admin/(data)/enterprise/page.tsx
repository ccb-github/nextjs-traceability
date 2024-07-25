import SchemaDataReactTable from "#/components/common/SchemaDataReactTable"
import { findEnterprises } from "#/lib/api/gql/enterprise"
import enterpriseSchemaJson, { EnterpriseGqlResult } from "#/lib/schema/def/enterprise"
import { BasePageProps } from "#/types/pageProp"


export default async function AdminEnterpriseManagePage({
  params: { lng },  
}: BasePageProps) {
  //The url is lowercase, but the schema name to search the database are like 'Name', we need to convert first

  const enterprises = await findEnterprises()
  return (
    <div
      id="data-table"
      className="h-full overflow-x-scroll"
    >
      <SchemaDataReactTable<EnterpriseGqlResult>
        lng={lng}
        data={enterprises}
        columnOptions={
          Object.entries(enterpriseSchemaJson.properties).map(([key, value]) => ({
          
            accessor: key as keyof EnterpriseGqlResult,
            accessorKey: key,
            header: key,

            type: value.dataType,

            //Filter setting
            filterFn: "includesString",
          }))
        }
        schemaType={"Enterprise"}
        columnAccessors={[
          "name",
          "address",
          "createdAt",
          "creditCode",
          "registerPlace",
        ]}
        deleteEnabled={true}
      />
    </div>
  )
}
