import React, { useState } from 'react'
import axios from 'axios'

const searchForAccount = (accountName) => {
    axios.get(`https://api.github.com/users/${accountName}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.message))
}

const onSubmit = (e, accountName) => {
    e.preventDefault()
    searchForAccount(accountName)
}

const onChange = (e, seIntputText) => {
    seIntputText(e.target.value)
}

const SearchBar = () => {
    const [inputText, setInputText] = useState('')

    return (
        <form>
            <input type='text' onChange={(e)=> onChange(e, setInputText)}/>
            <input type='submit' onClick={(e) => onSubmit(e, inputText)}/>
        </form>
    )
}

export default SearchBar