import type { BasePageProps } from "#/types/pageProp";

import AddDataForm from "#/components/form/AddDataForm";
import { schemaJson } from "#/lib/schema";

export default async function AddCheckRecordPage({ params: {lng}}: BasePageProps) {
  const linkToCurrentChecker = async (id: string) => {
  }
  return (
      <AddDataForm 
        
        schemaName={"CheckRecord"}
        schemaObj={schemaJson["CheckRecord"]} lng={lng} />
        
  );
}
  