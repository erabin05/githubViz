import React, { useState, useEffect } from 'react'

import Account from '../Components/Account'
import SearchBar from '../Components/SearchBar'

import AccountContextProvider from '../Contexts/AccountContext'

const Index = () => {
    const [account, setAccount] = useState({})

    return (
        <AccountContextProvider>
            <SearchBar/>
            <Account/>
        </AccountContextProvider>
    )
}

export default Index