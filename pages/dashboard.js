import React, {useEffect} from 'react'

const DashBoard = ({query}) => {

    useEffect(()=> {
        console.log(query)
    })

    return (
        <div>
            Hola
        </div>
    )
}

DashBoard.getInitialProps = ({query}) => {
    return {query}
}

export default DashBoard