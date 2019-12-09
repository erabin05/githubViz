import React, { useContext } from 'react'

import { DashBoardContext } from '../Contexts/DasboardContext'

const Persona = () => {
    const { account } = useContext(DashBoardContext)

    return (
        <header>
            <figure>
                <img src={account.avatar_url} alt={`${account.login}'s avatar`}/>
            </figure>
            <h1>{account.login}</h1>
            <p>{account.id}</p>
            <p>{account.created_at}</p>
            <p>{account.location}</p>
        </header>
    )
}

export default Persona