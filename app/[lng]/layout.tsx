import ApolloCookieWrapper from "#/components/ApolloCookieWrapper"
<<<<<<< HEAD
import { languages } from "#/lib/i18n/settings"
=======
>>>>>>> fd8d35f3a9f656513095d6af13bcf3b01b67657a
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
<<<<<<< HEAD
=======
          {/* <ConfirmDialog
              lng={lng}
              closeAction={async () => {
                "use server";
                console.log("Confirm dialog closed");
              }}
              confirmAction={async () => {
                "use server"
                console.log("Confirm dialog confirmed");
              }}
            /> */}
>>>>>>> fd8d35f3a9f656513095d6af13bcf3b01b67657a
          {children}
        </ApolloCookieWrapper>
        {/* </ConfirmContextProvider> */}
      </body>
    </html>
  )
}
