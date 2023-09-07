import ReactTable from "#/components/common/ReactTable";
import { getCheckRecords } from "#/lib/api/apolloService";
import { useTranslation } from "#/lib/i18n";
import { BasePageProps } from "#/types/pageProp";

export default async function EnterpriseStockPage({ params: {lng}}: BasePageProps) {
  
  const { t } = await useTranslation(lng)
 
  return (
    <div className="space-y-4">
      <ReactTable 
        data={[]} 
        schemaType={"Stock"} 
      />
    </div>
  );
}
