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
                <p className="warning">Account doesn't exist</p>
        :
            <p>Ready in a second</p>
    )
}


const getAccount = (accountName, set) => {
    axios.get(`https://api.github.com/users/${accountName}`)
        .then(res=> {
            set.setAccount(res.data)
            set.setIsAccountLoaded(true)
        })
        .catch(err => {
            set.setHasGetAccountError(true)
            set.setIsAccountLoaded(true)
        })
}


export default DashboardContainer