import DateInputFieldTemplate from "#/components/common/input/DateInputFieldTemplate"
import { StringInputFieldTemplate } from "#/components/form/input/StringInputFieldTemplate"
import { useTranslation } from "#/lib/i18n"
<<<<<<< HEAD
import { normalSchemaMap } from "#/lib/schema"
=======
import { normalSchemaJson } from "#/lib/schema"
>>>>>>> fd8d35f3a9f656513095d6af13bcf3b01b67657a
import { BasePageProps } from "#/types/pageProp"

export default async function Page({ params: { lng } }: BasePageProps) {
  const { t } = await useTranslation(lng, "common")

  async function submitData(data: FormData) {
    "use server"

    // if((catgories as any[]).map( item => item.name ).includes(tempName)){
    //   console.log(t("The catgory already exists"))
    //   return
    // }
    // const result = await insertCheckRecord({
    //   _id: new BSON.ObjectId(),
    //   name: data.get("name") as string,

    //   createdAt: data.get("createdAt")!,
    // })
    // console.log("Add result", result)
    // return result
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
      <h2 className="col-span-1 lg:col-span-2">{t("New check record")}</h2>

      <StringInputFieldTemplate
<<<<<<< HEAD
        {...normalSchemaMap["CheckRecord"].properties["name"]}
=======
        {...normalSchemaJson["CheckRecord"].properties["name"]}
>>>>>>> fd8d35f3a9f656513095d6af13bcf3b01b67657a
        name={t("name", { ns: "CheckRecord" })}
      />
      <DateInputFieldTemplate
        optional={false}
        dataType={"date"}
        indexed={false}
        mapTo={""}
        name={t("createAt")}
      />
      <div className="form-group col-span-1 lg:col-span-2">
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}
