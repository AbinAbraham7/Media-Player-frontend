import React, { createContext, useState } from 'react'

export const categoryStatusContext=createContext({})


function Contextshare({children}) {

    const [categoriesStatus,setCategoryStatus]=useState({})

   
  return (
    <>

    <categoryStatusContext.Provider value={{categoriesStatus,setCategoryStatus}}>
        {children}
    </categoryStatusContext.Provider>
        </>
  )
}

export default Contextshare