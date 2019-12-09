import React, { useContext, useEffect } from 'react'

import { DashBoardContext } from '../Contexts/DasboardContext'

const Languages = () => {
    const {
        repos
    } = useContext(DashBoardContext)

    useEffect(()=>{
        console.log(languagesInRepos(repos))
    }, [repos])

    return (
        <div>
            yo
        </div>
    )
}

const languagesInRepos = (repos) =>
    repos.reduce((acc, repo) => {
        return acc.filter(repoInAcc => repoInAcc.language === repo.language).length
          ? acc.map(repoInAcc =>
              repoInAcc.language === repo.language
                ? { ...repoInAcc, count: repoInAcc.count + 1 }
                : repoInAcc
            )
          : [
              ...acc,
              {
                language: repo.language,
                count: 0
              }
            ];
      }, []);

export default Languages