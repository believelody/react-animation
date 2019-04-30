import React, { useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'
import ListPageRoutes from './list-to-page/Routes.js'
import ReactMotionHome from './ReactMotionHome'

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center'
}

export default ({ getPath, location }) => {
    useEffect(() => {
        if (location) getPath(location.pathname)
    }, [])

    return location.pathname.includes('/react-motion') &&
        <div style={styles}>
            <Switch location={location}>                
                <Route exact path='/react-motion' component={ReactMotionHome} />
                <ListPageRoutes />
            </Switch>
        </div>
}
