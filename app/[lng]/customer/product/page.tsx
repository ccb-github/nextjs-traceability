import { getOneProduct } from "#/lib/api/apolloService"
import type { BasePageProps } from "#/types/pageProp"
import { ExternalLinkIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { BSON } from "realm-web"

export default async function Page({ params: { lng } }: BasePageProps) {
  const { product } = await getOneProduct({
    query: {
      _id: new BSON.ObjectId("638e957d7dbc7b8fee63f6fd"),
    },
  })

  return (
    <div className="w-full overflow-y-scroll">
      <Link href={"./product/example"}>
        Here is an example <ExternalLinkIcon className="w-4" />
      </Link>
      <p>{product.name}</p>
    </div>
  )
}
