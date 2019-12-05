import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SearchBar = () => {
    const [inputText, setInputText] = useState('')
    const [account, setAccount] = useState({})
    const [hasError, setHasError] = useState({status : false})
    const [isSubmited, setIsSubmited] = useState(false)

    const set = {
        setAccount, 
        setHasError, 
        setIsSubmited
    }

    return (
        <form>
            <input type='text' onChange={(e)=> onChange(e, setInputText, setIsSubmited)}/>
            <input type='submit' onClick={(e) => onSubmit(e, inputText, set)}/>
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