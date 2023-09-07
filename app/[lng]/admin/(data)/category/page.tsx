import ReactTable from "#/components/common/ReactTable"
import { getCategories } from "#/lib/api/apolloService"
import { BasePageProps } from "#/types/pageProp"

export default async function AdminEnterpriseManagePage({
  params: { lng },
}: BasePageProps) {
  //The url is lowercase, but the schema name to search the database are like 'Name', we need to convert first

  const { categories } = await getCategories()
  return (
    <div id="data-table" className="h-full w-full">
      <ReactTable
        data={categories}
        schemaType={"Category"}
        deleteEnabled={true}
        lng={lng}
      />
    </div>
  )
}
