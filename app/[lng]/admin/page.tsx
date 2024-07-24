import { adminMainPanels } from "#/lib/webcontents/mainPanel"
import Link from "next/link"
import { useTranslation } from "#/lib/i18n"
import { NavItem } from "#/types/webContent"
import { BasePageParams } from "#/types/pageProp"
import { AllowedCategoryList } from "#/components/common/AllowedCategory"
import MainPanelNavItem from "#/components/common/MainPanelNavItem"

export default async function AdminHomePage({
  params,
}: {
  params: BasePageParams
}) {
  const { lng } = params
  const { t } = await useTranslation(lng, "admin")
  console.log(process.env)
  return (
    <>
      {adminMainPanels.map((section) => (
        <div key={section.name} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          
            {section.items.map((item: NavItem) => (
              <MainPanelNavItem
                name={t(`${item.name}`, { ns: "mainpanel" })} 
                link={item.link ?? "#"} 
                description={item.description} 
              />
            ))}
          </div>
        </div>
      ))}
      {/* <section>
        
        <QRCodeImg src="https://cn.bing.com"/>
      </section> */}
    </>
  )
}
