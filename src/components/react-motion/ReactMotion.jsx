import React, { useEffect } from 'react'
import Routes from './Routes.js'

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center'
}

export default ({ getPath, location }) => {
    useEffect(() => {
        if (location) getPath(location.pathname)
    }, [])

    return (
        <div style={styles}>
            <Routes />
        </div>
    )
}
