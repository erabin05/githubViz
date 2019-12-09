import React, { useContext, useEffect } from 'react'

import { DashBoardContext } from '../Contexts/DasboardContext'

const Languages = () => {
    const {
        repos
    } = useContext(DashBoardContext)

    useEffect(()=>{
        console.log(repos)
    }, [repos])

    return (
        <div>
            yo
        </div>
    )
}

const languagesInRepos = () => {
    
}

export default Languages