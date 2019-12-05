import React, { useContext } from 'react'

import { AccountContext } from '../Contexts/AccountContext'

const Account = () => {
    const { account } = useContext(AccountContext)
    return (
        <article>
            <h1>{account.login}</h1>
            <figure>
                <img src={account.avatar_url} alt={`${account.login}'s avatar`}/>
            </figure>
        </article>
    )
}

export default Account