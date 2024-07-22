"use client"
import AddDataForm from "#/components/form/AddDataForm"
<<<<<<< HEAD
import { normalSchemaMap } from "#/lib/schema"
=======
import { normalSchemaJson } from "#/lib/schema"
>>>>>>> fd8d35f3a9f656513095d6af13bcf3b01b67657a
import { BasePageProps } from "#/types/pageProp"

export default function Page({ params }: BasePageProps) {
  const { lng } = params

  return (
    <AddDataForm
      lng={lng}
<<<<<<< HEAD
      schemaObj={normalSchemaMap["Product"]}
=======
      schemaObj={normalSchemaJson["Product"]}
>>>>>>> fd8d35f3a9f656513095d6af13bcf3b01b67657a
      schemaName={"Product"}
    />
  )
}
