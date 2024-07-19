import SchemaDataReactTable from "#/components/common/SchemaDataReactTable"
import CheckRecordTable from "#/components/common/table/CheckRecordTable"
import { findCheckRecords } from "#/lib/api/gql/checkRecord"
import { BasePageProps } from "#/types/pageProp"


export default async function RegulatoryHomePage({
  params: { lng },
}: BasePageProps) {
  const checkRecords = await findCheckRecords()
  console.log(checkRecords)
  return (
    <div className="space-y-4">
      <CheckRecordTable lng={lng} data={checkRecords}/>
    </div>
  )
}
