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
        <section className='account-container'>
            <SearchBar/>
            {
                !hasError.status
                && isSubmited
                && <Account/>
            }
        </section>
    )
}

export default AccountContainer