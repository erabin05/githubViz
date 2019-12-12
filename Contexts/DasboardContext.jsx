import React, { useState, createContext} from 'react'

export const DashBoardContext = createContext()

const DashBoardContextProvider = ({children, account, repos}) => {
    const [hasGetAccountError, setHasGetAccountError] = useState({status : false})
    const [isAccountLoaded, setIsAccountLoaded] = useState(true)
    const [hasGetReposError, setHasGetReposError] = useState({status : false})

    return (
        <DashBoardContext.Provider value={{
            account,
            hasGetAccountError,
            setHasGetAccountError,
            isAccountLoaded,
            setIsAccountLoaded,
            repos,
            hasGetReposError,
            setHasGetReposError
        }}>
            {children}
        </DashBoardContext.Provider>
    )
}

export default DashBoardContextProvider