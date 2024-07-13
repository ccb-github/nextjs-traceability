"use client"
import { BasePageProps } from "#/types/pageProp"

import SearchBySchemaName, { SearchResultMap } from "#/components/common/SearchBySchemaName"
import { useRef, useState } from "react"
import ProductItem from "#/components/common/item/ProductItem"

import CheckerItem from "#/components/common/item/CheckerItem"
import EnterpriseItem from "#/components/common/item/EnterpriseItem"
import DefaultItem from "#/components/common/item/DefaultItem"
import { useApp } from "#/hooks/useApp"
import OrderItem from "#/components/common/item/OrderItem"
import Link from "next/link"
import { useTranslation } from "#/lib/i18n/client"
import { SchemaName } from "#/lib/schema/format"

const SearchResultWrapper = ({
  type,
  data,
  lng,
}: {
  type: SchemaName
  data: any
  lng: string
}) => {
  const { t } = useTranslation(lng)
  if (data === null || data === undefined) {
    return (
      <b>
        {t("No result found")}
        <Link href={"#"}>Other</Link>
      </b>
    )
  }

  switch (type) {
    case "Product":
      return <ProductItem lng={lng} product={data} />
    case "Checker":
      return <CheckerItem lng={lng} item={data} />
    case "Enterprise":
      return <EnterpriseItem lng={lng} item={data} />
    case "Order":
      return <OrderItem lng={lng} order={data} />
    default:
      return <DefaultItem lng={lng} item={data} />
  }
}

export default function CustomerHomePage({ params: { lng } }: BasePageProps) {
  const { t } = useTranslation(lng)
  const realmApp = useApp()
  const [searchResult, setSearchResult] = useState<SearchResultMap<{}>>()
  const accountDataRef = useRef(realmApp.currentUser?.customData)
  if (!accountDataRef.current?.emailVerified) {
    return (
      <div className="space-y-4">
        <p>Activate account first</p>
      </div>
    )
  }
  return (
    <div className="space-y-4">
      <SearchBySchemaName
        placeHolder={t("Start searching")}
        searchSchemaName={"Product"}
        onSearchSubmit={(result) => {
          setSearchResult(result)
        }}
      />
      {searchResult ? (
        <SearchResultWrapper
          lng={lng}
          data={searchResult.get("resultData")}
          type={searchResult.get("type") as SchemaName}
        />
      ) : null}
    </div>
  )
}
