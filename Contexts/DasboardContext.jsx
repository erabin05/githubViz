import React, { useState, createContext } from 'react'

export const DashBoardContext = createContext()

const DashBoardContextProvider = ({children}) => {
    const [account, setAccount] = useState({})
    const [hasGetAccountError, setHasGetAccountError] = useState({status : false})
    const [isAccountLoaded, setIsAccountLoaded] = useState(false)

    return (
        <DashBoardContext.Provider value={{
            account,
            setAccount,
            hasGetAccountError,
            setHasGetAccountError,
            isAccountLoaded, 
            setIsAccountLoaded
        }}>
            {children}
        </DashBoardContext.Provider>
    )
}

export default DashBoardContextProvider