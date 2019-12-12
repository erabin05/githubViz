import React, {useEffect} from 'react'
import '../style.css'
import axios from 'axios'

import DashBoardContainer from '../Containers/DashboardContainer'

import DashBoardContextProvider from '../Contexts/DasboardContext'

const DashBoard = ({query, account}) => {

    useEffect(()=>{
        console.log(account)
    })

    return (
        <DashBoardContextProvider >
            <DashBoardContainer />
        </DashBoardContextProvider>
    )
}

// DashBoard.getInitialProps = async function ({query}) {
//     const res = await axios.get(`https://api.github.com/users/erabin05`)
//     const account = await res.json()

//     return {
//         account,
//         query
//     }
// }

DashBoard.getInitialProps = async function({query}) {
    const {data} = await axios.get(`https://api.github.com/users/${query.account}`);
  
    return {
      account: data
    };
  };

const getAccount = (accountName, set) => {
    axios.get(`https://api.github.com/users/${accountName}`)
        .then(res=> {
            set.setAccount(res.data)
            set.setHasGetAccountError({status : false})
            set.setIsAccountLoaded(true)

            getRepos(accountName, set)
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

const getRepos = (accountName, set) => {
    axios.get(`https://api.github.com/users/${accountName}/repos`)
        .then(res => {
            set.setHasGetReposError({status : false})
            set.setRepos(res.data)
        })
        .catch(err => {
            set.setHasGetReposError({
                status : true,
                message : errorMessageFor(err.response.status),
                err
            })
        })
}

export default DashBoard