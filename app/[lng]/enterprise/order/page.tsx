import Button from "#/components/common/Button";
import ReactTable from "#/components/common/ReactTable";
import { EditIcon } from "#/components/icons";
import { queryOrders } from "#/lib/api/apolloService";
import { BasePageProps } from "#/types/pageProp";
import { t } from "i18next";
import Link from "next/link";
import { FaReacteurope } from "react-icons/fa";

export default async function Page({ params: { lng } }: BasePageProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const orders = await queryOrders()
  //All field are return as string
  console.log(orders)
  return (
    <ReactTable
      lng={lng}
      data={orders}
      schemaType={"Order"}
      deleteEnabled={true}
      actionButtons={[
        async () => {
          "use server"
          return (
            <Button
              className="m-auto"
              onClick={async () => {
                "use server"
                /*     const self: HTMLButtonElement =
              event.currentTarget as HTMLButtonElement
            deleteDocuments(realmApp.currentUser!, schemaType, {
              _id: fieldConvert(
                self.dataset.id,
                schemaPropertiesRef.current["_id"].type,
              ),
            })
              .then(() => {
                router.refresh()
              })
              .catch((error) => {
                throw error
              }) */
              }}
            >
              {t("Delete", "common")}
              <FaReacteurope className="inline-block w-4 h-4" />
            </Button>
          )
        },
        async (id: string) => {
          "use server"
          return (
            <span className="m-auto">
              {/* <Link href={`/${lng}/enterprise/edit/order?id=${"ssh"}`}>
                {t("Edit", "common")}
                <EditIcon className="inline-block w-4 h-4" />
              </Link> */}
              <Link href={"/lng"}>{t("Edit")}</Link>
            </span>
          )
        },
      ]}
    />
  )
}
