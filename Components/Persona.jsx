import React, { useContext } from 'react'

import { DashBoardContext } from '../Contexts/DasboardContext'

const Persona = () => {
    const { account } = useContext(DashBoardContext)

    return (
        <div>{account.login}</div>
    )
}

export default Persona