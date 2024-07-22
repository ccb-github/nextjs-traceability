import Button from "#/components/common/Button"
import { templateHTML } from "#/components/form/templateHTML"
import { queryProductById, updateProducts } from "#/lib/api/gql/product"
import { useTranslation } from "#/lib/i18n"
<<<<<<< HEAD
import productSchemaObject, { ProductSchema } from "#/lib/schema/def/product"
=======
import productSchema, { ProductSchema } from "#/lib/schema/def/product"
>>>>>>> fd8d35f3a9f656513095d6af13bcf3b01b67657a
import { BasePageProps } from "#/types/pageProp"
import Script from "next/script"
import { BSON } from "realm-web"

export default async function ProductEditPage({
  params: { lng },
  searchParams,
}: BasePageProps) {
  console.log("This Product edit page ([@modal/.edit/) is rendered")
  const { id } = searchParams
  const { t } = await useTranslation(lng)
  const { product } = await queryProductById({
    _id: id as string,
  })
  console.log(product)
  const editProductSubmit = async (editedProductData: FormData) => {
    "use server"
    let setData = Object.create({})
    console.log(`The setData in enterprise form ${editedProductData.entries()}`)
    setData = {
      name: editedProductData.get("name"),
    }
    try {
      const result = await updateProducts({
        query: { _id: new BSON.ObjectId(id as string) },
        set: setData,
      })
      console.log(
        `
        The update result for enterprise with id ${id} ${JSON.stringify(result)}
        `,
      )
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <dialog id="editProductDialog">
        <form
          method="dialog"
          action={editProductSubmit}
          id="insertForm"
          className={`
            grid grid-cols-1 gap-5 lg:grid-cols-2 
            h-full overflow-y-scroll pt-2 px-2
          `}
        >
<<<<<<< HEAD
          {Object.values(productSchemaObject.properties).map((prop) =>
=======
          {Object.values(productSchema.properties).map((prop) =>
>>>>>>> fd8d35f3a9f656513095d6af13bcf3b01b67657a
            templateHTML({
              ...prop,
              defaultValue: product[prop.mapTo as keyof ProductSchema],
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
      <Script id={"loadDialog"}>
        {`
        window.editProductDialog.showModal()
      `}
      </Script>
    </>
  )
}
