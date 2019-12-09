import React, { useEffect, useContext } from 'react'
import "./dashboard.css"
import axios from 'axios'

import Persona from '../Components/Persona'

import { errorMessageFor } from '../Utilities/error'

import { DashBoardContext } from '../Contexts/DasboardContext'

const DashboardContainer = ({accountName}) => {
    const { 
        setAccount,
        hasGetAccountError,
        setHasGetAccountError,
        isAccountLoaded, 
        setIsAccountLoaded
     } = useContext(DashBoardContext)

    const set = {
        setAccount,
        setHasGetAccountError,
        setIsAccountLoaded
    }

    useEffect(()=> {
        getAccount(accountName, set)
    }, [])

    return (
        isAccountLoaded 
        ?
            !hasGetAccountError.status
            ?
                <main  className='dashboard-container'>
                    <Persona/>
                    <section>

                    </section>
                </main>
            : 
                <p className="warning center">{hasGetAccountError.message}</p>
        :
            <div className="center"><div className="lds-dual-ring"></div></div>
    )
}


const getAccount = (accountName, set) => {
    axios.get(`https://api.github.com/users/${accountName}`)
        .then(res=> {
            set.setAccount(res.data)
            set.setHasGetAccountError({status : false})
            set.setIsAccountLoaded(true)
        })
        .catch(err => {
            set.setHasGetAccountError({
                status : true,
                message : errorMessageFor(err.response.status),
                err
            })
            set.setIsAccountLoaded(true)
        })
}


export default DashboardContainer