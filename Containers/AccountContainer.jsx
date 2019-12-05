import React, { useContext, useEffect } from 'react'

import Account from '../Components/Account'
import SearchBar from '../Components/SearchBar'

import { AccountContext } from '../Contexts/AccountContext'

const AccountContainer = () => {
    const {
        hasError,
        isSubmited
    } = useContext(AccountContext)

    useEffect(()=> {
        console.log(`hasError : ${hasError.status}`)
        console.log(`isSubmited : ${isSubmited}`)
    }, [isSubmited])

    return (
        <>
            <SearchBar/>
            {
                !hasError.status
                && isSubmited
                && <Account/>
            }
        </>
    )

    
}

export default AccountContainer