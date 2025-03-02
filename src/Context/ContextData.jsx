import React, { createContext, useContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Data'

const authProvider = createContext()

export const DataProvider = ()=>{
    return useContext(authProvider)
}

export const ContextData = ({children}) => {

    const [userData, setUserData] = useState('')

    useEffect(()=>{
        // setLocalStorage()
        const {employeeData} = getLocalStorage()
        setUserData(employeeData)
    }, [])

  return (
    <>
        <authProvider.Provider value={[userData, setUserData]}>
            {children}
        </authProvider.Provider>
    </>
  )
}

