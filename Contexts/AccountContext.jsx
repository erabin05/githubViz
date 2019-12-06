import React, { useState, createContext } from 'react'

export const AccountContext = createContext()

const AccountContextProvider = ({children}) => {
    const [account, setAccount] = useState({})
    const [hasError, setHasError] = useState({status : false})
    const [isSubmited, setIsSubmited] = useState(false)

    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            hasError,
            setHasError,
            isSubmited, 
            setIsSubmited
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountContextProvider