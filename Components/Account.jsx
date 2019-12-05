import React, { useContext } from 'react'

import { AccountContext } from '../Contexts/AccountContext'

const Account = () => {
    const { 
        account,
        setIsSubmited
    } = useContext(AccountContext)
    return ( 
        <section>
            <a onClick={() => onClickBack(setIsSubmited)}> {'< Not the right account'}</a>
            <div>
                <article>
                    <figure>
                        <img src={account.avatar_url} alt={`${account.login}'s avatar`}/>
                    </figure>
                    <h1>{account.login}</h1>
                </article>
                <input type="submit" value="Submit"/>
            </div>
        </section>
    )
}

const onClickBack = (setIsSubmited) => {
    setIsSubmited(false)
}

export default Account