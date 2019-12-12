import React, { useState, createContext, useEffect } from 'react'

export const DashBoardContext = createContext()

const DashBoardContextProvider = ({children, accountName, yo}) => {
    const [account, setAccount] = useState({})
    const [hasGetAccountError, setHasGetAccountError] = useState({status : false})
    const [isAccountLoaded, setIsAccountLoaded] = useState(false)
    const [repos, setRepos] = useState([])
    const [hasGetReposError, setHasGetReposError] = useState({status : false})

    return (
        <DashBoardContext.Provider value={{
            account,
            setAccount,
            hasGetAccountError,
            setHasGetAccountError,
            isAccountLoaded,
            setIsAccountLoaded,
            repos,
            setRepos,
            hasGetReposError,
            setHasGetReposError
        }}>
            {children}
        </DashBoardContext.Provider>
    )
}

export default DashBoardContextProvider