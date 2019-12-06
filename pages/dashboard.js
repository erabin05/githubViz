import React from 'react'

import DashBoardContainer from '../Containers/DashboardContainer'

import DashBoardContextProvider from '../Contexts/DasboardContext'

const DashBoard = ({query}) => {

    return (
        <DashBoardContextProvider>
            <DashBoardContainer accountName={query.account}/>
        </DashBoardContextProvider>
    )
}

DashBoard.getInitialProps = ({query}) => {
    return {query}
}

export default DashBoard