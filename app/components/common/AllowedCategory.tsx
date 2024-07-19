"use client"
import { useContext, useEffect, useRef } from "react"
import { AppContext } from "../AppProvider"
import { CategoryGqlResult } from "#/lib/schema/def/category"


export const AllowedCategoryList = ({list}: {list: string[]}) => {
  const appContext = useContext(AppContext)
  const { useCollection } = appContext
  const targetCollection = useCollection("Category")
  const allCategorysRef = useRef<CategoryGqlResult[]>([])
  useEffect( () => {
    (async () => {
      const catgorys = await targetCollection?.find()
      //@ts-ignore
      catgorys ? allCategorysRef.current = catgorys.map( item => item.name) : null 
    })()
    
  }, [targetCollection])
  return(
    <table id="categoryTable">
    <tr>
      <th scope="row">Catgory</th>
      {
        allCategorysRef.current.map(
          category => <td key={category._id}><b>{category.name}</b></td>
        )
      }
    </tr>
    </table>
  )
}