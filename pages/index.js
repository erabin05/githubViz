import React from 'react'
import '../style.css'

// import Account from '../Components/Account'
// import SearchBar from '../Components/SearchBar'

import AccountContainer from '../Containers/AccountContainer'

import AccountContextProvider from '../Contexts/AccountContext'

const Index = () => {
    return (
        <AccountContextProvider>
            <AccountContainer/>
        </AccountContextProvider>
    )
}

export default Index