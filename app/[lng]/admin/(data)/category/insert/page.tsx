import DateInputFieldTemplate from "#/components/common/input/DateInputFieldTemplate"
import { StringInputFieldTemplate } from "#/components/form/input/StringInputFieldTemplate"

import { useTranslation } from "#/lib/i18n"
import { BasePageProps } from "#/types/pageProp"
import { BSON } from "realm-web"
import { insertOneCategory } from "#/lib/api/gql/category"
import categorySchemaObject from "#/lib/schema/def/category"

export default async function Page({ params: { lng } }: BasePageProps) {
  const { t } = await useTranslation(lng, "common")

  async function submitData(data: FormData) {
    "use server"
    // if((categories).map( item => item.name ).includes(data.get("name") as string)){
    //   console.log(t("The same category name already exists"))
    //   return
    // }
    console.log(data.get("selectHelper"))
    const result = await insertOneCategory({
      _id: new BSON.ObjectId(),
      name: data.get("name") as string,
      description: data.get("description") as string,
      createdAt: new Date(data.get("createdAt") as string),
    })
    console.log("Add result", result)
    return result
  }

  return (
    <form
      method="post"
      action={submitData}
      id="insertForm"
      className="
        h-full overflow-y-scrol pt-2 
        grid grid-cols-1 lg:grid-cols-2
      "
    >
      <h2 className="col-span-1 lg:col-span-2">
        {t("The category you want to add")}
      </h2>

      {/*<div className="form-group">
        <div className="w-full p-4">
          <label className=" control-label" htmlFor="">
            {"products"}
          </label>
          <TypeSpan text="related-item" className="float-right" />
        </div>
        <div className=" w-full">
          <AsyncSelect
            loadFunction={queryProducts}
            selectName={"products"}
            asyncLoadOptions={async () => {
              "use server"
              const products = await queryProducts()
              return products.map((product: { _id: string }) => ({
                label: product._id,
                value: product._id,
                color: "blue",
              }))
            }}
          />
        </div>
      </div> */}
      <StringInputFieldTemplate
        {...categorySchemaObject.properties["name"]}
        name={t("name", { ns: "category" })}
      />
      <StringInputFieldTemplate
        {...categorySchemaObject.properties["description"]}
        name={t("description")}
      />
      <DateInputFieldTemplate
        optional={false}
        dataType={"date"}
        indexed={false}
        mapTo={""}
        name={t("createAt")}
      />
      <div className="form-group col-span-1 lg:col-span-2">
        <button type="submit">{t("Submit")}</button>
      </div>
    </form>
  )
}
