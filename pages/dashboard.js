import React, {useEffect} from 'react'
import '../style.css'
import axios from 'axios'

import DashBoardContainer from '../Containers/DashboardContainer'

import DashBoardContextProvider from '../Contexts/DasboardContext'

const DashBoard = ({account, repos}) => {

    return (
        <DashBoardContextProvider 
            account={account}
            repos={repos}
        >
            <DashBoardContainer />
        </DashBoardContextProvider>
    )
}

DashBoard.getInitialProps = async function({query}) {
    const account = await axios.get(`https://api.github.com/users/${query.account}`)
    const repos = await axios.get(`https://api.github.com/users/${query.account}/repos`)
    return {
      account : account.data,
      repos : repos.data
    };
  };
  
export default DashBoard