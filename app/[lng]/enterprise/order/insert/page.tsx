import { schemaJson } from "#/lib/schema"

import Button from "#/components/common/Button"
import AsyncSelect from "#/components/common/AsyncSelect"
import { queryProducts, queryOrders, insertOneOrder } from "#/lib/api/apolloService"
import { StringInputFieldTemplate } from "#/components/form/AddDataForm"
import DateInputFieldTemplate from "#/components/common/input/DateInputFieldTemplate"
import TypeSpan from "#/components/common/input/TypeSpan"
import { BSON } from "realm-web"

// const MyComponent = () => (
//   <Select options={options} />
// )

export default async function Page() {
  const schemaObj = schemaJson.Order

  const loadOrderOptions = async () => {
    "use server"
    console.log("This is invoked")
    return await queryOrders()
  }
  async function submitNewOrder(data: FormData) {
    "use server"
    // if((categories).map( item => item.name ).includes(data.get("name") as string)){
    //   console.log(t("The same category name already exists"))
    //   return
    // }
    const result = await insertOneOrder({
      _id: new BSON.ObjectId(),
      paymentMethod: "phone",
      transitionId: new BSON.ObjectId(),
      customerId: data.get("customerId") as string,
      orderTime: new Date(data.get("orderTime") as string),
      products: {
        link: JSON.parse(data.get("products") as string).map(
          (productId: string) => new BSON.ObjectId(productId),
        ),
      },
    })
    alert(`Add result ${JSON.stringify(result)}`)
    return result
  }
  return (
    <form
      method="post"
      action={submitNewOrder}
      id="insertForm"
      className={`
        grid grid-cols-1 gap-5 lg:grid-cols-2 
        max-h-full overflow-y-scroll pt-2
      `}
    >
      {/* {Object.keys(schemaObj.properties).map((e) =>
        templateHTML(schemaObj.properties[e])
      )} */}
      <div key={"products"} className="form-group">
        <div className="w-full p-4">
          <label className=" control-label" htmlFor={"products"}>
            {"Products"}
          </label>
          <TypeSpan text="string" className="float-right" />
        </div>
        <div className=" w-full">
          <AsyncSelect
            inputId="products"
            loadFunction={queryProducts}
            selectName={"products"}
          />
        </div>
      </div>

      <DateInputFieldTemplate {...schemaObj.properties.orderTime} />
      <StringInputFieldTemplate {...schemaObj.properties.customerId} />
      <div
        className="form-group flex-row flex lg:col-span-2"
        style={{ flexDirection: "row" }}
      >
        <Button type="reset" className="m-2">
          Reset
        </Button>
        <Button type="submit" className="m-2">
          Submit
        </Button>
      </div>
    </form>
  )
}
