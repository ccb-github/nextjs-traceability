import ApolloCookieWrapper from "#/components/ApolloCookieWrapper"
import { languages } from "#/lib/i18n/settings"
import "#/styles/global.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode
  params: {
    lng: string
  }
}) {
  return (
    <html lang={lng}>
      <body className={inter.className}>
        {/* <ConfirmContextProvider> */}
        <ApolloCookieWrapper>
          {children}
        </ApolloCookieWrapper>
        {/* </ConfirmContextProvider> */}
      </body>
    </html>
  )
}
