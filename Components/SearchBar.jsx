import React, { useState, useEffect } from 'react'
import axios from 'axios'

const searchForAccount = (accountName, setAccount) => {
    axios.get(`https://api.github.com/users/${accountName}`)
        .then(res => setAccount(res.data))
        .catch(err => console.log(err.message))
}

const onSubmit = (e, accountName, setAccount) => {
    e.preventDefault()
    searchForAccount(accountName, setAccount)
}

const onChange = (e, seIntputText) => {
    seIntputText(e.target.value)
}

const SearchBar = () => {
    const [inputText, setInputText] = useState('')
    const [account, setAccount] = useState({})

    useEffect(() => console.log(account), [account])

    return (
        <form>
            <input type='text' onChange={(e)=> onChange(e, setInputText)}/>
            <input type='submit' onClick={(e) => onSubmit(e, inputText, setAccount)}/>
        </form>
    )
}

export default SearchBar