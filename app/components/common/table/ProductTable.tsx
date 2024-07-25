"use client"
import React, { useRef } from "react"
import { FaReacteurope } from "react-icons/fa"
import { useTranslation } from "#/lib/i18n/client"
import Link from "next/link"
import { EditIcon } from "#/components/icons"
import Button from "../Button"
import { deleteDocuments } from "#/lib/api/mongoService"
import fieldConvert from "#/lib/fieldConvert"
import SchemaDataReactTable from "../SchemaDataReactTable"
import { useApp } from "#/hooks/useApp"
import { useRouter } from "next/navigation"
import { type GeneralDataTableWrapperProps } from "#/types/table"
import productSchemaObject, { ProductSchema } from "#/lib/schema/def/product"
import { roleUrlMap } from "#/lib/webcontents/user"
import { UserRole } from "#/types/data"

type ProductReactTableProps = GeneralDataTableWrapperProps<
  Partial<Record<keyof ProductSchema, string>> & {
    _id: string
  }
>

/**
 * @prop {ProductReactTableProps} props -- The react props
 * @returns {React.ReactNode} -- Product data table
 */
export default function ProductTable({ data, lng }: ProductReactTableProps) {
  //TODO the language props
  // const [columnResizeMode] = useState<ColumnResizeMode>(
  //   ColumnResizeMode["onChange"],
  // )
  const { t } = useTranslation(lng, "product")

  const realmApp = useApp()
  const router = useRouter()
  const editLink = `/${lng}/${
    Object.keys(roleUrlMap).some((v) => v === realmApp.currentUser?.customData.role)?  
      roleUrlMap[realmApp.currentUser?.customData.role as UserRole] : 
      "share"
  }/edit/product`

  return (
    <SchemaDataReactTable<
        Partial<Record<keyof ProductSchema, string>> & {
          _id: string
        }
      >
      className={"flex flex-column"}
      lng={lng}
      data={data}
      schemaType={"Product"}
      columnOptions={Object.values(productSchemaObject.properties).map(
        (prop) => ({
          accessor: prop.mapTo as keyof ProductSchema,
          header: t(prop.mapTo),
          type: prop.dataType,
        }),
      )}
      deleteEnabled={true}
      customColumn={() => {
        return (
          <>
            <Button
              className="m-auto"
              onClick={(event) => {
                const self: HTMLButtonElement =
                  event.currentTarget as HTMLButtonElement
                deleteDocuments(realmApp.currentUser!, "Product", {
                  _id: fieldConvert(
                    self.dataset.id!,
                    productSchemaObject.properties["_id"].dataType,
                  ),
                })
                  .then(() => {
                    router.refresh()
                  })
                  .catch((error) => {
                    throw error
                  })
              }}
            >
              {t("Delete", "common")}
              <FaReacteurope className="inline-block w-4 h-4" />
            </Button>
            <Button className="m-auto">
              <Link href={editLink}>
                {t("Edit")}
                <EditIcon className="inline-block w-4 h-4" />
              </Link>
            </Button>
          </>
        )
      }}
    />
  )
}
