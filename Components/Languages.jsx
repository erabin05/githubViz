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
            {languagesInRepos(repos).map((language)=>(
                <p key={language.name}>
                    {
                        `${
                        language.name 
                        ? language.name
                        : 'Autre'
                        } : ${percentage(repos, language)} %`
                    }
                </p>
            ))}
        </div>
    )
}

const languagesInRepos = (repos) =>
    repos.reduce((acc, repo) => {
        return acc.filter(repoInAcc => repoInAcc.name === repo.language).length
          ? acc.map(repoInAcc =>
              repoInAcc.name === repo.language
                ? { ...repoInAcc, count: repoInAcc.count + 1 }
                : repoInAcc
            )
          : [
              ...acc,
              {
                name: repo.language,
                count: 1
              }
            ];
      }, []);

const percentage = (repos, language) => Math.floor((language.count  * 100) / repos.length)

export default Languages