"use client"
// import { createContext } from "react"
// const ConfirmContext = createContext({
//   confirmed: false,
//   opened: false,
//   message: "Confirm the action(The default text for confirm hook)",
// })


import { createContext } from 'react';

export const ConfirmContext = createContext<
  {
    confirmed: boolean
    opened: boolean
    message: string
  }
>({
  confirmed: false,
  opened: false,
  message: "Default message"
})

export default function ConfirmContextProvider({ children }: { children: React.ReactNode }) {

  return (
    <ConfirmContext.Provider value={{
      confirmed: false,
      opened: false,
      message: "Default message"
    }}>
      {children }
    </ConfirmContext.Provider>
  );
}


