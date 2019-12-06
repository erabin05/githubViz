import React, { useEffect, useContext } from 'react'
import axios from 'axios'

import Persona from '../Components/Persona'

import { DashBoardContext } from '../Contexts/DasboardContext'

const DashboardContainer = ({accountName}) => {
    const { setAccount } = useContext(DashBoardContext)

    const set = {
        setAccount
    }

    useEffect(()=> {
        getAccount(accountName, set)
    })

    return (
        <>
            <Persona/>
        </>
    )
}


const getAccount = (accountName, set) => {
    axios.get(`https://api.github.com/users/${accountName}`)
        .then(res=> set.setAccount(res.data))
}


export default DashboardContainer