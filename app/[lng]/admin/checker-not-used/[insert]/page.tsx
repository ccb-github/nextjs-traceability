"use client"

import type { BasePageProps } from "#/types/pageProp"

import AddDataForm from "#/components/form/AddDataForm"
<<<<<<< HEAD
import { normalSchemaMap } from "#/lib/schema"
=======
import { normalSchemaJson } from "#/lib/schema"
>>>>>>> fd8d35f3a9f656513095d6af13bcf3b01b67657a
import RelatedObjectSelect from "#/components/form/related/RelatedObjSelect"

export default function Page({ params: { lng } }: BasePageProps) {
  return (
    <>
      <AddDataForm
        schemaName={"CheckRecord"}
<<<<<<< HEAD
        schemaObj={normalSchemaMap.CheckRecord}
=======
        schemaObj={normalSchemaJson.CheckRecord}
>>>>>>> fd8d35f3a9f656513095d6af13bcf3b01b67657a
        lng={lng}
      >
        <RelatedObjectSelect objectType="Product" displayKey={"_id"} />
      </AddDataForm>
    </>
  )
}
