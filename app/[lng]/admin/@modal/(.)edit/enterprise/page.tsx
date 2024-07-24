import Button from "#/components/common/Button"

import { templateHTML } from "#/components/form/templateHTML"
import { findEnterprises, updateEnterprise } from "#/lib/api/gql/enterprise"
import { useTranslation } from "#/lib/i18n"
import { normalSchemaMap } from "#/lib/schema"
import enterpriseSchemaObject from "#/lib/schema/def/enterprise"
import { BasePageProps } from "#/types/pageProp"
import Script from "next/script"
import { BSON } from "realm-web"
 
//TODO optimize layout grid cell max size
export default async function EnterpriseEditPage({
  params:{
    lng
  },
  searchParams,
}: BasePageProps) {

  const { id } = searchParams
  const { t } = await useTranslation(lng)

  const enterprises = await findEnterprises({_id: new BSON.ObjectID(id as string)})

  async function editEnterpriseSubmit(editedEnterpriseData: FormData) {
    "use server"
    console.log(
      `The setdata in enterprise form ${editedEnterpriseData.entries()}`
    )
    const setData = {
      address: editedEnterpriseData.get("address") as string,
      creditCode: editedEnterpriseData.get("creditCode") as string,
      createdAt: editedEnterpriseData.get("createdAt")
        ? new Date(editedEnterpriseData.get("createdAt") as string)
        : undefined,
      description: editedEnterpriseData.get("description") as string,
      email:  editedEnterpriseData.get("email") as string,
        // name?: string
        // registerPlace: string
        // tradeMark?: string

    }
    try {
      const result = await updateEnterprise({
        query: { _id: new BSON.ObjectId(id as string) },
        set: setData
      })
      console.log(
        `The update result for enterprise with id ${id} ${JSON.stringify(
          result,
        )}`,
      )
    } catch (error) {
      console.error(error)
    }
  }
 
  return (
    <>
      <dialog id={"editEnterpriseDialog"}>
        <form
          method="dialog"
          action={editEnterpriseSubmit}
          id="insertForm"
          className={`
            grid grid-cols-1 gap-5 lg:grid-cols-2 
            h-full overflow-y-scroll pt-2
        `}
        >
          {Object.entries(enterpriseSchemaObject.properties).map(([enterprisePropteryKey , proptery]) =>
            templateHTML({
              ...proptery,
              defaultValue: enterprises[0][enterprisePropteryKey as keyof EnterpriseGqlResult],
            }),
          )}

          {/* <RelatedItemDialog itemType='Product'/> */}
          <div className="form-group lg:col-span-2">
            <Button type="reset" className="m-2">
              {t("Reset")}
            </Button>
            {/* <Button type="reset" className="m-2">
              Save
            </Button> */}
            <Button type="submit" className="m-2">
              Submit
            </Button>
          </div>
        </form>
      </dialog>
      <Script id={"loadDialog"} strategy="afterInteractive">
        {`console.log('loadDialog script')
          debugger
          window.editEnterpriseDialog.showModal()
        `}
      </Script>
    </>
  )
}
