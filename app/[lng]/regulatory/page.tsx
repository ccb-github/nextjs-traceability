import { BasePageProps } from "#/types/pageProp"

import { useTranslation } from "#/lib/i18n"
import { getCheckRecords } from "#/lib/api/apolloService"
import ReactTable from "#/components/common/ReactTable"

export default async function RegulatoryHomePage({
  params: { lng },
}: BasePageProps) {

  const { checkRecords } = await getCheckRecords()
  console.log(checkRecords)
  return (
    <div className="space-y-4">
      {/*  {checkerMainPanelItems.map((section) => (
          <div key={section.name} className="space-y-5">
            <div className="text-xl font-semibold uppercase tracking-wider text-gray-400">
              {t(section.name)}
            </div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {section.items.map((item) => (
                <Link
                  href={`${lng}/regulatory/${item.link}`}
                  key={item.name}
                  className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                >
                  <div
                    className="font-medium text-gray-200 group-hover:text-gray-50"
                  >
                    {t(item.name)}
                  </div>

                  {item.description ? (
                    <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                      {t(item.description)}
                    </div>
                  ) : null}
                </Link>
              ))}
            </div>
          </div>
        ))
      } */}
      <ReactTable
        lng={lng}
        data={[checkRecords]}
        columnList={["name", "device", "target"]}
        schemaType={"CheckRecord"}
        deleteEnabled={false}
      />
    </div>
  )
}
