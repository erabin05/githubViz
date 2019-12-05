import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SearchBar = () => {
    const [inputText, setInputText] = useState('')
    const [account, setAccount] = useState({})
    const [hasError, setHasError] = useState({status : false})
    const [isSubmited, setIsSubmited] = useState(false)

    return (
        <form>
            <input type='text' onChange={(e)=> onChange(e, setInputText, setIsSubmited)}/>
            <input type='submit' onClick={(e) => onSubmit(e, inputText, setAccount, setHasError, setIsSubmited)}/>
            { isSubmited 
                && <p>{
                    hasError.status 
                    ?  hasError.message 
                    : 'account found'
                }</p>
            }
        </form>
    )
}

const onChange = (e, seIntputText, setIsSubmited) => {
    seIntputText(e.target.value)
    setIsSubmited(false)
}

const onSubmit = (e, accountName, setAccount, setHasError, setIsSubmited) => {
    e.preventDefault()
    searchForAccount(accountName, setAccount, setHasError, setIsSubmited)
}

const searchForAccount = (accountName, setAccount, setHasError, setIsSubmited) => {
    axios.get(`https://api.github.com/users/${accountName}`)
        .then(res => {
            setAccount(res.data)
            setHasError({status : false})
            setIsSubmited(true)
        })
        .catch(err => {
            setHasError({
                status : true,
                message : err.message
            })
            setIsSubmited(true)
        })
}

export default SearchBar