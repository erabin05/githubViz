import React, { useState, createContext } from 'react'

export const AccountContext = createContext()

const AccountContextProvider = ({children}) => {
    const [account, setAccount] = useState({})
    return (
        <AccountContext.Provider value={{
            account, 
            setAccount
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountContextProvider