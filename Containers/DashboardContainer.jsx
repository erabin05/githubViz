import React, { useEffect } from 'react'
import axios from 'axios'

import Persona from '../Components/Persona'

const DashboardContainer = ({accountName}) => {

    useEffect(()=> {
        getAccount(accountName)
    })

    return (
        <>
            <Persona/>
        </>
    )
}


const getAccount = (accountName) => {
    axios.get(`https://api.github.com/users/${accountName}`)
        .then(res=> console.log(res.data))
}


export default DashboardContainer