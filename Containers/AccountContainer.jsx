import React, { useContext } from 'react'
import './account.css'

import Account from '../Components/Account'
import SearchBar from '../Components/SearchBar'

import { AccountContext } from '../Contexts/AccountContext'

const AccountContainer = () => {
    const {
        hasError,
        isSubmited
    } = useContext(AccountContext)

    return (
        <main className='account-container'>
            {
                !hasError.status
                && isSubmited
                ? <Account/>
                : <SearchBar/>
            }
        </main>
    )
}

export default AccountContainer