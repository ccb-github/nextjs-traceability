import { getCookieByName } from "#/components/util/cookie";
import { NormalSchemaName } from "#/lib/schema/format";
import { BasePageProps } from "#/types/pageProp";

// This page is for other data type
interface PagePropsWithType extends BasePageProps {
  params: {
    lng: string;
    type: Lowercase<NormalSchemaName>;
  };
}  
export default async function Page({ params: { lng, type } }: PagePropsWithType) {
  const accessToken = getCookieByName("accessToken")
 

  return (
    <div className="w-full overflow-y-scroll">
      <h1>This {type} of data are not implemented yet</h1>
      {/* <EnterpriseItem lng={lng} item={enterprise}/>  */}

    </div>
  )
}