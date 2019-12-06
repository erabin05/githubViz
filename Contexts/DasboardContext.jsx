import React, { useState, createContext } from 'react'

export const DashBoardContext = createContext()

const DashBoardContextProvider = ({children}) => {
    const [account, setAccount] = useState({})

    return (
        <DashBoardContext.Provider value={{
            account,
            setAccount,
        }}>
            {children}
        </DashBoardContext.Provider>
    )
}

export default DashBoardContextProvider