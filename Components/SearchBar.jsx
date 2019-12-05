import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

import { AccountContext } from '../Contexts/AccountContext'

const SearchBar = () => {
    const {
        account,
        setAccount,
        hasError,
        setHasError,
        isSubmited, 
        setIsSubmited 
    } = useContext(AccountContext)

    const [inputText, setInputText] = useState('')

    const set = {
        setInputText,
        setAccount, 
        setHasError, 
        setIsSubmited
    }

    useEffect(()=>console.log(account), [account])

    return (
        <form>
            <label htmlFor='account'>Enter your Github </label>
            <div>
                <input 
                    type='text'
                    id='account'
                    spellCheck="false"
                    onChange={(e)=> onChange(e, set)}
                />
                <input type='submit' onClick={(e) => onSubmit(e, inputText, set)}/>
            </div>
            <div className='warning'>
                { 
                    isSubmited 
                    && hasError.status  
                    && <p>{ hasError.message }</p>
                }
            </div>
        </form>
    )
}

const onChange = (e, set) => {
    set.setInputText(e.target.value)
    set.setIsSubmited(false)
}

const onSubmit = (e, accountName, set) => {
    e.preventDefault()
    searchForAccount(accountName, set)
}

const searchForAccount = (accountName, set) => {
    axios.get(`https://api.github.com/users/${accountName}`)
        .then(res => {
            set.setAccount(res.data)
            set.setHasError({status : false})
            set.setIsSubmited(true)
        })
        .catch(err => {
            set.setHasError({
                status : true,
                message : err.message
            })
            set.setIsSubmited(true)
        })
}

export default SearchBar