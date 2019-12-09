import React, { useEffect, useContext } from 'react'
import "./dashboard.css"
import axios from 'axios'

import Persona from '../Components/Persona'

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
            !hasGetAccountError 
            ?
                <main  className='dashboard-container'>
                    <Persona/>
                    <section>

                    </section>
                </main>
            : 
                <p className="warning center">Account doesn't exist</p>
        :
            <div className="center"><div className="lds-dual-ring"></div></div>
    )
}


const getAccount = (accountName, set) => {
    axios.get(`https://api.github.com/users/${accountName}`)
        .then(res=> {
            set.setAccount(res.data)
            set.setHasGetAccountError(false)
            set.setIsAccountLoaded(true)
        })
        .catch(err => {
            set.setHasGetAccountError(true)
            set.setIsAccountLoaded(true)
        })
}


export default DashboardContainer