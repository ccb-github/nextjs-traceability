import SchemaDataReactTable from "#/components/common/SchemaDataReactTable"
import { queryEnterprises } from "#/lib/api/gql/enterprise"
import enterpriseSchemaJson, { EnterpriseSchema } from "#/lib/schema/def/enterprise"
import { BasePageProps } from "#/types/pageProp"


export default async function AdminEnterpriseManagePage({
  params: { lng },
}: BasePageProps) {
  //The url is lowercase, but the schema name to search the database are like 'Name', we need to convert first

  const enterprises = await queryEnterprises()
  return (
    <div
      id="data-table"
      className="h-full w-full overflow-x-scroll overflow-y-scroll"
    >
      <SchemaDataReactTable<EnterpriseSchema>
        lng={lng}
        data={enterprises}
        columnOptions={
          Object.entries(enterpriseSchemaJson.properties).map(([key, value]) => ({
          
            accessor: key as keyof EnterpriseSchema,
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
