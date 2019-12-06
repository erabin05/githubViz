import React from 'react'
import '../style.css'

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