import React, { useState, useEffect } from 'react'
import axios from 'axios'

class Index extends React.Component {

    static async getInitialProps () {
        return axios.get("https://api.github.com/users/erabin05")
                    .then(res => ({
                        error : false,
                        accountData : res.data 
                    }))
                    .catch(err => ({
                        error : true,
                        message : err.message
                    }))
    }

    constructor (props) {
        super(props)
        this.state = {
            error : props.error,
            account : props.accountData
        }
    }

    componentDidMount () {
        console.log(this.state.account)
    }

    render () {
        return (
        <h1>yo</h1>
        )
    }
}



export default Index