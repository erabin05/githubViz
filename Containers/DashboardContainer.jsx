import React, { useEffect, useContext } from 'react'
import "./dashboard.css"
import axios from 'axios'

import Persona from '../Components/Persona'
import Languages from '../Components/Languages'

import { errorMessageFor } from '../Utilities/error'

import { DashBoardContext } from '../Contexts/DasboardContext'

const DashboardContainer = () => {
    const { 
        setAccount,
        hasGetAccountError,
        setHasGetAccountError,
        isAccountLoaded, 
        setIsAccountLoaded,
        setRepos,
        setHasGetReposError
     } = useContext(DashBoardContext)

    const set = {
        setAccount,
        setHasGetAccountError,
        setIsAccountLoaded,
        setHasGetReposError,
        setRepos
    }

    return (
        isAccountLoaded 
        ?
            !hasGetAccountError.status
            ?
                <main  className='dashboard-container'>
                    <Persona/>
                    <section>
                        <Languages/>
                    </section>
                </main>
            : 
                <p className="warning center">{hasGetAccountError.message}</p>
        :
            <div className="center"><div className="lds-dual-ring"></div></div>
    )
}

export default DashboardContainer