import React from 'react'

import DashBoardContainer from '../Containers/DashboardContainer'

const DashBoard = ({query}) => {

    return (
        <div>
            <DashBoardContainer accountName={query.account}/>
        </div>
    )
}

DashBoard.getInitialProps = ({query}) => {
    return {query}
}

export default DashBoard