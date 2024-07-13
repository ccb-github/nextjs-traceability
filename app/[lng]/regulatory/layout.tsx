import { CommonLayoutProps } from "#/types/pageProp"
import AccountFooter from "#/components/normal/AccountFooter"
import BreadCrumb from "#/components/common/BreadCrumb"
import { regulatorySideBarItems } from "#/lib/webcontents/sideBar"
import SideNavItem from "#/components/common/SideNavItem"
import { XIcon, MenuAlt2Icon } from "@heroicons/react/outline"
import clsx from "clsx"
import { useTranslation } from "#/lib/i18n"
import Link from "next/link"

export default async function RegulatoryRootLayout({
  children,
  params: { lng },
}: CommonLayoutProps) {
  const { t } = await useTranslation(lng, "regulatory")
  const isOpen = true
  return (
    <>
      <div
        id="enterprise-nav"
        className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-r lg:border-gray-800"
      >
        <div className="flex h-14 items-center py-4 px-4 lg:h-auto">
          <Link
            href={`/${lng}`}
            id="backToHomeLink"
            className="group flex w-full items-center space-x-2.5"
          >
            {/* <div className="h-7 w-7 rounded-full border border-white/30 group-hover:border-white/50">
            <NextLogo />
          </div> */}

            <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
              {t("Regulatory")}
            </h3>
          </Link>
        </div>
        {/* <SearchBar/> */}
        <button
          type="button"
          className="group absolute right-0 top-0 flex h-14 items-center space-x-2 px-4 lg:hidden"
        >
          <div className="font-medium text-gray-100 group-hover:text-gray-400">
            Menu
          </div>
          {true ? (
            <XIcon className="block w-6" />
          ) : (
            <MenuAlt2Icon className="block w-6" />
          )}
        </button>

        <div
          className={clsx("overflow-y-auto lg:static lg:block", {
            "fixed inset-x-0 bottom-0 top-14 mt-px bg-black": isOpen,
            hidden: !isOpen,
          })}
        >
          <nav className="space-y-6 px-2 py-5" id="side-nav-container">
            <div className="space-y-1">
              {regulatorySideBarItems.map((sideBarItem) => (
                <SideNavItem
                  lng={lng}
                  key={sideBarItem.name}
                  text={t(sideBarItem.name, { ns: "regulatory" })}
                  {...sideBarItem}
                />
              ))}
            </div>
          </nav>
        </div>
      </div>

      <div className="flex h-full flex-col lg:pl-72">
        <AccountFooter lng={lng} />
        <BreadCrumb className="flex-grow-0" lng={lng} />

        <div
          id="app-root-container"
          className="overflow-y-scroll flex-grow rounded-lg p-2 
			           shadow-lg shadow-black/20"
        >
          {children}
        </div>
      </div>
    </>
  )
}
