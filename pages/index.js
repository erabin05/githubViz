import React, { useState, useEffect } from 'react'
import SearchBar from '../Components/SearchBar'

import AccountContextProvider from '../Contexts/AccountContext'

const Index = () => {
    const [account, setAccount] = useState({})

    return (
        <AccountContextProvider>
            <SearchBar/>
        </AccountContextProvider>
    )
}

export default Index