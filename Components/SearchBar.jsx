import React from 'react'
import axios from 'axios'

const searchForAccount = (accountName) => {
    axios.get(`https://api.github.com/users/${accountName}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.message))
}

const onSubmit = (e, accountName) => {
    e.preventDefault()
    searchForAccount()
}

const SearchBar = () => {
    return (
        <form>
            <input type='text'/>
            <input type='submit' onClick={(e) => onSubmit(e, 'erabin05')}/>
        </form>
    )
}

export default SearchBar