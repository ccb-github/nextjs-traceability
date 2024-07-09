'use client'
import { useApp } from "#/hooks/useApp"
import { useCollection } from "#/hooks/useCollection"
import React from "react"

export const AppContext = React.createContext({
  useApp, 
  useCollection
})
export default function AppProvider({children}: {children: React.ReactNode}){
 
 
  return(
    <AppContext.Provider value={{
      useApp,
      useCollection
      
    }}>
      {children}
    </AppContext.Provider>
  )  
} 
