import React, { useState, createContext } from 'react'

export const AccountContext = createContext()

const intialAccount = {
    // "login": "erabin05",
    // "id": 42811527,
    // "node_id": "MDQ6VXNlcjQyODExNTI3",
    // "avatar_url": "https://avatars3.githubusercontent.com/u/42811527?v=4",
    // "gravatar_id": "",
    // "url": "https://api.github.com/users/erabin05",
    // "html_url": "https://github.com/erabin05",
    // "followers_url": "https://api.github.com/users/erabin05/followers",
    // "following_url": "https://api.github.com/users/erabin05/following{/other_user}",
    // "gists_url": "https://api.github.com/users/erabin05/gists{/gist_id}",
    // "starred_url": "https://api.github.com/users/erabin05/starred{/owner}{/repo}",
    // "subscriptions_url": "https://api.github.com/users/erabin05/subscriptions",
    // "organizations_url": "https://api.github.com/users/erabin05/orgs",
    // "repos_url": "https://api.github.com/users/erabin05/repos",
    // "events_url": "https://api.github.com/users/erabin05/events{/privacy}",
    // "received_events_url": "https://api.github.com/users/erabin05/received_events",
    // "type": "User",
    // "site_admin": false,
    // "name": null,
    // "company": null,
    // "blog": "",
    // "location": null,
    // "email": null,
    // "hireable": null,
    // "bio": null,
    // "public_repos": 15,
    // "public_gists": 20,
    // "followers": 1,
    // "following": 1,
    // "created_at": "2018-08-29T15:31:20Z",
    // "updated_at": "2019-12-04T15:34:03Z"
  }

const AccountContextProvider = ({children}) => {
    const [account, setAccount] = useState(intialAccount)
    const [hasError, setHasError] = useState({status : false})
    const [isSubmited, setIsSubmited] = useState(false)

    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            hasError,
            setHasError,
            isSubmited, 
            setIsSubmited
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountContextProvider